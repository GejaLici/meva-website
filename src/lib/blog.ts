
'use server';

import { getFirestore, collection, doc, getDoc, getDocs, query, where, limit, orderBy, setDoc, serverTimestamp, Timestamp, runTransaction } from 'firebase-admin/firestore';
import { adminAuth, getAuthenticatedAppForUser } from '@/lib/firebase-admin-config';
import type { BlogPost, ContentBlock } from '@/types/blog';

const db = adminAuth ? getFirestore(adminAuth.app) : null;

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
  if (!db) {
    console.warn("Firestore is not initialized. Cannot fetch blog posts.");
    return [];
  }
  try {
    const postsCollection = collection(db, "blogPosts");
    const postsQuery = query(postsCollection, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(postsQuery);
    
    const posts: BlogPost[] = await Promise.all(
        querySnapshot.docs.map(async (docSnapshot) => {
            const data = docSnapshot.data();
            const translationRef = doc(db, `blogPosts/${docSnapshot.id}/translations/${locale}`);
            const translationSnap = await getDoc(translationRef);

            if (translationSnap.exists()) {
                const translationData = translationSnap.data();
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
  if (!db) {
    console.warn("Firestore is not initialized. Cannot fetch blog post.");
    return undefined;
  }
  try {
    const postsCollection = collection(db, "blogPosts");
    const q = query(postsCollection, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return undefined;
    }

    const docSnapshot = querySnapshot.docs[0];
    const data = docSnapshot.data();

    const translationRef = doc(db, `blogPosts/${docSnapshot.id}/translations/${locale}`);
    const translationSnap = await getDoc(translationRef);

    if (!translationSnap.exists()) {
      // Try to fallback to English if the requested locale doesn't exist
      const fallbackRef = doc(db, `blogPosts/${docSnapshot.id}/translations/en`);
      const fallbackSnap = await getDoc(fallbackRef);
      if(!fallbackSnap.exists()) return undefined;

      const fallbackData = fallbackSnap.data();
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
    
    const translationData = translationSnap.data();

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
}) {
  if (!db) {
    throw new Error("Firestore is not initialized.");
  }
  const { currentUser } = await getAuthenticatedAppForUser();
  // We allow seeding without a user for demo purposes
  // if (!currentUser) {
  //   throw new Error("Authentication required.");
  // }
  
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
  
  const postsCollection = collection(db, "blogPosts");
  const q = query(postsCollection, where("slug", "==", postData.slug), limit(1));
  
  return runTransaction(db, async (transaction) => {
    const querySnapshot = await transaction.get(q);
    let postRef;

    if (querySnapshot.empty) {
      // Document doesn't exist, create a new one
      postRef = doc(postsCollection); // New document with a random ID
      transaction.set(postRef, {
        slug: postData.slug,
        date: serverTimestamp(),
        author: postData.author,
        category: postData.category,
        imageUrl: postData.imageUrl,
        imageHint: postData.imageHint,
      });
    } else {
      // Document exists, update it if needed
      postRef = querySnapshot.docs[0].ref;
      const docData = querySnapshot.docs[0].data();
      const updates: { [key: string]: any } = {};
      if (postData.author && postData.author !== docData.author) updates.author = postData.author;
      if (postData.category && postData.category !== docData.category) updates.category = postData.category;
      if (postData.imageUrl && postData.imageUrl !== docData.imageUrl) updates.imageUrl = postData.imageUrl;
      if (postData.imageHint && postData.imageHint !== docData.imageHint) updates.imageHint = postData.imageHint;
      if (Object.keys(updates).length > 0) {
        updates.date = serverTimestamp(); // Update date on any modification
        transaction.update(postRef, updates);
      }
    }
    
    const translationRef = doc(postRef, 'translations', postData.language);
    const translationSnap = await transaction.get(translationRef);

    if (translationSnap.exists() && !process.env.SEED_SCRIPT_ACTIVE) {
        throw new Error(`A post with this slug in language '${postData.language}' already exists.`);
    }

    transaction.set(translationRef, {
        title: postData.title,
        excerpt: postData.excerpt,
        content: contentString, // Save the validated JSON string
    });

    return { success: true, id: postRef.id };
  }).catch(error => {
    console.error("Error adding blog post in transaction:", error);
    // Rethrow to be caught by the caller
    throw new Error(error.message || "Failed to add or update blog post.");
  });
}
