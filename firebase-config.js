import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// On laisse ce bloc prêt à recevoir les VRAIES infos
const firebaseConfig = {
  apiKey: "VALEUR_A_COPIER",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJET_ID",
  storageBucket: "VOTRE_PROJET.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefgh"
};

export const app = initializeApp(firebaseConfig);
