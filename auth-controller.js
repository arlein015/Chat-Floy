import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);
const loginForm = document.getElementById('login-form');
const errorDisplay = document.getElementById('error-display');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const btn = document.getElementById('login-btn');

        // Effet de chargement
        btn.innerText = "CONNEXION EN COURS...";
        btn.disabled = true;
        errorDisplay.style.display = "none";

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Succès ! Redirection vers le chat
                window.location.href = "chat.html";
            })
            .catch((error) => {
                btn.innerText = "CONNEXION";
                btn.disabled = false;
                errorDisplay.style.display = "block";
                
                // Traduction des erreurs Firebase
                if (error.code === 'auth/invalid-credential') {
                    errorDisplay.innerText = "Email ou mot de passe incorrect.";
                } else if (error.code === 'auth/network-request-failed') {
                    errorDisplay.innerText = "Problème de connexion internet.";
                } else {
                    errorDisplay.innerText = "Erreur : " + error.message;
                }
            });
    });
}
