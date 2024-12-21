/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums: number[]) {
  let L = 1;
  let R = 1;

  while (R < nums.length) {
    if (nums[R] === nums[R - 1]) {
      R++;
    } else {
      nums[L] = nums[R];
      L++;
      R++;
    }
  }

  return L;
};
