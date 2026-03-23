export const StoryViewer = {
    show(userData) {
        const overlay = document.createElement('div');
        overlay.id = 'story-overlay';
        overlay.style = `
            position: fixed; inset: 0; background: #000; z-index: 2000;
            display: flex; flex-direction: column; color: white;
        `;

        overlay.innerHTML = `
            <div style="padding: 20px; display: flex; align-items: center; gap: 10px; background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);">
                <img src="${userData.avatarUrl}" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid #FF7A1A;">
                <span style="font-weight: bold;">${userData.username}</span>
                <div style="margin-left: auto; cursor: pointer;" id="close-story">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </div>
            </div>
            <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 10px;">
                <img src="${userData.avatarUrl}" style="width: 100%; max-height: 80vh; object-fit: contain; border-radius: 15px;">
            </div>
            <div style="padding: 30px; text-align: center; font-style: italic; color: #FF7A1A;">
                "${userData.statusNote || 'Salut ! Je suis sur Floy.'}"
            </div>
        `;

        document.body.appendChild(overlay);

        document.getElementById('close-story').onclick = () => {
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 300);
        };
    }
};
