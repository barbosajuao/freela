







                            /* aguarda o carregamento da pagina */
document.addEventListener('DOMContentLoaded', function() {
    var sliderWrapper = document.querySelector('.slider-wrapper');
    var slides = document.querySelectorAll('.slider');
    var dots = document.querySelectorAll('.ponto');
    var currentIndex = 0;
    var autoSlideInterval = 5000; // Tempo em milissegundos (3000ms = 3 segundos)

    function showSlide(index) {
        // Calcula o deslocamento necessário para o slide atual
        var offset = -index * 100 + '%';
        sliderWrapper.style.transform = 'translateX(' + offset + ')';

        // Atualiza as bolinhas




        dots.forEach(function(dots) {
           dots.classList.remove('ativado');
        });



        dots[index].classList.add('ativado');
        currentIndex = index;

        

        
    }



    // Navegação pelas setas
    document.querySelector('.voltar').addEventListener('click', function() {
        var nextIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        showSlide(nextIndex);
    });



    document.querySelector('.proximo').addEventListener('click', function() {
        var nextIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(nextIndex);
    });





    // Navegação pelas bolinhas
    dots.forEach(function(ponto, index) {
        ponto.addEventListener('click', function() {
            showSlide(index);
        });
    });

    // Exibe o primeiro slide ao carregar
    showSlide(0);

    // rolagem automatica
    setInterval(function() {
        var nextIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        showSlide(nextIndex);
    }, autoSlideInterval);
});