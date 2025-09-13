
'use server';

import { db } from '@/lib/firebaseConfig';
import { collection, getDocs, query, where, limit, orderBy, addDoc, serverTimestamp } from 'firebase/firestore';
import type { BlogPost, ContentBlock } from '@/types/blog';

// Helper to convert Firestore timestamp to ISO string
function toISOString(timestamp: any): string {
  if (!timestamp) return new Date().toISOString();
  // Firestore Timestamps have toDate() method
  if (timestamp.toDate) {
    return timestamp.toDate().toISOString();
  }
  // Fallback for string or other date formats
  return new Date(timestamp).toISOString();
}

/**
 * Retrieves all blog posts from Firestore.
 * @returns A promise that resolves to an array of all blog posts, sorted by date.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!db) {
    console.warn("Firebase is not configured. Returning empty array for blog posts.");
    return [];
  }
  try {
    const postsCollection = collection(db, "blogPosts");
    const postsQuery = query(postsCollection, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(postsQuery);
    
    const posts: BlogPost[] = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        slug: data.slug,
        title: data.title,
        date: toISOString(data.date),
        author: data.author || 'Meva Clinic Staff',
        excerpt: data.excerpt,
        content: JSON.parse(data.content) as ContentBlock[],
        imageUrl: data.imageUrl,
        imageHint: data.imageHint,
        category: data.category,
      };
    });
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts from Firestore:", error);
    return [];
  }
}

/**
 * Retrieves a single blog post by its slug from Firestore.
 * @param slug - The slug of the blog post to retrieve.
 * @returns A promise that resolves to the blog post, or undefined if not found.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
   if (!db) {
    console.warn("Firebase is not configured. Cannot fetch blog post by slug.");
    return undefined;
  }
  try {
    const postsCollection = collection(db, "blogPosts");
    const q = query(postsCollection, where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return undefined;
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    
    return {
      id: doc.id,
      slug: data.slug,
      title: data.title,
      date: toISOString(data.date),
      author: data.author || 'Meva Clinic Staff',
      excerpt: data.excerpt,
      content: JSON.parse(data.content) as ContentBlock[],
      imageUrl: data.imageUrl,
      imageHint: data.imageHint,
      category: data.category,
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}" from Firestore:`, error);
    return undefined;
  }
}

/**
 * Adds a new blog post to the Firestore database.
 * @param postData - The data for the new blog post.
 * @returns A promise that resolves to the result of the operation.
 */
export async function addBlogPost(postData: Omit<BlogPost, 'id' | 'date' | 'content'> & { content: string }) {
  if (!db) {
    throw new Error("Firebase is not configured. Cannot add blog post.");
  }
  
  // Basic validation to ensure content is valid JSON
  try {
    JSON.parse(postData.content);
  } catch (e) {
    throw new Error("Invalid content format. Content must be a valid JSON string representing ContentBlock[].");
  }

  try {
    const postsCollection = collection(db, "blogPosts");
    const docRef = await addDoc(postsCollection, {
      ...postData,
      date: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding blog post to Firestore:", error);
    throw new Error("Failed to add blog post to the database.");
  }
}
