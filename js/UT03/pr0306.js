let str = prompt("Número");
let baseFrom = prompt("baseFrom");
let baseTo = prompt("baseTo");
function convertBase(str, baseFrom, baseTo) {
    let num = parseInt(str, baseFrom);
    return num.toString(baseTo);
}
alert(convertBase(str, baseFrom, baseTo));
