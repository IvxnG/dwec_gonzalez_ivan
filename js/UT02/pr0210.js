let n1 = prompt("Introduce n1.");
let n2 = prompt("Introduce n2.");
let n3 = prompt("Introduce n3.");
let n4 = prompt("Introduce n4.");
let n5 = prompt("Introduce n5.");

let numeros = [n1, n2, n3, n4, n5];
numeros.sort(function(a, b){ return a - b; });

alert(`El menor es: ${numeros[0]} y el mayor es: ${numeros[4]}`);