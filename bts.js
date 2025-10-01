import { Node } from "./nodeClass.js";

function sortedArrayToBST(array, start, end) {
  if (start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);

  let root = new Node(array[mid]);

  root.left = sortedArrayToBST(array, start, mid - 1);
  root.right = sortedArrayToBST(array, mid + 1, end);

  return root;
}

function createBST(array) {
  return sortedArrayToBST(array, 0, array.length - 1);
}

export { createBST };
