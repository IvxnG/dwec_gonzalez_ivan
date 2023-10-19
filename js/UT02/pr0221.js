function isNumber(str) {
    if (Number.isFinite(+str) == false || str == `` || str == null || str == " " || str.trim() == ``){
        return false;
    }
    return true;
}

let str = prompt("Introduce un numero");
let msg;
isNumber( str ) ? msg = "Es numero" : msg = "No es numero";
alert(msg);