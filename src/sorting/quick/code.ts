function quickSort(arr: number[]): number[] {
  // If the array is empty or has only one element, it is already sorted
  if (arr.length <= 1) return arr;

  // Choose a pivot element
  // We can pick any element
  // One optimization is to look at the start, middle, and end to see which one is the in the median of them
  // This is ok for demonstration, we don't need to take the optimized approach
  // all good dawg
  const pivot = arr[Math.floor(arr.length / 2)];

  // We're gonna split the array into two arrays
  const left = [];
  const right = [];

  for (const num of arr) {
    // If the current number is less than the pivot, we add it to the left array
    if (num < pivot) left.push(num);
    // If the current number is greater than or equal to the pivot, we add it to the right array
    else right.push(num);
  }

  // We know that the pivot is in the correct position
  // it is in the middle of the two arrays
  // we wanna do this process recursively until the array is fully sorted
  // our base case as shown above is when the array is empty or has only one element
  return [...quickSort(left), pivot, ...quickSort(right)];
}
