
import { getApps, initializeApp, cert, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { headers } from 'next/headers';
import { DecodedIdToken } from 'firebase-admin/auth';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : null;

let app: App | null = null;
if (getApps().length > 0) {
  app = getApp('firebase-admin-app');
} else if (serviceAccount) {
  app = initializeApp(
    {
      credential: cert(serviceAccount),
    },
    'firebase-admin-app'
  );
}

const auth = app ? getAuth(app) : null;

export { auth as adminAuth };

export async function getAuthenticatedAppForUser() {
  if (!auth) {
    console.warn("Firebase Admin SDK not initialized. Cannot authenticate user.");
    return { app: null, currentUser: null };
  }
  
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
