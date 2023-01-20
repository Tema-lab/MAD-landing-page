$(document).ready(function(){
    $(".navigation__wrapper .navigation__items .navigation__links").click(function() {
        $('.navigation__wrapper .navigation__items .navigation__links').removeClass('active');
        $(this).addClass('active');
    });
});