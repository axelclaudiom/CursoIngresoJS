/* Melgar Claudio Axel Div H
Ejercicio 3 recuperatorio parcial 2018 */
/* Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. */
function mostrar()
{
    let precio;
    let porcentajedesc;
    let calculopreciofinal;
    precio = prompt("Ingrese el precio:");
    porcentajedesc = prompt("Ingrese el descuento a aplicar:");
    precio = parseFloat(precio);
    porcentajedesc = parseFloat(porcentajedesc);
    calculopreciofinal = precio - (precio*porcentajedesc / 100);
    elPrecioFinal.value = calculopreciofinal;
}
