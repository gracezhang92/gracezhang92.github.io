$(window).bind("load", function() {
  setTimeout(function(){
    $("#loading").fadeOut(function(){
      $("#header").show().animate({
     	top: '350px',
     	opacity: 1
      }, 1200, "swing");
    });
  }, 2700);      
});


