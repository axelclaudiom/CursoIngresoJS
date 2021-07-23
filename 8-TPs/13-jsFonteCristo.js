/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() 
{
    var numeroIngresado;
    var numerosPar;
 	numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    numerosPar = 0;
    while (numeroIngresado > 0)
    {
        if(numeroIngresado % 2 == 0)
        {
            numerosPar = numerosPar + 1;
            //document.write("La cantidad de numeros pares es: " +numeroIngresado + "<br>");
        }
        numeroIngresado = numeroIngresado -1;
    }
    document.write("La cantidad de numeros pares es: " +numerosPar + "<br>");
}
function NumerosImpares() 
{
    var numeroIngresado;
    var numerosInpar;
 	numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    numerosInpar = 0;
    while (numeroIngresado > 0)
    {
        if(numeroIngresado % 2 != 0)
        {
            numerosInpar = numerosInpar + 1;
           // document.write("La cantidad de numeros pares es: " +numeroIngresado + "<br>");
        }
        numeroIngresado = numeroIngresado -1;
    }
    document.write("La cantidad de numeros Inpares es: " +numerosInpar + "<br>");
}
function NumerosDivisibles()
{
    var numeroIngresado;
    var cantidadDivisibles;
    var i;
 	numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    cantidadDivisibles = 0;
    i = 0;
    while(numeroIngresado < 1 || numeroIngresado > 100)
    {
        numeroIngresado = prompt("Error. Ingrese un numero entre 1 y 100");
        numeroIngresado = parseInt(numeroIngresado);
        console.log(numeroIngresado);
    }
    while(i < numeroIngresado)
    {
        if(numeroIngresado % i == 0)
        {
            cantidadDivisibles+= 1;
            //document.write("El numero es divisible por: " + (i+1) + "<br>");
        }
        i += 1;
    }
    document.write("La cantidad de numeros divisibles es: " + cantidadDivisibles + "<br>");


}
function VerificarPrimo() 
{
    //d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
    var numeroIngresado;
    var i;
    var numeroPrimo;
 	numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    i = 2;
    numeroPrimo = 1;
    while(numeroIngresado < 0)
    {
        numeroIngresado = prompt("Error. Ingrese un numero positivo");
        numeroIngresado = parseInt(numeroIngresado);
        console.log(numeroIngresado);
    }
    while(i<numeroIngresado)
    {
        if(numeroIngresado % i ==0)
        {
            numeroPrimo = 0;
        }
        i +=1;
    }
    if(numeroPrimo == 1)
    {
        document.write(numeroIngresado +"Es un numero primo <br>");
    }
    else
    {
        document.write(numeroIngresado +"no es un numero primo <br>");
    }
}
    /* while(i < numeroIngresado)
    {
        if(numeroIngresado % i == 0)
        {
            numeroPrimo = 1;
        }
        i += 1;
        console.log(i);
    }
    if(numeroPrimo!=1)
    {
        document.write(numeroIngresado+" es un numero primo");
    }
}*/
function NumerosPrimos()
{
    var numeroIngresado;
    var i;
    var cantidadPrimo;
    var numeroPrimo;
 	numeroIngresado = txtIdNumero.value;
    numeroIngresado = parseInt(numeroIngresado);
    i = 2;
    posiblePrimo = 0;
    cantidadPrimo = 0;
    while(numeroIngresado < 1 || numeroIngresado > 100)
    {
        numeroIngresado = prompt("Error. Ingrese un numero entre 1 y 100");
        numeroIngresado = parseInt(numeroIngresado);
        console.log(numeroIngresado);
    }
    while(numeroIngresado > -1)
    {
        // Este bucle recorre desde el numero ingresado hasta el 0
        console.log("entra al bucle " +numeroIngresado);
        numeroPrimo = 1;
        i=2;
        while(i<numeroIngresado)
        {
            console.log("i vale: " + i);
            if(numeroIngresado % i ==0)
            {
                console.log(numeroIngresado+"entro al if");
                numeroPrimo = 0;
            }
            i +=1;
        }
        if(numeroPrimo == 1)
        {
            document.write(numeroIngresado +"Es un numero primo <br>");
        }
        else
        {
            document.write(numeroIngresado +"no es un numero primo <br>");
        }
        numeroIngresado +=-1;
        console.log("sale del bucle ")
    }
    document.write("cantidad primo: " + cantidadPrimo + "<br>");

}