/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const allPaths = [];

  if (!root?.left && !root?.left && root?.val === targetSum) {
    return root;
  }

  if (!root?.val) {
    return [[]];
  }

  function dfs(currentNode, path) {
    if (!currentNode) {
      if ([...path].reduce((acc, a) => acc + a, 0) === targetSum) {
        allPaths.push([...path]);
      }
      return false;
    }

    const value = currentNode.val;

    path.push(value);

    const leafLeft = !dfs(currentNode.left, path);
    if (leafLeft && currentNode.right) {
      dfs(currentNode.right, path);
    }
    path.pop();
  }

  dfs(root, [], 0);

  return allPaths;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// const seven = new TreeNode(7);
// const two = new TreeNode(2);
// const fiveTwo = new TreeNode(5);
// const one = new TreeNode(1);

// const eleven = new TreeNode(11, seven, two);
// const thirdteen = new TreeNode(13);
// const fourTwo = new TreeNode(4, fiveTwo, one);

// const four = new TreeNode(4, eleven);
// const eight = new TreeNode(8, thirdteen, fourTwo);

// const fiveOne = new TreeNode(5, four, eight);

const two = new TreeNode(2);
const three = new TreeNode(3);

const one = new TreeNode(1, two, three);

// console.log(pathSum(fiveOne, 22));
console.log(pathSum(one, 3));
