let btn = document.getElementById("btn");
let divImg = document.getElementById("images");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    let images = document.querySelectorAll("img");
    let img = document.createElement("img")
    img.src = images[4].src;
    divImg.prepend(img);
    images[4].remove();
    
})