document.addEventListener('DOMContentLoaded', function () {
    const data = {
        "Comunidad 1": {
            "Provincia 1A": ["Localidad 1A1", "Localidad 1A2", "Localidad 1A3"],
            "Provincia 1B": ["Localidad 1B1", "Localidad 1B2", "Localidad 1B3"]
        },
        "Comunidad 2": {
            "Provincia 2A": ["Localidad 2A1", "Localidad 2A2", "Localidad 2A3"],
            "Provincia 2B": ["Localidad 2B1", "Localidad 2B2", "Localidad 2B3"]
        }
    };

    // Obtener elementos del formulario
    const communitySelect = document.getElementById('community');
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const form = document.getElementById('location-form');

    // Llenar select
    function populateSelect(select, options) {
        select.innerHTML = '';
        for (const option of options) {
            const optionElement = document.createElement('option');
            optionElement.textContent = option;
            optionElement.value = option;
            select.appendChild(optionElement);
        }
    }

    //  cambio en la selección de comunidad
    communitySelect.addEventListener('change', function () {
        const selectedCommunity = communitySelect.value;
        const provinces = Object.keys(data[selectedCommunity]);
        populateSelect(provinceSelect, provinces);
        provinceSelect.disabled = false;
        citySelect.innerHTML = '<option value="">Selecciona una localidad</option>';
        citySelect.disabled = true;
    });

    //cambio en la seleccion de provincia
    provinceSelect.addEventListener('change', function () {
        const selectedCommunity = communitySelect.value;
        const selectedProvince = provinceSelect.value;
        const cities = data[selectedCommunity][selectedProvince];
        populateSelect(citySelect, cities);
        citySelect.disabled = false;
    });

    //  envio del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const selectedCommunity = communitySelect.value;
        const selectedProvince = provinceSelect.value;
        const selectedCity = citySelect.value;
        console.log('Comunidad Autónoma:', selectedCommunity);
        console.log('Provincia:', selectedProvince);
        console.log('Localidad:', selectedCity);
    });


    const communities = Object.keys(data);
    populateSelect(communitySelect, communities);
});
