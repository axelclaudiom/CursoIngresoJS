/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidadLamparas
    let descuentoPorcentaje;
    let marca;
    let importeFinal;
    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    precioLampara = "35";
    marca = Marca.value;
    //console.log("Se);
    // A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantidadLamparas > "5")
    {
        descuentoPorcentaje = "50";
    }

    //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    if(cantidadLamparas > 4 && marca == "ArgentinaLuz")
    {
        descuentoPorcentaje = "40";
    }
    else
    {
        descuentoPorcentaje = "30";
    }
//    C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    if(cantidadLamparas > 3 && marca == "ArgentinaLuz"  || marca == "FelipeLamparas")
    {
        descuentoPorcentaje = "25";
    }
    else
    {
        descuentoPorcentaje = "20";
    }
//    D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    if(cantidadLamparas > 2 && marca == "ArgentinaLuz")
    {
        descuentoPorcentaje = "15";
    }
    else
    {
        if(marca == "FelipeLamparas")
        {
            descuentoPorcentaje = "10";
        }
        else
        {
            descuentoPorcentaje = "5";
        }
    }
    importeSinDesc = precioLampara * cantidadLamparas;
    importeFinal = (importeSinDesc - (importeSinDesc * descuentoPorcentaje / 100));
    //txtIdprecioDescuento.value = importeFinal;
    //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 //”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
    if(importeFinal > "119")
    {
        calculoIIBB = (importeFinal * 10 /100);
        importeFinal = importeFinal + calculoIIBB;
        txtIdprecioDescuento.value = importeFinal;
        alert("Usted pago " + calculoIIBB + " de IIBB");
    }
    else
    {
        txtIdprecioDescuento.value = importeFinal;
    }

}
