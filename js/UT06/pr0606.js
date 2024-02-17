// Definir las letras del teclado
let keyboardLetters = "abcdefghijklmnñopqrstuvwxyz".split('');

// Obtener el elemento de las imágenes y añadir la imagen inicial del juego
let hangmanImg = document.getElementById('hanged');
hangmanImg.innerHTML += `<img src="../../js/UT06/hangman/hangman_00.png" />`;

// Obtener el teclado y agregar las teclas
let keyboard = document.getElementById('keyboard');

keyboardLetters.forEach(letter => {
    keyboard.innerHTML += `<span class="key">${letter}</span>`;
});

// Elegir una palabra aleatoria
let randomWord = words[Math.floor(Math.random() * words.length)];

// Mostrar los espacios para las letras de la palabra
let spacesContainer = document.getElementById('spaces');

let wordLetters = randomWord.split('');

wordLetters.forEach(letter => {
    spacesContainer.innerHTML += `<span class="space" id="${letter}"></span>`;
});

// Obtener todas las teclas y agregar event listeners
let keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener("click", showLetter);
});

document.body.addEventListener("keydown", showLetter);

let solution = randomWord;
let wrongAttempts = 0;
let gameEnded = 0;

// Función para validar si la letra es válida
function validateLetter(letter) {
    return keyboardLetters.includes(letter);
}

// Función para mostrar la letra seleccionada
function showLetter(event){
    let message = document.getElementById('msg');
    let selectedLetter;

    if (event.type == "keydown") {
        if (validateLetter(event.key.toLowerCase())) {
            selectedLetter = event.key.toLowerCase();
        }
    }

    if (event.type == "click") {
        selectedLetter = event.target.textContent;
    }

    if (gameEnded == 0) {
        if (wordLetters.includes(selectedLetter)) {
            if (event.type == "keydown") {
                let keys = document.querySelectorAll('.key');
                keys.forEach(key => {
                    if (key.textContent == event.key.toLowerCase()) {
                        key.classList.add('succeed');
                    }
                });
            } else if (event.type == "click") {
                event.target.classList.add('succeed');
            }

            let selectedSpaces = document.querySelectorAll(`#${selectedLetter}`);
            selectedSpaces.forEach(space => {
                space.textContent = selectedLetter;
            });

            solution = solution.replaceAll(`${selectedLetter}`,'');

            if (solution == '') {
                gameEnded = 1;
            }
        } else {
            if (event.type == "keydown") {
                let keys = document.querySelectorAll('.key');
                keys.forEach(key => {
                    if (key.textContent == event.key) {
                        key.classList.add('fail');
                    }
                });
            } else if (event.type == "click") {
                event.target.classList.add('fail');
            }
            wrongAttempts++;
            hangmanImg.innerHTML = "";
            hangmanImg.innerHTML += `<img src="../../js/UT06/hangman/hangman_${wrongAttempts}.png" />`;

            if (wrongAttempts == 9) {
                gameEnded = 2;
            }
        }
    }

    if (gameEnded == 1) {
        message.textContent = '';
        message.textContent = 'Has ganado';
        keys.forEach(key => {
            key.removeEventListener("click", showLetter);
            document.body.removeEventListener("keydown", showLetter);
        });
        message.classList.add('succeed');
    }

    if (gameEnded == 2) {
        message.textContent = '';
        message.textContent = 'Has perdido';
        keys.forEach(key => {
            key.removeEventListener("click", showLetter);
            document.body.removeEventListener("keydown", showLetter);
        });
        message.classList.add('fail');
    }
}
