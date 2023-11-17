let cronoDiv = document.getElementById('seg');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let crono;
let sec = 0;
let milsec = 0;
let min = 0;
let active = false;

function stopFunction() {
    clearInterval(crono);
    active = false;
}
stop.addEventListener("click", stopFunction)
reset.addEventListener("click", () => {
    sec = 0;
    milsec = 0;
    min = 0;
    clearInterval(crono);
    cronoDiv.textContent = "00 : 00 : 00"
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
            if (sec >= 59) {
                sec = 0;
                min++;
            }
            cronoDiv.textContent = `${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")} : ${milsec.toString().padStart(2, "0")}`;
        }, 1)
        active = true;
    }
    
})