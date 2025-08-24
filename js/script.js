function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    const targetSection = document.getElementById(sectionName);
    targetSection.classList.add('active');
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Find the link that corresponds to the clicked section
    const currentLink = document.querySelector(`.nav-links a[onclick*="${sectionName}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
    
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth'
    });

    setTimeout(() => {
        const cards = targetSection.querySelectorAll('.feature-card, .product-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-on-scroll');
        });
    }, 100);

    // Hide mobile menu after selection
    const navLinksList = document.querySelector('.nav-links');
    if (navLinksList.classList.contains('active')) {
        navLinksList.classList.remove('active');
    }
}

// Enhanced form submission with luxury feedback
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #0a1628 0%, #1a2f4a 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 20px;
        box-shadow: 0 30px 100px rgba(0,0,0,0.3);
        text-align: center;
        z-index: 10000;
        font-family: 'Inter', sans-serif;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(212, 175, 55, 0.3);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translate(-50%, -50%) scale(0.8);
    `;
    
    notification.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 1rem;">💎</div>
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 0.5rem; color: #d4af37;">Thank You</h3>
        <p style="opacity: 0.9; margin: 0;">Your exclusive inquiry has been received. Our luxury concierge will contact you within 24 hours.</p>
    `;
    
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
    
    this.reset();
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Advanced scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Enhanced header scroll effect
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 10px 40px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
    
    if (scrollY > lastScrollY && scrollY > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = scrollY;
});

// Parallax effects for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    if (hero && document.getElementById('home').classList.contains('active')) {
        hero.style.transform = `translateY(${parallax}px)`;
    }
});

// Luxury loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0a1628 0%, #1a2f4a 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.8s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%); border-radius: 16px; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; animation: pulse 2s infinite;">💎</div>
            <p style="font-family: 'Playfair Display', serif; font-size: 1.2rem; margin: 0;">Loading Excellence...</p>
        </div>
    `;
    
    document.body.prepend(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 800);
    }, 1500);
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏆 Devi Jewellers - Ultra Luxury Experience Loaded Successfully');
    
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
});