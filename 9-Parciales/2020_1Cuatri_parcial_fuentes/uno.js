function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var cantProductosIngr; //cuenta la cantidad de productos ingresados hasta el momento
	var fabricante;
	var banderaAlcohol;
	var fabricanteBarat;
	cantProductosIngr = 0;
	banderaAlcohol = false;
	alcoholBarato = 0;
	alert("Ingrese 5 productos");
	while(cantProductosIngr < 5)
	{
		tipoProducto = prompt("Ingrese el tipo de producto (barbijo, jabon, alcohol)");
		precioProducto = prompt("Ingrese el precio del producto");
		precioProducto = parseInt(precioProducto);
		cantidadUnidades = prompt("Ingrese la cantidad de unidades del producto ingresado");
		cantidadUnidades = parseInt(cantidadUnidades);
		fabricante = prompt("Ingrese la marca/fabricante del producto");
		cantProductosIngr += 1;
		// Del más barato de los alcohol, la cantidad de unidades y el fabricante
		if(tipoProducto == "alcohol")
		{
			if(precioProducto < alcoholBarato || banderaAlcohol == false)
			{
				alcoholBarato = precioProducto;
				unidadesBarat = cantidadUnidades;
				fabricanteBarat = fabricante;
				banderaAlcohol = true;
				console.log("Este alcohol es una shit");
			}
		}
	}
	document.write("El alcohol mas barato cuesta: " + alcoholBarato + " Tiene " + unidadesBarat + " Unidades, el fabricante es:  " + fabricanteBarat);
	console.log(cantProductosIngr);
}
