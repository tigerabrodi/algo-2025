function insertionSort(arr: number[]) {
  // let i be as we keep track of the next element to insert
  // start at 1 because we assume the first element is already sorted
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    // Keeping swapping until the current element is in the correct position
    while (j >= 0 && arr[j] > arr[j + 1]) {
      let tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;

      j--;
    }
  }

  return arr;
}
