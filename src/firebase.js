// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore, collection } from 'firebase/firestore';

import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD0G3GgWdabPOe943NpUtoYw0fU01fvWg8',
  authDomain: 'capstone-project-41d82.firebaseapp.com',
  projectId: 'capstone-project-41d82',
  storageBucket: 'capstone-project-41d82.appspot.com',
  messagingSenderId: '87569826480',
  appId: '1:87569826480:web:9fb4ce67b98b549afcf175',
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const colRef = collection(db, 'positions');
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const storage = getStorage(app);

