
$(document).ready(function(){
  
  $("button-1").on('click', function(event) {

   
    if (this.hash !== "") {
     
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

       
        window.location.hash = hash;
      });
    
    } 

  })

});


$(window).scroll(function() {
  if ($(this).scrollTop()) {
      $('.scrollToTop:hidden').stop(true, true).fadeIn();
  } else {
      $('.scrollToTop').stop(true, true).fadeOut();
  }
});

$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});










