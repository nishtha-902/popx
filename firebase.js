import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-JZKz-1P85fJI72DvTQ_exW8bkgiObdo",
  authDomain: "popx-7d96c.firebaseapp.com",
  projectId: "popx-7d96c",
  storageBucket: "popx-7d96c.firebasestorage.app",
  messagingSenderId: "1006650964177",
  appId: "1:1006650964177:web:13973cafd667524a492df0",
  measurementId: "G-GVLJL78Q48"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail
};
