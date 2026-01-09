
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};


// Check if the config seems to be properly configured.
const isConfigured = !!(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId && !firebaseConfig.apiKey.includes("YOUR_"));

let app;
let db;

if (isConfigured) {
  // Initialize Firebase
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
  db = getFirestore(app);
} else {
  console.warn(`
    *************************************************************************
    * FIREBASE IS NOT CONFIGURED!                                           *
    *                                                                       *
    * Please open src/lib/firebaseConfig.ts and replace the placeholder     *
    * values with your actual Firebase project's configuration.             *
    *                                                                       *
    * The contact form and blog will not work until Firebase is configured. *
    *************************************************************************
  `);
  app = null;
  db = null;
}

export { db, app };
