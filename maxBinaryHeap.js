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
}

let heap = new MaxBinaryHeap();
heap.insert(41); // [41]
heap.insert(39); // [41, 39]
heap.insert(33); // [41, 39, 33]
heap.insert(18); // [41, 39, 33, 18]
heap.insert(27); // [41, 39, 33, 18, 27]
heap.insert(12); // [41, 39, 33, 18, 27, 12]
heap.insert(55); // [55, 39, 41, 18, 27, 12, 33]
console.log(heap);