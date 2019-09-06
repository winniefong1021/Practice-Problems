class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let checkNodeVal = (node) => {
      let current = node;

      if (newNode.val > current.val) { // check right side if greater
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = node.right;
        checkNodeVal(current);
      } else { // check left side if less
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = node.left;
        checkNodeVal(current);
      }
    }

    checkNodeVal(this.root);
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(40);
tree.insert(20); // root: 40, left: 20
tree.insert(22); // root: 40, left: 20, 20.right: 22
tree.insert(18); // root: 40, left: 20, 20.left: 18
tree.insert(19); // root: 40, left: 20, 20.left.right: 19
tree.insert(50); // root: 40, right: 50
tree.insert(44); // root: 40, right: 50, 50.left: 44
tree.insert(55); // root: 40, right: 50, 50.right: 55
console.log(tree);