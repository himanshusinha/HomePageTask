import {initializeApp} from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';

/* These is the firebase configuration file */
const firebaseConfig = {
  apiKey: 'AIzaSyDFVZeuECq74XwKNx6NQKflsot0-t_irLQ',
  authDomain: 'homepagetask-1bf30.firebaseapp.com',
  projectId: 'homepagetask-1bf30',
  storageBucket: 'homepagetask-1bf30.appspot.com',
  messagingSenderId: '1003000353878',
  appId: '1:1003000353878:web:c17bc089869822e803d7f7',
  measurementId: 'G-7NQ40LJ33Q',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
};
