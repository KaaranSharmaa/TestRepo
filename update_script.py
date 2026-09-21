import re

def update_script():
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the photos array
    match = re.search(r'const photos = \[.*?\];', content, re.DOTALL)
    if not match:
        print("Could not find photos array!")
        return
        
    photos_array_str = match.group(0)

    new_logic = """
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
        // Initialize things that need to happen when main experience shows
        initMainExperience();
    }, 1000); // Wait for fade out
  } else {
    errorMsg.classList.add("show");
    document.getElementById("password-input").value = "";
    document.getElementById("password-input").focus();
  }
}

document.getElementById("password-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter") checkPassword();
});

// ============================================================
//  NAVIGATION & SCROLLING
// ============================================================
function goToScreen(screenId) {
    const screens = document.querySelectorAll('.fullscreen-section');
    screens.forEach(s => {
        if(s.id === screenId) {
            s.classList.remove('hidden');
            // small delay to allow display:block to apply before opacity transition
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
    window.scrollTo(0, 0);
    document.getElementById("main-experience").classList.add("hidden");
    document.getElementById("password-input").value = "";
    document.getElementById("error-msg").classList.remove("show");
    goToScreen('screen-intro');
}

// ============================================================
//  CINEMATIC GALLERY
// ============================================================
let currentIndex = 0;

function loadPhoto(index) {
  const img     = document.getElementById("gallery-main-img");
  const caption = document.getElementById("gallery-caption");
  const counter = document.getElementById("gallery-counter");

  img.classList.add("fade");

  setTimeout(() => {
    img.src = photos[index].src;
    caption.textContent = photos[index].caption || "";
    counter.textContent = `Memory #${index + 1}`;

    img.onload = () => img.classList.remove("fade");
    if (img.complete) img.classList.remove("fade");
    
    // Preload next image
    const nextIdx = (index + 1) % photos.length;
    const preload = new Image();
    preload.src = photos[nextIdx].src;
  }, 300);
}

function nextPhoto() {
  if(photos.length === 0) return;
  currentIndex = (currentIndex + 1) % photos.length;
  loadPhoto(currentIndex);
}

function prevPhoto() {
  if(photos.length === 0) return;
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  loadPhoto(currentIndex);
}

// Keyboard arrow navigation
document.addEventListener("keydown", function (e) {
  const mainVisible = !document.getElementById("main-experience").classList.contains("hidden");
  if (!mainVisible) return;
  
  // Only trigger if gallery is in viewport
  const gallery = document.getElementById("screen-gallery");
  const rect = gallery.getBoundingClientRect();
  if(rect.top < window.innerHeight && rect.bottom > 0) {
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft")  prevPhoto();
  }
});

// Touch/swipe support for mobile gallery
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
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger typewriter when love letter section is visible
                if(entry.target.id === 'screen-letter' && !typewriterDone) {
                    typewriterDone = true;
                    typeWriterEffect();
                }
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
    
    // also observe the section for typewriter trigger
    observer.observe(document.getElementById('screen-letter'));
}

// Love Letter Typewriter
const letterText = `You know what's funny?

Out of all the people in this huge world,
somehow I found you.

And somehow,
you became my favourite person.

My favourite notification.
My favourite conversation.
My favourite smile.
My favourite headache.
My favourite everything.

I don't know what the future looks like.

But if I get to keep annoying you,
laughing with you,
fighting with you,
making up with you,
and creating memories with you...

I think I'll be okay.

Because wherever you are...

that's where my little world feels right. ❤️`;

function typeWriterEffect() {
    const el = document.getElementById('typewriter-text');
    el.textContent = "";
    let i = 0;
    const speed = 40; // ms per char
    
    function type() {
        if (i < letterText.length) {
            el.textContent += letterText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    setTimeout(type, 500); // small delay before starting
}

// ============================================================
//  MUSIC PLAYER & PARTICLES
// ============================================================
let isMusicPlaying = false;
function toggleMusic() {
    const audio = document.getElementById("bg-audio");
    const text = document.querySelector(".music-text");
    
    // Note: since no src is provided yet, this will just toggle UI
    if (isMusicPlaying) {
        audio.pause();
        text.textContent = "Play our song";
    } else {
        // audio.play().catch(e => console.log("Audio play failed/no source"));
        text.textContent = "Playing... ❤️";
    }
    isMusicPlaying = !isMusicPlaying;
}

// Generate background particles
function createParticles() {
    const container = document.getElementById('particles-bg');
    if(!container) return;
    
    const count = 25;
    for(let i=0; i<count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        
        // Randomize size, position, and duration
        const size = Math.random() * 8 + 3; // 3px to 11px
        const left = Math.random() * 100; // 0 to 100%
        const duration = Math.random() * 20 + 10; // 10s to 30s
        const delay = Math.random() * 20; // 0s to 20s delay
        
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${left}%`;
        p.style.animationDuration = `${duration}s`;
        p.style.animationDelay = `${delay}s`;
        
        container.appendChild(p);
    }
}
document.addEventListener("DOMContentLoaded", createParticles);
"""

    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(photos_array_str + "\n" + new_logic)
        
    print("Successfully updated script.js")

if __name__ == "__main__":
    update_script()
