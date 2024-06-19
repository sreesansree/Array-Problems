
var thirdMax = function (arr) {
    // console.log(nums);
    let mySet = new Set(arr);
    let nums = Array.from(mySet);
    nums.sort((a, b) => b - a);
    // console.log(nums);
    let largest = nums[0];
    // console.log(largest);
    let sec = 0;
    let third = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < largest) {
        sec = nums[i];
        break;
      }
    }
    // console.log(sec);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < largest && nums[i] < sec) {
        third = nums[i];
      }
    }
    if (nums.length <= 2) {
      // return largest;
      console.log(
        "The Array is less than or equal 2 , The largest value is : ",
        largest
      );
    } else {
      // return third;
      console.log("The Third Largest Value is : ", third);
    }
  };
  const arr = [3, 2, 1]; //1
  // const arr = [2,2,3,1] //1
  // const arr = [1, 2]; //2
  // const arr = [1, 1, 2]; // 2
  // let res = thirdMax(arr);
  thirdMax(arr)
  // console.log("The third largest num is : ", res);
  