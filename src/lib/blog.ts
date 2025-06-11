
import { db } from './firebaseConfig';
import { collection, getDocs, query, where, Timestamp } from 'firebase/firestore';
import type { BlogPost } from '@/types/blog';

// Helper function to convert Firestore Timestamp to ISO string if necessary
function mapFirestoreDocToBlogPost(doc: any): BlogPost {
  const data = doc.data();
  // Ensure date is an ISO string; Firestore Timestamps need to be converted
  let dateString = data.date;
  if (data.date && typeof data.date.toDate === 'function') { // Check if it's a Firestore Timestamp
    dateString = (data.date as Timestamp).toDate().toISOString();
  } else if (typeof data.date === 'number') { // Handle if date is stored as milliseconds
    dateString = new Date(data.date).toISOString();
  }
  // If date is already a string, assume it's ISO format

  return {
    id: doc.id,
    slug: data.slug,
    title: data.title,
    date: dateString,
    author: data.author,
    excerpt: data.excerpt,
    content: data.content,
    imageUrl: data.imageUrl,
    imageHint: data.imageHint,
    category: data.category,
  } as BlogPost;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!db) {
    console.error("Firestore is not initialized. Ensure firebaseConfig.ts is correctly set up.");
    return [];
  }
  try {
    const postsCol = collection(db, 'blogPosts');
    const postSnapshot = await getDocs(postsCol);
    const postsList = postSnapshot.docs
      .map(mapFirestoreDocToBlogPost)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return postsList;
  } catch (error) {
    console.error("Error fetching blog posts from Firestore:", error);
    return []; // Return empty array on error
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  if (!db) {
    console.error("Firestore is not initialized. Ensure firebaseConfig.ts is correctly set up.");
    return undefined;
  }
  try {
    const postsCol = collection(db, 'blogPosts');
    const q = query(postsCol, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return undefined;
    }
    const postDoc = querySnapshot.docs[0];
    return mapFirestoreDocToBlogPost(postDoc);
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug} from Firestore:`, error);
    return undefined; // Return undefined on error
  }
}
