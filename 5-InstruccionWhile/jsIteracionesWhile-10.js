/* Melgar Claudio Axel Div H
While 10 biz
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. x
2-Suma de los positivos. x 
3-Cantidad de positivos. x 
4-Cantidad de negativos. x
5-Cantidad de ceros. x
6-Cantidad de números pares. x
7-Promedio de positivos.x
8-Promedios de negativos.x
9-Diferencia entre positivos y negativos, (positvos-negativos). x */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var cantidadPositivos;
	var sumaNegativos
	var cantidadNegativos
	var cantidadCeros
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosNeg;
	var ingresoPrimerNumero;
	var numeroMaximo;
	var numeroMinimo;
	cantidadPositivos = 0;
	sumaPositivos= 0;
	sumaNegativos=0;
	cantidadNegativos = 0;
	cantidadCeros=0;
	cantidadPares = 0;
	respuesta=true;
	ingresoPrimerNumero=false;

	while(respuesta==true)
	{
		numeroIngresado = prompt("ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > numeroMaximo || ingresoPrimerNumero == false)
		{
			numeroMaximo = numeroIngresado;
			console.log("Ingreso numero maximo");
		}
		if(numeroIngresado < numeroMinimo || ingresoPrimerNumero == false)
		{
			numeroMinimo = numeroIngresado;
			console.log("Ingreso numero minimo");
			ingresoPrimerNumero = true;
		}
		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			cantidadPositivos += 1;
			console.log("Ingreso un numero positivo");
		}
		else
		{
			if(numeroIngresado < 0)
			{
				sumaNegativos += numeroIngresado;
				cantidadNegativos += 1;
			}
			else
			{
				cantidadCeros += 1;
			}
		}
		if(numeroIngresado%2 == 0)
		{
			cantidadPares += 1;
		}

		respuesta=confirm("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos + "<br>");
	document.write("la Suma de los positivos es :"+sumaPositivos + "<br>");
	document.write("la Cantidad de negativos es :"+cantidadNegativos + "<br>");
	document.write("la Cantidad de positivos es :"+cantidadPositivos + "<br>");
	document.write("la Cantidad de ceros es :"+cantidadCeros + "<br>");
	document.write("la Cantidad de números pares es :"+cantidadPares + "<br>");
	if(cantidadNegativos != 0)
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
		document.write("el promedio de negativos es :"+promedioNegativos + "<br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de negativos <br>");
	}
	if(cantidadPositivos != 0)
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
		document.write("el promedio de positivos es :"+promedioPositivos + "<br>");
	}
	else
	{
		document.write("No se pudo calcular el promedio de positivos <br>");
	}
	diferenciaPosNeg = sumaPositivos - sumaNegativos;
	document.write("La diferencia entre positivos y negativos es: " + diferenciaPosNeg + "<br>");
	document.write("El numero minimo ingresado es: " + numeroMinimo + "<br>");
	document.write("El numero maximo ingresado es: " + numeroMaximo + "<br>");

}//FIN DE LA FUNCIÓN