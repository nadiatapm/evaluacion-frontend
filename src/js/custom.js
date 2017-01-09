//funcion seleccionar cuidades boton select 

$(document).ready(function(){
	// tu codigo va acá
	cuidades = get_regiones();
	origen = $('#origen');
	destino = $('#destino');
	$.each(cuidades, function( index , value){

		origen.append($("<option/>").val(index).text(cuidades[index].name));
		destino.append($("<option/>").val(index).text(cuidades[index].name));
	});
});
//tooltips

$(document).ready(function(){
	$('.tooltipped').tooltip({delay: 50});
});

//boton select
$(document).ready(function() {
	$('select').material_select();
});