let user = {
    name : "Iván",
    surname : "González",
};


function cloneObject(user){
    let userClone = Object.assign({}, user);
    return userClone;
}
console.log(cloneObject(user));