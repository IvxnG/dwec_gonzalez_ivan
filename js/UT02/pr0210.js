let numeros = [];
for (let i = 0; i <= 4; i++) { 
    let n = prompt("Introduce numero.");
    numeros[i] = n;
}
numeros.sort(function (a, b) { return a - b; });

alert(`El menor es: ${numeros[0]} y el mayor es: ${numeros[4]}`);