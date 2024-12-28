/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

// students and sandwiches are an array of 0s and 1s
// we can leverage the fact that both arrays contain only 0s and 1s by using this as the index too for `counts`
var countStudents = function (students, sandwiches) {
  const counts = [0, 0];

  for (const s of students) {
    counts[s]++;
  }

  for (const sandwich of sandwiches) {
    if (counts[sandwich] === 0) {
      break;
    }

    counts[sandwich]--;
  }

  return counts[0] + counts[1];
};
