# ⚙️ GUIDE SETUP TECHNIQUE — CLIC COM SITE

**Date** : 9 janvier 2025
**Version** : 1.0
**Objectif** : Configuration complète de l'environnement de développement et production

---

## 📋 TABLE DES MATIÈRES

1. [Prérequis](#prérequis)
2. [Installation Locale](#installation-locale)
3. [Structure du Projet](#structure-du-projet)
4. [Configuration Formulaire Contact](#configuration-formulaire-contact)
5. [Analytics & Tracking](#analytics--tracking)
6. [Optimisation Assets](#optimisation-assets)
7. [Déploiement Production](#déploiement-production)
8. [Configuration DNS & SSL](#configuration-dns--ssl)
9. [Monitoring & Maintenance](#monitoring--maintenance)
10. [Troubleshooting](#troubleshooting)

---

## 🔧 PRÉREQUIS

### Logiciels Nécessaires

| Outil | Version Min | Usage | Installation |
|-------|-------------|-------|--------------|
| **Node.js** | 18.x | Build tools, minification | https://nodejs.org |
| **Git** | 2.x | Version control | https://git-scm.com |
| **VS Code** | Latest | Éditeur (recommandé) | https://code.visualstudio.com |
| **Chrome** | Latest | Testing, Lighthouse | https://google.com/chrome |

### Extensions VS Code Recommandées

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ritwickdey.liveserver",
    "pranaygp.vscode-css-peek",
    "zignd.html-css-class-completion",
    "webhint.vscode-webhint"
  ]
}
```

**Installation** :
1. Ouvrir VS Code
2. Extensions (Cmd+Shift+X)
3. Rechercher et installer chaque extension

### Comptes Nécessaires (Gratuit)

- [ ] GitHub (version control + hosting)
- [ ] Google Analytics 4 (tracking)
- [ ] Google Search Console (SEO monitoring)
- [ ] FormSpree ou Netlify (formulaire contact)
- [ ] Cloudflare ou Netlify (hébergement + CDN)

---

## 💻 INSTALLATION LOCALE

### 1. Cloner le Dépôt

```bash
# Cloner le projet
git clone https://github.com/[VOTRE-USERNAME]/Clicom-Site.git
cd Clicom-Site

# Vérifier la structure
ls -la
```

**Attendu** :
```
.
├── fr/
├── en/
├── de/
├── it/
├── assets/
│   ├── css/
│   ├── js/
│   └── fonts/
├── public/
│   └── media/
├── index.html
├── sitemap.xml
├── robots.txt
├── README.md
├── OPTIMISATIONS_RAPPORT.md
├── CHECKLIST_QA_FINALE.md
├── GUIDE_IMAGES.md
└── GUIDE_SETUP_TECHNIQUE.md (ce fichier)
```

---

### 2. Installer Dépendances (Build Tools)

```bash
# Initialiser npm (si pas déjà fait)
npm init -y

# Installer outils de build
npm install --save-dev \
  clean-css-cli \
  terser \
  html-minifier \
  imagemin-cli \
  @squoosh/cli \
  http-server \
  concurrently
```

**Explication** :
- `clean-css-cli` : Minification CSS
- `terser` : Minification JavaScript
- `html-minifier` : Minification HTML
- `imagemin-cli` : Optimisation images
- `@squoosh/cli` : Conversion WebP
- `http-server` : Serveur local
- `concurrently` : Lancer plusieurs commandes en parallèle

---

### 3. Ajouter Scripts NPM

Éditer `package.json` et ajouter les scripts suivants :

```json
{
  "name": "clicom-site",
  "version": "1.0.0",
  "description": "Site officiel CliCom - Agence marketing PME Suisse",
  "scripts": {
    "dev": "http-server -p 8080 -c-1",
    "build": "npm run build:css && npm run build:js",
    "build:css": "cleancss -o assets/css/styles.min.css assets/css/styles.css",
    "build:js": "terser assets/js/main.js -o assets/js/main.min.js --compress --mangle",
    "build:html": "html-minifier --input-dir . --output-dir dist --file-ext html --remove-comments --collapse-whitespace --minify-css --minify-js",
    "optimize:images": "squoosh-cli --webp auto public/media/**/*.{jpg,png}",
    "serve": "http-server dist -p 8080",
    "watch": "concurrently \"npm run watch:css\" \"npm run dev\"",
    "watch:css": "nodemon --watch assets/css/styles.css --exec npm run build:css",
    "test": "npm run build && npm run serve",
    "lighthouse": "lighthouse http://localhost:8080 --output html --output-path ./lighthouse-report.html --chrome-flags='--headless'"
  },
  "keywords": ["marketing", "pme", "suisse", "agency"],
  "author": "CliCom",
  "license": "UNLICENSED",
  "private": true
}
```

---

### 4. Lancer le Serveur de Développement

```bash
# Démarrer serveur local
npm run dev
```

**Accéder au site** :
- **URL** : http://localhost:8080
- **Pages à tester** :
  - http://localhost:8080/fr/
  - http://localhost:8080/fr/services/
  - http://localhost:8080/fr/contact/

**Test rapide** :
1. Ouvrir Chrome DevTools (F12)
2. Vérifier Console (aucune erreur JavaScript)
3. Vérifier Network (aucun 404)
4. Tester menu mobile (clic hamburger)
5. Tester FAQ accordion (clic question)

---

## 📁 STRUCTURE DU PROJET

### Architecture Actuelle (Statique)

```
/
├── fr/                          # Site français (principal)
│   ├── index.html              # Homepage
│   ├── services/
│   │   └── index.html          # Page services + FAQ
│   ├── offres-tarifs/
│   │   └── index.html          # Pricing + FAQ
│   ├── methode-30-60-90/
│   │   └── index.html          # Méthode
│   ├── a-propos/
│   │   └── index.html          # À propos
│   ├── contact/
│   │   └── index.html          # Formulaire contact
│   ├── blog/
│   │   ├── index.html          # Blog homepage
│   │   └── marketing-digital-pme-suisses/
│   │       └── index.html      # Article exemple
│   ├── resultats/
│   │   └── index.html          # Témoignages + case studies
│   ├── mentions-legales/
│   │   └── index.html          # Légal
│   ├── confidentialite/
│   │   └── index.html          # Privacy policy
│   └── cookies/
│       └── index.html          # Cookie policy
├── en/                          # Site anglais (structure identique)
├── de/                          # Site allemand
├── it/                          # Site italien
├── assets/
│   ├── css/
│   │   ├── styles.css          # Source CSS (18 KB)
│   │   └── styles.min.css      # Version minifiée (à générer)
│   ├── js/
│   │   ├── main.js             # Source JavaScript (12 KB)
│   │   └── main.min.js         # Version minifiée (à générer)
│   └── fonts/                  # Polices system (pas de fichiers)
├── public/
│   └── media/
│       ├── hero/               # Images hero
│       ├── icons/              # Icônes SVG
│       ├── services/           # Images services
│       ├── about/              # Images équipe
│       ├── testimonials/       # Photos clients
│       ├── blog/               # Images articles
│       ├── case-studies/       # Visuels case studies
│       ├── logo/               # Logos entreprise
│       └── placeholders/       # SVG fallbacks
│           ├── ph-hero.svg
│           ├── ph-icons.svg
│           └── ph-image.svg
├── index.html                  # Redirection vers /fr/
├── sitemap.xml                 # Sitemap SEO
├── robots.txt                  # Directives robots
├── .htaccess                   # Configuration Apache (à créer)
├── _headers                    # Configuration Netlify (à créer)
└── package.json                # Dépendances npm
```

### Fichiers à Créer

1. **`.htaccess`** (si hébergement Apache)
2. **`_headers`** (si hébergement Netlify)
3. **`netlify.toml`** (si déploiement Netlify)
4. **`.env`** (variables d'environnement, **ne pas commit**)
5. **`.gitignore`** (fichiers à ignorer)

---

## 📧 CONFIGURATION FORMULAIRE CONTACT

### Option 1 : FormSpree (Recommandé, Gratuit)

**Avantages** :
- 50 soumissions/mois gratuites
- Spam protection intégrée
- Configuration 5 minutes
- Pas de backend nécessaire

**Installation** :

1. **Créer compte** : https://formspree.io/register
2. **Créer nouveau form** : Dashboard → New Form
3. **Récupérer endpoint** : `https://formspree.io/f/[VOTRE-ID]`

4. **Modifier `/fr/contact/index.html`** :

```html
<!-- Remplacer ligne 73 -->
<form class="form" action="https://formspree.io/f/[VOTRE-ID]" method="POST">

  <!-- Ajouter champs cachés pour métadonnées -->
  <input type="hidden" name="_subject" value="Nouvelle demande depuis clicom.ch">
  <input type="hidden" name="_language" value="fr">
  <input type="hidden" name="_next" value="https://clicom.ch/fr/merci/">

  <!-- Champs existants (name, email, etc.) restent inchangés -->
  <div class="form-group">
    <label for="name" class="form-label">Nom complet *</label>
    <input type="text" id="name" name="name" class="form-input" required>
  </div>

  <!-- ... reste du formulaire ... -->

  <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
    Envoyer la demande
  </button>
</form>
```

5. **Créer page de confirmation** `/fr/merci/index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Merci pour votre demande | CliCom</title>
  <link rel="stylesheet" href="/assets/css/styles.css">
</head>
<body>
  <main style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
    <div class="container text-center">
      <h1>✅ Demande envoyée avec succès</h1>
      <p style="font-size: var(--text-lg); margin: var(--space-lg) 0;">
        Merci pour votre demande. Nous vous répondrons sous 24h ouvrées.
      </p>
      <a href="/fr/" class="btn btn-primary">Retour à l'accueil</a>
    </div>
  </main>
</body>
</html>
```

6. **Répéter pour autres langues** (EN, DE, IT)

---

### Option 2 : Netlify Forms (Si hébergement Netlify)

**Avantages** :
- Intégré à Netlify (pas de service externe)
- 100 soumissions/mois gratuites
- Dashboard Netlify

**Installation** :

```html
<!-- Modifier /fr/contact/index.html ligne 73 -->
<form name="contact-fr" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="form">

  <!-- Anti-spam honeypot (caché) -->
  <p style="display: none;">
    <label>Don't fill this out: <input name="bot-field" /></label>
  </p>

  <!-- Reste identique -->
  <div class="form-group">
    <label for="name" class="form-label">Nom complet *</label>
    <input type="text" id="name" name="name" class="form-input" required>
  </div>

  <!-- ... -->
</form>
```

**Note** : Netlify détecte automatiquement `data-netlify="true"` lors du déploiement.

---

### Option 3 : Backend Custom (Node.js/PHP)

**Pour projets avec budget** : Créer API backend pour contrôle total.

**Stack recommandée** :
- Node.js + Express + Nodemailer
- Validation avec Zod
- Rate limiting avec express-rate-limit
- Stockage BDD PostgreSQL (optionnel)

**Non couvert dans ce guide** (projet statique prioritaire).

---

## 📊 ANALYTICS & TRACKING

### Google Analytics 4 (GA4)

**Installation** :

1. **Créer propriété GA4** :
   - Aller sur https://analytics.google.com
   - Admin → Create Property
   - Nom : "CliCom Site Officiel"
   - Fuseau horaire : Switzerland / Zurich
   - Devise : CHF

2. **Récupérer Measurement ID** : Format `G-XXXXXXXXXX`

3. **Créer fichier** `/assets/js/analytics.js` :

```javascript
/* Google Analytics 4 */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX', {
  'cookie_flags': 'SameSite=None;Secure',
  'anonymize_ip': true, // nLPD compliance
  'allow_google_signals': false, // Pas de remarketing sans consentement
  'allow_ad_personalization_signals': false
});

/* Track custom events */
document.addEventListener('DOMContentLoaded', function() {
  // Track form submissions
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function() {
      gtag('event', 'form_submit', {
        'form_name': this.name || 'contact',
        'page_path': window.location.pathname
      });
    });
  });

  // Track CTA clicks
  const ctaButtons = document.querySelectorAll('.btn-primary');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      gtag('event', 'cta_click', {
        'button_text': this.textContent.trim(),
        'page_path': window.location.pathname
      });
    });
  });
});
```

4. **Ajouter dans toutes les pages HTML** (avant `</head>`) :

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script src="/assets/js/analytics.js"></script>
```

5. **Créer cookie consent banner** (requis nLPD) :

Créer `/assets/js/cookie-consent.js` :

```javascript
/* Cookie Consent Banner (nLPD compliance) */
(function() {
  if (localStorage.getItem('cookie-consent') === 'accepted') {
    loadAnalytics();
    return;
  }

  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-banner-content">
      <p>Nous utilisons des cookies pour améliorer votre expérience.
      <a href="/fr/cookies/">En savoir plus</a></p>
      <div>
        <button class="btn btn-primary btn-sm" id="accept-cookies">Accepter</button>
        <button class="btn btn-ghost btn-sm" id="decline-cookies">Refuser</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('accept-cookies').addEventListener('click', function() {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.remove();
    loadAnalytics();
  });

  document.getElementById('decline-cookies').addEventListener('click', function() {
    localStorage.setItem('cookie-consent', 'declined');
    banner.remove();
  });

  function loadAnalytics() {
    // Charger GA4 uniquement si consentement
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    script.async = true;
    document.head.appendChild(script);

    const analytics = document.createElement('script');
    analytics.src = '/assets/js/analytics.js';
    document.head.appendChild(analytics);
  }
})();
```

Ajouter CSS dans `/assets/css/styles.css` :

```css
/* Cookie Banner */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--space-lg);
  box-shadow: var(--shadow-lg);
  z-index: 9999;
  animation: slideUp 0.3s ease;
}

.cookie-banner-content {
  max-width: var(--container-md);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-lg);
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

@media (max-width: 768px) {
  .cookie-banner-content {
    flex-direction: column;
    text-align: center;
  }
}
```

---

### Google Search Console

1. **Vérifier propriété** :
   - Aller sur https://search.google.com/search-console
   - Add Property → Domain
   - Suivre instructions vérification DNS

2. **Soumettre sitemap** :
   - Sitemaps → Add new sitemap
   - URL : `https://clicom.ch/sitemap.xml`

3. **Surveiller indexation** :
   - Coverage → Vérifier pages indexées
   - Performance → Analyser requêtes

---

## 🚀 OPTIMISATION ASSETS

### Minification CSS/JS

```bash
# Build production
npm run build

# Résultat attendu :
# assets/css/styles.min.css (6-8 KB au lieu de 18 KB)
# assets/js/main.min.js (4-5 KB au lieu de 12 KB)
```

**Modifier toutes les pages HTML pour utiliser versions minifiées** :

```html
<!-- AVANT (dev) -->
<link rel="stylesheet" href="/assets/css/styles.css">
<script src="/assets/js/main.js"></script>

<!-- APRÈS (prod) -->
<link rel="stylesheet" href="/assets/css/styles.min.css">
<script src="/assets/js/main.min.js"></script>
```

**Automatiser avec script** :

Créer `scripts/prepare-prod.sh` :

```bash
#!/bin/bash

echo "🔨 Building production assets..."
npm run build

echo "📝 Updating HTML references..."
find . -name "*.html" -type f -exec sed -i '' 's/styles\.css/styles.min.css/g' {} +
find . -name "*.html" -type f -exec sed -i '' 's/main\.js/main.min.js/g' {} +

echo "✅ Production ready!"
```

Rendre exécutable :
```bash
chmod +x scripts/prepare-prod.sh
./scripts/prepare-prod.sh
```

---

### Optimisation Images

```bash
# Convertir toutes les JPG/PNG en WebP
npm run optimize:images

# Vérifier résultats
ls -lh public/media/**/*.webp
```

**Ajouter formats fallback** dans HTML :

```html
<!-- Avant -->
<img src="/public/media/hero/hero-main.jpg" alt="...">

<!-- Après (avec fallback) -->
<picture>
  <source srcset="/public/media/hero/hero-main.webp" type="image/webp">
  <img src="/public/media/hero/hero-main.jpg" alt="...">
</picture>
```

---

### Preload Assets Critiques

Ajouter dans `<head>` de toutes les pages :

```html
<!-- Preload CSS critique -->
<link rel="preload" href="/assets/css/styles.min.css" as="style">

<!-- Preload police système (optionnel) -->
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>

<!-- DNS prefetch pour domaines externes -->
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
```

---

## 🌐 DÉPLOIEMENT PRODUCTION

### Option 1 : Netlify (Recommandé)

**Avantages** :
- CDN global automatique
- SSL gratuit (Let's Encrypt)
- Déploiement Git automatique
- Formulaires intégrés
- 100 GB/mois gratuit

**Installation** :

1. **Créer compte** : https://app.netlify.com/signup

2. **Créer fichier** `netlify.toml` à la racine :

```toml
[build]
  publish = "."
  command = "npm run build"

[[redirects]]
  from = "/"
  to = "/fr/"
  status = 302
  force = false

[[redirects]]
  from = "/index.html"
  to = "/fr/"
  status = 301

[[redirects]]
  from = "/*"
  to = "/fr/404.html"
  status = 404

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/public/media/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

3. **Connecter Git** :
   - Dashboard → Add new site
   - Import from Git → GitHub
   - Sélectionner repo `Clicom-Site`
   - Build settings : auto-détecté
   - Deploy

4. **Configurer domaine personnalisé** :
   - Site settings → Domain management
   - Add custom domain : `clicom.ch`
   - Configurer DNS (voir section suivante)

---

### Option 2 : Cloudflare Pages

**Avantages** :
- CDN ultra-rapide
- Analytics gratuit
- SSL automatique
- Unlimited bandwidth

**Installation** :

1. **Créer compte** : https://pages.cloudflare.com
2. **Connect to Git** → Sélectionner repo
3. **Build settings** :
   - Build command : `npm run build`
   - Output directory : `.`
4. **Deploy**

---

### Option 3 : GitHub Pages (Basique)

**Limites** : Pas de redirections serveur, pas de headers personnalisés.

```bash
# Activer GitHub Pages
# Settings → Pages → Source : main branch → Save
```

**URL** : `https://[username].github.io/Clicom-Site/`

---

## 🌍 CONFIGURATION DNS & SSL

### DNS (chez registrar : Infomaniak, Hostpoint, etc.)

**Records à créer** :

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | [IP Netlify] | 3600 |
| CNAME | www | [site].netlify.app | 3600 |

**IP Netlify** : 75.2.60.5 (vérifier docs Netlify)

**Alternative avec Cloudflare** :
- Transférer DNS vers Cloudflare (gratuit)
- Proxy automatique + CDN + DDoS protection

---

### SSL/HTTPS

**Netlify/Cloudflare** : Automatique (Let's Encrypt, renouvelé tous les 3 mois)

**Forcer HTTPS** :
- Netlify : Site settings → HTTPS → Force HTTPS
- Cloudflare : SSL/TLS → Always Use HTTPS

**Tester** :
- https://www.ssllabs.com/ssltest/
- Grade attendu : A ou A+

---

## 📈 MONITORING & MAINTENANCE

### Performance Monitoring

**Outils gratuits** :

1. **Google PageSpeed Insights** (hebdomadaire)
   - https://pagespeed.web.dev/
   - Objectif : Score > 90 (desktop), > 80 (mobile)

2. **GTmetrix** (mensuel)
   - https://gtmetrix.com
   - Objectif : Grade A, temps chargement < 2s

3. **Uptime Robot** (gratuit, 50 monitors)
   - https://uptimerobot.com
   - Check HTTP toutes les 5 minutes
   - Alerte email si down

---

### Logs & Analytics (Mensuel)

**Google Analytics 4** :
- Sessions / Users / Bounce rate
- Pages les plus visitées
- Conversions (soumissions formulaire)

**Google Search Console** :
- Requêtes / Impressions / CTR
- Positions moyennes
- Erreurs d'indexation

**Objectifs mois 1** :
- 500+ sessions
- < 60% bounce rate
- 10+ soumissions formulaire

---

### Backups

**Automatique via Git** :
- Tout est versionné
- Historique complet disponible

**Export base de données** (si formulaires stockés) :
- Mensuel via dashboard FormSpree/Netlify
- Export CSV des soumissions

---

### Mises à Jour

**Mensuel** :
- Vérifier dépendances npm : `npm outdated`
- Mettre à jour : `npm update`
- Tester : `npm run dev` + validation manuelle

**Trimestriel** :
- Audit Lighthouse complet
- Révision contenu (actualité, stats)
- Vérification liens cassés (https://www.brokenlinkcheck.com)

---

## 🐛 TROUBLESHOOTING

### Problème : Formulaire ne fonctionne pas

**Symptômes** : Soumission ne fait rien, pas d'email reçu

**Solutions** :

1. **Vérifier endpoint FormSpree** :
   ```bash
   curl -X POST https://formspree.io/f/[VOTRE-ID] \
     -d "email=test@example.com" \
     -d "name=Test"
   ```
   Attendu : Status 200

2. **Vérifier spam** : Inbox + dossier spam

3. **Logs Netlify Forms** :
   - Dashboard → Forms → Voir soumissions

4. **JavaScript bloqué** :
   - Vérifier Console (F12)
   - Désactiver adblocker

---

### Problème : Images ne chargent pas

**Symptômes** : Icône cassée, 404 Network

**Solutions** :

1. **Vérifier chemin** :
   ```html
   <!-- Chemin absolu depuis racine -->
   <img src="/public/media/hero/hero-main.webp">

   <!-- PAS de chemin relatif -->
   <img src="../../public/media/hero/hero-main.webp"> ❌
   ```

2. **Vérifier fichier existe** :
   ```bash
   ls -la public/media/hero/
   ```

3. **Vérifier permissions** :
   ```bash
   chmod 644 public/media/**/*
   ```

4. **Cache navigateur** :
   - Cmd+Shift+R (Chrome) pour hard reload

---

### Problème : CSS/JS non mis à jour

**Symptômes** : Anciennes couleurs/comportements après modification

**Solutions** :

1. **Vider cache navigateur** :
   - Chrome : Settings → Privacy → Clear browsing data
   - Ou ajouter `?v=2` à la fin de l'URL :
   ```html
   <link rel="stylesheet" href="/assets/css/styles.css?v=2">
   ```

2. **Vérifier build** :
   ```bash
   npm run build
   ls -la assets/css/styles.min.css
   ```

3. **Vérifier CDN cache** (Netlify/Cloudflare) :
   - Purge cache dans dashboard

---

### Problème : Menu mobile ne s'ouvre pas

**Symptômes** : Clic hamburger ne fait rien

**Solutions** :

1. **Vérifier JavaScript chargé** :
   - Console (F12) : `typeof initMobileMenu`
   - Attendu : `function`

2. **Vérifier event listener** :
   ```javascript
   // Ajouter debug dans main.js
   document.querySelector('.menu-toggle').addEventListener('click', function() {
     console.log('Menu clicked'); // Doit s'afficher dans Console
   });
   ```

3. **Vérifier CSS** :
   - Inspecter élément `.nav` en mobile
   - Doit avoir `display: none` par défaut
   - Puis `display: block` quand `.active`

---

### Problème : Score Lighthouse < 90

**Symptômes** : Performance rouge/orange

**Solutions** :

1. **Analyser opportunités** :
   - Lighthouse → View Report
   - Sections "Opportunities" et "Diagnostics"

2. **Fixes communs** :
   - Images trop lourdes → Compresser avec TinyPNG
   - CSS non minifié → `npm run build:css`
   - Render-blocking resources → Ajouter `defer` aux scripts
   - Pas de lazy loading → Ajouter `loading="lazy"` aux images

3. **Re-tester** :
   ```bash
   npm run lighthouse
   ```

---

## ✅ CHECKLIST DÉPLOIEMENT FINAL

### Avant Déploiement

- [ ] Toutes les images créées et optimisées (voir `GUIDE_IMAGES.md`)
- [ ] Placeholders remplacés (téléphone, adresse, logo)
- [ ] Formulaire connecté (FormSpree/Netlify)
- [ ] Analytics GA4 installé avec consentement cookies
- [ ] CSS/JS minifiés (`npm run build`)
- [ ] Toutes les pages HTML utilisent `.min.css` et `.min.js`
- [ ] Lighthouse score > 90 (perf), > 95 (a11y, SEO)
- [ ] Validation WCAG AA (voir `CHECKLIST_QA_FINALE.md`)
- [ ] Test cross-browser (Chrome, Firefox, Safari)
- [ ] Test responsive (iPhone, iPad, Android)

### Après Déploiement

- [ ] Site accessible via `https://clicom.ch`
- [ ] Redirection `http://` → `https://` fonctionne
- [ ] Redirection `/` → `/fr/` fonctionne
- [ ] Redirection `www` → non-www (ou inverse) fonctionne
- [ ] SSL valide (cadenas vert, grade A+)
- [ ] Sitemap accessible : `https://clicom.ch/sitemap.xml`
- [ ] Robots.txt accessible : `https://clicom.ch/robots.txt`
- [ ] Formulaire envoie bien les emails
- [ ] Google Analytics enregistre des sessions
- [ ] Google Search Console détecte le site
- [ ] Uptime Robot configuré (alerte si down)

---

## 📞 SUPPORT & RESSOURCES

### Documentation Officielle

- **Netlify** : https://docs.netlify.com
- **FormSpree** : https://help.formspree.io
- **Google Analytics 4** : https://support.google.com/analytics
- **Lighthouse** : https://developer.chrome.com/docs/lighthouse

### Communautés

- **Stack Overflow** : https://stackoverflow.com (tag: html/css/javascript)
- **Reddit** : r/webdev, r/frontend
- **Discord** : The Programmer's Hangout

### Outils Utiles

- **Can I Use** : https://caniuse.com (compatibilité navigateurs)
- **CSS Validator** : https://jigsaw.w3.org/css-validator/
- **HTML Validator** : https://validator.w3.org/
- **Broken Link Checker** : https://www.brokenlinkcheck.com/

---

## 🚀 PROCHAINES ÉTAPES

Une fois le setup technique complété :

1. **Suivre** `GUIDE_IMAGES.md` → Créer/commander les 15 images
2. **Exécuter** `CHECKLIST_QA_FINALE.md` → Validation complète
3. **Déployer** en production (Netlify/Cloudflare)
4. **Monitorer** performances pendant 1 semaine
5. **Itérer** sur contenu blog (1 article/mois)

**Félicitations ! Votre site est prêt pour la production. 🎉**

---

**Version** : 1.0
**Dernière mise à jour** : 9 janvier 2025
**Créé par** : Claude (Anthropic)
**Contact** : Voir `README.md` pour questions
