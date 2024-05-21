// 5
// 1 2 3 5

/* function missingNum(arr, n) {
  const sortedArr = arr.sort((a, b) => a - b);
  const mySet = new Set(sortedArr);
  for (let i = 1; i <= n; i++) {
    if (!mySet.has(i)) {
      return i;
    }
  }
}
const array = [6,1,2,8,3,4,7,10,5];
const n = 10;
console.log(missingNum(array, n)); */

function findMissingNum(arr, n) {
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log("totalSum =>", totalSum);
  console.log("ArrySum =>", arrSum);
  return totalSum - arrSum;
}
const arr = [6, 1, 2, 8, 3, 4, 7, 9, 5,11];
const n = 11;
console.log('The missing Number is : ',findMissingNum(arr,n));