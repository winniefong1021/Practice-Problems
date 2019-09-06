class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    let oldTail = this.last;
    oldTail.next = newNode;
    this.last = newNode;
    this.size++;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);