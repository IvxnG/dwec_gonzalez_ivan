function convertToBytes(capacity, from) {
    switch (from) {
        case "B":
        case "Byte":
            return +capacity * 1;
        case "KB":
        case "Kilobyte":
            return +capacity * 1000;
        case "MB":
        case "Megabyte":
            return +capacity * 1000000;
        case "GB":
        case "Gigabyte":
            return +capacity * 1000000000;
        case "TB":
        case "Terabyte":
            return +capacity * 1000000000000;
        case "PB":
        case "Pentabyte":
            return +capacity * 1000000000000000;
        case "EB":
        case "Exabyte":
            return +capacity * 1000000000000000000;
        default:
            return alert(`Mediad no válida`)
    }
}
function convertCapacity(n, from, to) {
    let bytes = convertToBytes(n, from);
    switch (to) {
        case "B":
        case "Byte":
            return bytes / 1;
        case "KB":
        case "Kilobyte":
            return bytes / 1000;
        case "MB":
        case "Megabyte":
            return bytes / 1000000;
        case "GB":
        case "Gigabyte":
            return bytes / 1000000000;
        case "TB":
        case "Terabyte":
            return bytes / 1000000000000;
        case "PB":
        case "Pentabyte":
            return bytes / 1000000000000000;
        case "EB":
        case "Exabyte":
            return bytes / 1000000000000000000;
    }
}
let n = prompt("Capacidad :");
let from = prompt("Medida original :");
let to = prompt("Convertir a :");
alert(`${n}${from} son : ${convertCapacity(n, from, to)}${to}`);