/*$('.showmenu').on('click', function(e){
  $('.content').toggleClass('show');
  $('.ul').toggleClass('ul-color');
    $('.ul').css('z-index','1000');


  e.preventDefault();

});*/

    $(document).ready(function(){												
       
       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
      		e.preventDefault();
      		$('header').toggleClass('nav-expanded');
      		$('.pull-left').css("display","none");

      	});
      	$('#nav-close').on('click',function(e){
      		e.preventDefault();
      		$('header').removeClass('nav-expanded');
      		$('.pull-left').css("display","inline-block");
      	});
      	
      	
      	
  
        	
      });