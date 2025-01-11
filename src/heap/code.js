class Heap {
  constructor() {
    this.heap = [null];
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2;
  }

  getRightChildIndex(parentIndex) {
    return this.getLeftChildIndex(parentIndex + 1);
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  getParentIndex(i) {
    return i / 2;
  }

  swap(firstIndex, secondIndex) {
    const tmp = this.heap[firstIndex];
    this.heap[firstIndex] = this.heap[secondIndex];
    this.heap[secondIndex] = tmp;
  }

  bubbleUp(index) {
    // while(index > 1) {
    // 	const parentIndex = this.getParentIndex(index)

    // 	if (this.heap[parentIndex] > this.heap[index]) {
    // 		this.swap(index, parentIndex)
    // 		index = parentIndex
    // 	} else {
    // 		break
    // 	}
    // }

    if (index <= 1) return;

    const parentIndex = this.getParentIndex(index);

    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(index, parentIndex);
      return this.bubbleUp(parentIndex);
    }

    return;
  }

  pop() {
    if (this.heap.length === 1) return;
    if (this.heap.length === 2) return this.heap.pop();

    const res = this.heap[1];
    this.heap[1] = this.heap.pop();

    let i = 1;

    // Do we have a left child still?
    // We know a right child only exists if a left one does
    // since complete binary tree
    while (2 * i < this.heap.length) {
      const leftChild = this.heap[this.getLeftChildIndex(i)];
      // could be undefined
      const rightChild = this.heap[this.getRightChildIndex(i)];
      const currentValue = this.heap[i];

      const shouldSwapRight =
        leftChild < currentValue && rightChild && leftChild < rightChild;
      const shouldSwapLeft = leftChild < currentValue;

      if (shouldSwapRight) {
        this.swap(i, this.getRightChildIndex(i));
        i = this.getRightChildIndex(i);
      } else if (shouldSwapLeft) {
        this.swap(i, this.getLeftChildIndex(i));
        i = this.getLeftChildIndex(i);
      } else {
        break;
      }
    }

    // Just playing around how the recursive solution may look like
    //     this.bubbleDown(i);

    return res;
  }

  bubbleDown(index) {
    if (2 * index < this.heap.length) return;

    const leftChild = this.heap[this.getLeftChildIndex(index)];
    const rightChild = this.heap[this.getRightChildIndex(index)];
    const currentValue = this.heap[index];

    const shouldSwapRight =
      leftChild < currentValue && rightChild && leftChild < rightChild;
    const shouldSwapLeft = leftChild < currentValue;

    if (shouldSwapRight) {
      this.swap(index, this.getRightChildIndex(i));
      return this.bubbleDown(this.getRightChildIndex(i));
    }

    if (shouldSwapLeft) {
      this.swap(index, this.getLeftChildIndex(i));
      return this.bubbleDown(this.getLeftChildIndex(i));
    }

    return;
  }
}
