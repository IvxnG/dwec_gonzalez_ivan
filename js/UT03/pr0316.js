function createPow(arr, pow) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(arr[i], pow));
    }
    return result;
}
console.log(createPow([1, 2, 3, 4, 5], 2))
