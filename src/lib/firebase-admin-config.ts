
import { getApps, initializeApp, cert, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { headers } from 'next/headers';
import { DecodedIdToken } from 'firebase-admin/auth';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : null;

const app =
  getApps().length > 0
    ? getApp('firebase-admin-app')
    : initializeApp(
        {
          credential: serviceAccount ? cert(serviceAccount) : undefined,
        },
        'firebase-admin-app'
      );

const auth = getAuth(app);

export { auth as adminAuth };

export async function getAuthenticatedAppForUser() {
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
