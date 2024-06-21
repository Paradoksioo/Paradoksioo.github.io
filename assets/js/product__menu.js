$(document).ready(function () {
    $('.product__item').each(function () {
        var $container = $(this);

        $container.find('.product__type').on('click', function () {
            var index = $(this).index();

            // Remove active class from all tabs and menus in this container
            $container.find('.product__type').removeClass('active');
            $container.find('.product__menu__tab').removeClass('active');

            // Add active class to the clicked tab and corresponding menu in this container
            $(this).addClass('active');
            $container.find('.product__menu__tab').eq(index).addClass('active');
        });
    });
    
});