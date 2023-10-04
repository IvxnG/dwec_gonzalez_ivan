function calc(operando1, operando2, operador) {
    switch (operador) {
        case "+":
            return +operando1 + +operando2;
        case "-":
            return +operando1 - +operando2;
        case "*":
            return +operando1 * +operando2;
        case "/":
            return +operando1 / +operando2;
        case "%":
            return +operando1 % +operando2;
        default:
            return alert(`Operador ${operador} no es válido`)
    }
}

let operando1 = prompt("Primer operando");
let operando2 = prompt("Segundo operando");
let operador = prompt("Operador");

alert(calc(operando1, operando2, operador));