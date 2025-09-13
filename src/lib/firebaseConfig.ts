
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// =================================================================
// IMPORTANT! - TODO: CONFIGURE FIREBASE
// =================================================================
// You must replace the following placeholder values with your actual
// Firebase project's configuration. You can find this in your
// Firebase project console:
//
// Project settings > General > Your apps > Web app > SDK setup and configuration
//
// Select "Config" to see these values.
//
// Using these placeholder values WILL cause your application to fail.
// =================================================================
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyC8e5a-CC9183BTV-hDk3fCprp12345",
  authDomain: "mevaclinic.firebaseapp.com",
  projectId: "mevaclinic",
  storageBucket: "mevaclinic.appspot.com",
  messagingSenderId: "1080954631981",
  appId: "1:1080954631981:web:1deb8a110d6bb81e8f05a4",
  measurementId: "G-12345678"
};


// Check if the config seems to be properly configured.
const isConfigured = !!(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId && !firebaseConfig.apiKey.includes("REPLACE_WITH_YOUR"));

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
