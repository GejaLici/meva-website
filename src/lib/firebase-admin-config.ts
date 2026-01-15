
'use server';

import { getApps, initializeApp, cert, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { headers } from 'next/headers';
import 'server-only';

let adminApp: App;

// This function now initializes the app using environment variables.
// It includes a crucial fix for the private_key formatting.
function getAdminApp(): App {
  if (getApps().some(app => app.name === 'firebase-admin-app')) {
    adminApp = getApp('firebase-admin-app');
  } else {
    // Read credentials from environment variables
    const serviceAccount = {
      type: "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // <--- THE CRUCIAL FIX
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
    };
    
    // Check if the service account has the required properties
    if (
      !serviceAccount.project_id ||
      !serviceAccount.client_email ||
      !serviceAccount.private_key
    ) {
      throw new Error('Firebase Admin SDK credentials are not set in .env file. Please check your environment variables.');
    }

    try {
        const credential = cert(serviceAccount);
        adminApp = initializeApp({ credential }, 'firebase-admin-app');
    } catch (error: any) {
        console.error('Firebase Admin Init Error:', error);
        throw new Error(`Failed to parse Firebase Admin SDK credentials: ${error.message}`);
    }
  }

  return adminApp;
}

export async function getFirebaseAdmin() {
  const app = getAdminApp();
  const adminAuth = getAuth(app);
  const adminDb = getFirestore(app);
  return { adminApp: app, adminAuth, adminDb };
}

export async function getAuthenticatedAppForUser(idToken?: string | null): Promise<{ app: App | null; currentUser: any | null; }> {
  // If an ID token is explicitly passed (from the client), use it.
  // Otherwise, fall back to reading from headers.
  const token = idToken || headers().get('Authorization')?.split('Bearer ')[1];
  
  if (!token) {
    return { app: null, currentUser: null };
  }
  
  try {
    const { adminAuth } = await getFirebaseAdmin();
    const decodedToken = await adminAuth.verifyIdToken(token);
    return { app: adminApp, currentUser: decodedToken };
  } catch (error) {
    console.error('Error verifying auth token:', error);
    return { app: null, currentUser: null };
  }
}
