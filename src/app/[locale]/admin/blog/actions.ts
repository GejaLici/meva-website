
'use server';

import { getFirebaseAdmin, getAuthenticatedAppForUser } from '@/lib/firebase-admin-config';

async function getDb() {
  const { adminDb } = getFirebaseAdmin();
  return adminDb;
}

// This action can only be successfully called by an authenticated user
export async function deleteBlogPost(postId: string) {
  // We don't need the user object here, but this call ensures the user is authenticated.
  // If not, it will throw an error.
  const { currentUser } = await getAuthenticatedAppForUser();

  if (!currentUser) {
     return { success: false, error: 'Authentication required.' };
  }
  
  if (!postId) {
    return { success: false, error: 'Post ID is required.' };
  }

  try {
    const db = await getDb();
     if (!db) {
        throw new Error('Firebase Admin DB is not initialized.');
    }
    const postRef = db.collection('blogPosts').doc(postId);
    await postRef.delete();
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting blog post:', error);
    return { success: false, error: error.message || 'Failed to delete post.' };
  }
}
