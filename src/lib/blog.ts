
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
 * Safely parses the blog content, handling cases where it might be missing or double-stringified.
 * @param content - The content to parse, expected to be a JSON string.
 * @returns An array of ContentBlock, or an empty array if parsing fails.
 */
function parseContent(content: any): ContentBlock[] {
  if (Array.isArray(content)) {
    return content; // Already parsed
  }
  if (!content || typeof content !== 'string') {
    return [];
  }
  try {
    let parsed = JSON.parse(content);
    // Handle cases where the content might have been stringified twice
    if (typeof parsed === 'string') {
      parsed = JSON.parse(parsed);
    }
    if (Array.isArray(parsed)) {
      return parsed as ContentBlock[];
    }
    // If it's not an array after parsing, return empty to prevent errors
    return [];
  } catch (error) {
    console.error("Error parsing blog content:", error);
    return [];
  }
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
    
    const posts: (BlogPost | null)[] = await Promise.all(
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
                    title: translationData.title,
                    excerpt: translationData.excerpt,
                    content: parseContent(translationData.content),
                };
            }
            
            // If a translation for the requested locale does not exist, do not show it on the list page.
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
            title: translationData.title,
            excerpt: translationData.excerpt,
            content: parseContent(translationData.content),
        };
    } else {
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
            content: parseContent(fallbackData.content),
        };
    }
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}" from Firestore:`, error);
    return undefined;
  }
}

interface AddPostData {
  postData: {
    slug: string;
    language: string;
    title: string;
    excerpt: string;
    content: string | object;
    author?: string;
    category?: string;
    imageUrl?: string;
    imageHint?: string;
  };
  idToken: string;
}

export async function addBlogPost({ postData, idToken }: AddPostData) {
  const { currentUser } = await getAuthenticatedAppForUser(idToken);
  
  if (!currentUser && process.env.SEED_SCRIPT_ACTIVE !== 'true') {
    return { success: false, error: 'User must be authenticated to add a blog post.' };
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
  
  try {
    const postId = await db.runTransaction(async (transaction) => {
      const q = postsCollection.where("slug", "==", postData.slug).limit(1);
      const querySnapshot = await transaction.get(q);
      
      let postRef;
      let isNewPost = false;

      if (querySnapshot.empty) {
        postRef = postsCollection.doc(); // New document with a random ID
        isNewPost = true;
      } else {
        postRef = querySnapshot.docs[0].ref;
      }
      
      const translationRef = postRef.collection('translations').doc(postData.language);
      
      if (isNewPost) {
          transaction.set(postRef, {
            slug: postData.slug,
            date: FieldValue.serverTimestamp(),
            author: postData.author,
            category: postData.category,
            imageUrl: postData.imageUrl,
            imageHint: postData.imageHint,
        });
      } else {
         const docData = querySnapshot.docs[0].data();
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
          content: contentString,
      });

      return postRef.id;
    });

    return { success: true, id: postId };

  } catch (error: any) {
    console.error("Error adding blog post in transaction:", error);
    return { success: false, error: error.message || "Failed to add or update blog post." };
  }
}
