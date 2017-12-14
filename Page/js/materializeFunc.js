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