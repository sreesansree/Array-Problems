// const arr = [10, 1, 2, 15, 8, 9, 25];

// function reverseArr(arr) {
//     if (arr.length === 0) {
//         return 0
//     }
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++
//         end--
//     }
//     return arr
// }
// console.log(reverseArr(arr));


// const array_one = [11, 22, 33, 44, 55];
// const start = 1;
// const end = array_one.length - 1

// const arr2 = array_one.slice(start, end)
// console.log(arr2);



// const flatArray = [[1, 2, 3], [12, 23, 13], [34, 43, 32]]
// let arr3 = [1, 2, [3, [4, 5, 6], 7], 8];
// let newArray = []
// for (let i = 0; i < flatArray.length; i++) {
//     if (Array.isArray(flatArray[i])) {
//         newArray = newArray.concat(flatArray[i])
//     } else {
//         newArray.push(flatArray[i])
//     }
// }
// console.log(newArray);
// console.log(flatArray.length);
// console.log(flatArray.flat());

// let flatArrayy = [].concat.apply([], flatArray);
// let flatArrayy = [].concat(...flatArray)
// let arr33 = [].concat(...arr3)
// console.log(arr33);
// console.log(arr3.flat(2));
// console.log(flatArrayy);
// let reduce = flatArray.reduce((acc,curVal)=>{
//     return acc.concat(curVal)
// },[])
// console.log(reduce);



const arrWithSubarr = [0, [1, 2, 3], [4, 5, 6], [7, 8, 9, 10], 11, 12]

// console.log(arrWithSubarr.flat());
// const flatArray = [].concat(...arrWithSubarr)
// console.log('flatArry ==> ',flatArray);

// const flat = [].concat.apply([],arrWithSubarr)
// console.log('flat ==> ',flat);

// const reduceFlat = arrWithSubarr.reduce((acc,curVal)=>{
//     return acc.concat([],curVal)
// },[])

// console.log('reduceFlat ===> ',reduceFlat);

// const removeDup = (arr) => {
//     let k = 1;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] != arr[i - 1]) {
//             arr[k++] = arr[i]
//         }
//     }
//     arr.length = k
//     return arr
// }
// const arr = [4, 4, 1, 2, 2, 3, 4, 4, 5, 6, 7]
// arr.sort((a, b) => a - b)
// console.log(removeDup(arr));

const arr = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9]

// function countDup(arr) {
//     let count = 0;
//     // let dup = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 // dup.push(arr[i])
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(countDup(arr));


function findDuplicate(arr) {
    let seen = new Set()
    let duplicate = new Set()
    for (const num of arr) {
        if (seen.has(num)) {
            duplicate.add(num)
        } else { 
            seen.add(num)
        }
    }
    return Array.from(duplicate)
}
console.log(findDuplicate(arr));











