$(document).ready(function () {
    $('.product__image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50000,
        infinite: false,
        dots: true,
        arrows: true,
        
    });

    $('.product__image__menu').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50000,
        
        dots: false,
        arrows: true,
        asNavFor: '.thumb-slider'
        
    });

    $('.thumb-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product__image__menu',
        dots: false,
        arrow: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.toggleDisc').on('click', function() {
        $(this).closest('.product__disc').find('.product__disc__menu').toggleClass('active');
    });

    $('.closeProductMenu').on('click', function() {
        $(this).closest('.product__disc__menu').removeClass('active');
    });

    $('.product__image__menu img').on('click', function() {
        const src = $(this).attr('src');
        const fullScreenImage = `<div class="fullscreen-overlay">
                                    <img src="${src}" alt="fullscreen image">
                                    <button class="close-fullscreen">X</button>
                                 </div>`;
        $('body').append(fullScreenImage);
        $('.fullscreen-overlay').on('click', '.close-fullscreen', function() {
            $(this).closest('.fullscreen-overlay').remove();
        });
    });

    $('.anchor__button__close').click(function() { 
        $('.product__disc__menu').removeClass('active');
    });
});