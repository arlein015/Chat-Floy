/**
 * index.js - Point d'entrée de FLOY
 * Mode : Développement (Bypass Auth)
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("%c FLOY ", "color: #FF7920; font-weight: bold; font-size: 20px;", "Démarrage du système...");

    // On récupère le conteneur du loader si tu en as un (facultatif)
    const loader = document.getElementById('loader');

    // On simule une petite attente pour vérifier que tout est chargé
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            loader.style.transition = '0.5s';
        }

        console.log("🚀 Redirection vers le module CHAT...");
        
        // C'est ici que la magie opère : on saute le login
        window.location.href = "chat.html";
        
    }, 1500); // 1.5 seconde de délai pour le style
});

/**
 * Note pour plus tard (Luther) :
 * Quand on aura fini le design du chat, on reviendra ici
 * pour remettre la vérification Firebase (onAuthStateChanged).
 */
