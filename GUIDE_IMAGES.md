# 📸 GUIDE IMAGES — SPÉCIFICATIONS COMPLÈTES

**Date** : 9 janvier 2025
**Version** : 1.0
**Objectif** : Fournir les spécifications exactes pour créer/commander les 15 images nécessaires au site CliCom

---

## 🎯 RÉSUMÉ EXÉCUTIF

### Images Nécessaires : 15 au total

| Priorité | Nombre | Type | Budget estimé |
|----------|--------|------|---------------|
| **P1 (Bloquant)** | 4 | Hero + Icons services | CHF 200-400 |
| **P2 (Important)** | 6 | Images services + About | CHF 300-600 |
| **P3 (Souhaitable)** | 5 | Blog + Témoignages | CHF 200-400 |
| **TOTAL** | **15** | — | **CHF 700-1400** |

### Délais Recommandés

- **P1** : À créer **AVANT** mise en production (bloquant)
- **P2** : Dans les 2 semaines suivant le lancement
- **P3** : Dans le mois suivant le lancement

---

## 📐 SPÉCIFICATIONS TECHNIQUES GÉNÉRALES

### Formats & Poids

| Format | Usage | Poids max | Qualité |
|--------|-------|-----------|---------|
| **WebP** | Prioritaire (moderne) | 150 KB | 85% |
| **JPEG** | Fallback (compatibilité) | 200 KB | 90% |
| **PNG** | Logos / Transparence | 100 KB | — |
| **SVG** | Icônes / Illustrations | 20 KB | Vectoriel |

**IMPORTANT** : Toutes les images doivent être optimisées avec TinyPNG, Squoosh ou ImageOptim avant intégration.

### Responsive

Chaque image doit être exportée en **3 tailles** :

| Taille | Suffix | Usage | Viewport |
|--------|--------|-------|----------|
| Desktop | `@2x` | Écrans HD | > 1280px |
| Tablet | `@1x` | Normal | 768-1279px |
| Mobile | `-mobile` | Petits écrans | < 767px |

**Exemple** :
- `hero-main@2x.webp` (1920×600)
- `hero-main@1x.webp` (1280×400)
- `hero-main-mobile.webp` (768×500)

---

## 🎨 STYLE VISUEL & DIRECTION ARTISTIQUE

### Palette Couleurs

Basée sur le design system du site :

```
--color-primary:   #1a1a2e  (Bleu foncé presque noir)
--color-secondary: #16213e  (Bleu nuit)
--color-accent:    #3366ff  (Bleu vif électrique)
--color-gray:      #737373  (Gris moyen)
--color-white:     #f8f9fa  (Blanc cassé)
```

### Mood & Ambiance

- **Style** : Moderne, Tech Abstract, B2B professionnel
- **Ton** : Sérieux mais accessible, premium sans être froid
- **Inspiration** : Stripe, Linear, Notion (esthétique SaaS moderne)
- **Éviter** : Stock photos génériques avec modèles souriants, clipart, 3D cartoon

### Éléments Visuels Recommandés

✅ **À favoriser** :
- Formes géométriques abstraites
- Dégradés subtils bleu/violet
- Grilles et lignes de connexion
- Graphs/charts stylisés
- Interfaces UI mockups
- Dashboards analytics

❌ **À éviter** :
- Photos de businessmen en costume avec poignée de main
- Icônes plates colorées (flat design 2015)
- Effets 3D lourds
- Textures grunge/vintage
- Photos de stock trop posées

---

## 📋 LISTE DÉTAILLÉE DES IMAGES

---

## PRIORITÉ 1 — BLOQUANT (4 images)

### 1.1 Hero Homepage

**Fichier** : `hero-main@2x.webp`
**Dimensions** : 1920 × 600 px (ratio 3.2:1)
**Poids max** : 150 KB (WebP)
**Emplacement** : `/public/media/hero/`
**Usage** : Image principale de la section hero homepage

**Description visuelle** :
- Fond abstrait tech avec formes géométriques
- Dégradé bleu foncé (#1a1a2e) vers bleu accent (#3366ff)
- Lignes de connexion ou réseau stylisé
- Espace vide à gauche pour texte H1 (60% de la largeur)
- Effet de profondeur subtil (blur progressif ou parallax ready)

**Alt text recommandé** :
`"Visualisation abstraite de croissance marketing digital pour PME suisses"`

**Références visuelles** :
- Stripe.com homepage hero
- Linear.app gradient backgrounds
- Vercel.com abstract shapes

**Versions responsive** :
- Desktop : 1920×600
- Tablet : 1280×400
- Mobile : 768×500 (ratio 1.5:1, composition recentrée)

---

### 1.2 Icône Service — Stratégie Digitale

**Fichier** : `icon-strategy.svg`
**Dimensions** : 200 × 200 px (viewBox)
**Poids max** : 15 KB
**Emplacement** : `/public/media/icons/services/`
**Usage** : Card service "Stratégie Digitale" homepage + page services

**Description visuelle** :
- Icône ligne (stroke) style minimaliste
- Représentation : Cible avec flèche, roadmap, ou graphique de croissance
- Couleur : Mono (--color-accent #3366ff), 2px stroke
- Pas de remplissage (transparent background)
- Style cohérent avec icon-growth et icon-content

**Alt text recommandé** :
`"Icône représentant une stratégie digitale structurée"`

**Format SVG optimisé** :
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <!-- Paths here -->
</svg>
```

---

### 1.3 Icône Service — Growth Marketing

**Fichier** : `icon-growth.svg`
**Dimensions** : 200 × 200 px (viewBox)
**Poids max** : 15 KB
**Emplacement** : `/public/media/icons/services/`
**Usage** : Card service "Growth Marketing"

**Description visuelle** :
- Représentation : Fusée en décollage, courbe exponentielle, ou seedling avec feuilles
- Style identique à icon-strategy.svg (cohérence)
- Couleur : Mono #3366ff, 2px stroke
- Dynamique : suggère croissance et vitesse

**Alt text recommandé** :
`"Icône symbolisant la croissance accélérée"`

---

### 1.4 Icône Service — Content Marketing

**Fichier** : `icon-content.svg`
**Dimensions** : 200 × 200 px (viewBox)
**Poids max** : 15 KB
**Emplacement** : `/public/media/icons/services/`
**Usage** : Card service "Content Marketing"

**Description visuelle** :
- Représentation : Document avec crayon, bulle de dialogue avec texte, ou megaphone stylisé
- Style identique aux 2 autres icônes
- Couleur : Mono #3366ff, 2px stroke
- Suggère communication et création

**Alt text recommandé** :
`"Icône représentant la création de contenu marketing"`

---

## PRIORITÉ 2 — IMPORTANT (6 images)

### 2.1 Image Service — Stratégie Digitale

**Fichier** : `service-strategy@2x.webp`
**Dimensions** : 800 × 600 px (ratio 4:3)
**Poids max** : 120 KB
**Emplacement** : `/public/media/services/`
**Usage** : Page `/fr/services/` section détail stratégie

**Description visuelle** :
- Dashboard analytics stylisé avec graphs (line chart, bar chart)
- Interface UI moderne type SaaS
- Couleurs : Bleu foncé + accent, fond clair
- Lisible mais pas trop détaillé (effet d'ensemble)

**Alt text recommandé** :
`"Dashboard d'analyse de stratégie marketing avec métriques de performance"`

**Versions responsive** :
- Desktop : 800×600
- Mobile : 600×450

---

### 2.2 Image Service — Growth Marketing

**Fichier** : `service-growth@2x.webp`
**Dimensions** : 800 × 600 px
**Poids max** : 120 KB
**Emplacement** : `/public/media/services/`
**Usage** : Page services section growth

**Description visuelle** :
- Courbe de croissance exponentielle stylisée
- Annotations type "conversion rate +150%"
- Funnel de conversion ou A/B testing mockup
- Dynamique, suggère mouvement ascendant

**Alt text recommandé** :
`"Graphique de croissance montrant l'augmentation des conversions"`

---

### 2.3 Image Service — Content Marketing

**Fichier** : `service-content@2x.webp`
**Dimensions** : 800 × 600 px
**Poids max** : 120 KB
**Emplacement** : `/public/media/services/`
**Usage** : Page services section content

**Description visuelle** :
- Mockup de blog post ou article LinkedIn stylisé
- Éléments : titre, paragraphes, image, CTA
- Calendar éditorial ou planning de publication en arrière-plan
- Organisé, structuré

**Alt text recommandé** :
`"Aperçu d'une stratégie de contenu marketing structurée"`

---

### 2.4 Image À Propos — Équipe ou Bureau

**Fichier** : `about-team@2x.webp`
**Dimensions** : 1200 × 800 px (ratio 3:2)
**Poids max** : 180 KB
**Emplacement** : `/public/media/about/`
**Usage** : Page `/fr/a-propos/` section présentation

**Description visuelle** :

**OPTION A** (Photo réelle - IDÉAL) :
- Photo professionnelle de l'équipe CliCom
- Environnement : bureau moderne, lumineux, Suisse
- Ton naturel mais professionnel (pas trop posé)
- Diversité si applicable

**OPTION B** (Abstract - si pas de photo équipe) :
- Espace de travail moderne minimaliste
- Ordinateur portable avec interfaces marketing
- Plantes, lumière naturelle, design épuré
- Sans personne (focus sur l'environnement de travail)

**Alt text recommandé** :
Option A : `"L'équipe CliCom dans ses bureaux à [Ville]"`
Option B : `"Environnement de travail moderne de l'agence CliCom"`

---

### 2.5 Image Méthode 30-60-90 — Timeline

**Fichier** : `method-timeline@2x.webp`
**Dimensions** : 1400 × 600 px (panoramique)
**Poids max** : 150 KB
**Emplacement** : `/public/media/method/`
**Usage** : Page `/fr/methode-30-60-90/` illustration du processus

**Description visuelle** :
- Timeline horizontale avec 3 étapes
- Jalons : "30 jours", "60 jours", "90 jours"
- Icônes pour chaque phase (ex: 🎯 → 📈 → 🚀)
- Courbe de progression superposée
- Clean, didactique

**Alt text recommandé** :
`"Timeline de la méthode 30-60-90 jours de CliCom avec jalons de croissance"`

---

### 2.6 Image Contact — Map Suisse

**Fichier** : `contact-map@2x.webp`
**Dimensions** : 800 × 500 px
**Poids max** : 100 KB
**Emplacement** : `/public/media/contact/`
**Usage** : Page `/fr/contact/` (optionnel, améliore UX)

**Description visuelle** :
- Carte stylisée de la Suisse romande
- Pins sur Lausanne, Genève, Zürich (zones de service)
- Style épuré (pas Google Maps screenshot)
- Couleurs du brand (#3366ff pour pins)

**Alt text recommandé** :
`"Carte de couverture CliCom en Suisse : Lausanne, Genève, Zürich"`

---

## PRIORITÉ 3 — SOUHAITABLE (5 images)

### 3.1 Photos Témoignages Clients (3 images)

**Fichiers** :
- `testimonial-client-1.webp`
- `testimonial-client-2.webp`
- `testimonial-client-3.webp`

**Dimensions** : 200 × 200 px (carré, avatar)
**Poids max** : 30 KB chacune
**Emplacement** : `/public/media/testimonials/`
**Usage** : Page `/fr/resultats/` testimonials cards

**Description** :
- Photos professionnelles des clients témoins (avec autorisation écrite)
- Fond neutre ou flou
- Visage cadré, regard caméra, sourire naturel
- Format portrait professionnel LinkedIn-style

**IMPORTANT** :
- Obtenir **autorisation écrite** avant publication (RGPD/nLPD)
- Formulaire de consentement d'utilisation d'image
- Si pas de photos disponibles : utiliser avatars abstraits ou initiales

**Alt text recommandé** :
`"[Nom Prénom], [Fonction] chez [Entreprise]"`
Exemple : `"Marie Dupont, CEO chez SwissTech SA"`

---

### 3.2 Image Blog Article — Marketing Digital

**Fichier** : `blog-marketing-digital@2x.webp`
**Dimensions** : 1200 × 630 px (ratio Open Graph 1.91:1)
**Poids max** : 150 KB
**Emplacement** : `/public/media/blog/`
**Usage** : Article `/fr/blog/marketing-digital-pme-suisses/`

**Description visuelle** :
- Illustration abstraite du marketing digital
- Éléments : icônes réseaux sociaux, SEO, analytics, ads
- Composition équilibrée, lisible en miniature (partage social)
- Doit fonctionner en 1200×630 (Facebook/LinkedIn preview)

**Alt text recommandé** :
`"Illustration des stratégies marketing digital pour PME suisses"`

---

### 3.3 Image Case Study — PME Success Story

**Fichier** : `case-study-placeholder@2x.webp`
**Dimensions** : 600 × 400 px (ratio 3:2)
**Poids max** : 80 KB
**Emplacement** : `/public/media/case-studies/`
**Usage** : Page `/fr/resultats/` case study cards

**Description visuelle** :
- Mockup de résultats concrets (dashboard avec metrics)
- Ou screenshot anonymisé d'interface client
- Annotations : "+150% leads", "ROI 5:1"
- Focus sur les chiffres, pas l'identité du client (anonyme pour l'instant)

**Alt text recommandé** :
`"Résultats d'une campagne marketing pour PME suisse : +150% de leads"`

---

## 🗂️ STRUCTURE RÉPERTOIRES

Créer l'arborescence suivante dans `/public/media/` :

```
/public/media/
├── hero/
│   ├── hero-main@2x.webp
│   ├── hero-main@1x.webp
│   └── hero-main-mobile.webp
├── icons/
│   └── services/
│       ├── icon-strategy.svg
│       ├── icon-growth.svg
│       └── icon-content.svg
├── services/
│   ├── service-strategy@2x.webp
│   ├── service-strategy@1x.webp
│   ├── service-growth@2x.webp
│   ├── service-growth@1x.webp
│   ├── service-content@2x.webp
│   └── service-content@1x.webp
├── about/
│   ├── about-team@2x.webp
│   └── about-team@1x.webp
├── method/
│   ├── method-timeline@2x.webp
│   └── method-timeline@1x.webp
├── contact/
│   ├── contact-map@2x.webp
│   └── contact-map@1x.webp
├── testimonials/
│   ├── testimonial-client-1.webp
│   ├── testimonial-client-2.webp
│   └── testimonial-client-3.webp
├── blog/
│   └── blog-marketing-digital@2x.webp
├── case-studies/
│   └── case-study-placeholder@2x.webp
└── placeholders/
    ├── ph-hero.svg (fallback)
    ├── ph-icons.svg (fallback)
    └── ph-image.svg (fallback)
```

**Note** : Les fichiers dans `/placeholders/` existent déjà et servent de fallback en cas d'image manquante.

---

## 💰 BUDGET & SOURCING

### Option 1 : Stock Photos (CHF 200-400)

**Avantages** :
- Rapide (immédiat)
- Qualité professionnelle garantie
- Large choix

**Sources recommandées** :
- **Unsplash** (gratuit, mais limité pour usage commercial intensif)
- **Adobe Stock** (~CHF 30/image avec abonnement)
- **iStock by Getty** (~CHF 40-60/image)
- **Envato Elements** (CHF 16.50/mois, illimité)

**Inconvénients** :
- Générique (pas de personnalisation)
- Risque d'utilisation par concurrents

---

### Option 2 : Illustrations Custom (CHF 600-1200)

**Avantages** :
- Unique et sur-mesure
- Cohérence parfaite avec brand
- Propriété intellectuelle complète

**Sources recommandées** :
- **Fiverr** : Illustrateurs freelance (CHF 50-150/illustration)
- **99designs** : Concours design (CHF 300-600 pour package)
- **Dribbble Hiring** : Designers professionnels (CHF 80-150/h)

**Livrables à demander** :
- Fichiers sources (AI, Figma, SVG)
- Exports optimisés (WebP, PNG, SVG)
- Droits d'utilisation commerciale illimités

---

### Option 3 : Photoshoot Professionnel (CHF 1500-3000)

**Recommandé pour** :
- Image "À propos" équipe (priorité 2.4)
- Photos témoignages clients (priorité 3.1)

**Budget estimé** :
- Demi-journée photographe Lausanne/Genève : CHF 800-1200
- Retouche/post-production : CHF 200-400
- Total : CHF 1000-1600

**Photographes Suisse romande** (à contacter) :
- [Liste à compléter selon localisation]

---

### Option 4 : Génération AI (CHF 0-100)

**Outils** :
- Midjourney (CHF 10/mois, 200 générations)
- DALL-E 3 via ChatGPT Plus (CHF 20/mois)
- Stable Diffusion (gratuit, mais technique)

**Avantages** :
- Très économique
- Totalement personnalisable
- Rapide à itérer

**Inconvénients** :
- Qualité variable
- Peut manquer de "naturel"
- Droits d'utilisation à vérifier selon plateforme

**Recommandation** :
- Utiliser AI pour images abstraites/hero/icons
- Éviter AI pour photos de personnes (uncanny valley)

---

### 💡 STRATÉGIE RECOMMANDÉE (Budget Optimal : CHF 700)

| Priorité | Type | Méthode | Coût |
|----------|------|---------|------|
| P1 Hero | Abstract tech | Midjourney AI | CHF 10 |
| P1 Icons (×3) | SVG minimaliste | Figma custom | CHF 0 (interne) |
| P2 Services (×3) | Mockups UI | Figma mockups + Unsplash | CHF 0 |
| P2 About team | Photo | Stock Unsplash ou AI | CHF 0-50 |
| P2 Timeline | Infographic | Figma custom | CHF 0 (interne) |
| P2 Contact map | Map stylisée | Figma + Mapbox API | CHF 0 |
| P3 Testimonials (×3) | Photos clients | Demande aux clients | CHF 0 |
| P3 Blog | Abstract | Midjourney AI | inclus |
| P3 Case study | Dashboard mockup | Figma mockup | CHF 0 |
| **TOTAL** | | | **CHF 10-60** |

**Plan d'action** :
1. Acheter Midjourney Standard (CHF 10/mois, annuler après 1 mois)
2. Générer hero + blog + abstract images via AI
3. Créer icons + timeline + mockups dans Figma (gratuit)
4. Utiliser Unsplash Pro pour images services (gratuit avec attribution)
5. Demander photos aux premiers clients satisfaits (testimonials)

---

## ✅ CHECKLIST IMPLÉMENTATION

### Phase 1 : Création (1-2 jours)

- [ ] Créer tous les répertoires dans `/public/media/`
- [ ] Générer hero-main avec Midjourney (prompts ci-dessous)
- [ ] Créer les 3 icônes SVG services dans Figma
- [ ] Créer mockups services (strategy, growth, content)
- [ ] Créer timeline méthode 30-60-90
- [ ] Trouver/créer image about
- [ ] Créer/sourcer map contact
- [ ] Obtenir photos clients pour testimonials (si disponibles)
- [ ] Générer/sourcer images blog
- [ ] Créer mockup case study

### Phase 2 : Optimisation (1 jour)

- [ ] Exporter toutes les images en WebP (TinyPNG)
- [ ] Créer versions responsive (@2x, @1x, -mobile)
- [ ] Vérifier poids (respecter limites)
- [ ] Tester rendu sur différents écrans
- [ ] Valider contrastes et lisibilité

### Phase 3 : Intégration (1 jour)

- [ ] Uploader images vers `/public/media/`
- [ ] Remplacer tous les placeholders dans HTML
- [ ] Ajouter attributs `alt` descriptifs
- [ ] Ajouter `loading="lazy"` sur images below-the-fold
- [ ] Tester fallbacks (supprimer image → vérifier SVG placeholder)
- [ ] Valider avec Lighthouse (Performance score)

### Phase 4 : Validation (1 jour)

- [ ] Test visuel desktop (Chrome, Firefox, Safari)
- [ ] Test visuel mobile (iPhone, Android)
- [ ] Vérifier temps de chargement (< 2s)
- [ ] Valider accessibilité (alt texts présents)
- [ ] Tester en connexion lente (throttling 3G)

---

## 🎨 PROMPTS MIDJOURNEY

### Hero Homepage

```
abstract tech background, geometric shapes, network connections, gradient from dark navy #1a1a2e to electric blue #3366ff, modern SaaS aesthetic, depth of field, minimalist, professional, 1920x600px, --ar 16:5 --style raw --v 6
```

**Variations à tester** :
- Ajouter `floating UI elements` pour effet interface
- Ajouter `graph lines ascending` pour suggérer croissance
- Tester `--stylize 250` pour plus de créativité

### Services Images

```
modern marketing dashboard UI, clean interface, analytics graphs, line charts, conversion metrics, navy blue #1a1a2e and electric blue #3366ff color scheme, professional SaaS design, 800x600px, --ar 4:3 --style raw --v 6
```

### Blog Header

```
digital marketing concept illustration, abstract icons for SEO, social media, analytics, floating in space, modern minimalist style, navy blue and electric blue gradient background, professional, 1200x630px, --ar 1.91:1 --v 6
```

---

## 📚 RESSOURCES UTILES

### Outils Optimisation

- **TinyPNG** : https://tinypng.com/ (compression WebP/PNG)
- **Squoosh** : https://squoosh.app/ (conversion formats, par Google)
- **SVGOMG** : https://jakearchibald.github.io/svgomg/ (optimisation SVG)
- **ImageOptim** : https://imageoptim.com/ (app Mac, gratuit)

### Outils Création

- **Figma** : https://figma.com (design UI, mockups, icons)
- **Photopea** : https://photopea.com (Photoshop gratuit en ligne)
- **Canva Pro** : https://canva.com (templates, facile à utiliser)
- **Remove.bg** : https://remove.bg (supprimer fonds photos)

### Sources Stock

- **Unsplash** : https://unsplash.com (gratuit, haute qualité)
- **Pexels** : https://pexels.com (gratuit, vidéos aussi)
- **Adobe Stock** : https://stock.adobe.com (payant, premium)
- **Envato Elements** : https://elements.envato.com (abonnement)

### Génération AI

- **Midjourney** : https://midjourney.com (best quality, CHF 10/mois)
- **DALL-E 3** : via ChatGPT Plus (CHF 20/mois)
- **Leonardo.ai** : https://leonardo.ai (150 crédits gratuits/jour)

### Validation

- **Google PageSpeed** : https://pagespeed.web.dev/
- **GTmetrix** : https://gtmetrix.com/
- **WebP Converter** : https://cloudconvert.com/webp-converter

---

## 🚨 POINTS D'ATTENTION

### Droits d'Utilisation

- ✅ Toujours vérifier licence (commercial use allowed)
- ✅ Conserver preuve de licence (email, facture, screenshot)
- ✅ Pour photos clients : formulaire de consentement signé
- ❌ Ne JAMAIS utiliser images Google Images sans vérifier licence
- ❌ Ne JAMAIS copier images de sites concurrents

### Accessibilité

- ✅ Attribut `alt` descriptif sur TOUTES les images
- ✅ Alt vide (`alt=""`) sur images décoratives uniquement
- ✅ Contraste suffisant si texte sur image (ratio 4.5:1)
- ✅ Images vectorielles (SVG) avec `role="img"` et `aria-label`

### Performance

- ✅ Format WebP prioritaire (95% de support navigateurs)
- ✅ Lazy loading sur images below-the-fold
- ✅ Dimensions exactes (éviter resize CSS)
- ✅ Compression agressive (qualité 80-85% suffit)
- ❌ Éviter images > 200 KB
- ❌ Éviter PNG pour photos (préférer WebP/JPEG)

### SEO

- ✅ Noms de fichiers descriptifs (`hero-marketing-digital.webp`)
- ✅ Éviter noms génériques (`image1.jpg`, `photo.png`)
- ✅ Attribut `alt` avec mots-clés pertinents (pas de keyword stuffing)
- ✅ Dimensions déclarées dans HTML (`width` et `height` attributes)

---

## 📞 SUPPORT

**Questions sur ce guide ?**

1. Consulter `OPTIMISATIONS_RAPPORT.md` (contexte global)
2. Consulter `CHECKLIST_QA_FINALE.md` (tests validation images)
3. Vérifier `/public/media/placeholders/` (exemples SVG fallback)

---

**Version** : 1.0
**Dernière mise à jour** : 9 janvier 2025
**Créé par** : Claude (Anthropic)
**Prochaine étape** : Créer `GUIDE_SETUP_TECHNIQUE.md` pour configuration environnement
