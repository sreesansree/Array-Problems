const arr = ["bannana", "apple", "orange", "lemon", "apple", "lemon"];

// function uniq(arr){
//     return [...new Set(arr)]
// }

function uniq(arr) {
  let uniqu = [];
  arr.forEach((element) => {
    if (!uniqu.includes(element)) {
      uniqu.push(element);
    }
  });
  return uniqu
}
console.log(uniq(arr));
