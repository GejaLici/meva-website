
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyC8e5a-CC9183BTV-hDk3fCprp12345",
  authDomain: "mevaclinic.firebaseapp.com",
  projectId: "mevaclinic",
  storageBucket: "mevaclinic.appspot.com",
  messagingSenderId: "1080954631981",
  appId: "1:1080954631981:web:1deb8a110d6bb81e8f05a4",
  measurementId: "G-12345678"
};

function initialize() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return { app, auth, db };
}

export { initialize, firebaseConfig };
