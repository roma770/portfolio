document.addEventListener("DOMContentLoaded", () => {
    // 1. Cień pod nawigacją przy scrollowaniu
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Płynne pojawianie się elementów (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Element pojawia się, gdy 15% jest widoczne na ekranie
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Przestajemy obserwować, gdy się pojawi
            }
        });
    }, observerOptions);

    // Szukamy wszystkich elementów z klasą fade-in i dodajemy je do obserwatora
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});