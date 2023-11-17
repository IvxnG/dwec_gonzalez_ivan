let btn = document.getElementById("btn");
let body = document.body;
function colorRgb() {
    document.body.style.backgroundColor = `rgb(${Math.trunc(Math.random() * 255)}, ${Math.trunc(Math.random() * 255)}, ${Math.trunc(Math.random() * 255)})`;
}
btn.addEventListener("click", colorRgb)
body.addEventListener("keyup", colorRgb)
body.addEventListener("keydown", colorRgb)
//body.addEventListener("mousemove", colorRgb)