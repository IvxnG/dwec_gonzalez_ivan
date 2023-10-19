let obj1 = {
    name: 'obj1',
    age: 20,
    city: 'city',
}

let obj2 = {
    name: 'obj2',
    city: 'city',
    country: 'spain',
}

let obj3 = {}
function intersectObjects(obj1, obj2) {
    for (key in obj1) {
       if (key in obj2 ){
        obj3[key] = obj1[key];
       }
    }
    return obj3;
}
console.log(intersectObjects(obj1, obj2));