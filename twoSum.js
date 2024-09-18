// Link de: https://leetcode.com/problems/two-sum/description/
//Two Sum
function twoSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let z = 0; z < i; z++) {
      const result = nums[i] + nums[z];
      if (result === target) {
        return [z, i];
      }
    }
  }
  return null;
}

let nums = [1, 2, 3, 4, 5, 6, 10];
let target = 9;
console.log(twoSum(nums, target));
