$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop(); 
   $('.layer-1').css('top',(0-(scrolled*.25))+'px');
   $('.layer-2').css('top',(0-(scrolled*.5))+'px');
   $('.layer-3').css('top',(0-(scrolled*.75))+'px');
   $('.cake-1').css('top',(400-(scrolled*.8))+'px');
   $('.cake-2').css('top',(200-(scrolled*.6))+'px');
   $('.cake-3').css('top',(500-(scrolled*.4))+'px'); 
}
