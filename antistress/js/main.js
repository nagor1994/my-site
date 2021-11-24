$(document).ready(function(){
    $('burger').click(function(event){
        $('burger, nav').togleClass('active');
    });
});  
  
  
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        0:{
            items:1,
        },
        400:{
            items:1,
            margin:30,
            
        },
        850:{
            items:2,
            margin:100,
        },
        1170:{
            items:3,
            margin:60,
        }
    }
})

  var dateEnd = new Date('2022-09-13 00:00:00'),
    dateNow = new Date(),
    date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

function countdown() {
    var dateLeft = date;
        dateTemp = 0;
    dateTemp = dateleft = Math.floor(dateLeft / (24 * 60 * 60));
    dateleft -= dateTemp * 24 * 60 * 60;
    // dateleft = Math.floor(dateLeft / (24 * 60 * 60));
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#days span').innerHTML = dateTemp;

    dateTemp = Math.floor(dateLeft / (60 * 60));
    dateLeft -= dateTemp * 60 * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#hours span').innerHTML = dateTemp;

    dateTemp = Math.floor(dateLeft / 60);
    dateLeft -= dateTemp * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#minutes span').innerHTML = dateTemp;
   
    if (dateLeft < 10) dateLeft = '0' + dateLeft;
    document.querySelector('#seconds span').innerHTML = dateLeft;
    date--;
}

setInterval(countdown, 1000);



// Nav Toggle
let nav = $("#nav");
let navToggle = $("#navToggle");

navToggle.on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("show");

});