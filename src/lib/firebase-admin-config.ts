
import { getApps, initializeApp, cert, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { headers } from 'next/headers';

function getAdminApp(): App {
  if (getApps().length > 0) {
    return getApp('firebase-admin-app');
  }

  // Construct the service account object from individual environment variables.
  // This is a more robust method than parsing a JSON string.
  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // The private key must be correctly formatted in the .env file.
    // The replace() call is crucial to handle the newlines correctly.
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
    // This error will be thrown if the environment variables are not set.
    // It's a clear indicator that the .env file needs to be checked.
    throw new Error('Firebase Admin SDK service account credentials are not set correctly in the environment.');
  }

  try {
    return initializeApp(
      {
        credential: cert(serviceAccount),
      },
      'firebase-admin-app'
    );
  } catch (error: any) {
    // This will catch errors from `cert()` if the key format is still wrong.
    console.error('Firebase Admin Init Error:', error.message);
    throw new Error(`Failed to parse private key: ${error.message}. Please ensure FIREBASE_PRIVATE_KEY in your .env file is correctly formatted.`);
  }
}

// Initialize the app and auth instances
const adminAuth = getAdminApp() ? getAuth(getAdminApp()) : null;

export { adminAuth };

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
