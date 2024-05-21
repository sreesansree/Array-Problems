const arr = [1, 2, 3];

function powerSet(nums){
    return nums.reduce((a,v)=>a.concat(a.map(r=>r.concat(v))),[[]])
}

console.log(powerSet(arr));