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
}

export { Tree };
