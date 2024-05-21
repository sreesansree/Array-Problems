const numbers = [1, 5, 10, 15, 20];

let result = numbers.find((element) => {
    return element > 10
})
console.log(result);

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

let res = users.find((ele) => {
    return ele.id === 2
})
console.log(res);