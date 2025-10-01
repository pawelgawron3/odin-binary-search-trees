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
}

export { Tree };
