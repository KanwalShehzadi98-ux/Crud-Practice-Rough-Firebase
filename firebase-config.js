import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDiw71WIoWxjXPDEluMnPGnSwOWUc36RtU",
  authDomain: "crud-parctice.firebaseapp.com",
  projectId: "crud-parctice",
  storageBucket: "crud-parctice.appspot.com",
  messagingSenderId: "582365844173",
  appId: "1:582365844173:web:4b014f5856963673b98f84"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
