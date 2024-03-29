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

  // add to end of list - O(1) constant
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

  // remove from beginning - O(1) constant
  dequeue() {
    let oldHead = this.first;

    if (!this.first) return undefined;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = oldHead.next;
    this.size--;
    return oldHead;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);