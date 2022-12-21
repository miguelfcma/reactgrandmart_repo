import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANc6tZDjeSjxJo1napQgC4njCveb3xa8A",
  authDomain: "grandmart-proyect-test-3.firebaseapp.com",
  projectId: "grandmart-proyect-test-3",
  storageBucket: "grandmart-proyect-test-3.appspot.com",
  messagingSenderId: "902273199322",
  appId: "1:902273199322:web:4c55c738d7c4c4d0ad09e3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
