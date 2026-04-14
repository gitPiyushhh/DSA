var removeDuplicatesFromSortedArray = function (nums) {
  let n = nums.length;

  // Elem at 0 index always unique
  let k = 1;

  // Edge case
  if (n === 0) return 0;

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k++] = nums[i];
    }
  }

  // Because k is index
  return k;
};
