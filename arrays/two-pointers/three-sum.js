var threeSum = function (nums) {
  let n = nums.length;
  let res = [];

  // Edge cases
  if (n < 3) return res;

  // 1. Sort
  nums.sort((a, b) => a - b);

  // 2. Two pointers
  for (let i = 0; i < n; i++) {
    // Remove duplicates for i
    if (i > 0 && nums[i - 1] == nums[i]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // Remove duplicates for left & right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Find next triplet
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};
