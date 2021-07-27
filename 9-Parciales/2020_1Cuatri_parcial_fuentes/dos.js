/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)


d) Informar el tipo con mas cantidad de bolsas variable de informe // acumulador.
f) El tipo mas caro // variable de informe*/ 

function mostrar()
{
  var tipoBolsa;
  var cantidadBolsas;
  var precioBolsa;
  var tipoMasCaro;
  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var calculoArena;
  var calculoCal;
  var calculoCemento;
  var cantidadTotalBolsas;
  var importeTotalBruto;
  var importeTotalDescuento;
  var tipoMasBolsas;
  var respuesta;

  descuento = 0;
  precioMasCaro = 0;
  cantidadArena = 0;
  cantidadCal = 0; 
  cantidadCemento = 0;
  calculoArena = 0;
  calculoCal = 0;
  calculoCemento = 0;
  respuesta = true;
  
  while(respuesta==true)
  {
    tipoBolsa = prompt("Ingrese el tipo de bolsa (Arena, Cal, Cemento");
    cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
    cantidadBolsas = parseInt(cantidadBolsas);
    precioBolsa = prompt("Ingrese el precio de la bolsa");
    precioBolsa = parseInt(precioBolsa);
    switch(tipoBolsa)
    {
      case "arena":
        cantidadArena += cantidadBolsas;
        calculoArena += cantidadBolsas * precioBolsa;
    
        if(precioBolsa > precioMasCaro)
        {
          tipoMasCaro = "Arena";
        }
      break;        
      case "cal":
        cantidadCal += cantidadBolsas;
        calculoCal += cantidadBolsas * precioBolsa;
        if(precioBolsa > precioMasCaro)
        {
          tipoMasCaro = "Cal";
        }
      break;
      case "cemento":
        cantidadCemento += cantidadBolsas;
        calculoCemento += cantidadBolsas * precioBolsa;
        if(precioBolsa > precioMasCaro)
        {
          tipoMasCaro = "Cemento";
        }
      break;
    }
    respuesta = confirm("Desea ingresar otro producto?");
  }

  if(cantidadArena > cantidadCal && cantidadArena > cantidadCemento)
  {
    //arena tiene mas bolsas    
    tipoMasBolsas = "Arena";
  }
  else
  {
    if (cantidadCal > cantidadCemento )
    {
      // cal tiene mas bolsas
      tipoMasBolsas = "cal";
    }
    else
    {
      if(cantidadCemento > cantidadArena)
      {
        // Cemento tiene mas bolsas
        tipoMasBolsas = "Cemento";
      }
    }
  }

  cantidadTotalBolsas = cantidadArena + cantidadCal + cantidadCemento;
  importeTotalBruto = calculoArena + calculoCemento + calculoCal;

  if(cantidadTotalBolsas > 30)
  {
    descuento = 25; 
  }  
  else
  {
    if(cantidadTotalBolsas > 10)
    {
      descuento = 15;
    }
  }

  importeTotalDescuento = importeTotalBruto * descuento / 100;

  document.write("El importe total bruto es: " +importeTotalBruto+"<br>");
  document.write("El importe Total con descuento es: " + importeTotalDescuento+ "<br>");
  document.write("El tipo de Bolsa mas caro es: " +tipoMasCaro+ "<br>");
  document.write("El tipo con mas bolsas es: " +tipoMasBolsas);
}
