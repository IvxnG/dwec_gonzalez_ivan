let len = Number(prompt("len"));
let min = prompt("min");
let max = prompt("max");
function ascendDescend( len, min, max ){
    let str = "".padStart(len, minMax(min, max));
    return str;
}
function minMax(min, max){
    let i = min;
    let j = max;
    let str = "";
    while(i < max){
        str+= "" + i;
        i++;
    }
    while(j > min ){
        str+= "" + j;
        j--;
    }
    return str;
}
alert( ascendDescend( len, min, max ));