/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada != "utn750")
	{
		claveIngresada=prompt("Error.. reingrese el numero clave.")
	}
	alert("Ingreso al sistema");
}//FIN DE LA FUNCIÓN
