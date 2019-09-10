// best/average case: O(log n); worst case: O(n) for most methods

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

      if (current.val === newNode.val) return undefined;

      if (newNode.val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = node.right;
        checkNodeVal(current);
      } else {
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

  find(val) {
    if (!this.root) return false;

    let found = false;
    let findNode = (node) => {
      let current = node;

      if (current.val === val) {
        found = true;
        return found;
      }

      if (val > current.val) {
        if (!current.right) return found;
        current = node.right;
        findNode(current);
      } else {
        if (!current.left) return found;
        current = node.left;
        findNode(current);
      }
    }

    findNode(this.root);
    return found;
  }

  /*
  Breadth-first search:
    - start at root
    - check each child node going from left to right then onto the next level until bottom right child node has been reached
  */
  bfs() {
    if (!this.root) return undefined;

    let queue = [this.root];
    let visited = [];

    while (queue.length > 0) {
      let current = queue[0];
      visited.push(current.val);
      queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return visited;
  }

  // Depth-first search (PreOrder)
  dfsPreOrder() {
    let visited = [];

    let addNode = (node) => {
      visited.push(node.val);
      if (node.left) addNode(node.left);
      if (node.right) addNode(node.right);
    }

    addNode(this.root);
    return visited;
  }

  // Depth-first search (PostOrder)
  dfsPostOrder() {
    let visited = [];

    let addNode = (node) => {
      if (node.left) addNode(node.left);
      if (node.right) addNode(node.right);
      visited.push(node.val);
    }

    addNode(this.root);
    return visited;
  }

  // Depth-first search (InOrder)
  dfsInOrder() {
    let visited = [];

    let addNode = (node) => {
      if (node.left) addNode(node.left);
      visited.push(node.val);
      if (node.right) addNode(node.right);
    }

    addNode(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.find(40); // false
tree.root = new Node(40);
tree.insert(20); // root: 40, left: 20
tree.insert(22); // root: 40, left: 20, 20.right: 22
tree.insert(18); // root: 40, left: 20, 20.left: 18
tree.insert(19); // root: 40, left: 20, 20.left.right: 19
tree.insert(50); // root: 40, right: 50
tree.insert(44); // root: 40, right: 50, 50.left: 44
tree.insert(55); // root: 40, right: 50, 50.right: 55
tree.insert(55); // undefined
tree.find(40); // true
tree.find(22); // true
tree.find(67); // false
tree.bfs(); // [40, 20, 50, 18, 22, 44, 55, 19]
tree.dfsPreOrder(); // [40, 20, 18, 19, 22, 50, 44, 55]
tree.dfsPostOrder(); // [19, 18, 22, 20, 44, 55, 50, 40]
tree.dfsInOrder(); // [18, 19, 20, 22, 40, 44, 50, 55]
// console.log(tree);

let tree1 = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
tree.dfsPreOrder(); // [10, 6, 3, 8, 15, 20]
tree1.dfsPostOrder(); // [3, 8, 6, 20, 15, 10]
tree1.dfsInOrder(); // [3, 6, 8, 10, 15, 20]