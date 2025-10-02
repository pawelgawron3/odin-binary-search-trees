import { Node } from "./nodeClass.js";
import { sort } from "./mergeSort.js";
import { createBST } from "./bst.js";
import { prettyPrint } from "./printBst.js";

class Tree {
  constructor(array) {
    this.array = array;
  }

  root = null;

  buildTree(array) {
    let sortedArray = sort(array);
    this.root = createBST(sortedArray);
    prettyPrint(this.root);
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      prettyPrint(this.root);
      return;
    }

    let currNode = this.root;
    while (currNode) {
      if (currNode.data > value) {
        if (!currNode.left) {
          currNode.left = new Node(value);
          prettyPrint(this.root);
          return;
        }
        currNode = currNode.left;
      } else if (currNode.data < value) {
        if (!currNode.right) {
          currNode.right = new Node(value);
          prettyPrint(this.root);
          return;
        }
        currNode = currNode.right;
      } else {
        prettyPrint(this.root);
        return;
      }
    }
  }

  _getSuccessor(curr) {
    curr = curr.right;
    while (curr && curr.left) {
      curr = curr.left;
    }
    return curr;
  }

  deleteItem(value) {
    if (!this.root) {
      return;
    }

    let currNode = this.root;
    let parentNode = null;

    while (currNode) {
      if (currNode.data > value) {
        parentNode = currNode;
        currNode = currNode.left;
      } else if (currNode.data < value) {
        parentNode = currNode;
        currNode = currNode.right;
      } else {
        if (currNode.left && currNode.right) {
          let succ = this._getSuccessor(currNode);
          this.deleteItem(succ.data);
          currNode.data = succ.data;
          break;
        } else {
          let childNode = currNode.left ? currNode.left : currNode.right;

          if (!parentNode) {
            this.root = childNode;
          } else if (parentNode.right.data === currNode.data) {
            parentNode.right = childNode;
          } else {
            parentNode.left = childNode;
          }
          break;
        }
      }
    }
    prettyPrint(this.root);
  }

  find(value) {
    if (!this.root) {
      return null;
    }

    let currNode = this.root;
    while (currNode) {
      if (currNode.data > value) {
        currNode = currNode.left;
      } else if (currNode.data < value) {
        currNode = currNode.right;
      } else {
        return currNode;
      }
    }
    return null;
  }

  _checkConditions(cb, root) {
    if (typeof cb !== "function") {
      throw new Error("A callback is required!");
    }

    if (!root) {
      return false;
    }
    return true;
  }

  levelOrderForEach(callback) {
    if (!this._checkConditions(callback, this.root)) return;

    // FIFO
    let queue = [];

    queue.push(this.root);

    while (queue.length !== 0) {
      let currNode = queue[0];
      callback(currNode);
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
      queue.shift(); //queue = queue.slice(1);
    }
  }

  preOrderForEach(callback) {
    if (!this._checkConditions(callback, this.root)) return;

    preorder(this.root);

    function preorder(node) {
      if (!node) return;

      callback(node);
      preorder(node.left);
      preorder(node.right);
    }
  }

  inOrderForEach(callback) {
    if (!this._checkConditions(callback, this.root)) return;

    inorder(this.root);

    function inorder(node) {
      if (!node) return;

      inorder(node.left);
      callback(node);
      inorder(node.right);
    }
  }

  postOrderForEach(callback) {
    if (!this._checkConditions(callback, this.root)) return;

    postorder(this.root);

    function postorder(node) {
      if (!node) return;

      postorder(node.left);
      postorder(node.right);
      callback(node);
    }
  }
}

export { Tree };
