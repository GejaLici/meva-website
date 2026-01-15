
'use server';

import { getApps, initializeApp, cert, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { headers } from 'next/headers';
import 'server-only';

let adminApp: App | null = null;

function getAdminApp(): App {
  if (adminApp) {
    return adminApp;
  }

  // Check if the app is already initialized
  if (getApps().some(app => app.name === 'firebase-admin-app')) {
    adminApp = getApp('firebase-admin-app');
    return adminApp;
  }

  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  };

  if (!serviceAccount.projectId || !serviceAccount.clientEmail || !serviceAccount.privateKey) {
    throw new Error('Firebase Admin SDK credentials are not set in .env file. Please check your environment variables.');
  }

  try {
    const credential = cert(serviceAccount);
    adminApp = initializeApp({ credential }, 'firebase-admin-app');
    return adminApp;
  } catch (error: any) {
    console.error('Firebase Admin Init Error:', error);
    throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
  }
}

export async function getFirebaseAdmin() {
  try {
    const app = getAdminApp();
    const adminAuth = getAuth(app);
    const adminDb = getFirestore(app);
    return { adminApp: app, adminAuth, adminDb };
  } catch (error) {
     console.error("Failed to get Firebase Admin instance:", error);
     // Return null instances if initialization fails
     return { adminApp: null, adminAuth: null, adminDb: null };
  }
}

export async function getAuthenticatedAppForUser(idToken?: string | null): Promise<{ app: App | null; currentUser: any | null; }> {
  const token = idToken || headers().get('Authorization')?.split('Bearer ')[1];
  
  if (!token) {
    return { app: null, currentUser: null };
  }
  
  try {
    const { adminAuth } = await getFirebaseAdmin();
    if (!adminAuth) {
        throw new Error("Admin Auth is not initialized.");
    }
    const decodedToken = await adminAuth.verifyIdToken(token);
    const app = getAdminApp();
    return { app, currentUser: decodedToken };
  } catch (error) {
    console.error('Error verifying auth token:', error);
    return { app: null, currentUser: null };
  }
}
