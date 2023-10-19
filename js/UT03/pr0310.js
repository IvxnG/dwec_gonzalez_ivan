let str = prompt("Cadena");
let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
let position = "";
function replaceWithPosition(str){
    for (let i = 0; i < str.length; i++) {
        position += arr.indexOf( str[i] )+1 + " ";
	}
    return position;
    
}
alert(replaceWithPosition(str));