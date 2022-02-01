$(document).ready(function(){
    $(".slider-one").owlCarousel({
        
        items: 1,
        loop: true,
        dots:true, 
        smartSpeed: 2000,
        margin:30


    });
  });

  const nextIcon = '<img src="./img/sales/right-arrow.png" alt:"right">';
  const prevIcon = '<img src="./img/sales/left-arrow.png" alt:"left">';
  $(document).ready(function(){
    $(".slide-two").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        navText: [
            prevIcon,
            nextIcon,
        ], 
        smartSpeed: 2000,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:1,
                margin:30,
                
            },
            850:{
                items:3,
                margin:100,
            },
            1170:{
                items:4,
                margin:20,
            }
        }


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