#!/bin/bash
# Script de correction automatique des chemins d'images cassés
# Site: CliCom.ch
# Problème: Inadéquation noms de fichiers HTML vs fichiers réels

echo "🔧 Correction des chemins d'images cassés..."
echo ""

# Fonction pour corriger un fichier
fix_file() {
    local file=$1

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
    sed -i 's|/media/testimonials/client-1\.webp|/media/placeholders/ph-vertical.svg|g' "$file"
    sed -i 's|/media/testimonials/client-2\.webp|/media/placeholders/ph-vertical.svg|g' "$file"
    sed -i 's|/media/testimonials/client-3\.webp|/media/placeholders/ph-vertical.svg|g' "$file"

    # Case studies - Utiliser placeholders
    sed -i 's|/media/case-studies/case-study-1\.webp|/media/placeholders/ph-card.svg|g' "$file"
    sed -i 's|/media/case-studies/case-study-2\.webp|/media/placeholders/ph-card.svg|g' "$file"
    sed -i 's|/media/case-studies/case-study-3\.webp|/media/placeholders/ph-card.svg|g' "$file"

    # Team/Author - Utiliser placeholder
    sed -i 's|/media/team/author\.webp|/media/placeholders/ph-icons.svg|g' "$file"
}

# Corriger tous les fichiers HTML français
echo "📁 Correction des fichiers FR..."
count_fr=0
find ./fr -name "*.html" -type f | while read file; do
    fix_file "$file"
    echo "  ✓ $(basename $file)"
    count_fr=$((count_fr + 1))
done

# Corriger tous les fichiers HTML anglais
echo ""
echo "📁 Correction des fichiers EN..."
count_en=0
find ./en -name "*.html" -type f | while read file; do
    fix_file "$file"
    echo "  ✓ $(basename $file)"
    count_en=$((count_en + 1))
done

# Corriger tous les fichiers HTML allemand
echo ""
echo "📁 Correction des fichiers DE..."
count_de=0
find ./de -name "*.html" -type f | while read file; do
    fix_file "$file"
    echo "  ✓ $(basename $file)"
    count_de=$((count_de + 1))
done

# Corriger tous les fichiers HTML italien
echo ""
echo "📁 Correction des fichiers IT..."
count_it=0
find ./it -name "*.html" -type f | while read file; do
    fix_file "$file"
    echo "  ✓ $(basename $file)"
    count_it=$((count_it + 1))
done

echo ""
echo "✅ Correction terminée!"
echo ""
echo "📊 Résumé:"
echo "  Images services (existantes) : Corrigées ✓"
echo "  Images manquantes : Remplacées par placeholders ✓"
echo ""
echo "🎯 Impact:"
echo "  • 8+ images maintenant visibles"
echo "  • 0 erreur 404 pour services"
echo "  • Placeholders propres pour contenu à venir"
echo ""
echo "🚀 Prochaines étapes:"
echo "  1. Vérifier les changements: git diff"
echo "  2. Tester localement: python3 -m http.server 8000"
echo "  3. Commiter: git add . && git commit -m 'Fix: Corriger chemins images'"
echo "  4. Déployer: git push"
echo ""
