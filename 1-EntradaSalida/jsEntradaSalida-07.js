/* Melgar Claudio Axel Div H
E/S n 7
Debemos lograr tomar Los numeros por ID ,jkj
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let n1 = txtIdNumeroUno.value;
	let n2 = txtIdNumeroDos.value;
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	let total = n1 + n2;
	alert("La suma es: " + total);
}

function restar()
{
	let n1 = parseInt(txtIdNumeroUno.value);
	let n2 = parseInt(txtIdNumeroDos.value);
	let total = n1 - n2;
	alert("La resta es: " + total);
}

function multiplicar()
{ 
	let n1 = parseInt(txtIdNumeroUno.value);
	let n2 = parseInt(txtIdNumeroDos.value);
	let total = n1 * n2;
	alert("La multiplicación es: " + total);
}

function dividir()
{
	let n1 = parseInt(txtIdNumeroUno.value);
	let n2 = parseInt(txtIdNumeroDos.value);
	let total = n1 / n2;
	alert("La división es: " + total);
}

