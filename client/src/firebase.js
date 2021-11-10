import * as firebase from 'firebase/app';
import{ initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZoNmaTCtOxokELY62mGfXotnIYa3V-9Y",
  authDomain: "livekitchen-5ec58.firebaseapp.com",
  projectId: "livekitchen-5ec58",
  storageBucket: "livekitchen-5ec58.appspot.com",
  messagingSenderId: "923664649987",
  appId: "1:923664649987:web:b61a5af7a84e86b4ffe336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();


provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

export { db, auth, provider, firebase } 