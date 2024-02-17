let objeto = document.getElementById("objeto");
let start = document.getElementById("btn-start");
let score = document.getElementById("score");

let players = [];
let points = 0;
start.addEventListener('click', startGame);

//Dificultad
let diff_levels = document.querySelectorAll(".diff-level");
diff_levels.forEach( diff_level => diff_level.addEventListener("click", setDiff))
let selectedDiff = 1;

//Cronometro
let time = document.getElementById("time");
let stop = document.getElementById("btn-reset");
let crono;
let sec = 0;
let milsec = 0;
let active = false;

stop.addEventListener('click', resetGame);

start.addEventListener("click", () => {
    sec = 0;
    milsec = 0;
    min = 0;
    clearInterval(crono);
    active = false;
})
start.addEventListener("click", (e) => {
    e.preventDefault();
    if(active == false ){
        crono = setInterval(() => {
            milsec++;
            if (milsec >= 99) {
                milsec = 0;
                sec++
            }
            time.textContent = `${sec.toString().padStart(2, "0")} : ${milsec.toString().padStart(2, "0")}`;
        }, 1)
        active = true;
    }
    
})


//Funciones
function startGame(){
    let player = document.getElementById("player-input").value ? document.getElementById("player-input").value : "Anónimo";
    players.push(player)
    objeto.addEventListener('click', position);
    setTimeout(endGame, 14000);
}

function position(){
    points++;
    score.textContent = points;

    let top =  (Math.floor(Math.random() * innerHeight) + 40) + "px";
    let left = (Math.floor(Math.random() * innerWidth) + 40) + "px";
    let width = Math.floor(Math.random() * 170) + "px";
    let height = Math.floor(Math.random() * 200) + "px";

    objeto.style.top = top;
    objeto.style.left = left;
    objeto.style.width = width;
    objeto.style.height = height;
}

function setDiff(e){
    diff_levels.forEach( diff_level => diff_level.classList.remove("selected"))
    e.target.classList.add("selected")
    selectedDiff = e.target.textContent;
}

function endGame() {
    alert('Fin del Tiempo');
    clearInterval(crono);
}
function resetGame() {
    clearInterval(crono);
    time.textContent = "00 : 00";
}



