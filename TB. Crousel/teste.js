const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function autoCarousel() {
    carouselItems[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % carouselItems.length;
    carouselItems[currentItem].classList.add('active');
    setTimeout(autoCarousel, );
}

autoCarousel();
