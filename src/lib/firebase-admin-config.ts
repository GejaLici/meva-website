
import { getApps, initializeApp, cert, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { headers } from 'next/headers';

function getAdminApp(): App {
  if (getApps().length > 0) {
    return getApp('firebase-admin-app');
  }

  // Instead of parsing a single JSON string, we build the credential object
  // from individual environment variables.
  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // The private key from the .env file has its newlines escaped as `\\n`.
    // We need to replace them back to actual newline characters `\n`.
    privateKey: process.env.FIREBASE_PRIVATE_KEY
      ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      : undefined,
  };

  if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
    throw new Error('Firebase Admin SDK service account credentials are not set in .env file.');
  }

  return initializeApp(
    {
      credential: cert(serviceAccount),
    },
    'firebase-admin-app'
  );
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
