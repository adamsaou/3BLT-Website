document.addEventListener('DOMContentLoaded', function() {
    // Handle webinar registration
    const registerButtons = document.querySelectorAll('.webinar-card .btn');
    
    registerButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real application, this would open a registration form or modal
            alert('Webinar registration would be processed here in a production environment.');
        });
    });
    
    // Featured webinar play button
    const featuredWebinar = document.querySelector('.featured-webinar .btn-primary');
    
    if (featuredWebinar) {
        featuredWebinar.addEventListener('click', function() {
            // In a real application, this would play the webinar video or redirect to a video page
            alert('Webinar replay would start here in a production environment.');
        });
    }
    
    // Webinar archive button
    const archiveButton = document.querySelector('.webinars-archive .btn');
    
    if (archiveButton) {
        archiveButton.addEventListener('click', function() {
            // In a real application, this would redirect to the archive page
            alert('In a production environment, this would take you to the webinar archive page.');
        });
    }
    
    // Add hover effects to webinar cards
    const webinarCards = document.querySelectorAll('.webinar-card');
    
    webinarCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = 'var(--box-shadow-lg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});