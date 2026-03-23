export const StoryViewer = {
    timer: null,
    duration: 5000, // 5 secondes par story

    show(userData) {
        // 1. Créer l'overlay plein écran
        const overlay = document.createElement('div');
        overlay.id = 'floy-story-overlay';
        overlay.style = `
            position: fixed; inset: 0; background: #000; z-index: 5000;
            display: flex; flex-direction: column; color: white;
            font-family: sans-serif; animation: fadeIn 0.3s ease;
        `;

        overlay.innerHTML = `
            <div style="display: flex; gap: 4px; padding: 15px 10px 5px;">
                <div style="flex: 1; height: 2px; background: rgba(255,255,255,0.3); border-radius: 2px; overflow: hidden;">
                    <div id="story-progress-fill" style="height: 100%; width: 0%; background: #fff; transition: width 0.1s linear;"></div>
                </div>
            </div>

            <div style="padding: 10px 15px; display: flex; align-items: center; gap: 12px;">
                <img src="${userData.avatarUrl || 'https://via.placeholder.com/150'}" 
                     style="width: 42px; height: 42px; border-radius: 50%; border: 2px solid #FF7A1A; object-fit: cover;">
                <div style="flex: 1;">
                    <div style="font-weight: 800; font-size: 15px;">${userData.username}</div>
                    <div style="font-size: 11px; color: rgba(255,255,255,0.6);">Il y a quelques heures</div>
                </div>
                <div id="close-story-btn" style="cursor: pointer; padding: 5px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </div>
            </div>

            <div style="flex: 1; display: flex; align-items: center; justify-content: center; position: relative;">
                <img src="${userData.avatarUrl || 'https://via.placeholder.com/150'}" 
                     style="width: 100%; max-height: 70vh; object-fit: contain; box-shadow: 0 0 50px rgba(0,0,0,0.5);">
                
                ${userData.statusNote ? `
                    <div style="position: absolute; bottom: 40px; left: 20px; right: 20px; 
                                background: rgba(0,0,0,0.6); backdrop-filter: blur(10px); 
                                padding: 20px; border-radius: 20px; border-left: 5px solid #FF7A1A;
                                transform: translateY(0); animation: slideUp 0.5s ease;">
                        <span style="font-size: 18px; font-weight: 600; line-height: 1.4;">
                            "${userData.statusNote}"
                        </span>
                    </div>
                ` : ''}
            </div>

            <div style="padding: 20px 20px 40px; display: flex; gap: 10px;">
                <input type="text" placeholder="Répondre à ${userData.username}..." 
                       style="flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); 
                              padding: 15px; border-radius: 30px; color: white; outline: none;">
                <div style="width: 50px; height: 50px; background: #FF7A1A; border-radius: 50%; 
                            display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </div>
            </div>

            <style>
                @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            </style>
        `;

        document.body.appendChild(overlay);

        // --- LOGIQUE DE LA BARRE DE PROGRESSION ---
        const fill = document.getElementById('story-progress-fill');
        let start = null;
        
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min((progress / this.duration) * 100, 100);
            
            fill.style.width = percentage + '%';

            if (progress < this.duration) {
                this.timer = requestAnimationFrame(animate);
            } else {
                this.close();
            }
        };

        this.timer = requestAnimationFrame(animate);

        // Bouton fermer
        document.getElementById('close-story-btn').onclick = () => this.close();
    },

    close() {
        cancelAnimationFrame(this.timer);
        const overlay = document.getElementById('floy-story-overlay');
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.3s ease';
            setTimeout(() => overlay.remove(), 300);
        }
    }
};
