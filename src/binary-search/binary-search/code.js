/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let currentMid = Math.floor((left + right) / 2);

    if (target > nums[currentMid]) {
      left = currentMid + 1;
    } else if (target < nums[currentMid]) {
      right = currentMid - 1;
    } else {
      return currentMid;
    }
  }

  return -1;
};
