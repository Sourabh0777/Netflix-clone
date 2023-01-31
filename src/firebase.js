import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB45pVl9M3SgGZ58lpjjPDOAtUT0QW-cf4",
  authDomain: "netflix-project1-7beaf.firebaseapp.com",
  projectId: "netflix-project1-7beaf",
  storageBucket: "netflix-project1-7beaf.appspot.com",
  messagingSenderId: "385918920235",
  appId: "1:385918920235:web:8bfc84bdbb1159e65d2c6e",
  measurementId: "G-QLRCNY91W9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth} ;
export default db;
