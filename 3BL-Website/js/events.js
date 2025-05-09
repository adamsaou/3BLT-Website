document.addEventListener('DOMContentLoaded', function() {
    // Handle counter animations
    const counters = document.querySelectorAll('.counter-number');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    function animateCounter(counterElement) {
        const target = parseInt(counterElement.innerText, 10);
        const duration = 2000; // ms
        const increment = Math.ceil(target / (duration / 16)); // 16ms is roughly one frame at 60fps
        let current = 0;
        
        // For counters with + sign
        const hasPlus = counterElement.innerText.includes('+');
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counterElement.innerText = hasPlus ? current + '+' : current;
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.innerText = hasPlus ? target + '+' : target;
            }
        };
        
        requestAnimationFrame(updateCounter);
    }
    
    // Image hover effects
    const zoomImages = document.querySelectorAll('.about-image, .card-image, .event-image');
    
    zoomImages.forEach(container => {
        const img = container.querySelector('img');
        
        if (img) {
            container.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
            });
            
            container.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        }
    });
    
    // Achievement card animations
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Webinar play button effect
    const playButton = document.querySelector('.play-button');
    
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Video playback would start here in a production environment.');
        });
    }
});