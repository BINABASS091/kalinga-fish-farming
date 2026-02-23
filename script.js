/* ============================================================
   NAVBAR — scroll-aware background
   ============================================================ */
const navbar  = document.getElementById('appNavbar');
const topbar  = document.querySelector('.topbar');
let lastScrollY = 0;

const onScroll = () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 40);
  if (topbar) topbar.classList.toggle('hidden', y > 60);
  lastScrollY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ============================================================
   HERO SLIDESHOW — crossfade background images every 5 s
   ============================================================ */
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  function start() {
    timer = setInterval(() => goTo(current + 1), 7000);
  }

  // Pause when tab is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearInterval(timer);
    else start();
  });

  start();
})();

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach(el => revealObserver.observe(el));

/* ============================================================
   STAT COUNTER ANIMATION
   ============================================================ */
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 16);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
counters.forEach(c => counterObserver.observe(c));

/* ============================================================
   VIDEO CARD HEADERS — inject dynamically
   ============================================================ */
const videoTitles = ['Farm Harvest — Part 1', 'Pond Operations', 'Fresh Catch in Action'];
document.querySelectorAll('.video-card').forEach((card, i) => {
  const header = document.createElement('div');
  header.className = 'video-card-header';
  header.innerHTML = `<i class="bi bi-play-circle-fill"></i> ${videoTitles[i] || 'Farm Video'}`;
  card.prepend(header);
});

/* ============================================================
   LIGHTBOX
   ============================================================ */
const lightbox      = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev  = document.getElementById('lightboxPrev');
const lightboxNext  = document.getElementById('lightboxNext');
const galleryItems  = Array.from(document.querySelectorAll('.gallery-item'));
let currentIndex    = 0;

const openLightbox = index => {
  currentIndex = index;
  lightboxImage.src = galleryItems[currentIndex].dataset.image;
  lightbox.classList.add('show');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightbox.classList.remove('show');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
};

const showPrev = () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImage.src = '';
  requestAnimationFrame(() => { lightboxImage.src = galleryItems[currentIndex].dataset.image; });
};

const showNext = () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImage.src = '';
  requestAnimationFrame(() => { lightboxImage.src = galleryItems[currentIndex].dataset.image; });
};

galleryItems.forEach((item, i) => {
  item.addEventListener('click', () => openLightbox(i));
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('show')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  showPrev();
  if (e.key === 'ArrowRight') showNext();
});

/* ============================================================
   MOBILE NAV — close on link click
   ============================================================ */
const navLinks   = document.querySelectorAll('.navbar .nav-link');
const navCollapse = document.getElementById('mainNav');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navCollapse.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  });
});

/* ============================================================
   ACTIVE NAV LINK on scroll
   ============================================================ */
const sections = document.querySelectorAll('main section[id]');
const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const link = document.querySelector(`.navbar a[href="#${entry.target.id}"]`);
      if (link) link.classList.toggle('active', entry.isIntersecting);
    });
  },
  { threshold: 0.45 }
);
sections.forEach(s => sectionObserver.observe(s));

/* ============================================================
   FOOTER YEAR
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();

