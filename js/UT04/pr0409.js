let letras = " ABCDEFGH";
letras = letras.split("")
console.log(letras);

let board = document.getElementById("board");
board.classList.add("table-background");



for (let j = 0; j <= 8; j++) {

    if (j == 0) {

        for (let i = 0; i <= 8; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.textContent = `${letras[i]}`;
            board.append(box);

        }

    } else {

        if (j % 2 == 0) {

            for (let i = 0; i <= 8; i++) {

                let box = document.createElement("div");
                box.classList.add("box");
                if (i == 0) {
                    box.classList.add("box");
                    box.textContent = `${j}`;
                    board.append(box);
                } else {
                    if (i % 2 == 0) {
                        box.dataset.id = `${letras[i]}${j}`;
                        box.addEventListener("click", (e) => alert(`Has pulsado en la casilla ${e.currentTarget.dataset.id}` ))
                        box.classList.add("black");
                    } else {
                        box.dataset.id = `${letras[i]}${j}`;
                        box.addEventListener("click", (e) => alert(`Has pulsado en la casilla ${e.currentTarget.dataset.id}` ))
                        box.classList.add("white");
                    }
                }
                board.append(box);
            }
        } else {

            for (let i = 0; i <= 8; i++) {
                let box = document.createElement("div");
                box.classList.add("box");
                if (i == 0) {
                    box.classList.add("box");
                    box.textContent = `${j}`;
                    board.append(box);
                } else {
                    if (i % 2 == 0) {
                        box.dataset.id = `${letras[i]}${j}`;
                        box.addEventListener("click", (e) => alert(`Has pulsado en la casilla ${e.currentTarget.dataset.id}` ))
                        box.classList.add("white");
                    } else {
                        box.dataset.id = `${letras[i]}${j}`;
                        box.addEventListener("click", (e) => alert(`Has pulsado en la casilla ${e.currentTarget.dataset.id}` ))
                        box.classList.add("black");
                    }
                }
                board.append(box);
            }
        }
    }

}
