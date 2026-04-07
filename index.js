// index.js - Le point d'entrée de Floy
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// On sert les fichiers statiques (ton futur design)
app.use(express.static('public'));

// --- LOGIQUE DU CHAT FLOY ---
io.on('connection', (socket) => {
    console.log('Un utilisateur s’est connecté à Floy 🟢');

    // Écouter quand un utilisateur envoie un message
    socket.on('chat message', (msg) => {
        console.log('Message reçu : ' + msg);
        // On renvoie le message à tout le monde en temps réel
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Un utilisateur a quitté le chat 🔴');
    });
});

// Lancement du serveur
server.listen(PORT, () => {
    console.log(`🚀 Floy est lancé sur http://localhost:${PORT}`);
});
