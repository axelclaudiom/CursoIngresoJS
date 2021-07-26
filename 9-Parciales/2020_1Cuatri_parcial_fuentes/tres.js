function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var cantProductosIngr; //cuenta la cantidad de productos ingresados hasta el momento
	alert("Ingrese 5 productos");
	while(cantProductosIngr < 6)
	{
		tipoProducto = prompt("Ingrese el tipo de producto (barbijo, jabon, alcohol)");
		precioProducto = prompt("Ingrese el precio del producto");
		cantidadUnidades = prompt("Ingrese la cantidad de unidades del producto ingresado");
		cantProductosIngr += 1;
	}
	console.log(cantProductosIngr);
}
