// Importation des modules Firebase (Version SDK v10+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Ta configuration Firebase (Vérifie bien ces valeurs dans ta console Firebase)
const firebaseConfig = {
  apiKey: "TON_API_KEY_ICI", 
  authDomain: "floy-2a96d.firebaseapp.com",
  projectId: "floy-2a96d",
  storageBucket: "floy-2a96d.appspot.com",
  messagingSenderId: "TON_SENDER_ID",
  appId: "TON_APP_ID"
};

// Initialisation de l'application
const app = initializeApp(firebaseConfig);

// Initialisation des services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Exportation pour les utiliser dans index.html et les autres modules
export { auth, db, storage };
