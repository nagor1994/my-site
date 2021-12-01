$(function(){
    let nav = $("#nav");
    let header = $("#header");
    let headerH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        if( scrollPos > headerH ) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
        console.log(scrollPos);
    });

});

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
}); 