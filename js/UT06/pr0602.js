let tabla = document.getElementById("tabla");
tabla.addEventListener("click", handleClick)
tabla.addEventListener("contextmenu", unableCell)
for (let i = 0; i < 10; i++) {

    let celdas = "";
    for (let j = 0; j < 10; j++) {
        celdas += `<div class="cell">${i}${j}</div>`;
    }
    tabla.innerHTML += `<div class="row">${celdas}</div>`;

}

function handleClick(event) {
    event.preventDefault()
    console.log(event.target);
    let currentCell = event.target;
    if (!currentCell.classList.contains("unable")) {
        currentCell.classList.toggle("color")
    }
}

function unableCell(event) {
    event.preventDefault()
    console.log(event.target);
    let currentCell = event.target;
    currentCell.classList.add("unable")
}

