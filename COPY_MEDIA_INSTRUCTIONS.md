# 📋 Instructions de copie des médias CLICOM

## 🎯 Objectif
Copier les 12 fichiers WebP officiels depuis votre Google Drive vers le repo local.

---

## 📍 Emplacements

### Source (Google Drive)
```
G:\Mon Drive\Clicom\_MEDIA_SYSTEM\CLICOM\03_export_webp\
```

### Destination (repo local)
```
[CHEMIN_VOTRE_REPO]\assets\media\
```

Exemple complet :
```
C:\Users\VotreNom\Projects\Clicom-Site\assets\media\
```

---

## 📂 Fichiers à copier (12 fichiers WebP)

### ✅ Checklist complète

Cochez au fur et à mesure que vous copiez chaque fichier :

**HERO (2 fichiers)**
- [ ] hero-home-clarity-v01-1920x1080.webp (1.9 MB environ)
- [ ] hero-home-business-v01-1920x1080.webp (1.9 MB environ)

**SERVICES (6 fichiers)**
- [ ] svc-services-web-v01-1200x800.webp
- [ ] svc-services-redesign-v01-1200x800.webp
- [ ] svc-services-branding-v01-1200x800.webp
- [ ] svc-services-local-v01-1200x800.webp
- [ ] svc-services-support-v01-1200x800.webp ⚠️ **IMPORTANT**
- [ ] svc-services-media-v01-1200x800.webp

**ABOUT / CONTACT (2 fichiers)**
- [ ] about-about-desk-v01-1600x1067.webp
- [ ] contact-contact-chat-v01-1600x1067.webp

**PROCESS / TRUST (2 fichiers)**
- [ ] process-home-method-v01-1920x1080.webp
- [ ] trust-home-shield-v01-1200x800.webp

---

## 🚀 Procédure de copie

### Méthode 1 : Copie manuelle (recommandée)

1. **Ouvrir l'explorateur Windows**
   - Appuyer sur `Win + E`

2. **Aller à la source**
   ```
   G:\Mon Drive\Clicom\_MEDIA_SYSTEM\CLICOM\03_export_webp\
   ```

3. **Sélectionner les 12 fichiers**
   - Vous pouvez tous les sélectionner : `Ctrl + A`
   - Ou sélectionner uniquement les 12 fichiers WebP listés ci-dessus

4. **Copier**
   - `Ctrl + C`

5. **Aller à la destination**
   ```
   [CHEMIN_REPO]\assets\media\
   ```

6. **Coller**
   - `Ctrl + V`

7. **Vérifier**
   - Vous devez avoir exactement **12 fichiers .webp** dans le dossier `assets/media/`

### Méthode 2 : PowerShell (si vous préférez)

Ouvrez PowerShell et exécutez :

```powershell
# Définir les chemins
$source = "G:\Mon Drive\Clicom\_MEDIA_SYSTEM\CLICOM\03_export_webp\"
$destination = "[REMPLACEZ_PAR_VOTRE_CHEMIN]\Clicom-Site\assets\media\"

# Copier tous les fichiers WebP
Copy-Item -Path "$source\*.webp" -Destination $destination -Verbose

# Vérifier
Get-ChildItem $destination -Filter "*.webp" | Measure-Object
```

Le résultat doit afficher : **Count : 12**

---

## ✅ Vérification post-copie

### 1. Vérifier le nombre de fichiers

Dans le terminal (depuis la racine du repo) :

```bash
ls assets/media/*.webp | wc -l
```

Résultat attendu : **12**

### 2. Vérifier les noms de fichiers

```bash
ls -1 assets/media/
```

Vous devez voir exactement ces 12 fichiers :
```
about-about-desk-v01-1600x1067.webp
contact-contact-chat-v01-1600x1067.webp
hero-home-business-v01-1920x1080.webp
hero-home-clarity-v01-1920x1080.webp
process-home-method-v01-1920x1080.webp
svc-services-branding-v01-1200x800.webp
svc-services-local-v01-1200x800.webp
svc-services-media-v01-1200x800.webp
svc-services-redesign-v01-1200x800.webp
svc-services-support-v01-1200x800.webp
svc-services-web-v01-1200x800.webp
trust-home-shield-v01-1200x800.webp
```

### 3. Vérifier que le site fonctionne

Une fois les fichiers copiés, testez le site localement :

1. Page d'accueil : `/fr/` → Le hero doit afficher `hero-home-clarity-v01-1920x1080.webp`
2. Page Services : `/fr/services/` → Les 6 images de services doivent s'afficher correctement

---

## ⚠️ Erreurs courantes

### Erreur : "Chemin introuvable"
- Vérifiez que le lecteur G:\ est bien monté
- Vérifiez que Google Drive est synchronisé

### Erreur : "Fichiers manquants"
- Vérifiez que vous copiez bien **12 fichiers WebP**
- Consultez `assets/media/README.md` pour la liste complète

### Erreur : "Images ne s'affichent pas"
- Vérifiez que les fichiers sont bien dans `assets/media/` (pas dans un sous-dossier)
- Vérifiez les noms de fichiers (sensible à la casse : minuscules obligatoires)
- Rechargez la page avec `Ctrl + F5` (forcer le rechargement)

---

## 📊 Taille approximative

**Taille totale des 12 fichiers :** ~15-20 MB

Détails par catégorie :
- Hero (2 fichiers 1920×1080) : ~3-4 MB
- Services (6 fichiers 1200×800) : ~8-10 MB
- About/Contact (2 fichiers 1600×1067) : ~3-4 MB
- Process/Trust (2 fichiers) : ~2-3 MB

---

## ✅ Confirmation finale

Une fois la copie terminée, vous pouvez vérifier l'intégration avec :

```bash
cat assets/media/INTEGRATION_STATUS.md
```

Ce fichier liste :
- Quelles images sont déjà intégrées dans le site (7/12)
- Quelles images sont prêtes mais pas encore utilisées (5/12)
- Où chaque image est utilisée (numéros de ligne)

---

## 🆘 Besoin d'aide ?

Si vous rencontrez un problème :

1. Vérifiez `assets/media/README.md` pour la liste officielle
2. Consultez `assets/media/INTEGRATION_STATUS.md` pour l'état d'intégration
3. Vérifiez `assets/media/media-manifest.json` pour le mapping complet

---

**Bonne copie ! 🚀**
