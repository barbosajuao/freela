document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    var totalSlides = slides.length;

    function showSlide(index) {
        // Move o wrapper do slider
        var offset = -index * 100 + '%';
        document.querySelector('.slider-wrapper').style.transform = 'translateX(' + offset + ')';

        // Atualiza as bolinhas
        dots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Navegação pelas setas
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Navegação pelas bolinhas
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Inicia mostrando o primeiro slide
    showSlide(currentIndex);
});
