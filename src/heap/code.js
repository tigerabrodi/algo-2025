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
    while (index > 1) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }

    return;
  }

  pop() {
    if (this.heap.length === 1) return;
    if (this.heap.length === 2) return this.heap.pop();

    const res = this.heap[1];
    this.heap[1] = this.heap.pop();

    let index = 1;

    this.bubbleDown(index);

    return res;
  }

  heapify(arr) {
    const heap = [null, ...arr];

    const startIndex = Math.floor((arr.length - 1) / 2);

    for (let i = startIndex; i > 0; i--) {
      this.bubbleDown(i);
    }

    this.heap = heap;
  }

  bubbleDown(index) {
    while (2 * index < this.heap.length) {
      const leftChild = this.heap[this.getLeftChildIndex(index)];
      // could be undefined
      const rightChild = this.heap[this.getRightChildIndex(index)];
      const currentValue = this.heap[index];

      const shouldSwapRight =
        leftChild < currentValue && rightChild && leftChild < rightChild;
      const shouldSwapLeft = leftChild < currentValue;

      if (shouldSwapRight) {
        this.swap(index, this.getRightChildIndex(index));
        index = this.getRightChildIndex(index);
      } else if (shouldSwapLeft) {
        this.swap(index, this.getLeftChildIndex(index));
        index = this.getLeftChildIndex(index);
      } else {
        break;
      }
    }
  }
}
