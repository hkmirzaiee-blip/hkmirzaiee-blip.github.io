// ===== منوی موبایل =====
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
// بستن منو بعد از کلیک روی لینک
mainNav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mainNav.classList.remove('open'))
);

// ===== لایت‌باکس گالری =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('open');
  });
});
document.getElementById('lightboxClose').addEventListener('click', () =>
  lightbox.classList.remove('open')
);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

// ===== انیمیشن ظاهرشدن با اسکرول =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== فرم تماس (محلی — بعداً به سرویس واقعی وصل می‌شود) =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMsg').textContent =
    'پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم. ✅';
  contactForm.reset();
});