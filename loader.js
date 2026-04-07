// loader.js
export const FloyLoader = {
    show: () => {
        const loader = document.createElement('div');
        loader.id = 'floy-loader';
        loader.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(loader);
    },
    hide: () => {
        const loader = document.getElementById('floy-loader');
        if (loader) loader.remove();
    }
};

console.log("Module Loader Floy : Prêt ✅");
