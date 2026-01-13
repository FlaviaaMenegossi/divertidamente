document.addEventListener('DOMContentLoaded', () => {
    console.log('Divertida Mente 2 Landing Page Loaded');

    // Simple Parallax for Hero Image
    const heroImage = document.querySelector('.hero__image');
    if (heroImage) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            heroImage.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
        });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.character-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Character Navigation Tabs
    const navItems = document.querySelectorAll('.characters__menu-item');
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all
                navItems.forEach(nav => nav.classList.remove('characters__menu-item--active'));

                // Add active class to clicked
                item.classList.add('characters__menu-item--active');

                // Add active class to clicked
                item.classList.add('characters__menu-item--active');

                // Content Switching Logic
                const tabId = item.dataset.tab;
                const contents = document.querySelectorAll('.characters__content');

                contents.forEach(content => {
                    content.style.display = 'none'; // Hide all
                    content.style.opacity = '0';
                    content.style.transform = 'translateY(20px)';
                });

                const activeContent = document.getElementById(tabId);
                if (activeContent) {
                    activeContent.style.display = 'block';
                    // Small delay to allow display:block to apply before opacity transition
                    setTimeout(() => {
                        activeContent.style.opacity = '1';
                        activeContent.style.transform = 'translateY(0)';
                    }, 50);
                }

                console.log('Tab selected:', tabId);
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle current item
            item.classList.toggle('faq__item--active');
        });
    });
});

