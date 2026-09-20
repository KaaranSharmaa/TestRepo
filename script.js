// ============================================================
//  CONFIGURATION — edit these to personalise the site
// ============================================================

// 1. PASSWORD — change this to whatever you like
const PASSWORD = "kanda";

// 2. PHOTOS — add filenames from your /images folder here.
//    Format: { src: "images/filename.jpg", caption: "optional caption" }
//    Leave caption as "" if you don't want one.
const photos = [
  { src: "images/photo1.jpg", caption: "Our first adventure 🌸" },
  { src: "images/photo2.jpg", caption: "" },
  { src: "images/photo3.jpg", caption: "This day was perfect ✨" },
  // Add more photos here — just copy a line above and change the filename
];

// ============================================================
//  PASSWORD LOGIC
// ============================================================
function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");

  if (input === PASSWORD) {
    document.getElementById("password-screen").classList.add("hidden");
    document.getElementById("landing-page").classList.remove("hidden");
    errorMsg.classList.remove("show");
  } else {
    errorMsg.classList.add("show");
    document.getElementById("password-input").value = "";
    document.getElementById("password-input").focus();
  }
}

// Allow pressing Enter key on the password input
document.getElementById("password-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") checkPassword();
});

// ============================================================
//  NAVIGATION
// ============================================================
function openGallery() {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("gallery-page").classList.remove("hidden");
  loadPhoto(currentIndex);
}

function goBack() {
  document.getElementById("gallery-page").classList.add("hidden");
  document.getElementById("landing-page").classList.remove("hidden");
}

// ============================================================
//  SLIDESHOW
// ============================================================
let currentIndex = 0;

function loadPhoto(index) {
  const img     = document.getElementById("slide-img");
  const caption = document.getElementById("slide-caption");
  const counter = document.getElementById("slide-counter");

  // Fade out
  img.classList.add("fade");

  setTimeout(() => {
    img.src          = photos[index].src;
    caption.textContent = photos[index].caption || "";
    counter.textContent = `${index + 1} / ${photos.length}`;

    // Fade back in once image is loaded
    img.onload = () => img.classList.remove("fade");
    // Fallback in case image is cached and onload doesn't fire
    if (img.complete) img.classList.remove("fade");
  }, 200);
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length;
  loadPhoto(currentIndex);
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  loadPhoto(currentIndex);
}

// Keyboard arrow navigation
document.addEventListener("keydown", function (e) {
  const galleryVisible = !document.getElementById("gallery-page").classList.contains("hidden");
  if (!galleryVisible) return;
  if (e.key === "ArrowRight") nextPhoto();
  if (e.key === "ArrowLeft")  prevPhoto();
});

// Touch/swipe support for mobile
let touchStartX = 0;

document.getElementById("gallery-page").addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.getElementById("gallery-page").addEventListener("touchend", function (e) {
  const diff = touchStartX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextPhoto();
    else          prevPhoto();
  }
}, { passive: true });
