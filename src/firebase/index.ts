import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDzHqFXMi2bMj9bXB1s-ako9NiQssRRToE',
  authDomain: 'swypper-dev.firebaseapp.com',
  projectId: 'swypper-dev',
  storageBucket: 'swypper-dev.appspot.com',
  messagingSenderId: '139768496161',
  appId: '1:139768496161:web:2b1c5e39e556e7f312e360',
  measurementId: 'G-FC0M88JDZ7',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { analytics, firestore, auth };
