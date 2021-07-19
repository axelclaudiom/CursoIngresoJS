/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	//while(!(numeroIngresado >=0 && numeroIngresado <=9)) // este metodo tiene exceso de cantidad de operaciones
	while(numeroIngresado<0 || numeroIngresado>9) // este metodo se utiliza para reducir la cantidad de operaciones
	{
		numeroIngresado = prompt("Error.. Reingrese un numero:");
	}
	txtIdNumero.value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN