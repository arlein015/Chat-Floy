export const FloyLoader = {
    // Affiche le loader
    show() {
        if (document.getElementById('floy-dynamic-loader')) return;

        const loaderHtml = `
            <div id="floy-dynamic-loader" style="
                position: fixed; inset: 0; background: #000; 
                display: flex; flex-direction: column; align-items: center; 
                justify-content: center; z-index: 9999;
            ">
                <div class="spinner"></div>
                <h1 style="color: #FF7A1A; font-size: 18px; font-weight: 900; letter-spacing: 5px; margin-top: 20px; animation: pulse 1.5s infinite;">FLOY</h1>
                
                <style>
                    .spinner {
                        width: 50px; height: 50px;
                        border: 4px solid rgba(255, 122, 26, 0.1);
                        border-left-color: #FF7A1A;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                    @keyframes pulse {
                        0%, 100% { opacity: 0.5; }
                        50% { opacity: 1; }
                    }
                </style>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', loaderHtml);
    },

    // Cache le loader
    hide() {
        const loader = document.getElementById('floy-dynamic-loader');
        if (loader) {
            loader.style.transition = "opacity 0.4s";
            loader.style.opacity = "0";
            setTimeout(() => loader.remove(), 400);
        }
    }
};
