// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "METS_TA_CLE_ICI_SANS_ESPACES", 
    authDomain: "VOTRE_PROJET.firebaseapp.com",
    projectId: "VOTRE_PROJET_ID",
    storageBucket: "VOTRE_PROJET.appspot.com",
    messagingSenderId: "XXXXX",
    appId: "XXXXX"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
console.log("Connexion Firebase Floy : Initialisée 🚀");
