document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Handle scroll event for header background
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize header state on page load
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
    
    // Smooth scroll for navigation items
    document.querySelectorAll('.nav-menu button').forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            
            if (section) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                
                // Scroll to section
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !mobileToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
});