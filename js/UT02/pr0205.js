let comprobar = prompt('Introduce un número entero');
while(Number.isFinite(+comprobar) == false ||  comprobar == `` || comprobar == null || comprobar == " " || comprobar.trim() == ``){
    comprobar = prompt('Introduce un número válido.');
}   
console.log(comprobar);
alert(`Has introducido en numero ${ comprobar }`);

