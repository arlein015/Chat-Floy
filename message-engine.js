import { db } from './firebase-config.js';
import { 
    collection, addDoc, query, orderBy, onSnapshot, 
    serverTimestamp, updateDoc, doc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export const MessageEngine = {
    getRoomId(uid1, uid2) {
        return [uid1, uid2].sort().join("_");
    },

    sendMessage(senderId, receiverId, text) {
        const roomId = this.getRoomId(senderId, receiverId);
        return addDoc(collection(db, "chats", roomId, "messages"), {
            senderId,
            text,
            timestamp: serverTimestamp(),
            read: false
        });
    },

    listenMessages(uid1, uid2, callback) {
        const roomId = this.getRoomId(uid1, uid2);
        const q = query(collection(db, "chats", roomId, "messages"), orderBy("timestamp", "asc"));
        return onSnapshot(q, (snapshot) => {
            const messages = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            callback(messages);
        });
    },

    async markAsRead(uid1, uid2, messageId) {
        const roomId = this.getRoomId(uid1, uid2);
        const msgRef = doc(db, "chats", roomId, "messages", messageId);
        await updateDoc(msgRef, { read: true });
    }
};
