// const arr = ["bannana", "apple", "orange", "lemon", "apple", "lemon"];
const arr = [1, 2, 3, 3, 4, 6, 7, 9];

function removeDuplicate(arr) {
  let uniq = [];
  arr.forEach((element) => {
    if (!uniq.includes(element)) {
      uniq.push(element);
    }
  });
  return uniq;
}
console.log(removeDuplicate(arr));
