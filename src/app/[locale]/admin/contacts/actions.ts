
'use server';

import { getFirestore, doc, deleteDoc } from 'firebase-admin/firestore';
import { adminAuth, getAuthenticatedAppForUser } from '@/lib/firebase-admin-config';

const db = adminAuth ? getFirestore(adminAuth.app) : null;

// This action can only be successfully called by an authenticated user
export async function deleteContactSubmission(submissionId: string) {
  if (!db) {
    return { success: false, error: 'Firestore is not initialized.' };
  }

  // We don't need the user object here, but this call ensures the user is authenticated.
  // If not, it will throw an error.
  const { currentUser } = await getAuthenticatedAppForUser();
  
  if (!currentUser) {
     return { success: false, error: 'Authentication required.' };
  }

  if (!submissionId) {
    return { success: false, error: 'Submission ID is required.' };
  }

  try {
    const submissionRef = doc(db, 'contactSubmissions', submissionId);
    await deleteDoc(submissionRef);
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting contact submission:', error);
    return { success: false, error: error.message || 'Failed to delete submission.' };
  }
}
