/* ---------- NAV / HAMBURGER ---------- */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open"); // Toggle class for X animation
    // Mengunci scroll body saat mobile nav terbuka
    document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "";
});

// Close mobile nav when clicking a link inside it
nav.querySelectorAll('a').forEach(link => { // Menggunakan querySelectorAll untuk link navigasi
    link.addEventListener('click', (event) => {
        // Cek apakah link memiliki href yang dimulai dengan '#' (anchor link)
        if (event.target.hash) {
            // Tutup menu dan hamburger
            nav.classList.remove('open');
            hamburger.classList.remove('open');
            document.body.style.overflow = ""; // Mengembalikan scroll body

            // Karena smooth-scroll behavior sudah diatur di CSS (html { scroll-behavior: smooth; }),
            // kita tidak perlu lagi logic JS untuk scrolling.
            // Cukup biarkan browser menangani navigasi ke anchor.
            // Timeout kecil bisa membantu memastikan menu tertutup sebelum scroll,
            // tapi seringkali tidak perlu jika transisi CSS cukup cepat.
        }
    });
});


// Close mobile nav when clicking outside of it
document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('open')) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = ""; // Mengembalikan scroll body
    }
});


/* ---------- LIGHTBOX ---------- */
const lightbox = document.getElementById("lightbox");
const galleryImages = document.querySelectorAll(".galeri-grid img");
const lightboxImg = lightbox.querySelector("img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        // Tambahkan alt text dari gambar asli
        lightboxImg.alt = img.alt;
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden"; // Mengunci scroll body
    });
});
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = ""; // Mengembalikan scroll body
});

/* ---------- DARK MODE ---------- */
const darkToggle = document.getElementById("darkToggle");
const body = document.body;
const themeKey = 'kuaBuluTabaTheme';

// Load theme preference from localStorage
const savedTheme = localStorage.getItem(themeKey);
if (savedTheme === 'dark') {
    body.classList.add('dark');
    darkToggle.textContent = '☀';
} else {
    darkToggle.textContent = '🌙';
}

darkToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        darkToggle.textContent = "☀";
        localStorage.setItem(themeKey, 'dark'); // Save dark mode preference
    } else {
        darkToggle.textContent = "🌙";
        localStorage.setItem(themeKey, 'light'); // Save light mode preference
    }
});