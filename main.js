document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});

// Ambient Cursor Glow Animation
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor-glow');
    if (cursor) {
        // Update position variables
        const x = e.clientX;
        const y = e.clientY;
        
        // Apply transform
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    }
});

// Splash Screen Logic (Magical Fireflies)
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const container = document.getElementById('fireflies-container');
    const titleElement = document.getElementById('splash-title');
    const text = "GARDEN WOODS";

    if (splash && container && titleElement) {
        
        // 1. Generate Fireflies
        for (let i = 0; i < 30; i++) {
            const firefly = document.createElement('div');
            firefly.classList.add('firefly');
            
            // Random positioning and animation delays
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = 10 + Math.random() * 10; // 10-20s float duration
            
            firefly.style.left = `${left}%`;
            firefly.style.top = `${top}%`;
            firefly.style.animationDelay = `${delay}s, ${delay}s`; // for move and twinkle
            firefly.style.animationDuration = `${duration}s, 3s`;
            
            container.appendChild(firefly);
        }

        // 2. Animate Text Letter-by-Letter
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Handle space
            span.classList.add('splash-char');
            span.style.animationDelay = `${index * 0.15 + 1}s`; // Start after 1s, stagger 0.15s
            titleElement.appendChild(span);
        });

        // 3. Exit Transition
        // Text animation takes roughly: 1s wait + (12 chars * 0.15s) + 0.5s duration ~= 3.3s
        // Let's hold for a bit more, total 5s
        setTimeout(() => {
            splash.classList.add('slide-up');
        }, 5000); 
    }
});
