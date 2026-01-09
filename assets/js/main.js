/**
 * CliCom Website - Main JavaScript
 * Pure vanilla JavaScript - No dependencies
 */

(function() {
  'use strict';

  /* ========== Image Fallback Handler ========== */

  /**
   * Handle image loading errors and fall back to placeholder
   * @param {HTMLImageElement} img - The image element that failed to load
   */
  window.handleFallback = function(img) {
    const fallback = img.getAttribute('data-fallback');
    if (fallback && img.src !== fallback) {
      img.src = fallback;
      img.classList.add('fallback-active');
    }
  };

  /**
   * Initialize all images with fallback support
   */
  function initImageFallbacks() {
    const images = document.querySelectorAll('img[data-fallback]');
    images.forEach(img => {
      if (!img.complete || img.naturalHeight === 0) {
        img.addEventListener('error', function() {
          window.handleFallback(this);
        });
      }
    });
  }

  /* ========== Mobile Menu Toggle ========== */

  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');

      // Prevent body scroll when menu is open
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu on window resize if going to desktop size
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ========== Smooth Scroll ========== */

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /* ========== Scroll Animations ========== */

  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    const elements = document.querySelectorAll('.card, section > .container > *');
    elements.forEach((el, index) => {
      // Add stagger delay
      if (index > 0 && index <= 3) {
        el.style.animationDelay = `${index * 0.1}s`;
      }
      observer.observe(el);
    });
  }

  /* ========== Header Scroll Effect ========== */

  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // Add shadow on scroll
      if (currentScroll > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    });
  }

  /* ========== Form Validation & Submission ========== */

  function initForms() {
    const forms = document.querySelectorAll('.form');

    forms.forEach(form => {
      form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Clear previous messages
        const existingMessages = form.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        let isValid = true;
        const errors = [];

        // Validate email
        if (data.email && !isValidEmail(data.email)) {
          errors.push('Email invalide');
          isValid = false;
        }

        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            errors.push(`Le champ "${field.name}" est requis`);
            field.classList.add('error');
            isValid = false;
          } else {
            field.classList.remove('error');
          }
        });

        // Display errors
        if (!isValid) {
          const errorMessage = document.createElement('div');
          errorMessage.className = 'form-message form-error';
          errorMessage.innerHTML = errors.join('<br>');
          form.appendChild(errorMessage);
          return;
        }

        // Submit form (in production, this would send to a backend)
        const submitButton = form.querySelector('[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Envoi...';
        submitButton.disabled = true;

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-message form-success';
        successMessage.textContent = 'Message envoyé avec succès !';
        form.appendChild(successMessage);

        // Reset form
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      });

      // Real-time validation feedback
      const inputs = form.querySelectorAll('.form-input, .form-textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', function() {
          if (this.hasAttribute('required') && !this.value.trim()) {
            this.classList.add('error');
          } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
            this.classList.add('error');
          } else {
            this.classList.remove('error');
          }
        });

        input.addEventListener('input', function() {
          if (this.classList.contains('error') && this.value.trim()) {
            this.classList.remove('error');
          }
        });
      });
    });
  }

  /**
   * Validate email format
   * @param {string} email
   * @returns {boolean}
   */
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  /* ========== Active Navigation Link ========== */

  function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;

      // Exact match or starts with (for subpages)
      if (currentPath === linkPath ||
          (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.classList.add('active');
      }
    });
  }

  /* ========== Language Switcher Active State ========== */

  function initLangSwitcher() {
    const currentPath = window.location.pathname;
    const langLinks = document.querySelectorAll('.lang-link');

    langLinks.forEach(link => {
      const lang = link.getAttribute('data-lang');
      if (currentPath.startsWith(`/${lang}/`)) {
        link.classList.add('active');
      }
    });
  }

  /* ========== Lazy Loading Images ========== */

  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }

  /* ========== Cookie Consent Banner ========== */

  function initCookieConsent() {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');

    if (!hasConsented) {
      // Create banner (if you want to add one later)
      // For now, this is a placeholder
    }
  }

  /* ========== Utility: Debounce ========== */

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /* ========== Performance: Preload Critical Resources ========== */

  function preloadCriticalResources() {
    // Preload important images that will be needed soon
    const criticalImages = document.querySelectorAll('img[data-preload="true"]');
    criticalImages.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src || img.dataset.src;
      document.head.appendChild(link);
    });
  }

  /* ========== Accessibility: Skip to Main Content ========== */

  function initSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
      skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        const main = document.querySelector('main');
        if (main) {
          main.setAttribute('tabindex', '-1');
          main.focus();
        }
      });
    }
  }

  /* ========== Initialize Everything on DOM Ready ========== */

  function init() {
    // Core functionality
    initImageFallbacks();
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initActiveNav();
    initLangSwitcher();
    initForms();

    // Enhanced features
    initScrollAnimations();
    initLazyLoading();
    initCookieConsent();
    initSkipLink();
    preloadCriticalResources();

    // Log initialization (remove in production)
    console.log('CliCom website initialized successfully');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ========== Export for external use ========== */

  window.CliCom = {
    handleFallback: window.handleFallback,
    version: '1.0.0'
  };

})();
