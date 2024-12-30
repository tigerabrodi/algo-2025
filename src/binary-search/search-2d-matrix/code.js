/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let ROWS = matrix.length;
  let COLUMNS = matrix[0].length;

  let topRow = 0;
  let bottomRow = matrix.length - 1;

  let targetRow = null;

  while (topRow <= bottomRow) {
    let currentMid = Math.floor((topRow + bottomRow) / 2);

    let firstVal = matrix[currentMid][0];
    let lastVal = matrix[currentMid][COLUMNS - 1];

    if (target >= firstVal && target <= lastVal) {
      targetRow = matrix[currentMid];
      break;
    } else if (target > lastVal) {
      topRow = currentMid + 1;
    } else if (target < firstVal) {
      bottomRow = currentMid - 1;
    }
  }

  if (!targetRow) return false;

  let left = 0;
  let right = targetRow.length - 1;

  while (left <= right) {
    let currentMid = Math.floor((left + right) / 2);

    if (target > targetRow[currentMid]) {
      left = currentMid + 1;
    } else if (target < targetRow[currentMid]) {
      right = currentMid - 1;
    } else {
      return true;
    }
  }

  return false;
};
