
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


function showButton() {


  var button  = $('.scrollToTop'), //button that scrolls user to top
      view = $(window),
      timeoutKey = -1;

  $(document).on('scroll', function() {
      if(timeoutKey) {
          window.clearTimeout(timeoutKey);
      }
      timeoutKey = window.setTimeout(function(){

          if (view.scrollTop() < 100) {
              button.fadeOut();
          }
          else {
              button.fadeIn();
          }
      }, 100);
  });
}

$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});










