// ===== منوی موبایل =====
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

// ===== پنجره بزرگ‌نمایی عکس (Lightbox) =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img"); // بعد از گذاشتن عکس واقعی کار می‌کند
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
    } else {
      lightboxImg.removeAttribute("src");
      lightboxImg.alt = "";
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

// ===== فرم ارتباط با ما =====
// این نسخه پیام را فقط محلی نشان می‌دهد. برای دریافت واقعی پیام‌ها،
// بعداً می‌توان سرویس فرم رایگانی مثل Web3Forms را وصل کرد.
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = "پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم.";
  formNote.style.display = "block";
  contactForm.reset();
  setTimeout(() => (formNote.style.display = "none"), 5000);
});
