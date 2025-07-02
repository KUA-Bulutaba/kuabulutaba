/* menu hp */
const hamburger = document.getElementById("hamburger");
const nav       = document.getElementById("nav");
hamburger.addEventListener("click", () => nav.classList.toggle("open"));

/* lightbox */
const lightbox      = document.getElementById("lightbox");
const galleryImages = document.querySelectorAll(".galeri-grid img");
const lightboxImg   = lightbox.querySelector("img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("open");
  });
});
lightbox.addEventListener("click", () => lightbox.classList.remove("open"));

/* dark‑mode toggle */
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
});
