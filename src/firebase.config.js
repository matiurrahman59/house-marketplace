import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxMTM6asjub2vq3KKqHsk8oGg3K-S1ciA',
  authDomain: 'house-marketplace-app-de85c.firebaseapp.com',
  projectId: 'house-marketplace-app-de85c',
  storageBucket: 'house-marketplace-app-de85c.appspot.com',
  messagingSenderId: '388010728989',
  appId: '1:388010728989:web:6cd64d4c5470e4f47ab0f4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
