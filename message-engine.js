// message-engine.js
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const msgInput = document.getElementById('msg-input');
    const chatMessages = document.getElementById('chat-messages');

    // Fonction pour ajouter une bulle de message
    const appendMessage = (text, type) => {
        const msgDiv = document.createElement('div');
        msgDiv.style.marginBottom = "15px";
        msgDiv.style.display = "flex";
        msgDiv.style.justifyContent = type === 'sent' ? "flex-end" : "flex-start";

        const bubble = document.createElement('div');
        bubble.innerText = text;
        bubble.style.padding = "12px 18px";
        bubble.style.borderRadius = "15px";
        bubble.style.maxWidth = "70%";
        
        // Design Orange pour les messages envoyés
        if(type === 'sent') {
            bubble.style.backgroundColor = "#FF7920";
            bubble.style.color = "#000000";
            bubble.style.fontWeight = "bold";
        } else {
            bubble.style.backgroundColor = "#1E1E1E";
            bubble.style.color = "#FFFFFF";
        }

        msgDiv.appendChild(bubble);
        chatMessages.appendChild(msgDiv);
        
        // Scroll automatique vers le bas
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // Action au clic sur Envoyer
    sendBtn.addEventListener('click', () => {
        if(msgInput.value.trim() !== "") {
            appendMessage(msgInput.value, 'sent');
            msgInput.value = ""; // On vide le champ
        }
    });

    // Envoyer avec la touche Entrée
    msgInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendBtn.click();
    });
});
