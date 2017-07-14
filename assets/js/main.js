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
								'<div id="email-usuario"></div>' +
								'<input id="bip" type="number" name="bip" placeholder="Númeor de tarjeta">' +
								'<div class="val-bip"></div>'+
								'<button type="submit" class="btn add-card btn-perfil">AGREGAR TARJETA</button>' +
							'</div>' +
						'</div>' +
						'<div class="bip-save"></div>'+
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
							'<div class="row">' +
								'<button class="btn preg1">&#xf067 Puntos Bip</button>' +
								'<div class="resp1 esconder">'+
									'¿Qué es un Punto bip!? <br>'+
										'Un Punto bip! es un comercio que además de vender productor y servicios, está asociado al sistema de carga bip! por lo cual sólo puedes cargar tu tarjeta bip! en ellos.' +
								'</div>'+
								'<button class="btn preg2">&#xf067 Tarjetas Bancarias</button>' +
								'<div class="resp2 esconder">¿Qué es una tarjeta bip! bancaria<br>?' +
									'Las tarjetas bip! bancarias son tarjetas de débito que emiten los bancos a sus clientes. Estas tarjetas además de permitir funciones bancarias, son tarjetas bip!, por lo tanto pueden ser utilizadas en toda la red Transantiago.'+
								'</div>'+
								'<button class="btn preg3">&#xf067 Atención al cliente y emergencias</button>' + 
								'<div class="resp3 esconder">¿Qué tramites puedes hacer en una Oficina de Servicio al Cliente tarjeta bip!? <br>' +
										'En las oficinas podrás hacer recambio de tarjetas bip!; traspasos de saldos; consultar el saldo de la tarjeta; activar cargas remotas, bloqueos de tarjetas bip! personalizadas y realizar reclamos, quejas y sugerencias al servicio.' +
								'</div>' +
							'</div>' +
						'</div>');

    var saldo = (	'<div class="container saldo-c sacar ">' +
						'<div class="row ">' + 
							'<div class="col-sm-10 col-xs-10 col-xs-offset-1 col-sm-offset-1 num-tar">'+
								'<input id="bip" type="number" name="bip" placeholder="Númeor de tarjeta">' +
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
					'</div>');

	var verSaldo = ('<div class="ver-ver">'+
    	'<div class="row text-center">' +
						'<div class="col-sm-6 col-xs-6 col-xs-offset-3 col-sm-offset-3 saldo-disponible-titulo">' +
							'<div><p><small>SALDO TOTAL</small></p></div>' +
						'</div>' +
					'</div>' +
					'<div class="row text-center">' +
						'<div class="col-sm-6 col-xs-6 col-xs-offset-3 col-sm-offset-3 saldo-disponible">' +
							'<div id="saldo-total"></div>' +
						'</div>' +
					'</div>'+
				'</div>'
					);

	var calcular = ('<div class="container calcular-c sacar ">'+
			        '<div class="row">'+
			            '<div class="col-xs-12">'+
			                '<div class="col-sm-10 col-xs-10 col-xs-offset-1 col-sm-offset-1 num-tar">'+
							'<input id="bip" type="number" name="bip" placeholder="Númeor de tarjeta">'+
						'</div>'+
			            ' <div class="col-xs-6 select-cal">'+
			                '<span>Tarifa</span>'+
			                '<select class="form-control precios ">'+
			                        '<option id="740">$740</option>'+
			                        '<option id="680">$680</option>'+
			                        '<option id="740">$640</option>'+   
			                '</select>'+
			                '</div>'+
			                '<div class="col-xs-6 select-cal">'+
			                    '<span>Tarjeta</span>'+
			                   ' <select class="form-control saldosTarjetas">'+
			                        '<option>-Bip A</option>'+
			                        '<option>Bip B</option>'+
			                        '<option>Bip C</option>'+
			                        '<option>Bip D</option>'+
			                        '<option>Bip E</option>  '  +
			                    '</select>'+
			                '</div>'+
			                '<div class="row">'+
								'<button type="submit" class="btn  btn-calcular">CALCULAR</button>'+
							'</div>'+
					'</div>'+
				'</div>');

var carlcularVer = ('<div class="ver-costo">' +
						'<div class="row text-center">' +
							'<div class="col-sm-6 col-xs-6 col-xs-offset-3 col-sm-offset-3 cal-disponible-titulo">' +
								'<div><p><small>COSTO VIAJE</small></p></div>' +
							'</div>' +
						'</div>' +
						'<div class="row text-center">' + 
							'<div class="col-sm-6 col-xs-6 col-xs-offset-3 col-sm-offset-3 cal-disponible">' +
								'<div id="cal-tarifa"></div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="ver-total">' +
						'<div class="row text-center">' +
							'<div class="col-sm-6 col-xs-6 col-xs-offset-3 col-sm-offset-3 cal-disponible-titulo">' +
								'<div><p><small>SALDO FINAL</small></p></div>' +
							'</div>' +
						'</div>' +
						'<div class="row text-center">' +
							'<div class="col-sm-6 col-xs-6 col-xs-offset-3 col-sm-offset-3 cal-disponible">' +
								'<div id="cal-total"></div>' +
							'</div>' +
						'</div>' +
					'</div>');
  

    $('.home').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(home);
    });

    $('.perfil').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(perfil);
    	var email = $(".email-inicio").val();
    	localStorage.setItem("email",email);
    	$('#email-usuario').text(localStorage.getItem("email"));

    	//Validación  tarjeta bip

	    $('.btn-perfil').click(function(){
	    	var numBip = $('#bip').val();
	    	var arrbip = [];

	    	localStorage.bip = $('#bip').val();

	    	if(numBip.length != 8){
	    		$('.val-bip').html("Númeor de tarjeta bip incorrecto, deben ser 8 dígitos")
	    	}else{
	    		$('.bip-save').append('<p class="bipbip">' + numBip + '</p>');
	    		$('.val-bip').removeClass();
	    		$('#bip').val('');
    		}

    		arrbip.push(numBip);
    		localStorage.setItem("numBip", JSON.stringify(arrbip));
    		console.log(arrbip);


    })
    });

    $('.preguntas').click(function(){
    	$('.sacar').remove();
    	$('#dinamico').append(preguntas);
    	$('.preg1').click(function(){
    		$('.resp1').toggle();
    	});
    	$('.preg2').click(function(){
    		$('.resp2').toggle();
    	});
    	$('.preg3').click(function(){
    		$('.resp3').toggle();
    	});
    });

    $('.saldo').click(function(){
    	
    	$('.sacar').remove();
    	$('#dinamico').append(saldo);
    	$('#ver-total').click(function(){
	    	$('.container.saldo-c.sacar').append(verSaldo);
	    	 //API SALDO BIP
	    	var inputSaldo = $('#bip').val();
	    	console.log(inputSaldo);
		    $.ajax({
		    url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + inputSaldo,
		    type: 'GET',
		    dataType: 'json',
			})
			.done(function(res) {
			    console.log("success");
			    $('#saldo-total').html(res.saldoTarjeta);
			    console.log(res.inputSaldo)
			})
			.fail(function() {
			    console.log("error");
			})
			.always(function() {
			    console.log("complete");
			});
	    	
	    });
    });

     $('.tarifa').click(function(){
     	
    	$('.sacar').remove();
    	$('#dinamico').append(calcular);
    	$('.btn-calcular').click(function(){
	    	$('.container.calcular-c.sacar').append(carlcularVer);
	    	var valor = $('.precios').val();
	    	console.log(valor);
	    	$('#cal-tarifa').html(valor);
	    	var saldoBip = $('.saldosTarjetas').val();
	    	console.log(saldoBip);
	    	$('#cal-total').html(saldoBip);
	    });
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

    
      
  	//Validación formulario index-incio.html
    $(".btn-inicio").click(function validar(email,pass){
        var email = $(".email-inicio").val();
        var pass = $(".pass-inicio").val();
        
        var emailVal = /^([a-zA-Z0-8_.+-])+\@(([a-zA-Z0-8-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var passVal = /([0-9]{8})/;

        localStorage.email = $(".email-inicio").val();
 
        if(!emailVal.test(email))
        {
            $(".email-error").html("Ingrese correo válido");    
        }
        else if(pass.length != 8  || passVal.test(pass)==false)
        {
            $(".pass-error").html("Su contraseña debe contener 8 caracteres y sólo números");
        }
        else
        {
            window.location.href = "index-contenido.html"
        }
    });


   


});