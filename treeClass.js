import { sort } from "./helperFunction.js";
import { createBST } from "./bst.js";

class Tree {
  constructor(array) {
    this.array = array;
  }

  root = null;

  buildTree(array) {
    let sortedArray = sort(array);
    this.root = createBST(sortedArray);
    return this.root;
  }
}

export { Tree };
