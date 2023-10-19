let a = {
    name: 'obj1',
    age: 20,
    city: 'city',
}

let b = {
    name: 'obj2',
    city: 'city',
    country: 'spain',
}
function containsObject(a, b) {
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
    }
    return true;
}
console.log(containsObject(a, b));