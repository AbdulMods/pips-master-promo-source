import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAX8jyQd1tDjFEacovWd_6IxH_f-tDF-b4",
  authDomain: "pipsmaster-83f4e.firebaseapp.com",
  databaseURL: "https://pipsmaster-83f4e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pipsmaster-83f4e",
  storageBucket: "pipsmaster-83f4e.firebasestorage.app",
  messagingSenderId: "1010828199037",
  appId: "1:1010828199037:web:87d9f26c13a295d3be1d14",
  measurementId: "G-EYL8X49MJ7"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
