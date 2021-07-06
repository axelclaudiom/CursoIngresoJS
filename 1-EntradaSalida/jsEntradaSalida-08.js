/* Melgar Claudio Axel Div H
E/S 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ." %*/ 
function SacarResto()
{
	let n1 = parseInt(txtIdNumeroDividendo.value);
	let n2 = parseInt(txtIdNumeroDivisor.value);
	let total = n1 % n2;
	alert("El resto es: " + total);
	//alert("ok");
	//txtIdNumeroDividendo
	//txtIdNumeroDivisor
}
