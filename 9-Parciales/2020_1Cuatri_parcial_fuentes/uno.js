/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var cantProductosIngr; //cuenta la cantidad de productos ingresados hasta el momento
	var fabricante;
	var banderaAlcohol;
	var fabricanteBarat;
	var cantidadAlcohol;
	var cantidadBarbijos;
	var cantidadJabon;
	var ptotalAlcohol;
	var ptotalBarbijos;
	var ptotalJabon;
	var productoMaxUnidades;
	var promedioPCompra;
	cantProductosIngr = 0;
	banderaAlcohol = false;
	alcoholBarato = 0;
	cantidadJabon = 0;
	cantidadAlcohol = 0;
	cantidadBarbijos = 0;
	ptotalAlcohol = 0;
	ptotalBarbijos = 0;
	ptotalJabon = 0;
	alert("Ingrese 5 productos");
	while(cantProductosIngr < 5)
	{
		tipoProducto = prompt("Ingrese el tipo de producto (barbijo, jabon, alcohol)");
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Error.. Ingrese el tipo de producto (barbijo, jabon, alcohol)");
		}
		precioProducto = prompt("Ingrese el precio del producto");
		precioProducto = parseInt(precioProducto);
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = prompt("Error. Ingrese el precio del producto (entre 100 y 300)");
			precioProducto = parseInt(precioProducto);
		}
		cantidadUnidades = prompt("Ingrese la cantidad de unidades del producto ingresado");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Error. Ingrese la cantidad de unidades del producto ingresado (entre 1 y 1000)");
			cantidadUnidades = parseInt(cantidadUnidades);
		} 
		fabricante = prompt("Ingrese la marca/fabricante del producto");
		cantProductosIngr += 1;
		// Del más barato de los alcohol, la cantidad de unidades y el fabricante X
		//b) Del tipo con mas unidades, el promedio por compra
		if(tipoProducto == "alcohol")
		{
			if(precioProducto < alcoholBarato || banderaAlcohol == false)
			{
				alcoholBarato = precioProducto;
				unidadesBarat = cantidadUnidades;
				fabricanteBarat = fabricante;
				banderaAlcohol = true;
				cantidadAlcohol += cantidadUnidades;
				ptotalAlcohol += precioProducto;
				console.log("Este alcohol es una shit");
			}
		}
		else
		{
			if(tipoProducto == "barbijo")
			{
				cantidadBarbijos += cantidadUnidades;
				ptotalBarbijos += precioProducto;
			}
			else
			{
				//es jabon
				cantidadJabon += cantidadUnidades;
				ptotalJabon += precioProducto;
			}
		}
	}
	if(cantidadAlcohol > cantidadBarbijos)
	{
		// alcohol
		productoMaxUnidades = "Alcohol";
		promedioPCompra = cantidadAlcohol /ptotalAlcohol;
	}
	else
	{
		if(cantidadBarbijos > cantidadJabon)
		{
			// barbijos
			productoMaxUnidades = "Barbijos";
			promedioPCompra = cantidadBarbijos /ptotalBarbijos;
		}
		else
		{
			//jabon
			productoMaxUnidades = "Jabon";
			promedioPCompra = cantidadJabon /ptotalJabon;
		}
	}
	document.write("El alcohol mas barato cuesta: " + alcoholBarato + " Tiene " + unidadesBarat + " Unidades, el fabricante es:  " + fabricanteBarat + "<br>");
	document.write("El tipo de producto con mas unidades es: " + productoMaxUnidades + " su precio promedio es: " +promedioPCompra + "<br>");
	document.write("Hay " + cantidadJabon + " Unidades de jabon.");
	console.log(cantProductosIngr);
}