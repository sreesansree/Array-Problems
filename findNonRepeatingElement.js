const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];
// output : 1,3,5

function findNonRepeatingElem(arr) {
  let s = {};

  arr.map((x) => {
    s[x] = s[x] + 1 || 1;
  });

  console.log(s);
  let keys = Object.keys(s);
  console.log(keys);

  let newArr = [];

  keys.map((x) => {
    if (s[x] !== 1) {
      newArr.push(parseInt(x));
    }
  });
  return newArr;
}
let result = findNonRepeatingElem(arr);
console.log(result);
