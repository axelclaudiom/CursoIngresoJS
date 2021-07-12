/* Melgar Claudio Axel Div H
Ejercicios If 08*/
function mostrar()
{
	let edad;
	let ecivil;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	ecivil = estadoCivil.value;
	if(edad>=18 && ecivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}
}