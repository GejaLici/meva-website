
'use client';

import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, type Auth } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator, type Firestore } from 'firebase/firestore';
import { firebaseConfig } from './config';

interface FirebaseInstances {
  app: FirebaseApp | null;
  auth: Auth | null;
  db: Firestore | null;
}

function initializeFirebase(): FirebaseInstances {
  if (!firebaseConfig) {
    console.warn('Firebase is not configured. Please add your Firebase credentials to the .env file.');
    return { app: null, auth: null, db: null };
  }

  const isConfigured = !!(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );

  if (!isConfigured) {
    console.warn('Firebase is not configured. Please add your Firebase credentials to the .env file.');
    // Return null or dummy objects if not configured
    return { app: null, auth: null, db: null };
  }

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const auth = getAuth(app);
  const db = getFirestore(app);

  return { app, auth, db };
}

export { initializeFirebase };
export { FirebaseProvider, useFirebase, useFirebaseApp, useAuth, useFirestore } from './provider';
export { useUser } from './auth/use-user';
export { useCollection } from './firestore/use-collection';
export { useDoc } from './firestore/use-doc';
