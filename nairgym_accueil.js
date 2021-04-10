$("#resa").on("mouseenter", function(){
    $(this).css({"background-color": "#F17629", "color": "#FFF"});
    });
    
$("#resa").on("mouseleave", function(){
    $(this).css({"background-color": "#FFF", "color": "#F17629"});
    });

$('.fox-card').hover(
    function(){ $(this).toggleClass('shadow-lg')
    });