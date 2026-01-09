# Media Assets Directory

This directory contains all media assets for the CliCom website.

## Structure

```
/public/media/
├── placeholders/         # SVG fallback placeholders
│   ├── ph-hero.svg      # Hero section placeholder (1920x600)
│   ├── ph-card.svg      # Card/service placeholder (800x600)
│   ├── ph-vertical.svg  # Vertical image placeholder (600x800)
│   ├── ph-bg.svg        # Background placeholder (1920x1080)
│   └── ph-icons.svg     # Icon placeholder (200x200)
└── [other directories]  # Add your .webp images here
```

## Usage

All images on the website use a fallback system. If a .webp image is not found, the corresponding SVG placeholder will be displayed automatically.

### Recommended Image Structure

```
/public/media/
├── hero/
│   └── hero-main.webp
├── services/
│   ├── service-1.webp
│   ├── service-2.webp
│   └── service-3.webp
├── team/
│   └── team-photo.webp
└── icons/
    └── various-icons.webp
```

## Image Guidelines

- **Format**: WebP for optimal performance
- **Optimization**: Compress images before upload
- **Naming**: Use descriptive, lowercase names with hyphens
- **Alt text**: Always provide meaningful alt text in HTML

## Fallback System

The website automatically uses SVG placeholders when images are missing:

```html
<img src="/public/media/hero/hero-main.webp"
     data-fallback="/public/media/placeholders/ph-hero.svg"
     onerror="handleFallback(this)"
     alt="Description">
```

This ensures the site always displays correctly, even during development.
