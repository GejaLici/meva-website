
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
 * Safely parses the blog content. If it's a JSON string, it's parsed.
 * If it's not valid JSON, it's wrapped in a paragraph block.
 * @param content - The content to parse.
 * @returns An array of ContentBlock, or an empty array if content is empty.
 */
function parseContent(content: any): ContentBlock[] {
  if (!content) return [];
  if (Array.isArray(content)) {
    return content; // Already parsed
  }
  
  if (typeof content === 'string') {
    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        return parsed as ContentBlock[];
      }
    } catch (e) {
      // Not a valid JSON string, fall through to treat as plain text
    }
    
    // If it's a string (either non-JSON or JSON that's not an array), wrap it
    return [{
        id: 'p1',
        type: 'paragraph',
        children: [{ type: 'text', text: content }]
    }];
  }

  // If not a string or array, we can't handle it
  return [];
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

    if (!translationSnap.exists) {
        return undefined; // No translation found for this locale
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
        content: parseContent(translationData.content),
    };

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

  // If content is an object (from seeder), stringify it. Otherwise, save the string from the form.
  if (typeof postData.content === 'object') {
    contentString = JSON.stringify(postData.content);
  } else {
    contentString = postData.content;
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
         const doc = await transaction.get(postRef);
         if (doc.exists) {
            const docData = doc.data()!;
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

// Types for Editing
interface PostTranslation {
    title: string;
    excerpt: string;
    content: string;
}
interface PostBaseData {
    slug: string;
    author?: string;
    category?: string;
    imageUrl?: string;
    imageHint?: string;
}
interface UpdatePostData {
  postId: string;
  language: string;
  idToken: string;
  postData: {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author?: string;
    category?: string;
    imageUrl?: string;
    imageHint?: string;
  };
}

export async function getPostForEditing({ postId, language }: { postId: string; language: string; }) {
    try {
        const db = await getDb();
        const postRef = db.collection('blogPosts').doc(postId);
        const postSnap = await postRef.get();

        if (!postSnap.exists) {
            return { success: false, error: 'Post not found.' };
        }

        const baseData = postSnap.data() as PostBaseData;

        const translationRef = postRef.collection('translations').doc(language);
        const translationSnap = await translationRef.get();

        let translationData: PostTranslation | null = null;
        if (translationSnap.exists) {
            translationData = translationSnap.data() as PostTranslation;
        }

        return { success: true, baseData, translationData };

    } catch (error: any) {
        console.error('Error fetching post for editing:', error);
        return { success: false, error: error.message || 'Failed to fetch post data.' };
    }
}

export async function updateBlogPost({ postId, language, idToken, postData }: UpdatePostData) {
  const { currentUser } = await getAuthenticatedAppForUser(idToken);
  
  if (!currentUser) {
    return { success: false, error: 'User must be authenticated to update a blog post.' };
  }

  const db = await getDb();

  try {
     await db.runTransaction(async (transaction) => {
        const postRef = db.collection('blogPosts').doc(postId);

        // Update the base document
        transaction.update(postRef, {
            slug: postData.slug,
            author: postData.author || FieldValue.delete(),
            category: postData.category || FieldValue.delete(),
            imageUrl: postData.imageUrl || FieldValue.delete(),
            imageHint: postData.imageHint || FieldValue.delete(),
            date: FieldValue.serverTimestamp(), // Update date on any modification
        });

        // Set/Update the specific translation document
        const translationRef = postRef.collection('translations').doc(language);
        transaction.set(translationRef, {
            title: postData.title,
            excerpt: postData.excerpt,
            content: postData.content,
        });
     });
    
    return { success: true, postId };

  } catch (error: any) {
    console.error("Error updating blog post in transaction:", error);
    return { success: false, error: error.message || "Failed to update blog post." };
  }
}
