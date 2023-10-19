let str = prompt("texto");
function countLeters(str) {
	let letras= {};

	for (let i = 0; i < str.length; i++) {
		let letra = str[i];
		if (!letras[letra]) {
			letras[letra] = 1;
		} else {
			letras[letra]++;
		}
	}

	return letras;
};
console.log(countLeters(str));