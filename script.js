let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

function toggleMenu() {
    const menu = document.getElementById('menu').querySelector('ul');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
