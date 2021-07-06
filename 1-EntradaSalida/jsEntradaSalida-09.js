/*Melgar Claudio Axel Div H
E/S nº 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	sueldo=parseInt(txtIdSueldo.value);
	resultado = (sueldo*10/100)+sueldo;
	txtIdResultado.value=resultado;
}
