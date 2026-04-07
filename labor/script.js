// Simple script to handle page transition effects
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // Only animating internal links
            if(link.hostname === window.location.hostname && link.pathname !== window.location.pathname) {
                e.preventDefault();
                const target = link.href;
                
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.4s ease';
                
                setTimeout(() => {
                    window.location.href = target;
                }, 400);
            }
        });
    });

    // Intersection Observer for scroll interaction in Manifesto
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -20% 0px', // trigger when item is 20% up from bottom
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else {
                // Remove to allow re-trigger on scroll up/down
                entry.target.classList.remove('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.manifesto-item').forEach(item => {
        observer.observe(item);
    });

    // Drawer Logic for People Page
    const readMoreBtns = document.querySelectorAll('.btn-read-more');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const memberDrawer = document.getElementById('memberDrawer');
    const drawerCloseBtn = document.getElementById('drawerClose');

    if (readMoreBtns.length > 0 && memberDrawer) {
        readMoreBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.member-card');
                
                // Set the active card
                document.querySelectorAll('.member-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                
                // Extract data
                const title = card.querySelector('.member-title').innerText;
                const name = card.querySelector('.member-name').innerText;
                const research = card.querySelector('.member-bio').innerText;
                const fullBio = card.querySelector('.member-full-bio').innerHTML;
                const socialsHTML = card.querySelector('.member-socials').innerHTML;

                // Populate drawer
                document.getElementById('drawerTitle').innerText = title;
                document.getElementById('drawerName').innerText = name;
                document.getElementById('drawerResearch').innerText = research;
                document.getElementById('drawerBio').innerHTML = fullBio;
                document.getElementById('drawerSocials').innerHTML = socialsHTML;

                // Open drawer
                drawerOverlay.classList.add('active');
                memberDrawer.classList.add('active');
                document.body.style.overflow = 'hidden'; // prevent background scroll
            });
        });

        const closeDrawer = () => {
            drawerOverlay.classList.remove('active');
            memberDrawer.classList.remove('active');
            document.body.style.overflow = ''; // restore scroll
            
            // Remove active from any card
            document.querySelectorAll('.member-card').forEach(c => c.classList.remove('active'));
        };

        drawerCloseBtn.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);
    }

    // Cluster Switching Logic for Research Page
    const clusterBtns = document.querySelectorAll('.cluster-btn');
    const clusterContents = document.querySelectorAll('.cluster-content');

    if (clusterBtns.length > 0) {
        clusterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetCluster = btn.getAttribute('data-cluster');

                // Update buttons
                clusterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Update content
                clusterContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === targetCluster) {
                        content.classList.add('active');
                    }
                });

                // Scroll to top of main content for better UX on mobile
                // window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // Render Research Articles
    const renderArticles = () => {
        if (typeof researchArticles === 'undefined') return;

        researchArticles.forEach(article => {
            const gridId = `${article.cluster}-grid`;
            const grid = document.getElementById(gridId);

            if (grid) {
                const articleCard = document.createElement('div');
                articleCard.className = 'article-card';

                const titleHTML = article.link 
                    ? `<h3 class="article-title"><a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3>`
                    : `<h3 class="article-title">${article.title}</h3>`;

                articleCard.innerHTML = `
                    <div class="article-year">${article.year}</div>
                    ${titleHTML}
                    <div class="article-journal">${article.journal || ''}</div>
                    <div class="article-authors">${article.authors}</div>
                `;
                
                grid.appendChild(articleCard);
            }
        });
    };

    renderArticles();
});
