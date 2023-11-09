let users = ["Sergio", "Hector", "Dani"];

function sendMessage(arr) {
    arr.forEach((user) => console.log(`Hola, ${user}, bienvenido al curso de DWEC.`));
}
sendMessage(users);