/* Melgar Claudio Axel Div H
TP 2 Ferrete Construccion
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let calculoAlambre;
    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);
    calculoAlambre = ((largoTerreno + anchoTerreno)*2)*3;
    alert("La Cantidad de alambre a comprar es: " + calculoAlambre);
}
function Circulo () 
{
	let radioTerreno; 
    radioTerreno = txtIdRadio.value;
    radioTerreno = parseInt(radioTerreno);
    procesoAlambre = (2 * Math.PI * radioTerreno) * 3;
    alert("La cantidad de alambre a comprar es: " + procesoAlambre);
}
function Materiales () 
{
	//C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
    let largoTerreno;
    let anchoTerreno;
    let calculoAreaTerreno;
    let calculoBolsasCem;
    let calculoBolsasCal;
    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);
    calculoAreaTerreno = largoTerreno * anchoTerreno;
    calculoBolsasCem = calculoAreaTerreno * 2;
    calculoBolsasCal = calculoAreaTerreno * 3;
    alert("Para hacer el contrapiso se necesitan: " + calculoBolsasCem + " bolsas de Cemento, " + calculoBolsasCal + " bolsas de Cal.");
}