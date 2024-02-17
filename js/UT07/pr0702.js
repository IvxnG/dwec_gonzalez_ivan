document.addEventListener('DOMContentLoaded', function () {
    const planetsTable = document.getElementById('planets-body');

    // Función para obtener todos los planetas de forma contuina
    function fetchAllPlanets(url) {
        fetch(url)
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

                // Si hay más páginas función fetchAllPlanets
                if (data.next) {
                    fetchAllPlanets(data.next);
                }
            })
            .catch(error => console.error('Error al obtener los planetas:', error));
    }

    // Comenzar la obtención de los planetas desde la primera página
    fetchAllPlanets('https://swapi.dev/api/planets');
});