const ab = [1, 20, 22, 3]

const cd = [6, 10, 2, 1]

function multiple(a, b) {
    let c = []
    // for (let i = 0, j = b.length - 1; i < a.length, j >= 0; i++, j--) {
    //     c.push(a[i] * b[j])
    // }
    b.reverse()
    for (let i = 0; i < a.length; i++) {
        c.push(a[i] * b[i])
    }
    return c
}
let result = multiple(ab, cd)
console.log(result);