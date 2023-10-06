function sumOfMults( k, n ){
    for (let i = 1; i <= n; i++){
        sum += (k * i);
    }
    return sum;
}
let sum = 0;
let k = Number(prompt("Introduce k"));
let n = Number(prompt("Introduce n"));

alert(`La suma de los ${n} primeros multiplos de ${k} es : ${sumOfMults(k, n)}`)