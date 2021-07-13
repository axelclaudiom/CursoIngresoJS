/* Melgar Claudio Axel Div H
Ejercicios If 07*/
function mostrar()
{
	let edad;
	let ecivil;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	ecivil = estadoCivil.value;
	if(edad<=18 && ecivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}