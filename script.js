
gsap.registerPlugin(ScrollTrigger);


function initializeLoadAnimations() {
   
    const timeline = gsap.timeline();
    
    timeline.from('.headline-char', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out'
    }, 0);

    
    timeline.from('.stat-item', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    }, 0.4);

    
    timeline.from('.scroll-indicator', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'power2.out'
    }, 0.8);

    
    timeline.from('.accent-line', {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.inOut'
    }, 0.6);
}


function initScrollTriggerParallax() {
    
    gsap.to('.shape-1', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            markers: false 
        },
        y: -150,
        scale: 0.8,
        rotation: 45,
        ease: 'none'
    });

    
    gsap.to('.shape-2', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2
        },
        x: 100,
        y: -100,
        rotation: -60,
        opacity: 0.05,
        ease: 'none'
    });

    
    gsap.to('.shape-3', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8
        },
        x: -150,
        y: 120,
        scale: 1.4,
        rotation: 90,
        ease: 'none'
    });

    
    gsap.to('.shape-4', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
        },
        y: -80,
        x: 60,
        rotation: 180,
        ease: 'none'
    });
}


function initHeadlineFadeOut() {
    gsap.to('.headline', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        opacity: 0,
        y: -50,
        ease: 'power2.inOut'
    });

    gsap.to('.stats-container', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        opacity: 0,
        y: 50,
        ease: 'power2.inOut'
    });

    gsap.to('.scroll-indicator', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '30% top',
            scrub: 0.5
        },
        opacity: 0,
        ease: 'power2.out'
    });
}


function initContentCardsAnimation() {
    const cards = gsap.utils.toArray('.card');
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 0.5,
                markers: false
            },
            opacity: 0,
            y: 60,
            scale: 0.9,
            ease: 'power3.out',
            duration: 1
        });

     
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center',
                end: 'bottom center',
                scrub: 1
            },
            y: -30,
            ease: 'none'
        });
    });
}


function initCounterAnimation() {
    const statNumbers = gsap.utils.toArray('.stat-number');

    statNumbers.forEach(element => {
        const finalNumber = parseInt(element.getAttribute('data-target'));
        
        gsap.to(element, {
            scrollTrigger: {
                trigger: '.stats-container',
                start: 'top 80%',
                end: 'top 20%',
                onEnter: () => animateNumber(element, finalNumber)
            },
            duration: 0
        });
    });
}

function animateNumber(element, finalNumber) {
    let currentNumber = 0;
    const text = element.innerText;
    const suffix = text.replace(/^\d+/, '');

    gsap.to({}, {
        duration: 1.5,
        onUpdate: function() {
            currentNumber = Math.floor(this.progress() * finalNumber);
            element.innerText = currentNumber + suffix;
        },
        ease: 'power2.out'
    });
}


function initMouseParallax() {
    const container = document.getElementById('parallax-container');
    const shapes = gsap.utils.toArray('.hover-element');

    document.addEventListener('mousemove', (e) => {
        if (window.innerHeight < 1200) return; // Disable on mobile

        const rect = container.getBoundingClientRect();
        
        
        if (rect.top > window.innerHeight || rect.bottom < 0) return;

        const mouseX = e.clientX - window.innerWidth / 2;
        const mouseY = e.clientY - window.innerHeight / 2;

        shapes.forEach((shape, index) => {
            const intensity = (index + 1) * 0.3;
            gsap.to(shape, {
                x: mouseX * intensity * 0.02,
                y: mouseY * intensity * 0.02,
                duration: 0.6,
                ease: 'power2.out'
            });
        });
    });
}


function initScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #d4af37, #e5c158);
        width: 0%;
        z-index: 1000;
        box-shadow: 0 2px 12px rgba(212, 175, 55, 0.6);
    `;
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        width: '100%',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            onUpdate: (self) => {
                progressBar.style.width = (self.getVelocity() > 0 ? self.progress * 100 : self.progress * 100) + '%';
            }
        },
        duration: 1
    });
}


function initAccentLinesAnimation() {
    gsap.from('.accent-line-1', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'center center',
            scrub: 1
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'power2.inOut'
    });

    gsap.from('.accent-line-2', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top center',
            end: 'center center',
            scrub: 1
        },
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'power2.inOut'
    });
}


window.addEventListener('load', () => {
    // Initialize all animations
    initializeLoadAnimations();
    initScrollTriggerParallax();
    initHeadlineFadeOut();
    initContentCardsAnimation();
    initCounterAnimation();
    initMouseParallax();
    initScrollProgressBar();
    initAccentLinesAnimation();

    console.log('✨ GSAP ScrollTrigger initialized');
    console.log('🎯 Features: Parallax, Counter, Hover, Progress Bar');
    console.log('📊 Scroll Progress: Enabled');
});


window.addEventListener('resize', () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
});
