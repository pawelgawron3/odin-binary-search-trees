import { Tree } from "./treeClass.js";
import { generateArray } from "./generateArray.js";

const arr = generateArray(20);

const tree = new Tree(arr);
tree.buildTree(tree.array);
