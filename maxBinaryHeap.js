class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    let idx = this.values.length - 1;
    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    let max = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    let idx = 0;
    const heapLength = this.values.length;
    const element = this.values[0];

    while (idx < heapLength) {
      let leftIdx = (2 * idx) + 1;
      let rightIdx = (2 * idx) + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < heapLength) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < heapLength) {
        rightChild = this.values[rightIdx];
        if (rightChild > element && swap === null || (swap !== null && rightChild > leftChild)) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }

    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41); // [41]
heap.insert(39); // [41, 39]
heap.insert(33); // [41, 39, 33]
heap.insert(18); // [41, 39, 33, 18]
heap.insert(27); // [41, 39, 33, 18, 27]
heap.insert(12); // [41, 39, 33, 18, 27, 12]
heap.insert(55); // [55, 39, 41, 18, 27, 12, 33]
heap.extractMax(); // [41, 39, 33, 18, 27, 12]
heap.extractMax(); // [39, 27, 33, 18, 12]
console.log(heap);