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

  // replace value of node at specific position - O(n) linear
  set(idx, val) {
    let update = this.get(idx);
    if (update) {
      update.val = val;
      return true;
    } else {
      return false;
    }
  }

  // add node at specific position - O(n) linear
  insert(idx, val) {
    let newNode = new Node(val);
    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;

    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.unshift();
    if (idx === this.length - 1) return this.push();

    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    this.length++;
    return true;
  }

  // remove node at specific position - O(1) constant
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let removeNode = this.get(idx);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removeNode.prev = null;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }
}

let list = new DoublyLinkedList();
list.push(4);
list.push(5);
list.push(6);
list.push(7); // list: 4, 5, 6, 7
list.remove(1); // list: 4, 6, 7
list.insert(1, 10); // list: 4, 10, 5, 6, 7
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
list.set(0, 1); // list: 1, 4
console.log(list);