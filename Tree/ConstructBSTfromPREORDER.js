/*
This program takes input an array which contains preorder traversal of a tree.
We have to construct BST out of this preorder traversal.

1. Create an empty stack.

2. Make the first value as root. Push it to the stack.

3. Keep on popping while the stack is not empty and the next value is greater than stack’s top value. Make this value as the right child of the last popped node. Push the new node to the stack.

4. If the next value is less than the stack’s top value, make this value as the left child of the stack’s top node. Push the new node to the stack.

5. Repeat steps 2 and 3 until there are items remaining in pre[].

*/

var cretestack = require('../DataStructure/Stack');
var stack = new cretestack();

function Node(val){
	this.val = val;
	this.left;
	this.right;
}

var preorder = [10,5,1,7,40,50];

function constructBST(){
	var root = new Node(preorder[0]);
	stack.push(root);

	for(var i=1;i<preorder.length;i++){
		var temp=null;
		while(!stack.isEmpty() && preorder[i]>stack.peek().val){
			var temp = stack.pop();

		}
		if(temp!=null){
			temp.right = new Node(preorder[i]);
			stack.push(temp.right);
		}
		else{
			stack.peek().left = new Node(preorder[i]);
			stack.push(stack.peek().left);
		}
	}
	return root;
}

var newroot = constructBST();
//test code
inorder(newroot);

function inorder(root){
	if(root==undefined) return;
	inorder(root.left);
	console.log(root.val);
	inorder(root.right);
}


