$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger,.header__menu,.top-main,.main,.menu__list-link').toggleClass('active');

        if ($('.menu__burger').hasClass('active')) {
            $('.logo__img').attr('src', 'images/logo2.png')
        } else {
            $('.logo__img').attr('src', 'images/logo.png')
        }
    });

});


