// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD264JpNWs08p7exXOLRZdWUkbKBdviw8c",
  authDomain: "floy-9f9a1.firebaseapp.com",
  projectId: "floy-9f9a1",
  storageBucket: "floy-9f9a1.firebasestorage.app",
  messagingSenderId: "401063236997",
  appId: "1:401063236997:web:ba53cf61961acd977b20ec",
  measurementId: "G-YSGGQ4Q4TV"
};
// Initialisation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
console.log("Connexion Firebase Floy : Initialisée 🚀");
