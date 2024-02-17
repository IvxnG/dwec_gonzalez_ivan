document.addEventListener('DOMContentLoaded', function () {
    const planetsTable = document.getElementById('planets-body');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentPage = 1;

    // Función para obtener los planetas
    function fetchPlanets(page) {
        fetch(`https://swapi.dev/api/planets/?page=${page}`)
            .then(response => response.json())
            .then(data => {
                planetsTable.innerHTML = '';

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

                // Actualizar el estado de los botones de navegación
                prevBtn.disabled = !data.previous;
                nextBtn.disabled = !data.next;
            })
            .catch(error => console.error('Error al obtener los planetas:', error));
    }

    //navegación
    prevBtn.addEventListener('click', () => {
        currentPage--;
        fetchPlanets(currentPage);
    });

    nextBtn.addEventListener('click', () => {
        currentPage++;
        fetchPlanets(currentPage);
    });

    // Cargar los primeros planetas al cargar la página
    fetchPlanets(currentPage);
});