import { db, auth } from './firebase-config.js';
import { doc, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const PresenceManager = {
    async setStatus(isOnline) {
        const user = auth.currentUser;
        if (!user) return;

        const userRef = doc(db, "Utilisateurs", user.uid);
        try {
            await updateDoc(userRef, {
                isOnline: isOnline,
                lastSeen: serverTimestamp()
            });
        } catch (error) {
            console.error("Erreur de présence:", error);
        }
    },

    // Détecte quand l'utilisateur ferme l'onglet ou quitte l'app
    init() {
        window.addEventListener('beforeunload', () => this.setStatus(false));
        window.addEventListener('focus', () => this.setStatus(true));
        window.addEventListener('blur', () => this.setStatus(false));
    }
};
