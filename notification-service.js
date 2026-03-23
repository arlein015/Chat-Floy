import { db, auth } from './firebase-config.js';
import { collectionGroup, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const NotificationService = {
    init() {
        // Au lieu de demander tout de suite, on attend un clic sur le document
        document.addEventListener('click', () => {
            if (Notification.permission !== "granted") {
                Notification.requestPermission();
            }
        }, { once: true }); // Ne s'exécute qu'une seule fois
        
        // ... le reste de ton code d'écoute des messages
    }
}

    async requestPermission() {
        if (!("Notification" in window)) return;
        if (Notification.permission !== "granted") {
            await Notification.requestPermission();
        }
    },

    // Écoute TOUS les messages entrants destinés à l'utilisateur
    init() {
        this.requestPermission();
        const user = auth.currentUser;
        if (!user) return;

        // On écoute tous les messages créés dans n'importe quelle "room"
        // où le senderId n'est pas moi et où le message n'est pas encore lu
        const q = query(
            collectionGroup(db, "messages"), 
            where("read", "==", false)
        );

        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    const msg = change.doc.data();
                    
                    // On ne notifie que si le message ne vient pas de nous
                    // Et si on n'est pas déjà en train de regarder la discussion (optionnel)
                    if (msg.senderId !== user.uid) {
                        this.playAlert();
                        this.showBrowserNotification(msg.text);
                    }
                }
            });
        });
    },

    playAlert() {
        this.audio.play().catch(e => console.log("Audio bloqué par le navigateur"));
    },

    showBrowserNotification(text) {
        if (Notification.permission === "granted") {
            new Notification("Nouveau message sur Floy 🟠", {
                body: text,
                icon: "/favicon.ico" // Change par ton logo Floy
            });
        }
    }
};
