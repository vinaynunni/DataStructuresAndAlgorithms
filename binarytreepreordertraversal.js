class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/* 
root --> 42
42 --> L - 41, R - 50
41 --> L - 10, R - 40
50 --> L - 45, R - 75 */

//Tree creation
const node10 = new Node(10);
const node40 = new Node(40);

const node45 = new Node(45);
const node75 = new Node(75);

const node41 = new Node(41);
node41.left = node10;
node41.right = node40;

const node50 = new Node(50);
node50.left = node45;
node50.right = node75;

const root = new Node(42);
root.left = node41;
root.right = node50;

preOrderTraversal(root);

function preOrderTraversal(node) {
    if (node == null) {
        return node;
    }
    console.log(node.value);
    console.log("left traversal call of" + node.value);
    preOrderTraversal(node.left);
    console.log("right traversal call of" + node.value);
    preOrderTraversal(node.right);
}