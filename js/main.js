// alert('test')
class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.root = null
    }
    insert(data){
        var newNode = new Node(data);
        if (this.root == null)
            this.root = newNode;
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode){
        if (newNode.data < node.data)
        {
            if (node.left == null)
                node.left = newNode;
            else
            {
                node = node.left;
                this.insertNode(node, newNode);
            }

        }
        else if (newNode.data > node.data)
        {
            if (node.right == null)
                node.right = newNode;
            else
            {
                node = node.right;
                this.insertNode(node, newNode);
            }
        }
    }
    insertArray(arr) {

        for (let i = 0; i < arr.length; i++)
            this.insert(arr[i]);

    }
    printPostOrder(node){

        if (node)
        {
            if (node.root){
                    this.printPostOrder(node.root.left);
                    this.printPostOrder(node.root.right)
                    console.log(node.root);
            }

        }
    }
}

var tree = new BST();

tree.insertArray([1, 3, 6, 7, -3, 13, 9, -2, 4, 8, 1, -4, -8]);
// console.log(tree);
tree.printPostOrder(tree);