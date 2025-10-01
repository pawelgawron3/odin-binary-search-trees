import { Node } from "./nodeClass.js";
import { sort } from "./helperFunction.js";

class Tree {
  constructor(array) {
    this.array = array;
  }

  root = null;

  buildTree() {
    let sortedArray = sort(this.array);
  }
}

export { Tree };
