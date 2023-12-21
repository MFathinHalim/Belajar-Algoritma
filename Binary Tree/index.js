class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMinNode(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

function insertNode(root, val) {
  if (root.value === null || root.value === undefined) {
    if (val) {
      root.value = val;
    } else {
      return;
    }
  }else if(root === null) {
    if (val) {
        root = new Tree(val);
    }else {
        return
    }
  }
  if (val < root.value) {
    if (root.left === null) {
      root.left = new Tree(val);
    } else {
      insertNode(root.left, val);
    }
  } else {
    if (root.right === null) {
      root.right = new Tree(val);
    } else {
      insertNode(root.right, val);
    }
  }
}

function deleteNode(root, val) {
  if (root === null) {
    return root;
  }

  if (val < root.value) {
    root.left = deleteNode(root.left, val);
  } else if (val > root.value) {
    root.right = deleteNode(root.right, val);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    const minValueNode = findMinNode(root.right);
    root.value = minValueNode.value;
    root.right = deleteNode(root.right, minValueNode.value);
  }

  return root;
}

function makeBinaryTree(arr) {
  if (arr === null) {
    return "Array tidak boleh kosong !";
  }
  let sorted = arr.sort((a, b) => a - b);
  let rootIndex;
  if (arr.length % 2 == 0) {
    rootIndex = Math.floor(arr.length / 2) - 1;
  } else {
    rootIndex = Math.floor(arr.length / 2);
  }

  const root = new Tree(sorted[rootIndex]);

  for (let i = 0; i < arr.length; i++) {
    if (i !== rootIndex) {
      insertNode(root, arr[i]);
    }
  }

  return root;
}

function searchRoot(root, val) {
  if (root === null || root.value === val) {
    return root;
  }

  if (val < root.value) {
    return searchRoot(root.left, val);
  } else {
    return searchRoot(root.right, val);
  }
}

const array = [2, 4, 3];
tree = makeBinaryTree(array);
console.log(tree);
//==========================
insertNode(tree, 5);
console.log(tree);
//==========================
const searchValue = 5;
const searchResult = searchRoot(tree, searchValue);
if (searchResult) {
  console.log(`node ${searchValue} terdapat pada Tree !`);
} else {
  console.log(`node ${searchValue} tidak ada didalam Tree`);
}
//===========================
deleteNode(tree, 5);
console.log(tree);
