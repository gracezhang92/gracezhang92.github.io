$(window).bind("load", function() {
  $(".main").onepage_scroll();
  setTimeout(function(){
    $("#loading").fadeOut(function(){
      $("#header").show().animate({
     	top: '350px',
     	opacity: 1
      }, 1200, "swing");
    });
  }, 2700);      
});

