
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: IMPORTANT!
// Replace the following with your actual Firebase project's configuration.
// You can find this in your Firebase project settings:
// Project settings > General > Your apps > SDK setup and configuration (select "Config").
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDiQNKo2ypylk2ERrsTJhpMb0M2ts-HKRc", // Replace with your API key
  authDomain: "novasculpt-clinic.firebaseapp.com", // Replace with your Auth domain
  projectId: "novasculpt-clinic", // Replace with your Project ID
  storageBucket: "novasculpt-clinic.firebasestorage.app", // Replace with your Storage Bucket
  messagingSenderId: "1080954631981", // Replace with your Messaging Sender ID
  appId: "1:1080954631981:web:1deb8a110d6bb81e8f05a4", // Replace with your App ID
  // measurementId: "YOUR_MEASUREMENT_ID" // Optional: if you use Analytics
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
