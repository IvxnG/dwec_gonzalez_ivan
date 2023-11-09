function combineArr(arr1, arr2) {
    return [
        ...arr1,
        ...arr2,
    ];
}

console.log(combineArr([1, 2, "A", 3], ["nombre", 5, "abcd"]));