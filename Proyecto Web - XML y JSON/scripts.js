async function leerXML() {
    const response = await fetch('datos.xml');
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

    const vehiculos = xmlDoc.getElementsByTagName('vehiculo');
    let output = '<h3>Datos del XML</h3><ul>';

    for (let vehiculo of vehiculos) {
        const placa = vehiculo.getElementsByTagName('placa')[0].textContent;
        const tipo = vehiculo.getElementsByTagName('tipo')[0].textContent;
        const propietario = vehiculo.getElementsByTagName('propietario')[0].textContent;
        output += `<li>Placa: ${placa}, Tipo: ${tipo}, Propietario: ${propietario}</li>`;
    }

    output += '</ul>';
    document.getElementById('resultado').innerHTML += output;
}

//para poder leer el archivo JSON
async function leerJSON() {
    const response = await fetch('datos.json');
    const data = await response.json();

    let output = '<h3>Datos del JSON</h3><ul>';

    data.vehiculos.forEach(vehiculo => {
        output += `<li>Placa: ${vehiculo.placa}, Tipo: ${vehiculo.tipo}, Propietario: ${vehiculo.propietario}</li>`;
    });

    output += '</ul>';
    document.getElementById('resultado').innerHTML += output;
}

document.addEventListener('DOMContentLoaded', () =>{
    leerXML();
    leerJSON();
});