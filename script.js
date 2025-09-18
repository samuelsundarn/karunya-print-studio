// Global Variables
let currentSlide = 0;
let carouselInterval;
let typingInterval;
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentWord = '';

const words = ['Design', 'Print', 'Deliver'];

// DOM Elements
const carousel = {
    track: null,
    slides: [],
    dots: [],
    prevBtn: null,
    nextBtn: null
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeTypingAnimation();
    initializeForms();
    initializeScrolling();
    initializeModals();
    initializeMobileMenu();
});

// Carousel Functions
function initializeCarousel() {
    carousel.track = document.getElementById('carouselTrack');
    carousel.slides = document.querySelectorAll('.carousel-slide');
    carousel.dots = document.querySelectorAll('.dot');
    carousel.prevBtn = document.getElementById('carouselPrev');
    carousel.nextBtn = document.getElementById('carouselNext');

    if (!carousel.track) return;

    // Add event listeners
    if (carousel.prevBtn) carousel.prevBtn.addEventListener('click', prevSlide);
    if (carousel.nextBtn) carousel.nextBtn.addEventListener('click', nextSlide);

    carousel.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Touch/swipe support
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    carousel.track.addEventListener('touchstart', handleStart, { passive: true });
    carousel.track.addEventListener('touchmove', handleMove, { passive: true });
    carousel.track.addEventListener('touchend', handleEnd, { passive: true });
    
    carousel.track.addEventListener('mousedown', handleStart);
    carousel.track.addEventListener('mousemove', handleMove);
    carousel.track.addEventListener('mouseup', handleEnd);
    carousel.track.addEventListener('mouseleave', handleEnd);

    function handleStart(e) {
        isDragging = true;
        startX = getPositionX(e);
        currentX = startX;
        pauseAutoPlay();
    }

    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = getPositionX(e);
    }

    function handleEnd() {
        if (!isDragging) return;
        isDragging = false;

        const diffX = startX - currentX;
        const threshold = 50;

        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }

        startAutoPlay();
    }

    function getPositionX(e) {
        return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    }

    // Start auto-play
    startAutoPlay();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carousel.slides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carousel.slides.length) % carousel.slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    pauseAutoPlay();
    startAutoPlay();
}

function updateCarousel() {
    if (!carousel.track) return;

    // Update slide position
    const translateX = -currentSlide * 100;
    carousel.track.style.transform = `translateX(${translateX}%)`;

    // Update active slide
    carousel.slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    // Update dots
    carousel.dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function startAutoPlay() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function pauseAutoPlay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

// Typing Animation
function initializeTypingAnimation() {
    const typingElement = document.getElementById('typingWord');
    if (!typingElement) return;

    function typeWord() {
        const word = words[wordIndex];
        const typeSpeed = isDeleting ? 50 : 150;

        if (!isDeleting && charIndex < word.length) {
            currentWord = word.substring(0, charIndex + 1);
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            currentWord = word.substring(0, charIndex - 1);
            charIndex--;
        } else if (!isDeleting && charIndex === word.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 1000);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        typingElement.textContent = currentWord;

        setTimeout(typeWord, typeSpeed);
    }

    typeWord();
}

// Form Handling
function initializeForms() {
    const callbackForm = document.getElementById('callbackForm');
    const modalForm = document.getElementById('modalForm');

    if (callbackForm) {
        callbackForm.addEventListener('submit', handleCallbackSubmit);
    }

    if (modalForm) {
        modalForm.addEventListener('submit', handleModalSubmit);
    }

    // Request callback buttons
    const requestCallbackBtns = document.querySelectorAll('#requestCallbackBtn, #heroCallbackBtn');
    requestCallbackBtns.forEach(btn => {
        btn.addEventListener('click', showCallbackModal);
    });
}

function handleCallbackSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.name || !data.phone) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // Hide form, show success message
        const formContainer = document.getElementById('formContainer');
        const successMessage = document.getElementById('successMessage');
        
        formContainer.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset button state
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        
        console.log('Form submitted:', data);
    }, 2000);
}

function handleModalSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!data.name || !data.phone) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        hideCallbackModal();
        alert('Thank you! We will call you back within 24 hours.');
        
        // Reset form and button
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        console.log('Modal form submitted:', data);
    }, 2000);
}

function resetForm() {
    const formContainer = document.getElementById('formContainer');
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('callbackForm');
    
    formContainer.style.display = 'block';
    successMessage.style.display = 'none';
    
    if (form) form.reset();
}

// Modal Functions
function initializeModals() {
    const modal = document.getElementById('callbackModal');
    const closeBtn = document.getElementById('closeModal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', hideCallbackModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideCallbackModal();
            }
        });
    }
    
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideCallbackModal();
        }
    });
}

function showCallbackModal() {
    const modal = document.getElementById('callbackModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hideCallbackModal() {
    const modal = document.getElementById('callbackModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Smooth Scrolling
function initializeScrolling() {
    // Smooth scroll for anchor links
    document.addEventListener('click', (e) => {
        const target = e.target;
        
        // Handle smooth scrolling for hash links
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const targetId = target.getAttribute('href').substring(1);
            scrollToSection(targetId);
        }
        
        // Handle button clicks that should scroll
        if (target.tagName === 'BUTTON' && target.hasAttribute('onclick')) {
            const onclickValue = target.getAttribute('onclick');
            if (onclickValue?.includes('scrollToSection')) {
                e.preventDefault();
                const match = onclickValue.match(/scrollToSection\('([^']+)'\)/);
                if (match) {
                    scrollToSection(match[1]);
                }
            }
        }
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations after DOM load
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Handle page visibility change (pause animations when tab is not active)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        pauseAutoPlay();
    } else {
        startAutoPlay();
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (carouselInterval) clearInterval(carouselInterval);
    if (typingInterval) clearInterval(typingInterval);
});

// Global functions for inline event handlers
window.scrollToSection = scrollToSection;