function max(arr) {
    arr.reduce((acum, item) => {
        if(item > acum){
            console.log("-----");
            console.log(acum);
            console.log(item);
            acum = item;
        }
       return acum
    }, -Infinity);
    return arr
}

console.log(max([8, 2, 3, 4, 6, 9, 123, 4634, 74567, 12, 8, 1243, 99, 2323]));