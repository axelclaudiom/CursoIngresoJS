/* Melgar Claudio Axel Div H
Ejercicio E/S 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert("Nombre: " + nombreIngresado);

}

// otra forma de hacerlo es con document.get.ElementById("txtIdNombre").value - todos los navegadores pueden procesarlo
