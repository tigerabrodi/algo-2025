/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
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
