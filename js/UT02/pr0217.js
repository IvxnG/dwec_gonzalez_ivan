function convertCapacity( n, from, to ){
    switch( from ){
        case "B":
            return n * 1;
        case "KB":
            return n * 1000;
        case "MB":
            return n * 1000000;
        case "GB":
            return n * 1000000000;
        case "TB":
            return n * 1000000000000;
        case "PB":
            return n * 1000000000000000;
        case "EB":
            return n * 1000000000000000000;
        default:
            return alert(`Mediad no válida`)
    }
}
let n = prompt("Capacidad :");
let from = prompt("Medida original :");
let to = prompt("Convertir a :");