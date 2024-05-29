const num = [1, 2, 3, 4, 5,10];

function sum(num) {
  let sum = 0;
  //   for (let i = 0; i < num.length; i++) {
  //     sum = sum + num[i];
  //   }
  let i = 0;
  let len = num.length;
  while (i < len) {
     sum += num[i];
    i++;
  }

  return sum;
}

console.log(sum(num));
