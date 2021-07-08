/* Melgar Claudio Axel Div H
ej 2 parcial 2019*/
function mostrar()
{
    let nombreuno;
    let nombredos;
    let pesouno;
    let pesodos;
    let sumadekilos;
    let promediopeso;
    nombreuno = prompt("Nombre participante uno: ");
    nombredos = prompt("Nombre participante dos: ");
    pesouno = prompt("Peso participante uno: ");
    pesodos = prompt("Peso participante dos: ");
    pesouno = parseInt(pesouno);
    pesodos = parseInt(pesodos);
    sumadekilos = pesouno+pesodos;
    promediopeso = sumadekilos / 2;
    alert("Ustedes se llaman: "+nombreuno+" y " +nombredos + " pesan " +pesouno+ " y " +pesodos+ " kilos, que sumados son " +sumadekilos+" kilos y el promedio de peso " +promediopeso);
}
