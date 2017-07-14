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

    var preguntas = (	'<div class="container preguntas-c sacar ">' +
							'<div class="row ">' +
								'<div class="col-sm-12 col-xs-12 text-center">' + 
									'<h3>PREGUNTAS<br>FRECUENTES</h3>' + 
								'</div>' +
							'</div>' +
							'<div class="row">' + 
								'<div class="col-sm-9 col-xs-8 col-xs-offset-2 col-sm-offset-2 preg-frec">' +
							'</div>' +
							'</div>' +
						'</div>');

    var saldo = (	'<div class="container saldo-c sacar ">' +
						'<div class="row ">' + 
							'<div class="col-sm-10 col-xs-10 col-xs-offset-1 col-sm-offset-1 num-tar">'+
								'<p>Número de Tarjeta</p>' +
							'</div>' +
							'<div class="col-sm-10 col-xs-10  sel-tar">' +
								'<select class=" form-control elegir-tarjeta" id="select-card">' +
									'<option>Bip1</option>' +
									'<option>Bip2</option>' +
									'<option>Bip3</option>' +
									'<option>Bip4</option>' +
									'<option>Bip5</option>' +
								'</select>' +
							'</div>' +
						'</div>' +
						'<div class="row">' +
							'<button type="submit" class="btn  btn-saldo" id="ver-total">VER SALDO</button>' +
						'</div>' +
					
						'<div class="row text-center no-ver-saldo">' +
							'<div class="col-sm-6 col-xs-6 col-xs-offset-3 col-sm-offset-3 saldo-disponible-titulo">' +
								'<div><p><small>SALDO TOTAL</small></p></div>' +
							'</div>' +
						'</div>' +
						'<div class="row text-center no-ver-saldo">' +
							'<div class="col-sm-6 col-xs-6 col-xs-offset-3 col-sm-offset-3 saldo-disponible">' +
								'<div id="saldo-total"><p><big>$1.234</big></p></div>' +
							'</div>' +
						'</div>' +
					'</div>'
					);


    $('.btn-inicio').click(function(){
       	window.location.href = "index-contenido.html"
    });

    $('.home').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(home);
    });

    $('.perfil').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(perfil);
    });

    $('.preguntas').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(preguntas);
    });

    $('.saldo').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(saldo);
    });

    $('#ver-total').on("click",function(){
    	$('.no-ver-saldo').css("display","block");
    });




    


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