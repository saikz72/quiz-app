// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0J0gXofc_QGGnCbLc6im2vQI_SkglTvc',
  authDomain: 'quiz-f8fdc.firebaseapp.com',
  projectId: 'quiz-f8fdc',
  storageBucket: 'quiz-f8fdc.appspot.com',
  messagingSenderId: '954736474151',
  appId: '1:954736474151:web:4a94385540e4e7fe337602',
  measurementId: 'G-Z2L04BWGXQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
export default app;
