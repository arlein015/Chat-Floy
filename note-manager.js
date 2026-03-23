export const NoteManager = {
    // Vérifie si la note est toujours valide (moins de 24h)
    isNoteValid(timestamp) {
        if (!timestamp) return false;
        const twentyFourHoursInMs = 24 * 60 * 60 * 1000;
        const now = Date.now();
        return (now - timestamp) < twentyFourHoursInMs;
    },

    getNoteHTML(u) {
        // Si pas de note ou si la note a plus de 24h, on ne renvoie rien
        if (!u.statusNote || !this.isNoteValid(u.noteTimestamp)) return "";
        
        return `
            <div class="floy-note-bubble" style="
                position: absolute; top: -8px; right: -5px;
                background: #121212; color: #FF7A1A;
                border: 1.5px solid #FF7A1A; border-radius: 12px;
                padding: 3px 10px; font-size: 10px; font-weight: 800;
                z-index: 10; box-shadow: 0 4px 12px rgba(0,0,0,0.6);
            ">
                ${u.statusNote}
            </div>
        `;
    },

    async updateNote(userId, newNote, db, updateDoc, doc) {
        const userRef = doc(db, "Utilisateurs", userId);
        await updateDoc(userRef, {
            statusNote: newNote,
            noteTimestamp: Date.now() // On enregistre l'heure précise
        });
    }
};
