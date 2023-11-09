let arr = ['24-05-2020', '02-12-2018', '14-02-2020'];
let fechaSplit = []
function sortDates(arr) {
    arr.forEach(function (item) {
        fechaSplit.push(Number(item.split("-")
                                   .reverse()
                                   .join('')));                           
    })

    arr = [];
    fechaSplit.sort((a, b) => b - a)

    fechaSplit.forEach(function (item) { 
        let fecha = item.toString()
                        .split("")
                        .slice(6,8)
                        .join("")  + "-" + 
                    item.toString()
                        .split("")
                        .slice(4,6)
                        .join("") + "-" + 
                    item.toString()
                        .split("",4)
                        .join("");
        arr.unshift(fecha)          
    })
    return arr;
}
console.log(sortDates(arr));
