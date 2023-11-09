let mesesArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let mesesDiv = document.getElementById('months');

for (let i = 1; i <= 12; i++) {
    let mes = document.createElement('div');
    mes.classList.add('month')

    let mesNum = document.createElement('div');
    mesNum.classList.add('month-number')
    mesNum.textContent = i;

    let mesText = document.createElement('div');
    mesText.classList.add('month-name')
    mesText.textContent = `${mesesArr[i-1]}`
    
    mes.append(mesNum)
    mes.append(mesText)
    mesesDiv.append(mes)
    
}


let numbers = document.getElementById('numbers');
for (let i = 1; i <= 30; i++) {
    let num = document.createElement('span');
    num.classList.add('number')
    num.innerHTML = `<p>${i}</p>`;
    numbers.append(num)
}
