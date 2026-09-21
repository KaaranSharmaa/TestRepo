$content = Get-Content -Raw "script.js"
$arrayStr = [regex]::Match($content, '(?s)const photos = \[.*?\];').Value

if (-not $arrayStr) {
    Write-Host "Could not find photos array!"
    exit 1
}

$newLogic = @"

// ============================================================
//  PASSWORD LOGIC
// ============================================================
const PASSWORD = "kanda";
let currentUser = "";

function selectUser(name) {
  currentUser = name;
  goToScreen('screen-password');
  
  const greetingEl = document.getElementById('personalized-greeting');
  if (name === 'Anusha') {
    greetingEl.textContent = 'Uff Anu is here... Love of my life, Babedii, Hathi, Padunia, Moti, Chumeshwari… my biwi Chaudhary ❤️😂 Chalo guess the password';
  } else if (name === 'Karan') {
    greetingEl.textContent = 'Hello Karan. You know the secret.';
  }
}

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-msg");

  if (input === PASSWORD) {
    errorMsg.classList.remove("show");
    // Unlock transition
    document.getElementById("screen-password").classList.remove("active");
    setTimeout(() => {
        document.getElementById("screen-password").classList.add("hidden");
        document.getElementById("main-experience").classList.remove("hidden");
        window.scrollTo(0, 0);
        initMainExperience();
    }, 1000);
  } else {
    errorMsg.classList.add("show");
    document.getElementById("password-input").value = "";
    document.getElementById("password-input").focus();
  }
}

// Allow pressing Enter key on the password input
const pwInput = document.getElementById("password-input");
if(pwInput) {
  pwInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkPassword();
  });
}

// ============================================================
//  NAVIGATION & SCROLLING
// ============================================================
function goToScreen(screenId) {
    const screens = document.querySelectorAll('.fullscreen-section');
    screens.forEach(s => {
        if(s.id === screenId) {
            s.classList.remove('hidden');
            setTimeout(() => s.classList.add('active'), 50);
        } else {
            s.classList.remove('active');
            setTimeout(() => s.classList.add('hidden'), 1000);
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function startAgain() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        document.getElementById("main-experience").classList.add("hidden");
        document.getElementById("password-input").value = "";
        document.getElementById("error-msg").classList.remove("show");
        goToScreen('screen-intro');
    }, 500);
}

// ============================================================
//  CINEMATIC GALLERY
// ============================================================
let currentIndex = 0;

function loadPhoto(index) {
  const img     = document.getElementById("gallery-main-img");
  const caption = document.getElementById("gallery-caption");
  const counter = document.getElementById("gallery-counter");

  if(!img) return;

  img.classList.add("fade");

  setTimeout(() => {
    img.src = photos[index].src;
    caption.textContent = photos[index].caption || "";
    counter.textContent = "Memory #" + (index + 1);

    img.onload = () => img.classList.remove("fade");
    if (img.complete) img.classList.remove("fade");
    
    const nextIdx = (index + 1) % photos.length;
    const preload = new Image();
    preload.src = photos[nextIdx].src;
  }, 400);
}

function nextPhoto() {
  if(!photos || photos.length === 0) return;
  currentIndex = (currentIndex + 1) % photos.length;
  loadPhoto(currentIndex);
}

function prevPhoto() {
  if(!photos || photos.length === 0) return;
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  loadPhoto(currentIndex);
}

// Keyboard arrow navigation
document.addEventListener("keydown", function (e) {
  const mainVisible = !document.getElementById("main-experience").classList.contains("hidden");
  if (!mainVisible) return;
  
  const gallery = document.getElementById("screen-gallery");
  if(!gallery) return;
  
  const rect = gallery.getBoundingClientRect();
  if(rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft")  prevPhoto();
  }
});

// Touch/swipe support
let touchStartX = 0;
const galleryViewer = document.querySelector(".gallery-viewer");
if(galleryViewer) {
    galleryViewer.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    galleryViewer.addEventListener("touchend", function (e) {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextPhoto();
        else          prevPhoto();
      }
    }, { passive: true });
}

// ============================================================
//  ANIMATIONS & OBSERVERS
// ============================================================
let typewriterDone = false;

function initMainExperience() {
    loadPhoto(0);
    
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if(entry.target.id === 'screen-letter' && !typewriterDone) {
                    typewriterDone = true;
                    typeWriterEffect();
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    const letterSection = document.getElementById('screen-letter');
    if(letterSection) observer.observe(letterSection);
}

// Typewriter
const letterText = "You know what's funny?\n\nOut of all the people in this huge world,\nsomehow I found you.\n\nAnd somehow,\nyou became my favourite person.\n\nMy favourite notification.\nMy favourite conversation.\nMy favourite smile.\nMy favourite headache.\nMy favourite everything.\n\nI don't know what the future looks like.\n\nBut if I get to keep annoying you,\nlaughing with you,\nfighting with you,\nmaking up with you,\nand creating memories with you...\n\nI think I'll be okay.\n\nBecause wherever you are...\n\nthat's where my little world feels right. ❤️";

function typeWriterEffect() {
    const el = document.getElementById('typewriter-text');
    if(!el) return;
    el.textContent = "";
    let i = 0;
    const speed = 40;
    
    function type() {
        if (i < letterText.length) {
            el.textContent += letterText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    setTimeout(type, 500);
}

// ============================================================
//  MUSIC PLAYER & PARTICLES
// ============================================================
let isMusicPlaying = false;
function toggleMusic() {
    const audio = document.getElementById("bg-audio");
    const text = document.querySelector(".music-text");
    
    if (isMusicPlaying) {
        audio.pause();
        text.textContent = "Play our song";
    } else {
        text.textContent = "Playing... ❤️";
    }
    isMusicPlaying = !isMusicPlaying;
}

function createParticles() {
    const container = document.getElementById('particles-bg');
    if(!container) return;
    
    const count = 30;
    for(let i=0; i<count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        const size = Math.random() * 8 + 3;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 20;
        
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = left + '%';
        p.style.animationDuration = duration + 's';
        p.style.animationDelay = delay + 's';
        
        container.appendChild(p);
    }
}
document.addEventListener("DOMContentLoaded", createParticles);

"@

Set-Content -Path "script.js" -Value ($arrayStr + "`n" + $newLogic) -Encoding UTF8
Write-Host "Successfully updated script.js"
