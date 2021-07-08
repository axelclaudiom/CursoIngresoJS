/* Melgar Claudio Axel Div H
ej 3 parcial 2019*/
function mostrar()
{
    let precio;
    let porcdesc;
    precio = prompt("Ingrese el precio:");
    porcdesc = prompt("Ingrese el Descuento a realizar:");
    precio = parseInt(precio);
    porcdesc = parseInt(porcdesc);
    proceso = precio-(precio * porcdesc/100);
    elPrecioFinal.value = proceso;
}
//elPrecioFinal
/*Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/