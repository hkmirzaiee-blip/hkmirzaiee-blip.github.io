// ===== منوی موبایل =====
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

// ===== پنجره بزرگ‌نمایی عکس =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
    }
    lightboxCaption.textContent = item.dataset.caption || "";
    lightbox.classList.add("open");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ===== انیمیشن ظاهر شدن هنگام اسکرول =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ===== فرم ارتباط با ما =====
// فعلاً پیام فقط محلی نشان داده می‌شود؛ برای دریافت واقعی پیام‌ها
// بعداً یک سرویس فرم داخلی وصل می‌کنیم.
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = "پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم.";
  formNote.style.display = "block";
  contactForm.reset();
  setTimeout(() => (formNote.style.display = "none"), 5000);
});