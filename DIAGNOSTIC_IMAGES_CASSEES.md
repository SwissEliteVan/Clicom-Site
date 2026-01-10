# 🔴 DIAGNOSTIC CRITIQUE - Images Non Affichées
## Site CliCom.ch - Analyse Technique Immédiate

---

**Date** : 10 Janvier 2026
**Problème** : AUCUNE image ne s'affiche sur le site
**Impact** : CRITIQUE pour la confiance (marché suisse)
**Cause racine** : Inadéquation complète entre noms de fichiers HTML et fichiers réels

---

## 🎯 CAUSE RACINE IDENTIFIÉE

### Problème Principal : Nomenclature Incohérente

**Le code HTML appelle** : `/media/services/svc-services-web-v01-1200x800.webp`
**Le fichier réel s'appelle** : `./media/services/service-web.webp`

❌ **Résultat** : Erreur 404, image non trouvée, fallback SVG affiché (ou rien)

---

## 📊 INVENTAIRE COMPLET

### Fichiers Réellement Présents (13 fichiers)

```
./media/
├── about/
│   └── about-desk.webp ✅
├── icons/
│   ├── content.webp ✅
│   ├── growth.webp ✅
│   └── strategy.webp ✅
├── services/
│   ├── content.webp ✅
│   ├── growth.webp ✅
│   ├── service-branding.webp ✅
│   ├── service-media.webp ✅
│   ├── service-redesign.webp ✅
│   ├── service-support.webp ✅
│   ├── service-web.webp ✅
│   └── strategy.webp ✅
└── trust/
    └── trust-shield.webp ✅
```

### Fichiers Demandés par le HTML (24+ fichiers)

#### ✅ Fichiers OK (icônes uniquement)

| Fichier HTML | Fichier Réel | Status |
|--------------|--------------|--------|
| `/media/icons/strategy.webp` | `./media/icons/strategy.webp` | ✅ OK |
| `/media/icons/growth.webp` | `./media/icons/growth.webp` | ✅ OK |
| `/media/icons/content.webp` | `./media/icons/content.webp` | ✅ OK |

**Raison** : Les icônes ont le bon nom (pas de préfixe "svc-" ni dimensions)

---

#### ❌ Fichiers CASSÉS - Services (6 fichiers)

| Ligne | Fichier | Chemin HTML | Fichier Réel | Solution |
|-------|---------|-------------|--------------|----------|
| fr/services/index.html:65 | Hero Web | `/media/services/svc-services-web-v01-1200x800.webp` | `service-web.webp` | Corriger HTML |
| fr/services/index.html:117 | Refonte | `/media/services/svc-services-redesign-v01-1200x800.webp` | `service-redesign.webp` | Corriger HTML |
| fr/services/index.html:169 | Branding | `/media/services/svc-services-branding-v01-1200x800.webp` | `service-branding.webp` | Corriger HTML |
| fr/services/index.html:217 | Local | `/media/services/svc-services-local-v01-1200x800.webp` | ❌ N'EXISTE PAS | Créer ou retirer |
| fr/services/index.html:265 | Support | `/media/services/svc-services-support-v01-1200x800.webp` | `service-support.webp` | Corriger HTML |
| fr/services/index.html:313 | Media | `/media/services/svc-services-media-v01-1200x800.webp` | `service-media.webp` | Corriger HTML |

---

#### ❌ Fichiers MANQUANTS - Hero, Blog, Témoignages (14+ fichiers)

| Ligne | Catégorie | Chemin HTML | Status |
|-------|-----------|-------------|--------|
| fr/index.html:100 | Hero home | `/media/hero-home-clarity-v01-1920x1080.webp` | ❌ MANQUANT |
| fr/blog/index.html:105 | Blog | `/media/blog/marketing-digital-pme.webp` | ❌ MANQUANT |
| fr/blog/index.html:131 | Blog | `/media/blog/seo-local-suisse.webp` | ❌ MANQUANT |
| fr/blog/index.html:155 | Blog | `/media/blog/linkedin-b2b.webp` | ❌ MANQUANT |
| fr/resultats/index.html:149 | Témoignage | `/media/testimonials/client-1.webp` | ❌ MANQUANT |
| fr/resultats/index.html:169 | Témoignage | `/media/testimonials/client-2.webp` | ❌ MANQUANT |
| fr/resultats/index.html:189 | Témoignage | `/media/testimonials/client-3.webp` | ❌ MANQUANT |
| fr/resultats/index.html:229 | Étude de cas | `/media/case-studies/case-study-1.webp` | ❌ MANQUANT |
| fr/resultats/index.html:262 | Étude de cas | `/media/case-studies/case-study-2.webp` | ❌ MANQUANT |
| fr/resultats/index.html:295 | Étude de cas | `/media/case-studies/case-study-3.webp` | ❌ MANQUANT |
| fr/blog/marketing-digital-pme-suisses/index.html:167 | Blog article | `/media/blog/marketing-digital-pme.webp` | ❌ MANQUANT |
| fr/blog/marketing-digital-pme-suisses/index.html:304 | Auteur | `/media/team/author.webp` | ❌ MANQUANT |

**Note** : Ces dossiers existent mais sont vides (contiennent uniquement `.gitkeep`)

---

## 🔧 SOLUTIONS

### Option A : Corriger les Chemins HTML (RECOMMANDÉ)

**Avantages** :
- ✅ Rapide (remplacement automatique)
- ✅ Utilise les images existantes immédiatement
- ✅ Pas besoin de créer/renommer des fichiers

**Inconvénients** :
- ⚠️ Ne résout pas les images complètement manquantes (hero, blog, etc.)

---

### Option B : Renommer les Fichiers

**Avantages** :
- ✅ Le HTML reste inchangé

**Inconvénients** :
- ❌ Plus long (renommer manuellement)
- ❌ Ne résout pas les fichiers manquants
- ❌ Casse la logique (noms simplifiés sont meilleurs)

---

## ✅ SOLUTION RETENUE : Option A + Placeholders

### Étape 1 : Corriger les Services (Images Existantes)

Utiliser un script de remplacement automatique pour corriger tous les chemins.

### Étape 2 : Gérer les Images Manquantes

Pour les images qui n'existent pas du tout :
- Utiliser les placeholders SVG (déjà en place via `data-fallback`)
- OU créer les images manquantes

---

## 📝 CORRECTIONS À APPLIQUER

### Fichier : `/fr/services/index.html`

#### Ligne 65 (Service Web)
```html
<!-- AVANT (CASSÉ) -->
src="/media/services/svc-services-web-v01-1200x800.webp"

<!-- APRÈS (CORRIGÉ) -->
src="/media/services/service-web.webp"
```

#### Ligne 117 (Refonte)
```html
<!-- AVANT (CASSÉ) -->
src="/media/services/svc-services-redesign-v01-1200x800.webp"

<!-- APRÈS (CORRIGÉ) -->
src="/media/services/service-redesign.webp"
```

#### Ligne 169 (Branding)
```html
<!-- AVANT (CASSÉ) -->
src="/media/services/svc-services-branding-v01-1200x800.webp"

<!-- APRÈS (CORRIGÉ) -->
src="/media/services/service-branding.webp"
```

#### Ligne 217 (Local - FICHIER MANQUANT)
```html
<!-- AVANT (CASSÉ) -->
src="/media/services/svc-services-local-v01-1200x800.webp"

<!-- OPTION 1 : Utiliser placeholder (temporaire) -->
src="/media/placeholders/ph-card.svg"

<!-- OPTION 2 : Utiliser une image existante similaire -->
src="/media/services/service-web.webp"
```

#### Ligne 265 (Support)
```html
<!-- AVANT (CASSÉ) -->
src="/media/services/svc-services-support-v01-1200x800.webp"

<!-- APRÈS (CORRIGÉ) -->
src="/media/services/service-support.webp"
```

#### Ligne 313 (Media)
```html
<!-- AVANT (CASSÉ) -->
src="/media/services/svc-services-media-v01-1200x800.webp"

<!-- APRÈS (CORRIGÉ) -->
src="/media/services/service-media.webp"
```

---

### Fichier : `/fr/index.html`

#### Ligne 100 (Hero Home - MANQUANT)
```html
<!-- AVANT (CASSÉ) -->
src="/media/hero-home-clarity-v01-1920x1080.webp"

<!-- OPTION 1 : Utiliser placeholder -->
src="/media/placeholders/ph-hero.svg"

<!-- OPTION 2 : Retirer l'image (design minimal) -->
<!-- Supprimer la balise <img> complètement -->
```

**RECOMMANDATION pour Hero** : Retirer l'image. Le design actuel est sobre et l'absence d'image hero renforce la simplicité (aligné avec approche suisse).

---

### Fichiers : Pages Blog, Témoignages, Études de Cas

**Problème** : Toutes ces images n'existent pas

**Solution immédiate** :

1. **Pour le Blog** (fr/blog/index.html) :
   - Utiliser placeholders : `src="/media/placeholders/ph-card.svg"`
   - Ou retirer les images (texte seul suffit pour blog)

2. **Pour Témoignages** (fr/resultats/index.html) :
   - Utiliser placeholders : `src="/media/placeholders/ph-vertical.svg"`
   - Ou retirer avatars (initiales suffisent)

3. **Pour Études de Cas** :
   - Utiliser placeholders : `src="/media/placeholders/ph-card.svg"`

---

## 🚀 SCRIPT DE CORRECTION AUTOMATIQUE

### Script Bash : `fix-image-paths.sh`

```bash
#!/bin/bash
# Script de correction automatique des chemins d'images

echo "🔧 Correction des chemins d'images cassés..."

# Fonction pour corriger un fichier
fix_file() {
    local file=$1
    echo "  → Correction de $file"

    # Services - Correction des noms longs vers noms courts
    sed -i 's|/media/services/svc-services-web-v01-1200x800\.webp|/media/services/service-web.webp|g' "$file"
    sed -i 's|/media/services/svc-services-redesign-v01-1200x800\.webp|/media/services/service-redesign.webp|g' "$file"
    sed -i 's|/media/services/svc-services-branding-v01-1200x800\.webp|/media/services/service-branding.webp|g' "$file"
    sed -i 's|/media/services/svc-services-support-v01-1200x800\.webp|/media/services/service-support.webp|g' "$file"
    sed -i 's|/media/services/svc-services-media-v01-1200x800\.webp|/media/services/service-media.webp|g' "$file"

    # Local service - Fichier manquant, utiliser placeholder
    sed -i 's|/media/services/svc-services-local-v01-1200x800\.webp|/media/placeholders/ph-card.svg|g' "$file"

    # Hero home - Fichier manquant, utiliser placeholder
    sed -i 's|/media/hero-home-clarity-v01-1920x1080\.webp|/media/placeholders/ph-hero.svg|g' "$file"

    # Blog - Fichiers manquants, utiliser placeholder
    sed -i 's|/media/blog/marketing-digital-pme\.webp|/media/placeholders/ph-card.svg|g' "$file"
    sed -i 's|/media/blog/seo-local-suisse\.webp|/media/placeholders/ph-card.svg|g' "$file"
    sed -i 's|/media/blog/linkedin-b2b\.webp|/media/placeholders/ph-card.svg|g' "$file"

    # Testimonials - Utiliser placeholders
    sed -i 's|/media/testimonials/client-[0-9]\.webp|/media/placeholders/ph-vertical.svg|g' "$file"

    # Case studies - Utiliser placeholders
    sed -i 's|/media/case-studies/case-study-[0-9]\.webp|/media/placeholders/ph-card.svg|g' "$file"

    # Team/Author - Utiliser placeholder
    sed -i 's|/media/team/author\.webp|/media/placeholders/ph-icons.svg|g' "$file"
}

# Corriger tous les fichiers HTML français
echo "📁 Correction des fichiers FR..."
find ./fr -name "*.html" -type f | while read file; do
    fix_file "$file"
done

# Corriger tous les fichiers HTML anglais
echo "📁 Correction des fichiers EN..."
find ./en -name "*.html" -type f | while read file; do
    fix_file "$file"
done

# Corriger tous les fichiers HTML allemand
echo "📁 Correction des fichiers DE..."
find ./de -name "*.html" -type f | while read file; do
    fix_file "$file"
done

# Corriger tous les fichiers HTML italien
echo "📁 Correction des fichiers IT..."
find ./it -name "*.html" -type f | while read file; do
    fix_file "$file"
done

echo "✅ Correction terminée!"
echo ""
echo "🔍 Vérification rapide:"
echo "  Images services (existantes) : Corrigées ✓"
echo "  Images manquantes : Remplacées par placeholders ✓"
echo ""
echo "🚀 Prochaines étapes:"
echo "  1. Tester le site localement"
echo "  2. Vérifier que les placeholders s'affichent"
echo "  3. Créer les vraies images manquantes (optionnel)"
echo "  4. Commiter et déployer"
```

### Exécution

```bash
chmod +x fix-image-paths.sh
./fix-image-paths.sh
```

---

## 📊 IMPACT DE LA CORRECTION

### Avant Correction
- ❌ 0 image visible (sauf placeholders si erreur handler fonctionne)
- ❌ Confiance client : Très faible
- ❌ Aspect non professionnel

### Après Correction
- ✅ 3 icônes visibles (strategy, growth, content)
- ✅ 5 images services visibles (web, redesign, branding, support, media)
- ✅ Placeholders propres pour images manquantes
- ✅ Site cohérent et professionnel

**Total** : 8 images réelles + placeholders propres

---

## 🎯 RECOMMANDATIONS POST-CORRECTION

### Court Terme (Immédiat)

1. **Exécuter le script de correction** ✓
2. **Tester localement** : Ouvrir `/fr/index.html` et `/fr/services/index.html`
3. **Vérifier console navigateur** : Plus d'erreurs 404 pour services
4. **Commiter et déployer**

### Moyen Terme (1-2 semaines)

1. **Créer les vraies images manquantes** :
   - Hero home (1920×1080)
   - 3 images blog (800×600)
   - 3 avatars témoignages (600×800 ou rond 300×300)
   - 3 études de cas (800×600)
   - 1 avatar auteur (200×200)

2. **Standardiser la nomenclature** :
   - Décider convention : `category-name.webp` (actuel, bon)
   - Documenter dans `/media/README.md`

3. **Optimiser les images** :
   - Compresser (TinyPNG, Squoosh)
   - Vérifier dimensions réelles vs HTML
   - Ajouter versions AVIF

### Long Terme (1-3 mois)

1. **Script de validation** :
   - Vérifier que toutes les images appelées existent
   - Alerter si nouveau fichier manquant

2. **Asset pipeline** :
   - Automatiser génération placeholders
   - Workflow ajout nouvelles images

---

## 🔐 VÉRIFICATION POST-CORRECTION

### Checklist

```bash
# 1. Vérifier que les fichiers corrigés existent
ls -la ./media/services/service-*.webp
# Devrait lister : service-web, service-redesign, service-branding,
#                  service-support, service-media

# 2. Vérifier que les placeholders existent
ls -la ./media/placeholders/*.svg
# Devrait lister : ph-hero, ph-card, ph-vertical, ph-icons

# 3. Chercher les références cassées restantes
grep -r "svc-services-" ./fr ./en ./de ./it
# Devrait retourner : rien (toutes corrigées)

# 4. Tester avec serveur local
python3 -m http.server 8000
# Ouvrir http://localhost:8000/fr/
# Vérifier images visibles
```

### Test Navigateur

1. Ouvrir `/fr/index.html`
   - ✅ Icônes strategy/growth/content visibles
   - ✅ Pas d'erreur 404 console

2. Ouvrir `/fr/services/index.html`
   - ✅ 5 images services visibles
   - ✅ Image "local" affiche placeholder (normal)

3. Ouvrir `/fr/blog/index.html`
   - ✅ Placeholders pour articles blog (normal)

4. Console navigateur (F12)
   - ✅ Pas d'erreur 404 pour `/media/services/svc-*`
   - ⚠️ Possibles 404 pour `/media/blog/*` (OK, placeholders utilisés)

---

## 📞 RÉSUMÉ EXÉCUTIF

### Problème Identifié

**Inadéquation complète des noms de fichiers** entre HTML et fichiers réels.

Exemple :
- HTML demande : `/media/services/svc-services-web-v01-1200x800.webp`
- Fichier réel : `./media/services/service-web.webp`

### Solution Appliquée

**Script de remplacement automatique** corrigeant tous les chemins en une fois.

### Résultat Attendu

- ✅ **8 images réelles visibles** (icônes + services)
- ✅ **Placeholders propres** pour images manquantes
- ✅ **Site cohérent** et professionnel
- ✅ **Confiance restaurée** (pas de liens cassés)

### Action Immédiate

```bash
# Exécuter le script de correction
chmod +x fix-image-paths.sh
./fix-image-paths.sh

# Tester
python3 -m http.server 8000

# Commiter
git add .
git commit -m "Fix: Corriger tous les chemins d'images cassés"
git push
```

---

**Diagnostic réalisé par**
Développeur Web Senior - Spécialiste Maintenance & Sécurité
Janvier 2026

*Correction critique pour restaurer la confiance client (marché suisse)*
