let precioKgManzanas = prompt("Precio del Kg de manzanas.");
let cantidadManzanas = prompt("Cantidad de manzanas.");

let precioKgNaranjas = prompt("Precio del Kg de naranjas.");
let cantidadNaranjas = prompt("Cantidad de naranjas.");

let precioKgPlatanos = prompt("Precio del Kg de platanos.");
let cantidadPlatanos = prompt("Cantidad de platanos.");

alert(`Has comprado un total de ${Number(cantidadManzanas) + Number(cantidadNaranjas) + Number(cantidadPlatanos)} kilos de fruta y te ha costado 
${(Number(cantidadManzanas) * Number(precioKgManzanas)) + (Number(precioKgNaranjas) * Number(precioKgNaranjas)) + (Number(precioKgPlatanos) * Number(cantidadPlatanos))} euros`);