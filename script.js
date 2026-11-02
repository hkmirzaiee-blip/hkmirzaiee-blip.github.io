// ===== داده‌های آنالیز محصول سفارشی =====
// ⚠️ مقادیر نمونه است — با آنالیز آزمایشگاه شرکت جایگزین کنید
const PRODUCTS = {
  custom: {
    title: 'ترکیبات پلیمری سفارشی',
    desc: 'فرمولاسیون اختصاصی PVC و ترکیبات پلیمری بر اساس درخواست و نیاز فنی مشتری',
    specs: [
      ['سختی (Shore A)', '۵۵ تا ۹۵ — طبق سفارش'],
      ['محدوده دمای کاری', 'تا −۴۰ درجه (فرمول مقاوم سرما) قابل تنظیم'],
      ['رنگ‌بندی', 'مطابق کد پانتون مشتری'],
      ['خواص مکانیکی', 'طبق درخواست: کشش، ازدیاد طول و...'],
      ['نمونه‌سازی', 'تولید نمونه قبل از سفارش انبوه'],
      ['حداقل سفارش', 'قابل مذاکره'],
      ['بسته‌بندی', 'کیسه ۲۵ کیلوگرمی — قابل تنظیم'],
    ],
    features: [
      'طراحی فرمول توسط واحد فنی و کنترل کیفیت',
      'تولید نمونه و تأیید مشتری قبل از سفارش انبوه',
      'قابلیت ترکیب ویژگی‌ها: مقاوم سرما، مقاوم شعله، مقاوم روغن و...',
      'همراهی فنی در مرحله راه‌اندازی خط مشتری',
    ],
  },
};

// ===== منوی موبایل =====
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
if (menuBtn && mainNav) {
  menuBtn.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mainNav.classList.remove('open'))
  );
}

// ===== لایت‌باکس گالری =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
if (lightbox && lightboxImg) {
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('open');
    });
  });
  const lbClose = document.getElementById('lightboxClose');
  if (lbClose) lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });
}

// ===== مودال آنالیز محصول سفارشی =====
const modal = document.getElementById('productModal');
if (modal) {
  function openProduct(key) {
    const p = PRODUCTS[key];
    if (!p) return;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('specTable').innerHTML =
      p.specs.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
    document.getElementById('featureList').innerHTML =
      p.features.map(f => `<li>${f}</li>`).join('');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('.product-card[data-product]').forEach(card => {
    card.addEventListener('click', () => openProduct(card.dataset.product));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProduct(card.dataset.product); }
    });
  });
  const modalClose = document.getElementById('modalClose');
  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

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
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formMsg').textContent =
      'پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم. ✅';
    contactForm.reset();
  });
}