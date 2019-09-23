
$(document).ready(function(){
  
  $("a").on('click', function(event) {

   
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


// $(window).scroll(function(){
//   if ($(this).scrollTop() > 100) {
//       $('.scrollToTop').fadeIn();
//   } else {
//       $('.scrollToTop').fadeOut();
//   }
// });

// $('.scrollToTop').click(function(){
//   $('html, body').animate({scrollTop : 0},800);
//   return false;
// });










