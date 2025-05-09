document.addEventListener('DOMContentLoaded', function() {
    // Make hero content visible after page load
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('visible');
    }, 300);

    // Setup scroll to section buttons
    document.querySelectorAll('[data-scroll-to]').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize components
    initAnimations();
});

// Helper functions
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function initAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    });
    
    elements.forEach(element => {
        fadeInObserver.observe(element);
    });
}