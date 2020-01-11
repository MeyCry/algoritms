class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // add
  insert(data) {
    const newNode = new BinaryTreeNode(data);

    if (this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {

      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }

    } else {

      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }

    }
  }

  // delete
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node == null) {
      return null;
    }
    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }
    if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // deleting node with no children
    if (node.left == null && node.right == null) {
      node = null;
      return node;
    }

    // deleting node with one children
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }

    // Deleting node with two children
    // minimum node of the right subtree
    // is stored in aux
    const aux = this.findMinNode(node.right);
    node.data = aux.data;

    node.right = this.removeNode(node.right, aux.data);
    return node;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  inOrder(node, arr = []) {
    if (node != null) {
      this.inOrder(node.left, arr);
      arr.push(node.data);
      this.inOrder(node.right, arr);
    }
    return arr;
  }


  preOrder(node, arr = []) {
    if (node != null) {
      arr.push(node.data);
      this.inOrder(node.left, arr);
      this.inOrder(node.right, arr);
    }
    return arr;
  }

  postOrder(node, arr = []) {
    if (node != null) {
      this.inOrder(node.left, arr);
      this.inOrder(node.right, arr);
      arr.push(node.data);
    }
    return arr;
  }

  search(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      return this.search(node.left, data);
    }

    if (data > node.data) {
      return this.search(node.right, data);
    }

    return node;
  }
}

const tree = new BinaryTree();
[5, 1, 34, 3, 6, 1].forEach(item => tree.insert(item));
console.log(tree.inOrder(tree.root)); // min -> max sorted list [ 1, 2, 3, 5, 6, 34 ]
// console.log(tree.preOrder(tree.root)); // [ 5, 1, 2, 3, 6, 34 ]
// console.log(tree.postOrder(tree.root)); // [ 1, 2, 3, 6, 34, 5 ]
// console.log(tree.search(tree.root, 2)); // null
console.log(tree.search(tree.root, 6)); // BinaryTreeNode { data: 6, left: null, right: null }
