let comprobar = prompt('Introduce un número');
while(Number.isInteger(+comprobar) == false ||  comprobar == `` || comprobar == null || comprobar == " " || +comprobar <= 0){
    comprobar = prompt('Introduce un número válido.');
}
if(comprobar%2 == 0){
    alert(`Has introducido un numero par`);
}else{
    alert(`Has introducido un numero impar`);
}