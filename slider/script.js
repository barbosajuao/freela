$(document).ready(function(){
    var slideWidth = $('.carousel-slide').outerWidth(true);
    var totalWidth = slideWidth * $('.carousel-slide').length;

    $('.carousel-wrapper').css('width', totalWidth + 'px');
});
