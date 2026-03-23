import { auth, db } from './firebase-config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const AuthController = {
    // Inscription avec création automatique dans "Utilisateurs"
    async register(email, password, username) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await setDoc(doc(db, "Utilisateurs", user.uid), {
                uid: user.uid,
                username: username,
                email: email,
                avatarUrl: "https://via.placeholder.com/150",
                createdAt: serverTimestamp(),
                isOnline: true
            });
            return { success: true, user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async logout() {
        return await signOut(auth);
    }
};
