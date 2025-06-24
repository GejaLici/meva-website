
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
  apiKey: "AIzaSyDiQNKo2ypylk2ERrsTJhpMb0M2ts-HKRc",
  authDomain: "novasculpt-clinic.firebaseapp.com",
  projectId: "novasculpt-clinic",
  storageBucket: "novasculpt-clinic.appspot.com",
  messagingSenderId: "1080954631981",
  appId: "1:1080954631981:web:1deb8a110d6bb81e8f05a4",
  // measurementId: "REPLACE_WITH_YOUR_MEASUREMENT_ID" // Optional: if you use Google Analytics
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);

export { db, app };
