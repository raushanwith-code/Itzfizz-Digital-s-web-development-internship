
Itzfizz-Digital-s-web-development-internship/
│
├── index.html          # Main HTML file (hero section + stats)
├── style.css           # Custom CSS (if any)       # Tailwind setup (optional if CDN used)
├── script.js           # GSAP + ScrollTrigger animatio
│
├── README.md           # Project documentation


# Scroll-Driven Hero Section Animation

## 📌 Project Overview
This project demonstrates a **scroll-driven hero section animation** built using:
- HTML
- CSS
- JavaScript
- GSAP (GreenSock Animation Platform)
- Tailwind CSS

The hero section includes a headline and impact metrics that animate smoothly on page load and respond to scroll progress with parallax-style motion.

---

## 🔹 Features
- Smooth initial load animations (headline + stats).
- Scroll-based parallax interaction tied to scroll progress.
- Performance-optimized animations using `transform` properties.
- Responsive layout using Tailwind CSS.

---

## 🔹 Live Demo
- **Live Project:** [View Here](https://raushanwith-code.github.io/Itzfizz-Digital-s-web-development-internship/)  
- **GitHub Repository:** [View Code](https://github.com/raushanwith-code/Itzfizz-Digital-s-web-development-internship)

---

## 🔹 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/raushanwith-code/Itzfizz-Digital-s-web-development-internship.git

   // GSAP + ScrollTrigger animation
gsap.registerPlugin(ScrollTrigger);

// Initial load animation (headline + stats)
gsap.from(".headline", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".stats", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out"
});

// Scroll-driven parallax effect for hero image
gsap.to(".hero-image", {
  y: -100,
  scale: 1.1,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
