/* Melgar Claudio Axel Div H
Ejercicio 1 parcial2018 */
function mostrar()
{
    let ancho;
    let largo;
    ancho = prompt("Ingrese el ancho del terreno:");
    largo = prompt("Ingrese el largo del terreno");
    ancho = parseFloat(ancho);
    largo = parseFloat(largo);
    perimetro = 2*(ancho+largo);
    alert("El perimetro del terreno es: " + perimetro);
}
