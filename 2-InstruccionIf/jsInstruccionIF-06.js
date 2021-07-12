/* Melgar Claudio Axel Div H
Ejercicios If 06*/
function mostrar()
{
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad >= 18)
	{
		alert("La persona es mayor de edad");
	}
	else if(edad >= 13 && edad<=17)
	{
		alert("La persona es adolecente");
	}
	else if(edad<=13)
	{
		alert("La persona es menor");
	}
}//FIN DE LA FUNCIÓN