// ============================================================================
// SCROLL REVEALS WITH INTERSECTION OBSERVER
// ============================================================================

function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// ============================================================================
// NAVBAR SCROLL BEHAVIOR & ACTIVE LINK TRACKING
// ============================================================================

function initNavBar() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main > section');

  // Scroll listener for navbar background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active link tracking with IntersectionObserver
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // Smooth scroll to sections (fallback for older browsers)
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          closeMobileMenu();
        }
      }
    });
  });
}

// ============================================================================
// THEME TOGGLE (DARK/LIGHT MODE)
// ============================================================================

function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check localStorage for saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// ============================================================================
// MOBILE MENU TOGGLE
// ============================================================================

function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('open');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';

    // Add mobile menu styling dynamically
    if (navLinks.style.display === 'flex') {
      navLinks.style.position = 'fixed';
      navLinks.style.top = '60px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.width = '100%';
      navLinks.style.flexDirection = 'column';
      navLinks.style.backgroundColor = 'var(--color-bg-primary)';
      navLinks.style.borderBottom = '1px solid var(--color-border)';
      navLinks.style.zIndex = '999';
      navLinks.style.paddingTop = 'var(--space-4)';
      navLinks.style.paddingBottom = 'var(--space-4)';
    }
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      closeMobileMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  mobileMenuToggle.classList.remove('open');
  navLinks.style.display = 'none';
}

// ============================================================================
// FOCUS MANAGEMENT FOR ACCESSIBILITY
// ============================================================================

function initAccessibility() {
  // Trap focus in mobile menu when open (optional enhancement)
  const navLinks = document.getElementById('nav-links');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

  const focusableElements = document.querySelectorAll(
    'a, button, input, [tabindex]:not([tabindex="-1"])'
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && navLinks.style.display === 'flex') {
      // Prevent tab from leaving mobile menu
      const firstFocusable = navLinks.querySelector('a');
      const lastFocusable = navLinks.querySelectorAll('a')[navLinks.querySelectorAll('a').length - 1];

      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
  initScrollReveals();
  initNavBar();
  initThemeToggle();
  initMobileMenu();
  initAccessibility();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================================================
// UTILITY: Detect if user prefers reduced motion
// ============================================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.documentElement.style.scrollBehavior = 'auto';
}
