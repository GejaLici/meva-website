
import { getApps, initializeApp, cert, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { headers } from 'next/headers';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

function getAdminApp(): App {
  if (getApps().length > 0) {
    return getApp('firebase-admin-app');
  }

  if (!serviceAccountKey) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set.');
  }

  let serviceAccount;
  try {
    // This will handle the JSON string, including newline characters
    serviceAccount = JSON.parse(serviceAccountKey);
  } catch (e: any) {
    console.error('Error parsing FIREBASE_SERVICE_ACCOUNT_KEY:', e.message);
    throw new Error('Could not parse FIREBASE_SERVICE_ACCOUNT_KEY. Make sure it is a valid JSON string.');
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
