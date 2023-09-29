let year = prompt("Intoduce tu año de nacimiento.");

if (year <= 1949) {
    alert(`Fecha anterior a 1967.`);
} else {
    if (year <= 2010 && year >= 1994) {
        alert(`Generación Z.`);
    }else if(year <= 1993 && year >= 1981){
        alert(`Generación Millenial.`);
    }else if(year <= 1980 && year >= 1969){
        alert(`Generación X.`);
    }else if(year <= 1968 && year >= 1949){
        alert(`Generación Boomer.`);
    }else{
        alert(`Fecha posterior a 2010.`)
    }
}