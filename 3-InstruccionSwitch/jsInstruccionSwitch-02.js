function mostrar()

/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. 
Julio y agosto -> invierno "Abrigate que hace frio."
septiem - oct - nov -> primavera "Ya pasamos el frio, ahora calor!!!."
dic - ene - feb -> verano "Ya pasamos el frio, ahora calor!!!."
marzo - abril - mayo - junio -> inv "Falta para el invierno."
*/
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno.";
		break;
	}



}//FIN DE LA FUNCIÓN