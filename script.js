// ============================================================
// WEBSITE INTERACTIONS
// This file controls the theme switcher, mobile menu, and
// scroll-reveal animations. You normally do not need to edit it.
// ============================================================

// ==================== THEME ====================
const root = document.documentElement;
const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Theme: saved preference -> system preference -> dark.
const savedTheme = localStorage.getItem('portfolio-theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (systemDark ? 'dark' : 'light'));

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);

  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
    themeToggle?.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
    themeToggle?.setAttribute(
      'title',
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }
}

themeToggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

// ==================== MOBILE MENU ====================
menuButton?.addEventListener('click', () => {
  nav?.classList.toggle('open');
  menuButton.setAttribute(
    'aria-expanded',
    nav?.classList.contains('open') ? 'true' : 'false'
  );
});

document.querySelectorAll('.nav nav a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});

// ==================== PROJECT MEDIA GALLERIES ====================
// Each project gallery starts on its first (hero) image.
// Copy a .gallery-slide in projects.html to add another image or video.
document.querySelectorAll('.project-gallery').forEach(gallery => {
  const slides = Array.from(gallery.querySelectorAll('.gallery-slide'));
  const previous = gallery.querySelector('.gallery-prev');
  const next = gallery.querySelector('.gallery-next');
  const counter = gallery.querySelector('.gallery-counter');

  if (!slides.length) return;

  let current = Math.max(
    0,
    slides.findIndex(slide => slide.classList.contains('active'))
  );

  const showSlide = index => {
    slides[current]?.querySelectorAll('video').forEach(video => video.pause());

    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
      slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });

    if (counter) {
      counter.textContent = `${current + 1} / ${slides.length}`;
    }
  };

  previous?.addEventListener('click', () => showSlide(current - 1));
  next?.addEventListener('click', () => showSlide(current + 1));

  gallery.setAttribute('tabindex', '0');
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showSlide(current - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(current + 1);
    }
  });

  showSlide(current);
});

// ==================== SCROLL REVEAL ====================
// Lightweight scroll-reveal animation.
const revealTargets = document.querySelectorAll(
  '.section, .project-card, .qual, .timeline article, .project-detail, .stat-grid > div'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));
