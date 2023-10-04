function convertToBytes(capacity, from) {
    switch (from) {
        case "B":
            return +capacity * 1;
        case "KB":
            return +capacity * 1000;
        case "MB":
            return +capacity * 1000000;
        case "GB":
            return +capacity * 1000000000;
        case "TB":
            return +capacity * 1000000000000;
        case "PB":
            return +capacity * 1000000000000000;
        case "EB":
            return +capacity * 1000000000000000000;
        default:
            return alert(`Mediad no válida`)
    }
}

let capacity = prompt("Valor");
let from = prompt("Medida deseada");
alert(convertToBytes(capacity, from));