
'use server';

import { db } from '@/lib/firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import { getAuthenticatedAppForUser } from '@/lib/firebase-admin-config';

// This action can only be successfully called by an authenticated user
export async function deleteBlogPost(postId: string) {
  // We don't need the user object here, but this call ensures the user is authenticated.
  // If not, it will throw an error.
  const { currentUser } = await getAuthenticatedAppForUser();

  if (!currentUser) {
     return { success: false, error: 'Authentication required.' };
  }

  if (!db) {
    return { success: false, error: "Firebase is not configured on the server." };
  }
  
  if (!postId) {
    return { success: false, error: 'Post ID is required.' };
  }

  try {
    const postRef = doc(db, 'blogPosts', postId);
    await deleteDoc(postRef);
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting blog post:', error);
    return { success: false, error: error.message || 'Failed to delete post.' };
  }
}
