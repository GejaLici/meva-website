
'use server';

import { Timestamp, FieldValue } from 'firebase-admin/firestore';
import { getFirebaseAdmin, getAuthenticatedAppForUser } from '@/lib/firebase-admin-config';
import type { BlogPost, ContentBlock } from '@/types/blog';

async function getDb() {
  const { adminDb } = await getFirebaseAdmin();
  if (!adminDb) {
      throw new Error("Firebase Admin is not configured correctly on the server.");
  }
  return adminDb;
}

function toISOString(timestamp: Timestamp | Date | string): string {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate().toISOString();
  }
  return new Date(timestamp).toISOString();
}

/**
 * Retrieves all blog posts for a specific locale.
 * @returns A promise that resolves to an array of all blog posts, sorted by date.
 */
export async function getAllBlogPosts(locale: string): Promise<BlogPost[]> {
  try {
    const db = await getDb();
    const postsCollection = db.collection("blogPosts");
    const postsQuery = postsCollection.orderBy('date', 'desc');
    const querySnapshot = await postsQuery.get();
    
    const posts: BlogPost[] = await Promise.all(
        querySnapshot.docs.map(async (docSnapshot) => {
            const data = docSnapshot.data();
            const translationRef = db.collection(`blogPosts/${docSnapshot.id}/translations`).doc(locale);
            const translationSnap = await translationRef.get();

            if (translationSnap.exists) {
                const translationData = translationSnap.data()!;
                return {
                    id: docSnapshot.id,
                    slug: data.slug,
                    date: data.date && data.date.toDate ? toISOString(data.date) : new Date().toISOString(),
                    imageUrl: data.imageUrl,
                    imageHint: data.imageHint,
                    category: data.category,
                    author: data.author,
                    // From translation
                    title: translationData.title,
                    excerpt: translationData.excerpt,
                    content: JSON.parse(translationData.content) as ContentBlock[],
                };
            }
            return null;
        })
    );
    
    return posts.filter((post): post is BlogPost => post !== null);
  } catch (error) {
    console.error("Error fetching blog posts from Firestore:", error);
    return [];
  }
}

/**
 * Retrieves a single blog post by its slug for a specific locale.
 * @param slug - The slug of the blog post to retrieve.
 * @returns A promise that resolves to the blog post, or undefined if not found.
 */
export async function getBlogPostBySlug(slug: string, locale: string): Promise<BlogPost | undefined> {
  try {
    const db = await getDb();
    const postsCollection = db.collection("blogPosts");
    const q = postsCollection.where("slug", "==", slug).limit(1);
    const querySnapshot = await q.get();

    if (querySnapshot.empty) {
      return undefined;
    }

    const docSnapshot = querySnapshot.docs[0];
    const data = docSnapshot.data();

    const translationRef = db.collection(`blogPosts/${docSnapshot.id}/translations`).doc(locale);
    const translationSnap = await translationRef.get();

    if (!translationSnap.exists) {
      // Try to fallback to English if the requested locale doesn't exist
      const fallbackRef = db.collection(`blogPosts/${docSnapshot.id}/translations`).doc('en');
      const fallbackSnap = await fallbackRef.get();
      if(!fallbackSnap.exists) return undefined;

      const fallbackData = fallbackSnap.data()!;
       return {
        id: docSnapshot.id,
        slug: data.slug,
        date: data.date && data.date.toDate ? toISOString(data.date) : new Date().toISOString(),
        imageUrl: data.imageUrl,
        imageHint: data.imageHint,
        category: data.category,
        author: data.author,
        title: fallbackData.title,
        excerpt: fallbackData.excerpt,
        content: JSON.parse(fallbackData.content) as ContentBlock[],
      };
    }
    
    const translationData = translationSnap.data()!;

    return {
      id: docSnapshot.id,
      slug: data.slug,
      date: data.date && data.date.toDate ? toISOString(data.date) : new Date().toISOString(),
      imageUrl: data.imageUrl,
      imageHint: data.imageHint,
      category: data.category,
      author: data.author,
      title: translationData.title,
      excerpt: translationData.excerpt,
      content: JSON.parse(translationData.content) as ContentBlock[],
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}" from Firestore:`, error);
    return undefined;
  }
}

/**
 * Adds or updates a blog post and its language-specific translation.
 */
export async function addBlogPost(postData: {
  slug: string;
  language: string;
  title: string;
  excerpt: string;
  content: string | object; // Accept string or object
  author?: string;
  category?: string;
  imageUrl?: string;
  imageHint?: string;
}, idToken?: string | null) {
  // Only check for authentication if the seed script is NOT active.
  // This allows the initial database seed to run without a user session.
  if (process.env.SEED_SCRIPT_ACTIVE !== 'true') {
    const { currentUser } = await getAuthenticatedAppForUser(idToken);
    if (!currentUser) {
      // Use a more specific error that can be caught and displayed to the user
      return { success: false, error: 'User must be authenticated to add a blog post.' };
    }
  }

  const db = await getDb();

  let contentString: string;

  // Ensure content is a valid JSON string before saving
  if (typeof postData.content === 'string') {
    try {
      JSON.parse(postData.content); // Validate if it's a valid JSON string
      contentString = postData.content;
    } catch (e) {
      return { success: false, error: "Invalid content format. Content must be a valid JSON string." };
    }
  } else if (typeof postData.content === 'object') {
    contentString = JSON.stringify(postData.content);
  } else {
    return { success: false, error: "Content must be either a string or an object."};
  }
  
  const postsCollection = db.collection("blogPosts");
  const q = postsCollection.where("slug", "==", postData.slug).limit(1);
  
  try {
    const querySnapshot = await q.get();
    let postRef;

    if (querySnapshot.empty) {
      // Document doesn't exist, create a new one
      postRef = postsCollection.doc(); // New document with a random ID
    } else {
      // Document exists, get its reference
      postRef = querySnapshot.docs[0].ref;
    }

    await db.runTransaction(async (transaction) => {
      // --- ALL READS FIRST ---
      const postDoc = await transaction.get(postRef);
      const translationRef = postRef.collection('translations').doc(postData.language);
      const translationSnap = await transaction.get(translationRef);

      // --- LOGIC AND WRITES SECOND ---
      if (translationSnap.exists && process.env.SEED_SCRIPT_ACTIVE !== 'true') {
          throw new Error(`A post with this slug in language '${postData.language}' already exists.`);
      }
      
      if (!postDoc.exists) {
        transaction.set(postRef, {
          slug: postData.slug,
          date: FieldValue.serverTimestamp(),
          author: postData.author,
          category: postData.category,
          imageUrl: postData.imageUrl,
          imageHint: postData.imageHint,
        });
      } else {
        const docData = postDoc.data()!;
        const updates: { [key: string]: any } = {};
        if (postData.author && postData.author !== docData.author) updates.author = postData.author;
        if (postData.category && postData.category !== docData.category) updates.category = postData.category;
        if (postData.imageUrl && postData.imageUrl !== docData.imageUrl) updates.imageUrl = postData.imageUrl;
        if (postData.imageHint && postData.imageHint !== docData.imageHint) updates.imageHint = postData.imageHint;
        if (Object.keys(updates).length > 0) {
          updates.date = FieldValue.serverTimestamp(); // Update date on any modification
          transaction.update(postRef, updates);
        }
      }
      
      transaction.set(translationRef, {
          title: postData.title,
          excerpt: postData.excerpt,
          content: contentString, // Save the validated JSON string
      });
    });

    return { success: true, id: postRef.id };

  } catch (error: any) {
    console.error("Error adding blog post in transaction:", error);
    return { success: false, error: error.message || "Failed to add or update blog post." };
  }
}
