
'use server';

import { getApps, initializeApp, cert, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { headers } from 'next/headers';
import 'server-only';
import serviceAccount from '@/firebase-service-account.json';

// Memoization for the admin app instance
let adminApp: App | null = null;

/**
 * Initializes and returns the Firebase Admin App instance.
 * It uses a service account JSON file for credentials.
 */
function getAdminApp(): App {
  if (adminApp) {
    return adminApp;
  }

  // Check if already initialized by Firebase
  if (getApps().some(app => app.name === 'firebase-admin-app')) {
    adminApp = getApp('firebase-admin-app');
    return adminApp;
  }

  try {
    const credential = cert(serviceAccount);
    
    adminApp = initializeApp({
      credential,
    }, 'firebase-admin-app');

    return adminApp;
  } catch (error: any) {
    // Check for a specific error code that indicates the object is empty/invalid
    if (error.code === 'app/invalid-credential' && (!serviceAccount || !serviceAccount.project_id)) {
        throw new Error("Firebase Admin SDK service account file is not configured correctly or is empty. Please add your credentials to 'src/firebase-service-account.json'.");
    }
    console.error('Firebase Admin Init Error:', error.message);
    throw new Error(`Failed to initialize Firebase Admin SDK: ${error.message}`);
  }
}

/**
 * Returns an object containing the initialized Firebase Admin services.
 * This is the primary function to be used by other server-side modules.
 */
export async function getFirebaseAdmin() {
  try {
    const app = getAdminApp();
    const adminAuth = getAuth(app);
    const adminDb = getFirestore(app);
    return { adminApp: app, adminAuth, adminDb };
  } catch (error) {
     console.error("Failed to get Firebase Admin instances:", error);
     // Return null instances if initialization fails to prevent crashes downstream.
     return { adminApp: null, adminAuth: null, adminDb: null };
  }
}

/**
 * Verifies the user's ID token and returns the authenticated app instance and user claims.
 * This function should be used in Server Actions or Route Handlers to secure endpoints.
 */
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
