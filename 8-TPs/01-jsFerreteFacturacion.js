/* Melgar Claudio Axel Div H
Tp 1 ferrete facturacion */
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
	precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);
    sumaPrecios = precioUno + precioDos + precioTres;
    alert("La suma de los productos ingresados es: " + sumaPrecios);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let promedioPrecios;
	precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);
    promedioPrecios = (precioUno + precioDos + precioTres) / 3;
    alert("El promedio de precio de los productos ingresados es: " + promedioPrecios);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let precioFinal;
	precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);
    sumaPrecios = precioUno + precioDos + precioTres;
    precioFinal = (sumaPrecios * 21 / 100) + sumaPrecios;
    alert("El precio final mas IVA(21% es: ): " + precioFinal);
}