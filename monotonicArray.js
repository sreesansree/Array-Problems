// const nums = [1, 3, 2]; return  false;
// const nums = [1, 2, 2, 3]; return true;
// const nums = [6,5,4,4] return true;

var isMonotonic = function (nums) {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
};
console.log(isMonotonic(nums));
