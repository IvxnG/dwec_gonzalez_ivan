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

let capacity = prompt("Valor");
let from = prompt("Medida deseada");
alert(convertToBytes(capacity, from));