import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";  

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQLvylMVj6KisOZ5fi5h0i5ZHREAXFGQ",
  authDomain: "chatgpt-messenger-yt-7bdc1.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-7bdc1",
  storageBucket: "chatgpt-messenger-yt-7bdc1.appspot.com",
  messagingSenderId: "707912452157",
  appId: "1:707912452157:web:58116ed806368b152e4254"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app);


export { db }