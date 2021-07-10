/* Melgar Claudio Axel Div H
Ejercicio 1 recuperatorio parcial 2018 */
/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
    let ancho;
    let largo;
    let calculoperimetro;
    ancho = prompt("Ingrese el ancho del terreno:");
    largo = prompt("Ingrese el largo del terreno");
    ancho = parseFloat(ancho);
    largo = parseFloat(largo);
    calculoperimetro = 2*(largo+ancho);
    alert("El perimetro del terreno es: " + calculoperimetro);
}
