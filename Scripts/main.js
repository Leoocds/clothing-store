document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let autoAdvanceInterval;

    function showSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        clearInterval(autoAdvanceInterval);
        autoAdvance();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        clearInterval(autoAdvanceInterval);
        autoAdvance();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    function autoAdvance() {
        autoAdvanceInterval = setInterval(nextSlide, 2500);
    }

    showSlide(currentIndex);
    autoAdvance();
});


/* SUB MENU */

const menuSubItems = document.querySelectorAll('.menusub');

menuSubItems.forEach(menuSubItem => {
  menuSubItem.addEventListener('mouseover', () => {
    const submenu = menuSubItem.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = 'block';
    }
  });

  menuSubItem.addEventListener('mouseout', () => {
    const submenu = menuSubItem.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = 'none';
    }
  });
});