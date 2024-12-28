import { initializeApp } from 'firebase/app';
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import {
  initializeAuth,
  GoogleAuthProvider,
} from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
};


// Initialize Firebase
const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY, 
  projectId: process.env.EXPO_FIREBASE_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_FIREBASE_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_FIREBASE_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_FIREBASE_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const firebase = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default firebase;
