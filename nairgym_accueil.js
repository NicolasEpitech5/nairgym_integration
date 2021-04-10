// reservation button color transition
$("#resa").on("mouseenter", function(){
    $(this).css({"background-color": "#F17629", "color": "#FFF"});
    });
    
$("#resa").on("mouseleave", function(){
    $(this).css({"background-color": "#FFF", "color": "#F17629"});
    });


// foxies shadow transition
$('.fox-card').hover(
    function(){ $(this).toggleClass('shadow-lg')
    });


// zoom on news images
$(document).ready(function(){
    $('.actu-img').hover(function() {
        $(this).toggleClass('zoom');
    });
});


// facebook, instagram and linkedin transitions
$(".fab").on("mouseenter", function(){
    $(this).css({"background-color": "#FFF", "color": "#F17629"});
    });
    
$(".fab").on("mouseleave", function(){
    $(this).css({"background-color": "#F17629", "color": "#FFF"});
    });


// dropdown menu on navbar
// $('#deroulant').hover(
//     function(){ $('toggle').toggleClass('')
//     });