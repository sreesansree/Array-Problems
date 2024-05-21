
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return 'Array need atleast Two Element'
    }
    let lar = arr[0];
    let sec = arr[1];
    if (sec > lar) {
        [lar, sec] = [sec, lar]
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > lar) {
            sec = lar;
            lar = arr[i]
        } else if (arr[i] > sec && arr[i] !== lar) {
            sec = arr[i]
        }
    }
    return sec
}
const arr = [10, 3, 6, 15, 8];
console.log('second largest : ',findSecondLargest(arr));