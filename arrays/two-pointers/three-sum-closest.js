/**
 * @param {number[]} nums, @param {number} target
 * @return {number[]}
 */
var threeSumClosest = function (nums, target) {
  let res = nums[0] + nums[1] + nums[2];
  let minDiff;
  let n = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let diff = Math.abs(sum - target);
      minDiff = Math.abs(res - target);

      if (diff < minDiff) {
        res = sum;
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        // Exact match
        return sum;
      }
    }
  }

  return res;
};
