
'use server';

import { getFirestore, collection, getDocs, query, where, limit, orderBy, addDoc, serverTimestamp, Timestamp } from 'firebase-admin/firestore';
import { adminAuth, getAuthenticatedAppForUser } from '@/lib/firebase-admin-config';
import type { BlogPost, ContentBlock } from '@/types/blog';

// Get the Firestore instance from the admin app
const db = adminAuth ? getFirestore(adminAuth.app) : null;

// Helper to convert Firestore timestamp to ISO string
function toISOString(timestamp: Timestamp | Date | string): string {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate().toISOString();
  }
  return new Date(timestamp).toISOString();
}


/**
 * Retrieves all blog posts from Firestore.
 * @returns A promise that resolves to an array of all blog posts, sorted by date.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!db) {
    console.warn("Firestore is not initialized. Cannot fetch blog posts.");
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
        date: data.date ? toISOString(data.date) : new Date().toISOString(),
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

    const doc = querySnapshot.docs[0];
    const data = doc.data();
    
    return {
      id: doc.id,
      slug: data.slug,
      title: data.title,
      date: data.date ? toISOString(data.date) : new Date().toISOString(),
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
    throw new Error("Firestore is not initialized. Cannot add blog post.");
  }
   // Ensure the user is authenticated before allowing a post to be added.
  const { currentUser } = await getAuthenticatedAppForUser();
  if (!currentUser) {
    throw new Error("Authentication required to add a blog post.");
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
