$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
        items: 1,
        loop: true,
        dots:true, 
        smartSpeed: 2000,


    });
  });


  $(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
}); 

$(document).ready(function(){
    $('.block__title').click(function(event){
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp('active');
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
}); 