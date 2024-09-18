// Link de : https://leetcode.com/problems/maximum-subarray/description/
//Maximum Subarray
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum += nums[i];
    currentSum = Math.max(nums[i], currentSum);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
