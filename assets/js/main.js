$(document).ready(function(){												
    
    //Estructura html home
    var home = ('<div class="container home-c sacar ">'+
					'<div class="row ">'+
						'<div class="col-sm-12 col-xs-12">'+
							'<button type="submit" class="btn saldo btn-home">VER SALDO</button>'+
							'<button type="submit" class="btn tarifa btn-home">CALCULAR TARIFA</button>'+
							'<button type="submit" class="btn perfil btn-home">PERFIL</button>'+
							'<button type="submit" class="btn preguntas btn-home">PREGUNTAS FRECUENTES</button>'+
						'</div>'+
					'</div>'+
				'</div>') ; 

    var perfil = (	'<div class="container perfil-c sacar ">' + 
						'<div class="row ">' +
							'<div class="col-sm-12 col-xs-12">' +
								'<img class="img-circle" src="assets/docs/perfil.jpg">' +
							'</div>' +
						'</div>' + 
						'<div class="row">' +
							'<div class="col-sm-9 col-xs-8 col-xs-offset-2 col-sm-offset-2">' +
								'<output id="email-usuario"></output>' +
								'<input id="bip" type="number" name="bip" placeholder="Númeor de tarjeta">' +
								'<button type="submit" class="btn add-card btn-perfil">AGREGAR TARJETA</button>' +
							'</div>' +
						'</div>' +
					'</div>') ; 


    $('.btn-inicio').click(function(){
       	window.location.href = "index-contenido.html"
    });

    $('.home').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(home);
    })

    $('.perfil').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(perfil);
    })


    


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