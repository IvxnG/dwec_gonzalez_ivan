function isPrime(num) {
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

let num = Number(prompt("Introduce un número."));

let a = 2;
let contador = 0;
let numPrimos = "";

while (contador <= num){
    if(isPrime(a)){
        numPrimos += a + " ";
        contador++;
    }
    a++;
}
alert(numPrimos);