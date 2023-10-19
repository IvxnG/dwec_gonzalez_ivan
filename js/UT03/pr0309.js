let str = prompt("Cadena");
let vowels = ['a', 'e', 'i', 'o', 'u'];
function removeVowels(str){
    let noVowels = "";
    for (let i = 0; i < str.length; i++) {
        if(!(vowels.includes(str[i]))){
            noVowels += str[i];
        }
		
		
	}
    return noVowels;
}

alert(removeVowels(str));