// Typewriter Effect
const dynamicTitles = [
    "Backend Developer",
    "Software Engineer",
    "Computer Scientist"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const deleteSpeed = 50;
const pauseBetween = 2000;

function typeWriterEffect() {
    const currentTitle = dynamicTitles[titleIndex];
    const typewriterElement = document.getElementById('typewriter');
    
    if (!isDeleting) {
        typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(typeWriterEffect, pauseBetween);
            return;
        }
    } else {
        typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % dynamicTitles.length;
        }
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    setTimeout(typeWriterEffect, speed);
}

// // Parallax Background Effect
// function createParallax() {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
//     const hero = document.querySelector('.hero');
    
//     canvas.className = 'parallax-canvas';
//     hero.appendChild(canvas);

//     function resize() {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//     }

//     function animate() {
//         ctx.fillStyle = '#0a192f';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         // Create gradient animation
//         const gradient = ctx.createLinearGradient(
//             0, 0, canvas.width, canvas.height
//         );
//         gradient.addColorStop(0, '#4facfe22');
//         gradient.addColorStop(1, '#00f2fe22');
        
//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         for(let i = 0; i < 5; i++) {
//             const x = Math.random() * canvas.width;
//             const y = Math.random() * canvas.height;
//             const radius = Math.random() * 400 + 100;
//             ctx.moveTo(x + radius, y);
//             ctx.arc(x, y, radius, 0, Math.PI * 2);
//         }
//         ctx.fill();
        
//         requestAnimationFrame(animate);
//     }

//     window.addEventListener('resize', resize);
//     resize();
//     animate();
// }

// Initialize Hero Effects
document.addEventListener('DOMContentLoaded', () => {
    typeWriterEffect();
   // createParallax();
});