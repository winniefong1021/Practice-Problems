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

  // goes through entire list - O(n) linear
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // adds node to end of list - O(1) constant
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

  // removes node at end of list - O(n) linear
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

  // removes node from beginning of list - O(1) constant
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

  // adds node to beginning of list - O(1) constant
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

  // retrieves node at specific position - O(n) linear
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

  // updates a specific node at given position and new value - O(n) linear
  set(idx, val) {
    let oldNode = this.get(idx);

    if (oldNode) {
      oldNode.val = val;
      return true;
    }

    return false;
  }

  // adds new node at specific position - O(n) linear
  insert(idx, val) {
    let newNode = new Node(val);

    if (idx < 0 || idx > this.length) return false;

    if (idx === this.length) {
      this.push(val);
      return true;
    } else if (idx === 0) {
      this.unshift(val);
      return true;
    } else {
      let current = this.get(idx - 1);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
      return true;
    }
  }

  // removes node at specific position - O(n) linear
  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;

    if (idx === this.length - 1) {
      return this.pop();
    } else if (idx === 0) {
      return this.shift();
    } else {
      let prevNode = this.get(idx - 1);
      let deleteNode = prevNode.next;
      prevNode.next = deleteNode.next;
      this.length--;
      return deleteNode;
    }
  }

  // reversing list in place - O(n) linear
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
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
list.set(1, 11); // true; list: 10, 4, 6 => 10, 11, 6
list.set(6, 6); // false
list.set(0, 10); // true; list: 5, 4, 6 => 10, 4, 6
list.insert(0, 12); // true; 12, 10, 11, 6
list.insert(4, 20); // true; 12, 10, 11, 6, 20
list.insert(1, 14); // true; 12, 14, 10, 11, 6, 20
list.insert(10, 50); // false
list.remove(0); // uses shift and removes 12; list: 14, 10, 11, 6, 20
list.remove(4); // uses pop and removes 20; list: 14, 10, 11, 6
list.remove(2); // removing 11; list: 14, 10, 6
list.remove(7); // undefined
list.reverse(); // 6, 10, 14
console.log(list);