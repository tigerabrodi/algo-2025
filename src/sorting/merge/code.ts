function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  // slice slices up to the mid point, not at the mid point
  const left = mergeSort(arr.slice(0, mid));

  // this is why we can pass in mid like this and slice from mid to the end
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  // while both left and right have elements
  while (left.length && right.length) {
    // if left is smaller than or equal (equal is done because we want to maintain stable sort) right
    // then we take the first element from left and store in results
    // ts ! check since we know both exists
    // shift removes the first element from the array and returns it
    if (left[0] <= right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  // this is ok because one of them will be empty when we get here
  return [...result, ...left, ...right];
}
