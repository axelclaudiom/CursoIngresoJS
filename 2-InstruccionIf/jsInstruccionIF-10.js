function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numerorandom	
	numerorandom = Math.floor((Math.random() * 10) + 1);
	alert("" + numerorandom);
	if(numerorandom > 8)
	{
		alert("Excelente");
	}
	else
	{
		if(numerorandom > 3)
		{
			alert("Aprobó")
		}
		else
		{
			alert("Vamos, la proxima se puede")
		}
	}
}//FIN DE LA FUNCIÓN