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

    /* =========================================
       RESEARCH ABSTRACT TOGGLE
       ========================================= */
    document.querySelectorAll('.research-content p').forEach(p => {
        p.addEventListener('click', () => {
            p.classList.toggle('expanded');
        });
    });

    /* =========================================
       PIXELATED CURSOR EFFECT ON ABOUT PAGE
       ========================================= */
    const profileImg = document.getElementById('about-profile-img');
    const pixelCanvas = document.getElementById('pixel-canvas');

    if (profileImg && pixelCanvas) {
        const ctx = pixelCanvas.getContext('2d');
        let offscreenCanvas = document.createElement('canvas');
        let offCtx = offscreenCanvas.getContext('2d');
        
        const pixelationFactor = 0.04;
        let blockSize = 25;

        let activeBlocks = [];
        let isAnimating = false;

        function initCanvas() {
            pixelCanvas.width = profileImg.offsetWidth;
            pixelCanvas.height = profileImg.offsetHeight;
            offscreenCanvas.width = pixelCanvas.width;
            offscreenCanvas.height = pixelCanvas.height;

            blockSize = Math.max(5, Math.ceil(1 / pixelationFactor));
            const scaledWidth = Math.ceil(pixelCanvas.width / blockSize);
            const scaledHeight = Math.ceil(pixelCanvas.height / blockSize);
            
            let tempCanvas = document.createElement('canvas');
            tempCanvas.width = scaledWidth;
            tempCanvas.height = scaledHeight;
            let tempCtx = tempCanvas.getContext('2d');
            
            tempCtx.drawImage(profileImg, 0, 0, scaledWidth, scaledHeight);
            
            offCtx.imageSmoothingEnabled = false;
            offCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
            offCtx.drawImage(tempCanvas, 0, 0, scaledWidth, scaledHeight, 0, 0, scaledWidth * blockSize, scaledHeight * blockSize);
        }

        if (profileImg.complete) {
            initCanvas();
        } else {
            profileImg.addEventListener('load', initCanvas);
        }

        window.addEventListener('resize', initCanvas);

        function addBlock(x, y) {
            if (x < 0 || y < 0 || x >= pixelCanvas.width || y >= pixelCanvas.height) return;
            
            let existing = activeBlocks.find(b => b.x === x && b.y === y);
            if (existing) {
                existing.birth = Date.now();
                existing.life = 500 + Math.random() * 500;
            } else {
                activeBlocks.push({
                    x: x,
                    y: y,
                    birth: Date.now(),
                    life: 600 + Math.random() * 600,
                    maxOpacity: 0.8 + Math.random() * 0.2
                });
            }
        }

        profileImg.parentElement.addEventListener('mousemove', (e) => {
            const rect = pixelCanvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const gx = Math.floor(mouseX / blockSize) * blockSize;
            const gy = Math.floor(mouseY / blockSize) * blockSize;
            
            // Always spawn the block exactly under cursor
            addBlock(gx, gy);
            
            // Randomly spawn adjacent blocks
            const spread = 2;
            for (let i = 0; i < 4; i++) {
                const nx = gx + (Math.floor(Math.random() * (spread * 2 + 1)) - spread) * blockSize;
                const ny = gy + (Math.floor(Math.random() * (spread * 2 + 1)) - spread) * blockSize;
                if (Math.random() > 0.1) addBlock(nx, ny);
            }

            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(animate);
            }
        });

        function animate() {
            ctx.clearRect(0, 0, pixelCanvas.width, pixelCanvas.height);
            
            let now = Date.now();
            let hasActive = false;

            ctx.globalCompositeOperation = 'source-over';

            for (let i = activeBlocks.length - 1; i >= 0; i--) {
                let b = activeBlocks[i];
                let age = now - b.birth;
                
                if (age >= b.life) {
                    activeBlocks.splice(i, 1);
                    continue;
                }
                
                hasActive = true;
                let progress = age / b.life;
                // Easing curve makes it stay opaque longer then fade quickly
                ctx.globalAlpha = b.maxOpacity * (1 - Math.pow(progress, 3));
                
                ctx.drawImage(
                    offscreenCanvas, 
                    b.x, b.y, blockSize, blockSize, 
                    b.x, b.y, blockSize, blockSize
                );
            }
            
            ctx.globalAlpha = 1;
            
            if (hasActive) {
                requestAnimationFrame(animate);
            } else {
                isAnimating = false;
            }
        }
    }

});
