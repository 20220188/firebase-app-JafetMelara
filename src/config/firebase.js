import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';  // Añadir esta línea
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';  // Añadir esta línea

const firebaseConfig = {
  apiKey: "AIzaSyBxX8GDhEgEMYNKc4b53GyNVsDKcQBF4rE",
  authDomain: "practica-firebase-20220188.firebaseapp.com",
  projectId: "practica-firebase-20220188",
  storageBucket: "practica-firebase-20220188.appspot.com",
  messagingSenderId: "181941133635",
  appId: "1:181941133635:web:c9296117091874d8274ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const storage = getStorage(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});  // Cambiar esta línea

export { database, storage, auth };
