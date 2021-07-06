/* Melgar Claudio Axel Div H
Ejercicio Número 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let n1 = parseInt(txtIdNumeroUno.value);
	let n2 = parseInt(txtIdNumeroDos.value);
	let total = n1 + n2;
	alert("El Resultado es: " + total);
}