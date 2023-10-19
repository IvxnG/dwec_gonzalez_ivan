let a = {
    name : 'obj1',
    age : 20,
    city : 'city',
    birthday : undefined,
}

let b = {
    name : 'obj1',
    age : 20,
    city : 'city',
    birthday : "10/10/2000",
}
function removeUndefined(obj) {
    let res = {};
    for (let key in obj) {
        if (!(obj[key] === undefined)) {
            res[key] = obj[key];
        }
    }
    return res;
}
console.log(removeUndefined(a));
console.log(removeUndefined(b));

