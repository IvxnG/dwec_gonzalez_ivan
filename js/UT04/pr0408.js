let btn = document.getElementById("btn");
let divImg = document.getElementById("images");
btn.addEventListener("click", (e) => {
    e.preventDefault();

    let images = document.querySelectorAll("img");
    images = Array.from(images).sort(function() { return Math.random() - 0.5 });;
    divImg.innerHTML = "";
    images.forEach(item => {
        divImg.innerHTML += item.outerHTML;
    })
})