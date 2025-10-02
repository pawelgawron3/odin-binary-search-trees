import { Tree } from "./treeClass.js";

const tree = new Tree([5, 4, 3, 2, 1, 9, 15, 14, 22, 88, 99]);
tree.buildTree(tree.array);
console.log();
console.log();
tree.levelOrderForEach((node) => {
  console.log(node.data);
});
console.log();
console.log("Preorder DFS");
tree.preOrderForEach((node) => {
  console.log(node.data);
});
console.log();
console.log("Inorder DFS");
tree.inOrderForEach((node) => {
  console.log(node.data);
});
console.log();
console.log("Postorder DFS");
tree.postOrderForEach((node) => {
  console.log(node.data);
});
