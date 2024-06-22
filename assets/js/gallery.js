$(document).ready(function() { 
    $('.gallery__list').slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
    });
});