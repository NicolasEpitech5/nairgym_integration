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

// verif email for newsletter

function Valid_Email() {
    var verif 	= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
    if (verif.test(document.getElementById("email").value)) {
        $(".para").css({"opacity": "0"});
    } else {
        $(".para").css({"opacity": "1"});
        }
  }

// to keep the video playing o_O
document.getElementById('bgvid').play();