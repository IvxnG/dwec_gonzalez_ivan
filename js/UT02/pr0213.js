function isPrime(num) {
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }else{
            numPrimos += " " + i + ",";
        }
    }
}

let valoresComprobar = Number(prompt("Introduce un número."));
let numPrimos = "";
isPrime(valoresComprobar);
alert(numPrimos);