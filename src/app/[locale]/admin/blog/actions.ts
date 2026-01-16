
'use server';

import { getFirebaseAdmin, getAuthenticatedAppForUser } from '@/lib/firebase-admin-config';

async function getDb() {
  const { adminDb } = await getFirebaseAdmin();
  return adminDb;
}

export async function deleteBlogPost({ postId, idToken }: { postId: string, idToken: string }) {
  const { currentUser } = await getAuthenticatedAppForUser(idToken);

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
