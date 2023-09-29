let comprobar = prompt('Introduce un número entero');
while(Number.isInteger(+comprobar) == false ||  comprobar == `` || comprobar == null || comprobar == " "){
    comprobar = prompt('Introduce un número válido.');
}   
alert(`Has introducido en numero ${ comprobar }`);

