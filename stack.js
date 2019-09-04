class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LIFO (last in first out)
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add node to beginning of stack - O(1) constant
  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let current = this.first;
      this.first = newNode;
      newNode.next = current;
    }

    this.size++;
  }

  // remove node from beginning of stack - O(1) constant
  pop() {
    let current = this.first;
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = current.next;
    this.size--;
    return current;
  }

}

let stackList = new Stack();
stackList.push(1);
stackList.push(2);
stackList.push(3);
stackList.pop();
stackList.pop();
stackList.pop();
console.log(stackList);

