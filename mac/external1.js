/** @format */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

let nums = [1, 2, 3, 4, 5];
let target = 8;

solving(nums, target);

function solving(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let value = Math.abs(nums[i] - target);
    console.log(value);
    if (obj.hasOwnProperty(nums[i])) {
      console.log(obj[nums[i]], i);
      break;
    } else {
      obj[value] = i;
    }
  }
  console.log(obj);
  s;
}
