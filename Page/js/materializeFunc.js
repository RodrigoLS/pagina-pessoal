//Slides do inicio
$(document).ready(function(){
      $('.slider').slider();
    });


//Gráfico amburguer
$(".button-collapse").sideNav();


// ScrollFire
var options = [
    {selector: '.ScrollFire', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);

 // Parallax
 $(document).ready(function(){
      $('.parallax').parallax();
    });

 // Rolagem
 var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});