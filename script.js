// ===== Theme toggle =====
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if (stored) root.setAttribute('data-theme', stored);

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  if (next === 'dark') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', next);
});

// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Counter animation =====
const counters = document.querySelectorAll('.stat-num');
const animateCount = (el) => {
  const target = +el.dataset.count;
  const duration = 1600;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target) + (target > 9 ? '+' : '');
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObs.observe(c));

// ===== Reveal on scroll =====
const reveals = document.querySelectorAll('.section, .project, .skill-block, .info-card');
reveals.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 50);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
reveals.forEach(r => revealObs.observe(r));

// ===== Card 3D tilt (hero) =====
const card = document.querySelector('.hero-card');
if (card && window.matchMedia('(min-width: 980px)').matches) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
  });
}

// ===== Journey tabs (Expériences / Formation) =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = { exp: document.getElementById('tab-exp'), edu: document.getElementById('tab-edu') };
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    tabBtns.forEach(b => b.classList.toggle('active', b === btn));
    Object.entries(tabPanels).forEach(([k, el]) => {
      if (!el) return;
      if (k === target) { el.hidden = false; el.style.animation = 'fadeInUp 0.5s ease both'; }
      else el.hidden = true;
    });
  });
});

// ===== Smooth nav active state =====
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const navObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.forEach(l => {
        l.style.color = l.getAttribute('href') === '#' + id ? 'var(--text)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navObs.observe(s));
