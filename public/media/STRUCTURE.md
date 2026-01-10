# Structure des assets media - CLICOM

Ce document décrit la structure des dossiers d'assets pour le site multilingue CLICOM.

## 📁 Structure des dossiers

```
/public/media/
├── hero/                     # Images hero/bannières principales
│   ├── hero-main.webp       # Hero EN/DE/IT (1920x1080)
│   └── hero-home-clarity-v01-1920x1080.webp  # Hero FR
│
├── services/                 # Images des services
│   ├── strategy.webp        # Icône stratégie (✓ existant)
│   ├── growth.webp          # Icône croissance (✓ existant)
│   ├── content.webp         # Icône contenu (✓ existant)
│   ├── svc-services-web-v01-1200x800.webp         # Service création web (FR)
│   ├── svc-services-redesign-v01-1200x800.webp    # Service refonte (FR)
│   ├── svc-services-branding-v01-1200x800.webp    # Service branding (FR)
│   ├── svc-services-local-v01-1200x800.webp       # Service SEO local (FR)
│   ├── svc-services-support-v01-1200x800.webp     # Service support (FR)
│   └── svc-services-media-v01-1200x800.webp       # Service médias (FR)
│
├── blog/                     # Images articles de blog
│   ├── marketing-digital-pme.webp
│   ├── seo-local-suisse.webp
│   └── linkedin-b2b.webp
│
├── testimonials/             # Photos clients/témoignages
│   ├── client-1.webp
│   ├── client-2.webp
│   └── client-3.webp
│
├── case-studies/             # Images études de cas
│   ├── case-study-1.webp
│   ├── case-study-2.webp
│   └── case-study-3.webp
│
├── team/                     # Photos équipe
│   └── author.webp
│
├── icons/                    # Icônes et petites images
│   ├── strategy.webp        # ✓ Existant
│   ├── growth.webp          # ✓ Existant
│   └── content.webp         # ✓ Existant
│
└── placeholders/             # Placeholders SVG (fallback)
    ├── ph-hero.svg          # ✓ Existant
    ├── ph-card.svg          # ✓ Existant
    ├── ph-vertical.svg      # ✓ Existant
    ├── ph-bg.svg            # ✓ Existant
    └── ph-icons.svg         # ✓ Existant
```

## 🎯 Convention de nommage

### Images héros
- Format : `hero-{description}-{lang}.webp`
- Dimensions : 1920x1080px (16:9)
- Poids : < 200KB (optimisé)

### Images services
- Format : `svc-services-{nom}-v{version}-{width}x{height}.webp`
- Dimensions : 1200x800px (3:2)
- Poids : < 150KB

### Images blog
- Format : `{slug-article}.webp`
- Dimensions : 1200x630px (OG standard)
- Poids : < 150KB

### Icônes
- Format : `{nom}.webp` ou `.svg`
- Dimensions : 200x200px ou 64x64px selon usage
- Poids : < 20KB

## 🔄 Système de fallback

Toutes les images du site utilisent un système de fallback automatique :

```html
<img
  src="/media/hero/hero-main.webp"
  data-fallback="/media/placeholders/ph-hero.svg"
  onerror="handleFallback(this)"
  alt="Description"
  loading="lazy">
```

Si l'image principale n'existe pas :
1. Le navigateur tente de charger `/media/hero/hero-main.webp`
2. En cas d'erreur, le JavaScript `handleFallback()` charge `/media/placeholders/ph-hero.svg`
3. Le site reste fonctionnel même sans images

## 📝 Checklist avant d'ajouter une image

- [ ] Image optimisée (WebP format)
- [ ] Poids respecté (< 200KB pour hero, < 150KB pour autres)
- [ ] Dimensions correctes
- [ ] Nom de fichier en minuscules avec tirets
- [ ] Placée dans le bon dossier
- [ ] Attribut `alt` descriptif dans le HTML
- [ ] Attribut `loading="lazy"` (sauf hero)

## 🚀 Déploiement

**Important :** Sur Vercel et Hostinger, le dossier `/public` est automatiquement servi à la racine.

- Fichier : `/public/media/hero/hero-main.webp`
- URL finale : `https://clicom.ch/media/hero/hero-main.webp`

**Ne pas utiliser `/public/` dans les chemins HTML !**

```html
<!-- ❌ INCORRECT -->
<img src="/public/media/hero/hero-main.webp">

<!-- ✅ CORRECT -->
<img src="/media/hero/hero-main.webp">
```

## 🔍 Images manquantes actuellement

### Priorité P1 (Images hero)
- [ ] `/public/media/hero/hero-main.webp` (EN/DE/IT)
- [ ] `/public/media/hero/hero-home-clarity-v01-1920x1080.webp` (FR)

### Priorité P2 (Images services FR)
- [ ] `/public/media/services/svc-services-web-v01-1200x800.webp`
- [ ] `/public/media/services/svc-services-redesign-v01-1200x800.webp`
- [ ] `/public/media/services/svc-services-branding-v01-1200x800.webp`
- [ ] `/public/media/services/svc-services-local-v01-1200x800.webp`
- [ ] `/public/media/services/svc-services-support-v01-1200x800.webp`
- [ ] `/public/media/services/svc-services-media-v01-1200x800.webp`

### Priorité P3 (Images blog et témoignages)
- [ ] Images blog (3 fichiers)
- [ ] Images testimonials (3 fichiers)
- [ ] Images case-studies (3 fichiers)
- [ ] Images team (1 fichier)

## 📊 Optimisation des images

### Outils recommandés
- **Squoosh** (https://squoosh.app) - Compression WebP en ligne
- **ImageOptim** (Mac) - Optimisation automatique
- **TinyPNG** (https://tinypng.com) - Compression PNG/JPEG

### Paramètres WebP recommandés
- Qualité : 80-85%
- Effort : 6 (bon équilibre vitesse/qualité)
- Métadonnées : supprimées

---

**Dernière mise à jour :** 2026-01-10
**Version :** 1.0
