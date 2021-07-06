/* Melgar Claudio Axel Div H
E/S nº 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	importe=parseInt(txtIdImporte.value);
	resultado = importe - (importe*25/100);
	txtIdResultado.value=resultado;

	//txtIdImporte
	//txtIdResultado
}
