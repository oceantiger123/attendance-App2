// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnrEi_YblGOXSkjFCFTLuAOyUQvXlRmzo",
  authDomain: "uploadingfile-3220e.firebaseapp.com",
  projectId: "uploadingfile-3220e",
  storageBucket: "uploadingfile-3220e.appspot.com",
  messagingSenderId: "953572294247",
  appId: "1:953572294247:web:ca2fd82365b883153bdec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);