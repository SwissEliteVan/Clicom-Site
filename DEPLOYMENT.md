# Guide de Déploiement Vercel - CliCom

Ce guide explique comment déployer le site CliCom sur Vercel.

## 🚀 Méthode 1 : Déploiement via CLI (Recommandé)

### Installation de Vercel CLI

```bash
npm install -g vercel
```

### Déploiement

1. **Se connecter à Vercel**
   ```bash
   vercel login
   ```

2. **Déployer depuis le répertoire du site**
   ```bash
   cd /path/to/clicom-site
   vercel
   ```

3. **Configuration initiale**
   ```
   ? Set up and deploy "clicom-site"? [Y/n] y
   ? Which scope do you want to deploy to? Your Account
   ? Link to existing project? [y/N] n
   ? What's your project's name? clicom
   ? In which directory is your code located? ./
   ```

4. **Déploiement en production**
   ```bash
   vercel --prod
   ```

## 📦 Méthode 2 : Déploiement via Interface Web

### Via le Dashboard Vercel

1. **Aller sur** [vercel.com](https://vercel.com)
2. **Cliquer sur** "Add New Project"
3. **Choisir** "Import Git Repository" OU "Import from Folder"
4. **Uploader** le dossier complet du site
5. **Configurer** :
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: (laisser vide)
   - Output Directory: (laisser vide)
6. **Cliquer sur** "Deploy"

## ⚙️ Configuration Vercel (vercel.json)

Créer un fichier `vercel.json` à la racine :

```json
{
  "version": 2,
  "public": true,
  "trailingSlash": true,
  "cleanUrls": false,
  "rewrites": [
    {
      "source": "/",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/fr",
      "destination": "/fr/",
      "permanent": true
    },
    {
      "source": "/en",
      "destination": "/en/",
      "permanent": true
    },
    {
      "source": "/de",
      "destination": "/de/",
      "permanent": true
    },
    {
      "source": "/it",
      "destination": "/it/",
      "permanent": true
    }
  ]
}
```

## 🌐 Domaine Personnalisé

### Ajouter clicom.ch

1. **Via CLI**
   ```bash
   vercel domains add clicom.ch
   vercel domains add www.clicom.ch
   ```

2. **Via Dashboard**
   - Aller dans Project Settings → Domains
   - Ajouter `clicom.ch`
   - Suivre les instructions DNS

### Configuration DNS

Chez votre registrar (Infomaniak, Gandi, etc.) :

```
Type  Name  Value
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

## 🔒 SSL/HTTPS

Vercel active automatiquement :
- ✅ SSL/TLS (Let's Encrypt)
- ✅ HTTP/2
- ✅ Automatic HTTPS redirect

## 🌍 Configuration Multilingue

### Redirection basée sur la langue du navigateur

Le fichier `index.html` à la racine détecte automatiquement :

```javascript
const userLang = navigator.language.substring(0, 2);
const targetLang = ['fr', 'en', 'de', 'it'].includes(userLang) ? userLang : 'fr';
window.location.href = `/${targetLang}/`;
```

### Hreflang Headers (optionnel)

Ajouter dans `vercel.json` :

```json
{
  "headers": [
    {
      "source": "/fr/(.*)",
      "headers": [
        {
          "key": "Content-Language",
          "value": "fr"
        }
      ]
    },
    {
      "source": "/en/(.*)",
      "headers": [
        {
          "key": "Content-Language",
          "value": "en"
        }
      ]
    },
    {
      "source": "/de/(.*)",
      "headers": [
        {
          "key": "Content-Language",
          "value": "de"
        }
      ]
    },
    {
      "source": "/it/(.*)",
      "headers": [
        {
          "key": "Content-Language",
          "value": "it"
        }
      ]
    }
  ]
}
```

## 📊 Variables d'Environnement

Aucune variable nécessaire pour ce site statique.

## 🔄 Déploiements Continus

### Via Git

1. **Push vers GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/clicom-site.git
   git push -u origin main
   ```

2. **Connecter à Vercel**
   - Dashboard → New Project
   - Import from Git
   - Sélectionner le repo
   - Déploiement automatique à chaque push

## ✅ Checklist Post-Déploiement

- [ ] Site accessible sur vercel.app
- [ ] Domaine personnalisé configuré (si applicable)
- [ ] SSL/HTTPS actif
- [ ] Redirection automatique de langue fonctionne
- [ ] Toutes les pages accessibles (FR, EN, DE, IT)
- [ ] Images fallback fonctionnent
- [ ] Forms de contact fonctionnent
- [ ] Mobile responsive OK
- [ ] Performance Lighthouse > 90

## 🐛 Dépannage

### Erreur 404 sur les pages

**Problème** : Les URLs avec trailing slash ne fonctionnent pas.

**Solution** : Ajouter dans `vercel.json` :
```json
{
  "trailingSlash": true
}
```

### Images ne chargent pas

**Problème** : Images dans `/public/media/` inaccessibles.

**Solution** : Vérifier que les images sont bien dans le bon répertoire et que les chemins sont corrects (`/public/media/...`).

### Redirection de langue ne fonctionne pas

**Problème** : Reste sur la page racine.

**Solution** : Vérifier que JavaScript est activé et que `index.html` contient bien le script de redirection.

## 📈 Monitoring

### Analytics

Activer Vercel Analytics :

```bash
vercel analytics enable
```

### Logs

Voir les logs en temps réel :

```bash
vercel logs
```

## 🔧 Maintenance

### Mise à jour du site

```bash
# Modifier les fichiers localement
# Puis redéployer
vercel --prod
```

### Rollback

```bash
vercel rollback
```

## 📞 Support

- **Documentation Vercel** : https://vercel.com/docs
- **Support Vercel** : https://vercel.com/support
- **Community** : https://github.com/vercel/vercel/discussions

---

**Date** : 08/01/2025  
**Version** : 1.0
