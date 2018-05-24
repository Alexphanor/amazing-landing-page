$(document).ready(function(){
  $(function(){    
    $('.carrousel .slides:gt(0)').hide();
    setInterval(function(){
      $('.carrousel :first-child').fadeOut(2000).next('.slides').fadeIn(2000)
      .end().appendTo('.carrousel');
  }, 7000);    
  });
   new WOW().init();
});
