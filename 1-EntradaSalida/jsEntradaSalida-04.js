/*  Melgar Claudio Axel Div H
Ejercicio numero 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
    let msj = prompt("Cual es tu nombre?" , "");
	txtIdNombre.value = "Su nombre es: " + msj;
}