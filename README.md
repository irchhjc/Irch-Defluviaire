# Portfolio — Irch Defluviaire

Portfolio personnel d'Irch Defluviaire, Ingénieur Statisticien Économiste (ISSEA-CEMAC), spécialisé en Data Science, NLP et Marketing analytique.

## Stack
- HTML / CSS / JavaScript vanilla — 0 framework, 0 dépendance
- Police : Space Grotesk + JetBrains Mono (Google Fonts)
- Design : glassmorphism, dégradés animés, dark/light mode

## Aperçu local
Ouvre simplement `index.html` dans un navigateur, ou sers le dossier :

```bash
# avec Python
python -m http.server 8000

# avec Node
npx serve .
```

Puis visite http://localhost:8000.

## Déploiement gratuit

### Option 1 — GitHub Pages (recommandé)
1. Crée un repo `irchhjc.github.io` sur GitHub
2. Push les 3 fichiers (`index.html`, `styles.css`, `script.js`)
3. Active GitHub Pages dans Settings → Pages → branch `main`
4. Ton portfolio sera live à `https://irchhjc.github.io`

### Option 2 — Vercel / Netlify
- Drag & drop le dossier sur https://app.netlify.com/drop
- Site live en 30 secondes

## Personnalisation
- Photo de profil : remplace l'effet code par une `<img src="ton-avatar.jpg">` dans `index.html`
- Couleurs : modifie les variables CSS `--accent`, `--accent-2`, `--accent-3` dans `styles.css`
- Projets : édite la section `<section id="projects">` dans `index.html`
