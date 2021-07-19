/* Melgar Claudio Axel div H
TP 4 Ferrete iluminacion con usando IF
4.	Para el departamento de iluminación:
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
    let descuentoAdquirido; //la funcion de esta variable es banear para que no pueda adquirir mas de un descuento.
    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    precioLampara = "35";
    descuentoAdquirido = "0";
    marca = Marca.value;
    // A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantidadLamparas > "5")
    {
        descuentoPorcentaje = "50";
        console.log("condicion 1");
        descuentoAdquirido = "1";
    }

    //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    if(cantidadLamparas > 4 && marca == "ArgentinaLuz" && descuentoAdquirido == 0)
    {
        descuentoPorcentaje = "40";
        console.log("condicion 2");
        descuentoAdquirido = "1";
    }
    else
    {
        if (cantidadLamparas > 4 && descuentoAdquirido == 0)
        {
            descuentoPorcentaje = "30";
            console.log("condicion 3");
            descuentoAdquirido = "1";
        }
    }
//    C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    if(cantidadLamparas > 3 && descuentoAdquirido == 0 && marca == "ArgentinaLuz"  || cantidadLamparas > 3 && descuentoAdquirido == 0 && marca == "FelipeLamparas")
    {
        descuentoPorcentaje = "25";
        console.log("condicion 4");
        descuentoAdquirido = "1";
    }
    else
    {
        if(cantidadLamparas > 3 && descuentoAdquirido == 0)
        {
            descuentoPorcentaje = "20";
            console.log("condicion 5");
            descuentoAdquirido = "1";
        }
    }
//    D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    if(cantidadLamparas > 2 && marca == "ArgentinaLuz" && descuentoAdquirido == 0)
    {
        descuentoPorcentaje = "15";
        console.log("condicion 6");
        descuentoAdquirido = "1";
    }
    else
    {
        if(cantidadLamparas > 2 && marca == "FelipeLamparas" && descuentoAdquirido == 0)
        {
            descuentoPorcentaje = "10";
            console.log("condicion 7");
            descuentoAdquirido = "1";
        }
        else
        {
            if(cantidadLamparas > 2 && descuentoAdquirido == 0)
            {
                descuentoPorcentaje = "5";
                console.log("condicion 8");
                descuentoAdquirido = "1";
            }
            
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
