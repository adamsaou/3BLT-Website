document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.querySelector('.form-message.success');
    const errorMessage = document.querySelector('.form-message.error');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                from_name: document.getElementById('name').value,
                reply_to: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
              
            // Basic validation
            if (formData.from_name && formData.reply_to && formData.subject && formData.message) {
                // Initialize EmailJS
                emailjs.init("2bM9HA8zToziY2Otp"); // Replace with your EmailJS user ID
                
                // Send email using EmailJS
                emailjs.send("service_g07ptup", "template_bohztvb", formData)
                    .then(function(response) {
                        console.log("SUCCESS!", response.status, response.text);
                        contactForm.reset();
                        successMessage.classList.remove('hidden');
                        errorMessage.classList.add('hidden');
                        
                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            successMessage.classList.add('hidden');
                        }, 5000);
                    })
                    .catch(function(error) {
                        console.error("FAILED...", error);
                        errorMessage.classList.remove('hidden');
                        successMessage.classList.add('hidden');
                        
                        // Hide error message after 5 seconds
                        setTimeout(() => {
                            errorMessage.classList.add('hidden');
                        }, 5000);
                    });
            } else {
                // Show error message
                errorMessage.classList.remove('hidden');
                successMessage.classList.add('hidden');
                
                // Hide error message after 5 seconds
                setTimeout(() => {
                    errorMessage.classList.add('hidden');
                }, 5000);
            }
        });
    }
    
    // Social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});
