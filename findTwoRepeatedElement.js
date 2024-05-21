const arr = [1, 2, 2, 1];
// 1 3
let n = 2;
function findTwoRepeatedNum(arr, n) {
  let arrLen = n + 2;
  let nArr = [];
  for (let i = 0; i < arrLen; i++) {
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[i] === arr[j]) {
        nArr.push(arr[j]);
      }
    }
  }
  console.log(nArr);
}
findTwoRepeatedNum(arr, n);
