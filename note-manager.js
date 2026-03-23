export const NoteManager = {
    // Génère le HTML de la petite bulle orange à droite
    getNoteHTML(noteText) {
        if (!noteText || noteText.trim() === "") return "";
        
        return `
            <div class="floy-note-bubble" style="
                position: absolute;
                top: -8px;
                right: -5px;
                background: #121212;
                color: #FF7A1A;
                border: 1.5px solid #FF7A1A;
                border-radius: 12px;
                padding: 3px 10px;
                font-size: 10px;
                font-weight: 800;
                max-width: 70px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                z-index: 10;
                box-shadow: 0 4px 12px rgba(0,0,0,0.6);
                animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            ">
                ${noteText}
            </div>
            <style>
                @keyframes popIn {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            </style>
        `;
    },

    // Fonction pour mettre à jour la note dans Firebase
    async updateNote(userId, newNote, db, updateDoc, doc) {
        try {
            const userRef = doc(db, "Utilisateurs", userId);
            await updateDoc(userRef, {
                statusNote: newNote,
                noteTimestamp: Date.now()
            });
            return { success: true };
        } catch (error) {
            console.error("Erreur Note:", error);
            return { success: false, error };
        }
    }
};
