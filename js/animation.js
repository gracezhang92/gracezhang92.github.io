$(window).bind("load", function() {
  setTimeout(function(){
    $("#loading").fadeOut(function(){
      $("#intro").show().animate({
     	bottom: '70px',
     	opacity: 1
      }, 1200, "swing");
    });
  }, 2700);      
});


