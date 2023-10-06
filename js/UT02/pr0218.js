// a + b > c
// a + c > b
// b + c > a
function isTriangle() {
    if ( ((a + b) > c) && ((a + c) > b) && ((b + c) > a) ){
        return true;
    }
    return false;
}
let a = Number(prompt("Numero 1"));
let b = Number(prompt("Numero 2"));
let c = Number(prompt("Numero 3"));
let msg;

isTriangle(a, b, c) ? msg = "Es triangulo" : msg = "No es triangulo";
alert(msg);