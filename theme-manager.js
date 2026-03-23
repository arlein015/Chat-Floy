export const ThemeManager = {
    // Les définitions de couleurs pour chaque mode
    themes: {
        dark: {
            '--f-bg': '#000000',
            '--f-card': '#121212',
            '--f-text': '#ffffff',
            '--f-border': '#1c1c1e',
            '--f-dim': '#8e8e8e'
        },
        light: {
            '--f-bg': '#f2f2f7',
            '--f-card': '#ffffff',
            '--f-text': '#000000',
            '--f-border': '#e5e5ea',
            '--f-dim': '#666666'
        }
    },

    init() {
        // 1. On vérifie si l'utilisateur a déjà choisi un thème
        const savedTheme = localStorage.getItem('floy-theme') || 'dark';
        this.apply(savedTheme);
    },

    toggle() {
        const current = localStorage.getItem('floy-theme') === 'light' ? 'dark' : 'light';
        this.apply(current);
    },

    apply(themeName) {
        const theme = this.themes[themeName];
        const root = document.documentElement;

        // Appliquer chaque variable CSS au document
        Object.keys(theme).forEach(key => {
            root.style.setProperty(key, theme[key]);
        });

        // Sauvegarder la préférence
        localStorage.setItem('floy-theme', themeName);
        
        // Optionnel : Ajouter une classe au body pour des styles spécifiques
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(`theme-${themeName}`);
    }
};
