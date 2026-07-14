// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));

// Nav shrink on scroll
const nav = document.querySelector('.nav');
if (nav) window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 40 ? '0' : '';
  nav.style.background = window.scrollY > 40 ? 'rgba(5,8,16,.95)' : '';
});

// Counter animation
document.querySelectorAll('.stat-num,.stat-card .n').forEach(el => {
  const target = parseInt(el.dataset.count || el.textContent);
  if (!target) return;
  const obs = new IntersectionObserver((ents) => {
    ents.forEach(en => {
      if (!en.isIntersecting) return;
      let cur = 0, step = Math.max(1, Math.ceil(target / 50));
      const t = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(t); }
        el.textContent = cur + (el.dataset.suffix || '');
      }, 30);
      obs.disconnect();
    });
  });
  obs.observe(el);
});

// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => item.classList.toggle('open'));
});

// Social redirects -> 404
document.querySelectorAll('[data-social]').forEach(a => {
  a.addEventListener('click', (e) => { e.preventDefault(); window.location.href = './404.html'; });
});

// Contact form fake submit
const cf = document.querySelector('.contact-form');
if (cf) cf.addEventListener('submit', (e) => {
  e.preventDefault();
  cf.innerHTML = '<div class="testimonial"><p>Thank you! Your message has been received. Our team will contact you within 24 hours.</p><span class="who">— Stackly Team</span></div>';
});


const menuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    menuBtn.innerHTML = mobileMenu.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});