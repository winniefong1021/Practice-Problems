class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let newTail = current;

    if (this.length === 0) return undefined;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (current) {
      if (idx === count) {
        return current;
      }
      current = current.next;
      count++;
    }

    return current;
  }

  set(idx, val) {
    let oldNode = this.get(idx);

    if (oldNode) {
      oldNode.val = val;
      return true;
    }

    return false;
  }
}

let list = new LinkedList();
list.push(1);
list.push(4);
list.push(6);
list.push(7);
// list.traverse();
list.pop(); // 7 => 1, 4, 6
list.shift(); // 1 => 4, 6
list.unshift(5); // 5, 4, 6
list.get(1); // 4
list.get(0); // 5
list.get(2); // 6
list.get(5); // null
console.log(list.set(0, 10)); // true; list: 5, 4, 6 => 10, 4, 6
console.log(list.set(1, 11)); // true; list: 10, 4, 6 => 10, 11, 6
console.log(list.set(6, 6)); // false
console.log(list);