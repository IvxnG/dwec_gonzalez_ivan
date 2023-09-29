// Línea 1: Calle Los Claveles, Calle El Rosal, Calle Las Hortensias y Calle Las Margaritas
// Línea 2: Calle Teleno, Calle Catoute, Calle Peña Ubiña y Calle Vizcodillo
// Línea 3: Calle Astorga, Calle La Bañeza y Calle Benavente
let calle = prompt("Introduce la calle de partida.")
let linea = "";
switch (calle) {
    case "Calle Los Claveles":
    case "Calle El Rosal":
    case "Calle Las Hortensias":
    case "Calle Las Margaritas":
        alert(`Tienes que tomar la Línea 1 para ir desde ${calle} hasta el trabajo`)
        break;
    case "Calle Teleno":
    case "Calle Catoute":
    case "Calle Peña Ubiña":
    case "Calle Vizcodillo":
        alert(`Tienes que tomar la Línea 2 para ir desde ${calle} hasta el trabajo`)
        break;
    case "Calle Astorga":
    case "Calle La Bañeza":
    case "Calle Benavente":
        alert(`Tienes que tomar la Línea 3 para ir desde ${calle} hasta el trabajo`)
        break;
}
