
'use server';

import { getApps, initializeApp, cert, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { headers } from 'next/headers';
import * as serviceAccount from '../../../firebase.json';

// This function now initializes the app using credentials from the firebase.json file.
function getAdminApp(): App {
  if (getApps().length > 0) {
    return getApp('firebase-admin-app');
  }

  // Check if the service account has the required properties
  if (
    !serviceAccount ||
    !serviceAccount.project_id ||
    !serviceAccount.client_email ||
    !serviceAccount.private_key
  ) {
    throw new Error(
      'Firebase Admin SDK credentials are not set correctly in firebase.json file. Please download it from your Firebase project settings.'
    );
  }

  try {
    return initializeApp(
      {
        credential: cert(serviceAccount),
      },
      'firebase-admin-app'
    );
  } catch (error: any) {
    console.error('Firebase Admin Init Error:', error.message);
    throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
  }
}

const adminApp = getAdminApp();
const adminAuth = getAuth(adminApp);

export { adminApp, adminAuth };

export async function getAuthenticatedAppForUser() {
  const app = getAdminApp();
  if (!app) {
     return { app: null, currentUser: null };
  }
  const auth = getAuth(app);
  const idToken = headers().get('Authorization')?.split('Bearer ')[1];

  if (!idToken) {
    return { app: null, currentUser: null };
  }

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    return { app, currentUser: decodedToken };
  } catch (error) {
    console.error('Error verifying auth token:', error);
    return { app: null, currentUser: null };
  }
}
