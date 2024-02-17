let lis = document.querySelectorAll('li');
lis.forEach((li) => {
    li.addEventListener('click', handleClick);
})

function handleClick(event) {
    event.preventDefault();
    let selectedLi = event.currentTarget;
    if (event.ctrlKey) {
        selectedLi.classList.toggle("selected")
    } else {
        console.log();
        if (selectedLi.classList.contains("selected")) {
            selectedLi.classList.remove("selected")
        } else {
            lis.forEach((li) => {
                li.classList.remove("selected")
            })
            selectedLi.classList.toggle("selected")
        }
    }
}