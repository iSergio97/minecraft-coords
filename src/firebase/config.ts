// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCan89w7U1z1Uet3AkZiCziDXvbo5dtBWw',
  authDomain: 'minecraft-coords-eaaad.firebaseapp.com',
  projectId: 'minecraft-coords-eaaad',
  storageBucket: 'minecraft-coords-eaaad.appspot.com',
  messagingSenderId: '425151945267',
  appId: '1:425151945267:web:78790ea8b76d85af22a146'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const coordsCollection = collection(db, 'coordenadas');
