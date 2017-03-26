
class Node {
    constructor(action, time) {
        this.action = action;
        this.time = time;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree  {
    constructor() {
        this.root = null;
    }
    push(action, time) {
        var curr = this.root;
        if(!curr){
            this.root = new Node(action, time);
            return;
        }
        while(curr) {
            if(time > curr.time) {
                if(!curr.right) {
                    curr.right = new Node(action, time);
                    break;
                }
                else {
                    curr = curr.right;
                }
            }
            else {
                if(!curr.left) {
                    curr.left = new Node(action, time);
                    break;
                }
                else {
                    curr = curr.left;
                }           
            }
        }
        return;
    }
    traversal(todo) {
        check(this.root);
        function check(curr) {
            if(!curr)
                return;
            check(curr.left);
            todo(curr);
            check(curr.right);
            return;
        }
    }
}

module.exports = BinaryTree;