let btn = document.getElementById("add-button");
let todos = document.getElementById("todos");
let textTodo = document.getElementById("input-text");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (textTodo.value.trim() != "") {
        let ul = document.querySelector('ul');
        //ul.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = textTodo.value.trim();
        ul.appendChild(li);

    }

    textTodo.value = "";

});