let filter = '';
let currentPage = 0;
let elementsPerPage = 5;

function renderCharacters() {
    let list = document.getElementById('people-list-characters');
    list.innerHTML = '';
    data.filter( ({name}) => name.toLowerCase().includes(filter))
        .filter( (_, index) => Math.trunc(index/elementsPerPage) == currentPage)
        .forEach( ({name:charName, birth_year, homeworld}) => {
            list.innerHTML += `
            <div class="character">
                <div class="character-name">${charName}</div>
                <div class="character-birth-year">${birth_year ? birth_year : "-"}</div>
                <div class="homeworld">${homeworld.name ? homeworld.name : "-"}</div> 
                <div class="btn btn-char">Detalle</div> 
            </div>
            `
    })
}
renderCharacters();

function handleFilterClick(e){
    filter = document.getElementById("filter-text")
                     .value
                     .trim()
                     .toLowerCase();
    renderCharacters();

}
document.querySelector(".btn-filter")
        .addEventListener("click", handleFilterClick);
