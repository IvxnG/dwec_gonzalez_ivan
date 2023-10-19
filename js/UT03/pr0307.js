let str = prompt("Cadena");
function countVowels(str) {

    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
alert(countVowels(str));