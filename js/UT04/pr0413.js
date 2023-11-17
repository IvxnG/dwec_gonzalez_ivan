let btn = document.getElementById("add-button");
//let todos = document.getElementById("todos");
let textTodo = document.getElementById("input-text");
let todos = [];

let id = 0;
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (textTodo.value.trim() != "") {
        item = {
            tarea: textTodo.value.trim(),
            id: id,
            done: false,
        }
        todos.push(item);


        todos.forEach(item => {
            let ul = document.querySelector('ul');
            let li = document.createElement("li");

            li.textContent = textTodo.value.trim();
            li.dataset.id = id;

            let borrar = document.createElement("div");
            borrar.classList.add("btn");
            borrar.textContent = "Borrar";
            borrar.addEventListener("click", (e) => {
                e.preventDefault();
                li.remove();
            })

            let tacharBtn = document.createElement("div");
            tacharBtn.classList.add("btnT");
            tacharBtn.textContent = "x";
            tacharBtn.addEventListener("click", (e) => {
                e.preventDefault();
                li.classList.toggle("tachar");
                //li.classList.toggle("btn");
            })

            ul.append(li);
            li.append(borrar)
            li.prepend(tacharBtn)
        });




    }
    textTodo.value = "";
    id++
});