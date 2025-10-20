// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Welcome Button Interaction (Home Page)
const welcomeBtn = document.getElementById('welcomeBtn');
if (welcomeBtn) {
    welcomeBtn.addEventListener('click', () => {
        alert('Terima kasih telah mengunjungi website profil saya!');
        welcomeBtn.textContent = 'Selamat Datang!';
        welcomeBtn.style.background = '#27ae60';
    });
}

// Form Validation (Portfolio Page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert(`Terima kasih ${name}! Pesan Anda telah berhasil dikirim.`);
            contactForm.reset();
        } else {
            alert('Harap lengkapi semua field!');
        }
    });
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for saved dark mode preference
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    // Add dark mode toggle button to navigation
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        const darkModeBtn = document.createElement('button');
        darkModeBtn.textContent = '🌙';
        darkModeBtn.style.background = 'none';
        darkModeBtn.style.border = 'none';
        darkModeBtn.style.color = 'white';
        darkModeBtn.style.fontSize = '1.2rem';
        darkModeBtn.style.cursor = 'pointer';
        darkModeBtn.style.marginLeft = '1rem';
        darkModeBtn.addEventListener('click', toggleDarkMode);
        
        navContainer.appendChild(darkModeBtn);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
