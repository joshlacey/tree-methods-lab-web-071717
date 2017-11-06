function inOrder(tree) {
  if (tree.left) {
    inOrder(tree.left)
  }
  console.log(tree.data)
   if (tree.right) {
    inOrder(tree.right)
  }
}//console.log out each value in order

function findOrAdd(rootNode, newNode) {
  if (rootNode.data == newNode.data) {
    return true
  }
  if (rootNode.data > newNode.data) {
    if(rootNode.left) {
      return findOrAdd(rootNode.left, newNode)
    } else {
      return rootNode.left = newNode
    }
  }
  if (rootNode.data < newNode.data) {
    if (rootNode.right) {
      return findOrAdd(rootNode.right, newNode)
    } else {
      return rootNode.right = newNode
    }
  }
}

function max(tree) {
  if (tree.right === null) {
    return tree
  } else {
    return max(tree.right)
  }
}

//max and min return a node

function min(tree) {
  if(tree.left) {
    return min(tree.left)
  } else {
    return tree
  }
}
