# ✅ CHECKLIST QA FINALE — CLIC COM SITE

**Date** : 9 janvier 2025
**Version** : 2.0
**Objectif** : Valider le site avant mise en production

---

## 🎯 VALIDATION OBLIGATOIRE AVANT PROD

### ❗ PLACEHOLDERS À REMPLACER (BLOQUANT)

- [ ] **Téléphone** : Remplacer `+41-PLACEHOLDER` dans Schema.org (`fr/index.html` lignes 302, 318)
- [ ] **Adresse complète** : Ajouter adresse précise dans Schema.org (rue, code postal, ville)
- [ ] **Géolocalisation** : Remplacer lat/long génériques (46.8182, 8.2275) par coordonnées bureau
- [ ] **Logo entreprise** : Créer `/public/media/logo/clicom-logo.png` (PNG ou SVG, 512×512px min)
- [ ] **URL LinkedIn** : Remplacer `https://www.linkedin.com/company/clicom` par URL réelle
- [ ] **Formulaire contact** : Connecter à backend (FormSpree/Netlify Forms/autre)

**Si ces éléments ne sont pas complétés, le site n'est PAS prêt pour production.**

---

## 📋 TESTS FONCTIONNELS (Desktop)

### Navigation Principale
- [ ] Cliquer sur logo → retour homepage
- [ ] Menu navigation : tous les liens fonctionnent (6 liens)
- [ ] Language switcher : 4 langues accessibles (FR/EN/DE/IT)
- [ ] Bouton Contact header : redirection correcte
- [ ] Footer links : tous fonctionnels (18 liens)

### Pages Principales (FR)
- [ ] **Homepage** (`/fr/`) : Tout s'affiche correctement
- [ ] **Services** (`/fr/services/`) : FAQ s'ouvre/ferme au clic
- [ ] **Tarifs** (`/fr/offres-tarifs/`) : FAQ 7 questions fonctionnelles
- [ ] **Méthode 30-60-90** (`/fr/methode-30-60-90/`) : Contenu complet
- [ ] **À propos** (`/fr/a-propos/`) : Affichage correct
- [ ] **Contact** (`/fr/contact/`) : Formulaire visible, validation fonctionne
- [ ] **Blog** (`/fr/blog/`) : Page affichée, article accessible
- [ ] **Article blog** (`/fr/blog/marketing-digital-pme-suisses/`) : Contenu lisible
- [ ] **Résultats** (`/fr/resultats/`) : Témoignages et stats visibles

### Pages Légales (FR)
- [ ] **Mentions légales** (`/fr/mentions-legales/`) : Affichage
- [ ] **Confidentialité** (`/fr/confidentialite/`) : Affichage
- [ ] **Cookies** (`/fr/cookies/`) : Affichage

### Breadcrumbs
- [ ] Affichés sur `/fr/blog/` (Accueil / Blog)
- [ ] Affichés sur `/fr/resultats/` (Accueil / Résultats)
- [ ] Affichés sur `/fr/contact/` (Accueil / Contact)
- [ ] Affichés sur article blog (Accueil / Blog / Article)
- [ ] Liens breadcrumbs fonctionnent

### FAQ Accordion
- [ ] Page Services : 7 FAQ s'ouvrent/ferment au clic
- [ ] Page Tarifs : 7 FAQ s'ouvrent/ferment au clic
- [ ] Une seule FAQ ouverte à la fois (comportement accordion)
- [ ] Icône "+" devient "×" quand ouvert (rotation CSS)
- [ ] Navigation clavier fonctionne (ENTER/SPACE pour ouvrir)

### Formulaire Contact
- [ ] Validation temps réel : email invalide → erreur
- [ ] Validation temps réel : champs requis vides → erreur
- [ ] Sélection service fonctionne
- [ ] Textarea message redimensionnable
- [ ] Bouton submit : affiche message succès/erreur
- [ ] **APRÈS CONNEXION BACKEND** : Email reçu avec données formulaire

---

## 📱 TESTS RESPONSIVE (Mobile)

### Menu Mobile
- [ ] Icône hamburger visible (3 barres)
- [ ] Clic hamburger → menu s'ouvre (overlay)
- [ ] Navigation mobile affiche tous les liens
- [ ] Language switcher visible en mobile
- [ ] Clic sur lien → menu se ferme automatiquement
- [ ] Clic en dehors du menu → fermeture
- [ ] Scroll bloqué quand menu ouvert

### Pages Mobile (iPhone/Android simulateur)
- [ ] Homepage : Hero lisible, CTAs accessibles
- [ ] Services : Cards en colonne unique
- [ ] Tarifs : Pricing cards empilées verticalement
- [ ] Blog : Articles en colonne
- [ ] Résultats : Stats cards responsive
- [ ] Contact : Formulaire en colonne (pas côte-à-côte)
- [ ] Footer : Colonnes empilées

### Typographie Mobile
- [ ] H1 réduit (pas trop grand)
- [ ] Textes lisibles sans zoom
- [ ] Boutons taille adaptée (min 44×44px touch target)
- [ ] Pas de débordement horizontal

---

## 🚀 TESTS PERFORMANCE

### Lighthouse Audit (Chrome DevTools)
- [ ] **Performance** : Score ≥ 90 (desktop), ≥ 80 (mobile)
- [ ] **Accessibility** : Score ≥ 95
- [ ] **Best Practices** : Score ≥ 95
- [ ] **SEO** : Score = 100

**Comment tester** :
1. Ouvrir Chrome DevTools (F12)
2. Onglet "Lighthouse"
3. Cocher "Performance, Accessibility, Best Practices, SEO"
4. Run analysis (Desktop + Mobile séparément)

### Métriques Clés
- [ ] **First Contentful Paint (FCP)** : < 1.8s
- [ ] **Largest Contentful Paint (LCP)** : < 2.5s
- [ ] **Cumulative Layout Shift (CLS)** : < 0.1
- [ ] **Time to Interactive (TTI)** : < 3.5s

### PageSpeed Insights
- [ ] Tester sur [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- [ ] Score mobile ≥ 80
- [ ] Score desktop ≥ 90

### GTmetrix (Optionnel)
- [ ] Tester sur [https://gtmetrix.com/](https://gtmetrix.com/)
- [ ] Grade A ou B
- [ ] Temps chargement complet < 3s

---

## 🔍 TESTS SEO

### Meta Tags (Toutes Pages)
- [ ] `<title>` présent et unique (< 60 caractères)
- [ ] `<meta name="description">` présent et unique (150-160 caractères)
- [ ] `<link rel="canonical">` présent
- [ ] `<meta name="robots">` correct (noindex seulement sur pages légales)

### Meta Tags Sociaux
- [ ] Open Graph title, description, image, url sur pages principales
- [ ] Twitter cards présentes
- [ ] Images OG accessibles (pas de 404)

### Hreflang
- [ ] Tags `<link rel="alternate" hreflang>` sur toutes les pages
- [ ] 4 langues déclarées : fr, en, de, it
- [ ] x-default vers `/fr/`

### Schema.org
- [ ] Valider sur [https://validator.schema.org/](https://validator.schema.org/)
- [ ] Coller contenu HTML de `fr/index.html`
- [ ] Aucune erreur Schema.org
- [ ] Types détectés : Organization, LocalBusiness, WebSite, Service

### Sitemap & Robots
- [ ] Sitemap accessible : `https://votre-domaine.ch/sitemap.xml`
- [ ] Sitemap contient toutes les pages (vérifier nombre d'URLs)
- [ ] Robots.txt accessible : `https://votre-domaine.ch/robots.txt`
- [ ] Robots.txt pointe vers sitemap

### Structure HTML
- [ ] Un seul H1 par page
- [ ] Hiérarchie Hn cohérente (H1 → H2 → H3, pas de saut)
- [ ] Textes alt sur toutes les images
- [ ] Liens descriptifs (pas "cliquez ici")

---

## ♿ TESTS ACCESSIBILITÉ

### Navigation Clavier
- [ ] **TAB** : Parcourt tous les éléments interactifs
- [ ] **SHIFT+TAB** : Navigation arrière fonctionne
- [ ] **ENTER/SPACE** : Active boutons et liens
- [ ] **ESC** : Ferme menu mobile si ouvert
- [ ] Focus visible sur tous les éléments (outline 2px)
- [ ] Ordre de tabulation logique (header → main → footer)

### Skip Link
- [ ] Appuyer TAB dès chargement page → "Aller au contenu principal" visible
- [ ] ENTER sur skip link → focus vers `<main>`

### Contrastes Couleurs (WCAG AA = 4.5:1 minimum)
- [ ] Texte principal (#1a1a2e) sur fond clair ✓
- [ ] Gris (#737373) sur fond blanc : ratio 4.6:1 ✓
- [ ] Liens bleus (#3366ff) sur fond clair ✓
- [ ] Boutons : contraste suffisant

**Outil** : [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)

### WAVE Accessibility Tool
- [ ] Tester sur [https://wave.webaim.org/](https://wave.webaim.org/)
- [ ] Aucune erreur critique
- [ ] Avertissements justifiés ou corrigés

### Labels & ARIA
- [ ] Tous les inputs ont un `<label>` associé
- [ ] Boutons ont texte ou `aria-label`
- [ ] FAQ : `aria-expanded` change (false/true)
- [ ] Menu mobile : `aria-label` sur toggle button
- [ ] Images décoratives : `alt=""` (vide)

### Screen Reader Test
- [ ] macOS : VoiceOver (CMD+F5)
- [ ] Windows : NVDA (gratuit, [nvaccess.org](https://www.nvaccess.org/))
- [ ] Naviguer page homepage complète au screen reader
- [ ] Contenu annoncé de manière logique
- [ ] Liens et boutons identifiables

---

## 🌐 TESTS CROSS-BROWSER

### Desktop
- [ ] **Chrome** (Windows/Mac) : Affichage correct
- [ ] **Firefox** (Windows/Mac) : Affichage correct
- [ ] **Edge** (Windows) : Affichage correct
- [ ] **Safari** (Mac) : Affichage correct

### Mobile
- [ ] **Safari iOS** (iPhone) : Test sur appareil réel si possible
- [ ] **Chrome Android** : Test sur appareil réel si possible
- [ ] **Simulateurs** : Chrome DevTools mode responsive

### Éléments à Vérifier par Navigateur
- [ ] Polices chargent correctement
- [ ] CSS Grid/Flexbox rendus identiquement
- [ ] Animations CSS fluides
- [ ] Formulaires fonctionnels
- [ ] Menu mobile opérationnel

---

## 🔒 TESTS SÉCURITÉ

### Headers HTTP
- [ ] `X-Content-Type-Options: nosniff` présent
- [ ] `X-Frame-Options: DENY` présent
- [ ] `X-XSS-Protection: 1; mode=block` présent
- [ ] `Referrer-Policy` configuré

**Test** : Ouvrir DevTools > Network > Sélectionner page > Headers response

### HTTPS
- [ ] Site accessible via HTTPS (pas HTTP)
- [ ] Certificat SSL valide (cadenas vert)
- [ ] Aucun contenu mixte (images/scripts HTTP sur page HTTPS)

### Liens Externes
- [ ] Liens vers sites externes ont `rel="noopener"` (si target="_blank")
- [ ] Pas de liens cassés (404)

---

## 📊 TESTS ANALYTICS & TRACKING

### Google Analytics 4 (Après Installation)
- [ ] Tag GA4 installé dans `<head>`
- [ ] Cookie consent banner actif (si tracking activé)
- [ ] Événements tracés :
  - [ ] Pageviews
  - [ ] Soumission formulaire contact
  - [ ] Clics CTA principaux
  - [ ] Téléchargements (si applicable)

### Google Search Console (Après Vérification)
- [ ] Propriété site vérifiée
- [ ] Sitemap.xml soumis
- [ ] Aucune erreur d'indexation
- [ ] Pages principales indexées (vérifier après 2-3 semaines)

---

## 🎨 TESTS VISUELS

### Images
- [ ] Toutes les images chargent (vérifier 404)
- [ ] Placeholders SVG s'affichent si image manquante
- [ ] Images responsive (s'adaptent à la largeur)
- [ ] Pas de déformation d'images
- [ ] Alt text présent et descriptif

### Typographie
- [ ] Polices system chargent correctement
- [ ] Pas de FOUT (Flash of Unstyled Text)
- [ ] Tailles lisibles (min 16px sur mobile)
- [ ] Line-height confortable (1.6-1.8)

### Espacement & Layout
- [ ] Pas de débordement horizontal
- [ ] Marges cohérentes
- [ ] Sections bien espacées
- [ ] Cards alignées dans grids
- [ ] Footer toujours en bas (pas flottant)

### Couleurs & Contrastes
- [ ] Palette cohérente (pas de couleurs hors charte)
- [ ] Hover states visibles
- [ ] Focus states visibles
- [ ] Couleur accent (#3366ff) utilisée avec parcimonie

---

## 📝 TESTS CONTENU

### Orthographe & Grammaire
- [ ] Relire homepage
- [ ] Relire Services
- [ ] Relire Tarifs
- [ ] Relire À propos
- [ ] Relire article blog
- [ ] Vérifier accents français (é, è, à, etc.)

### Cohérence
- [ ] Ton uniforme (tu/vous : choisir un et tenir)
- [ ] Terminologie cohérente (PME partout, pas PME/TPE/petites entreprises)
- [ ] Chiffres cohérents (+150% partout où mentionné)
- [ ] Formats dates cohérents (8 janvier 2025)

### Appels à l'Action
- [ ] CTAs clairs et actionnables ("Demander un audit", pas "En savoir plus")
- [ ] Au moins 1 CTA visible par page sans scroll
- [ ] Formulaire contact accessible depuis toutes les pages

### PLACEHOLDERS (À Remplacer Avant PROD)
- [ ] Témoignages : remplacer "[Nom Client]" par vrais noms
- [ ] Photos clients : remplacer placeholders par vraies photos
- [ ] Stats : confirmer chiffres (+150%, ROI 5:1, etc.)
- [ ] Logos partenaires : ajouter si applicable

---

## 🚀 TESTS DÉPLOIEMENT

### Avant Premier Déploiement
- [ ] Toutes les checklist ci-dessus validées
- [ ] Placeholders critiques remplacés
- [ ] Formulaire connecté à backend
- [ ] GA4 installé

### Après Déploiement Production
- [ ] Site accessible via domaine final
- [ ] Redirection www → non-www (ou inverse) fonctionne
- [ ] Redirection HTTP → HTTPS fonctionne
- [ ] Redirection `/` → `/fr/` fonctionne
- [ ] 404 page personnalisée affichée pour URL inexistante

### Tests Post-Déploiement (24-48h après)
- [ ] Google Analytics enregistre des sessions
- [ ] Google Search Console détecte le site
- [ ] Formulaire envoie bien les emails
- [ ] Aucune erreur JavaScript en console
- [ ] Aucune erreur CSS (éléments cassés)

---

## 📋 VALIDATION FINALE

### Checklist Globale
- [ ] **Tous les tests fonctionnels** : ✓
- [ ] **Tous les tests responsive** : ✓
- [ ] **Performance Lighthouse ≥ 90** : ✓
- [ ] **SEO score 100** : ✓
- [ ] **Accessibilité WCAG AA** : ✓
- [ ] **Cross-browser OK** : ✓
- [ ] **Contenu relu** : ✓
- [ ] **Placeholders remplacés** : ✓
- [ ] **Formulaire connecté** : ✓
- [ ] **Analytics installé** : ✓

### Signature Validation

**Testé par** : ___________________________
**Date** : ___________________________
**Statut** : ☐ Prêt pour PROD   ☐ À corriger

**Corrections nécessaires** :
- _______________________________________________
- _______________________________________________
- _______________________________________________

---

## 📞 SUPPORT

**Questions ou problèmes ?**

1. Consulter `OPTIMISATIONS_RAPPORT.md` (troubleshooting)
2. Vérifier documentation technique dans `/README.md`
3. Contacter l'équipe technique

---

**Version** : 2.0
**Dernière mise à jour** : 9 janvier 2025
**Créé par** : Claude (Anthropic)
