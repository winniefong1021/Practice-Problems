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

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let removeNode = this.tail;
      this.tail = removeNode.prev;
      this.tail.next = null;
      removeNode.prev = null;
      this.length--;
      return removeNode;
    }
  }
}

let list = new DoublyLinkedList();
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.pop(); // list: 4, 5, 6
list.pop(); // list: 4, 5
list.pop(); // list: 4
list.pop(); // empty list
list.push(1);
list.push(2);
console.log(list);