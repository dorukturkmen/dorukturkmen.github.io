// Main JavaScript
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       SPA ROUTING
       ========================================= */
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    function navigateTo(targetId) {
        // 1. Hide all sections first
        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        // 2. Remove 'active' styling from all nav buttons
        navItems.forEach(item => {
            item.classList.remove('active');
        });

        // 3. Show the section user clicked on
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        }

        // 4. Add 'active' styling to the clicked nav button
        navItems.forEach(item => {
            if (item.dataset.target === targetId) {
                item.classList.add('active');
            }
        });

        // 5. Scroll to top of page so user sees the start of new section
        window.scrollTo(0, 0);
    }

    // Click Event Listeners
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.dataset.target;
            navigateTo(targetId);
        });
    });

    /* =========================================
       TYPOGRAPHICAL EFFECT
       ========================================= */
    const shrinkElement = document.querySelector('.shrink-text');
    if (shrinkElement) {
        const text = shrinkElement.innerText;
        const chars = text.split('');
        shrinkElement.innerText = '';

        chars.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;

            const totalChars = chars.length;
            const size = 1 - (index / (totalChars - 1));
            const finalSize = Math.max(0, size); // Avoid negative sizes

            span.style.fontSize = `${finalSize}em`;
            shrinkElement.appendChild(span);
        });
    }

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
