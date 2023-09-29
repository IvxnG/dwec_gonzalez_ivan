function isPrime(num) {
    if (num <= 1){
        return false;
    }
    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true
}

let value = Number(prompt("Introduce un número."));

while(+value != 0){
    if(isPrime(value)){
        alert("El número inroducido es Primo");
    }else{
        alert("El número inroducido no es Primo");
    }
    value = Number(prompt("Introduce un número."));
}