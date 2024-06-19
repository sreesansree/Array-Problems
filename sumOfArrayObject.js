const ba = [
  { af: 4, p: 6 },
  { af: 4, p: 6 },
  { af: 4, p: 6 },
  { af: 4, p: 6 },
  { af: 4, p: 6 },
];

// let sum = ba.reduce((acc, obj) => (acc += obj.p), 0);
// console.log(sum);

// let sum = 0;
// for (let i = 0; i < ba.length; i++) {
//   sum += ba[i].p;
// }
// console.log(sum);

// let sum = 0;
// ba.forEach((obj) => {
//   sum += obj.p;
// });
// console.log(sum);

let sum = 0;

for (let i = 0; i < ba.length; i++) {
  sum += ba[i].p
}
console.log(sum);
