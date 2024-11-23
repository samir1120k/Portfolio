// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for tagline
const options = {
    strings: ['Building intelligent solutions, one algorithm at a time.'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
};

const typed = new Typed('#ram', options);

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('header');
    parallax.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Form submission and validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nameInput = contactForm.elements['name'];
    const emailInput = contactForm.elements['email'];
    const messageInput = contactForm.elements['message'];
    
    // Basic validation
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // If validation passes, submit the form
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        alert('Oops! There was a problem submitting your form. Please try again later.');
        console.error(error);
    }
});

// Add animation class to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill, .project-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 50) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
