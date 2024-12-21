/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums: number[], val: number) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
