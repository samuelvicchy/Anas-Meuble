// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Slider
let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const allSlides = document.querySelectorAll('.slide');
const totalSlides = allSlides.length;
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

function goToSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    currentSlide = index;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    setInterval(() => goToSlide(currentSlide + 1), 6000);
}

// Modals
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) e.target.style.display = 'none';
});

// Formulaire (simulation alerte + reset)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', e => {
        // e.preventDefault();  ← enlève ce commentaire si tu veux tester sans envoi réel
        // alert('Message envoyé ! (vérifie ta boîte Formspree)');
    });
}