class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add node to end of list - O(1) constant
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // remove node from end of list - O(1) constant
  pop() {
    if (!this.head) return undefined;

    let removeNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removeNode.prev;
      this.tail.next = null;
      removeNode.prev = null;
    }

    this.length--;
    return removeNode;
  }

  // remove node from beginning of list - O(1) constant
  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  // add node to beginning to list - O(1) constant
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // access node by position - O(n) linear
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let middle = this.length / 2;

    if (idx <= middle) {
      let counter = 0;
      let current = this.head;
      while (counter <= middle) {
        if (idx === counter) {
          return current;
        }
        current = current.next;
        counter++;
      }
    }

    if (idx > middle) {
      let counter = this.length - 1;
      let current = this.tail;
      while (counter > middle) {
        if (idx === counter) {
          return current;
        }
        current = current.prev;
        counter--;
      }
    }
  }
}

let list = new DoublyLinkedList();
list.push(4);
list.push(5);
list.push(6);
list.push(7); // list: 4, 5, 6, 7
list.get(2); // 6
list.get(0); // 4
list.get(1); // 5
list.get(6); // null
list.get(-1); // null
list.pop(); // list: 4, 5, 6
list.pop(); // list: 4, 5
list.pop(); // list: 4
list.pop(); // empty list
list.push(1);
list.push(2);
list.push(3);
list.shift(); // list: 2, 3
list.shift(); // list: 3
list.shift(); // empty list
list.unshift(4); // list: 4
list.unshift(5); // list: 5, 4
console.log(list);