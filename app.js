$(document).ready(function(){
  // Wow animations
  new WOW().init();

  // burger nav 
  $(".burger-nav").on("click", function(){
    $(".container nav ul").toggleClass("open");
  });
  
  // text slider
  $(function(){    
    $('.carrousel .slides:gt(0)').hide();
    setInterval(function(){
      $('.carrousel :first-child').fadeOut(2000).next('.slides').fadeIn(2000)
      .end().appendTo('.carrousel');
  }, 7000);    
  });

});
