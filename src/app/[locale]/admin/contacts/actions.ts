
'use server';

import { getFirebaseAdmin, getAuthenticatedAppForUser } from '@/lib/firebase-admin-config';

async function getDb() {
  const { adminDb } = await getFirebaseAdmin();
  return adminDb;
}

export async function deleteContactSubmission({ submissionId, idToken }: { submissionId: string; idToken: string; }) {
  const { currentUser } = await getAuthenticatedAppForUser(idToken);
  
  if (!currentUser) {
     return { success: false, error: 'Authentication required.' };
  }

  if (!submissionId) {
    return { success: false, error: 'Submission ID is required.' };
  }

  try {
    const db = await getDb();
    if (!db) {
        throw new Error('Firebase Admin DB is not initialized.');
    }
    const submissionRef = db.collection('contactSubmissions').doc(submissionId);
    await submissionRef.delete();
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting contact submission:', error);
    return { success: false, error: error.message || 'Failed to delete submission.' };
  }
}
