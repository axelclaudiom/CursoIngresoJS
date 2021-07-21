/* Melgar Claudio Axel Div H
while 9
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var ingresoPrimerNumero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	ingresoPrimerNumero=false;
	respuesta=true;
	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > numeroMaximo || ingresoPrimerNumero == false)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo || ingresoPrimerNumero == false)
		{
			numeroMinimo = numeroIngresado;
			ingresoPrimerNumero = true;
		}
		/* Esto funca - voy a tratar de optimizar el codigo
		if(ingresoPrimerNumero == false)
		{
			ingresoPrimerNumero = true;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}
		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		if(numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}*/

		respuesta=confirm("desea continuar?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN