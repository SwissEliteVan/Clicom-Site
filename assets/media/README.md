# CLICOM Media Assets

## 📂 Liste officielle des médias (12 fichiers WebP)

### HERO (2 fichiers)
| Fichier | Dimensions | Usage |
|---------|------------|-------|
| `hero-home-clarity-v01-1920x1080.webp` | 1920×1080 | Hero principal page d'accueil |
| `hero-home-business-v01-1920x1080.webp` | 1920×1080 | Hero alternatif page d'accueil |

### SERVICES (6 fichiers)
| Fichier | Dimensions | Usage | Page/Section |
|---------|------------|-------|--------------|
| `svc-services-web-v01-1200x800.webp` | 1200×800 | Création de site vitrine | Services - Carte "Création de site vitrine" |
| `svc-services-redesign-v01-1200x800.webp` | 1200×800 | Refonte et amélioration | Services - Carte "Refonte et amélioration" |
| `svc-services-branding-v01-1200x800.webp` | 1200×800 | Identité visuelle | Services - Carte "Identité visuelle" |
| `svc-services-local-v01-1200x800.webp` | 1200×800 | Visibilité locale | Services - Carte "Visibilité locale" |
| `svc-services-support-v01-1200x800.webp` | 1200×800 | Support & évolutions | Services - Carte "Support & évolutions" |
| `svc-services-media-v01-1200x800.webp` | 1200×800 | Landing pages & campagnes | Services - Carte "Landing pages" |

### ABOUT / CONTACT (2 fichiers)
| Fichier | Dimensions | Usage |
|---------|------------|-------|
| `about-about-desk-v01-1600x1067.webp` | 1600×1067 | Illustration page À propos |
| `contact-contact-chat-v01-1600x1067.webp` | 1600×1067 | Illustration page Contact |

### PROCESS / TRUST (2 fichiers)
| Fichier | Dimensions | Usage |
|---------|------------|-------|
| `process-home-method-v01-1920x1080.webp` | 1920×1080 | Illustration méthode/processus |
| `trust-home-shield-v01-1200x800.webp` | 1200×800 | Illustration confiance/sécurité |

---

## 📍 Source des fichiers

**Emplacement Google Drive:**
```
G:\Mon Drive\Clicom\_MEDIA_SYSTEM\CLICOM\03_export_webp\
```

**Destination dans le repo:**
```
./assets/media/
```

---

## 🔧 Instructions de copie

### Étape 1 : Copier les fichiers depuis le Drive
Depuis votre explorateur Windows, copiez les 12 fichiers WebP depuis :
```
G:\Mon Drive\Clicom\_MEDIA_SYSTEM\CLICOM\03_export_webp\
```

### Étape 2 : Coller dans le repo
Collez-les dans le dossier :
```
[CHEMIN_REPO]\assets\media\
```

### Étape 3 : Vérifier
Tous les 12 fichiers doivent être présents dans `./assets/media/`

---

## 📝 Checklist de vérification

- [ ] 2 fichiers hero (1920×1080)
- [ ] 6 fichiers services (1200×800)
- [ ] 2 fichiers about/contact (1600×1067)
- [ ] 2 fichiers process/trust
- [ ] **Total : 12 fichiers WebP**

---

## 🎨 Bonnes pratiques d'intégration

### Attributs requis pour chaque `<img>`
```html
<img
  src="/assets/media/[nom-fichier].webp"
  alt="[Description claire]"
  width="[largeur]"
  height="[hauteur]"
  loading="lazy"
  decoding="async"
>
```

### Exception : Hero principal
Le hero principal doit avoir `loading="eager"` pour s'afficher immédiatement.

### Dimensions recommandées par usage
- **Hero:** 1920×1080 → affichage responsive via CSS
- **Services:** 1200×800 → ratio 3:2
- **About/Contact:** 1600×1067 → ratio 3:2
- **Process/Trust:** selon usage

---

## 🗂 Manifest des médias

Voir `media-manifest.json` pour le mapping complet des usages → chemins de fichiers.
