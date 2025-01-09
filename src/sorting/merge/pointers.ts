function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  // Create an array of length left + right
  const result: number[] = new Array(left.length + right.length);

  // Pointer for left
  // This pointer tells us
  let leftIndex = 0;

  let rightIndex = 0;

  let resultIndex = 0;

  // As long as we have not reached the end of either left or right
  // Continue to compare elements from both arrays
  // If left index is equal to length - 1, that's the last element which is ok
  while (leftIndex < left.length && rightIndex < right.length) {
    // If the current element in left is less than or equal to the current element in right
    // Add the current element from left to the result
    // The neat part here is that we got resultIndex
    // So we never need to worry about the index of the result array
    if (left[leftIndex] <= right[rightIndex]) {
      result[resultIndex] = left[leftIndex];
      leftIndex++;
    } else {
      // Otherwise, add the current element from right to the result
      result[resultIndex] = right[rightIndex];
      rightIndex++;
    }

    // Always increase result index
    // We could also do this in both if and else
    // This just reduces duplication since we always need to do this
    resultIndex++;
  }

  // Copy remaining elements (only one of these while loops will execute)
  // This is because we know that one of them will be empty when we get here
  while (leftIndex < left.length) {
    // Keep adding left elements
    result[resultIndex] = left[leftIndex];

    // Move both to their next positions
    leftIndex++;
    resultIndex++;
  }

  while (rightIndex < right.length) {
    // Keep adding right elements
    result[resultIndex] = right[rightIndex];

    // Move both to their next positions
    rightIndex++;
    resultIndex++;
  }

  return result;
}
