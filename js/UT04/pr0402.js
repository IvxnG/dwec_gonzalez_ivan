let mesesArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let mesesDiv = document.getElementById('months');

for (let i = 1; i <= 12; i++) {
    mesesDiv.innerHTML += `<div class="month"><div class="month-number">${i}</div><div class="month-name">${mesesArr[i-1]}</div></div>`
    
}
