// Main JavaScript
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       SPA ROUTING (REMOVED: Now using separate HTML files)
       ========================================= */



    /* =========================================
       SCROLL ANIMATIONS (Intersection Observer)
       ========================================= */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach(el => observer.observe(el));

    /* =========================================
       MOBILE MENU TOGGLE
       ========================================= */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Simple toggle for now
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px'; // Adjust based on nav height
                navLinks.style.right = '5%';
                navLinks.style.background = '#050505'; // match bg
                navLinks.style.padding = '20px';
                navLinks.style.border = '1px solid #333';
            }
        });
    }

});
