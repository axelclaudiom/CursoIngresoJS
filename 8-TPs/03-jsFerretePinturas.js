/* Melgar Claudio Axel Div H
Tp 3 ferrete facturacion */
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperaturaIngresada
    let calculoFahToCent;
    temperaturaIngresada = txtIdTemperatura.value;
    temperaturaIngresada = parseFloat(temperaturaIngresada);
    calculoFahToCent = (temperaturaIngresada - 32) * 5/9;
    alert(temperaturaIngresada +" Fahrenheit son " + calculoFahToCent +" centígrados");
}

function CentigradosFahrenheit () 
{
    let temperaturaIngresada
    let calculoCentToFah;
    temperaturaIngresada = txtIdTemperatura.value;
    temperaturaIngresada = parseFloat(temperaturaIngresada);
    calculoCentToFah = (temperaturaIngresada * 9/5) + 32;
    alert(temperaturaIngresada +" Centigrados son " + calculoCentToFah +" fahrenheit");
}
