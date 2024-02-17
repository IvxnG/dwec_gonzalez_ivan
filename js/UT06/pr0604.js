let header = document.getElementById("header"); 
let numClicks = 0;

let objeto = document.getElementById("objeto");
objeto.addEventListener('click', position);

function position(){
    numClicks += 1;
    header.textContent = numClicks;

    let top =  Math.floor(Math.random() * innerHeight) + "px";
    let left = Math.floor(Math.random() * innerWidth) + "px";
    let width = Math.floor(Math.random() * 170) + "px";
    let height = Math.floor(Math.random() * 200) + "px";

    objeto.style.top = top;
    objeto.style.left = left;
    objeto.style.width = width;
    objeto.style.height = height;
}
