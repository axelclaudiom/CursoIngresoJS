/* Melgar Claudio Axel Div H
While 5
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	while(sexoIngresado!="f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("error.. ingrese f ó m .");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN