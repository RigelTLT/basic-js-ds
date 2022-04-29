const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.roots = null;
  }
  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.roots) {
      return null;
    }
    return this.roots;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.roots = addValue(this.roots, data);
    function addValue(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      data < node.data
        ? (node.left = addValue(node.left, data))
        : (node.right = addValue(node.right, data));
      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return searchValue(this.roots, data);
    function searchValue(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data
        ? searchValue(node.left, data)
        : searchValue(node.right, data);
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findValue(this.roots, data);
    function findValue(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data
        ? findValue(node.left, data)
        : findValue(node.right, data);
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.roots = removeValue(this.roots, data);
    function removeValue(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeValue(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeValue(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeValue(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.roots) {
      return;
    }
    let node = this.roots;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.roots) {
      return;
    }
    let node = this.roots;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
