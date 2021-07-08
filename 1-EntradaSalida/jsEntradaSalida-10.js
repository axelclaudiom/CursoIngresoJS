/* Melgar Claudio Axel Div H
E/S nº 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
// ver de corregir lo del parseFloat
function mostrarAumento()
{
	let importe = txtIdImporte.value;
	let desc = prompt("Descuento?" , "");
	importe=parseInt(importe);
	desc = parseInt(desc);
	resultado = importe - (importe*desc/100);
	txtIdResultado.value=resultado;
	/*importe=parseInt(txtIdImporte.value);
	resultado = importe - (importe*25/100);
	txtIdResultado.value=resultado;*/

	//txtIdImporte
	//txtIdResultado
}
