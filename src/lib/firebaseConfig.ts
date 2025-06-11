
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: IMPORTANT!
// Replace the following with your actual Firebase project's configuration.
// You can find this in your Firebase project settings:
// Project settings > General > Your apps > SDK setup and configuration (select "Config").
const firebaseConfig: FirebaseOptions = {
  apiKey: "YOUR_API_KEY", // Replace with your API key
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com", // Replace with your Auth domain
  projectId: "YOUR_PROJECT_ID", // Replace with your Project ID
  storageBucket: "YOUR_PROJECT_ID.appspot.com", // Replace with your Storage Bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your Messaging Sender ID
  appId: "YOUR_APP_ID", // Replace with your App ID
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
