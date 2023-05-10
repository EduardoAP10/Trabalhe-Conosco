document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('myCarousel');

    if (carousel) {
        const carouselInterval = 3000; // Define o intervalo entre as transições (em milissegundos)

        carousel.setAttribute('data-interval', carouselInterval);

        // Função para ir ao próximo slide
        function goToNextSlide() {
            const activeItem = carousel.querySelector('.carousel-item.active');
            const nextItem = activeItem.nextElementSibling || carousel.querySelector('.carousel-item:first-child');

            // Atualiza os indicadores do carrossel
            const activeIndicator = carousel.querySelector('.carousel-indicators .active');
            const indicators = Array.from(carousel.querySelectorAll('.carousel-indicators li'));
            const nextIndicatorIndex = (indicators.indexOf(activeIndicator) + 1) % indicators.length;

            activeIndicator.classList.remove('active');
            indicators[nextIndicatorIndex].classList.add('active');

            // Transiciona para o próximo slide
            activeItem.classList.remove('active');
            nextItem.classList.add('active');
        }

        // setInterval(goToNextSlide, carouselInterval);
    }
});
