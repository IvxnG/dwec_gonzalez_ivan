document.addEventListener('DOMContentLoaded', function () {
    const planetsTable = document.getElementById('planets-body');

    // Hacer la solicitud GET a la API de StarWars
    fetch('https://swapi.dev/api/planets')
        .then(response => response.json())
        .then(data => {
            // Procesar los resultados y crear filas de tabla para cada planeta
            data.results.forEach(planet => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${planet.name}</td>
                    <td>${planet.rotation_period}</td>
                    <td>${planet.orbital_period}</td>
                    <td>${planet.diameter}</td>
                    <td>${planet.climate}</td>
                    <td>${planet.gravity}</td>
                    <td>${planet.terrain}</td>
                    <td>${planet.surface_water}</td>
                    <td>${planet.population}</td>
                `;
                planetsTable.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener los planetas:', error));
});