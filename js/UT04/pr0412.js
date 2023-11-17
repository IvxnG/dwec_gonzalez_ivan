let btn = document.getElementById("add-button");
let todos = document.getElementById("todos");
let textTodo = document.getElementById("input-text");

let id  = 0;
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (textTodo.value.trim() != "") {
        let ul = document.querySelector('ul');
        let li = document.createElement("li");

        li.textContent = textTodo.value.trim();
        li.dataset.id = id;
        
        let borrar = document.createElement("btn");
        borrar.classList.add("btn");
        borrar.textContent = "Borrar";
        borrar.addEventListener("click" , (e) => {
            e.preventDefault();
            li.remove();
        })
        ul.appendChild(li);
        li.appendChild(borrar)
       
    }
    textTodo.value = "";
    id++
});