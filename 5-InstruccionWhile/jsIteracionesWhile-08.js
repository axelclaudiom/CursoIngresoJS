/* Melgar Claudio Axel Div H
While 8
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta=true;
	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = confirm("Desea continuar?");

		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			}
		}
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN