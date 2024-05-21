const arr = [1, 2, 2, 3, 4, 5, 5, 6, 6, 7]


function removeDup(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let k = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[k++] = arr[i];
        }
    }
    arr.length = k; // Return the length of the modified array
    return arr
}
console.log(removeDup(arr));
// const lengthAfterRemovingDuplicates = removeDup(arr);
// console.log(arr.slice(0, lengthAfterRemovingDuplicates)); // Log the modified array

