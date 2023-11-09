let arr = [
    {
        name: 'Victor',
        surname: 'González',
    },
    {
        name: 'Pepe',
        surname: 'Pérez',
    }]
function generateUsername(arr) {
    arr.forEach(element => {
        element.nickname = element.name[0].toLowerCase() + element.surname.toLowerCase() + String(Math.trunc(Math.random() * 100)).padStart(2, 0);
    });
    return arr;
}
console.log(generateUsername(arr));
