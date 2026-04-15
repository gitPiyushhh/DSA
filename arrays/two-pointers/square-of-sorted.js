// Note : -
// - Modify the function or parameters if needed.
// - Signatures function may vary, adjust parameters if required.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var squaresOfASortedArray = function (nums) {
  const n = nums.length;
  const res = new Array(n);
  let left = 0;
  let right = n - 1;
  let k = n - 1;

  while (left <= right) {
    let leftSq = nums[left] * nums[left];
    let rightSq = nums[right] * nums[right];

    if (leftSq > rightSq) {
      res[k] = leftSq;
      left++;
    } else {
      res[k] = rightSq;
      right--;
    }
    k--;
  }

  return res;
};
