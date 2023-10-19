
let user1 = {
    name : "Iván",
    surname : "González",
};
let user2 = {
    city : "León",
};

function mergeObjects(user1, user2) {
    let objList = {
        ...user1,
        ...user2,
    };
    return objList;
}
console.log(mergeObjects(user1, user2));