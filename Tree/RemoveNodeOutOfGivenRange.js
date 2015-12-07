/*
Given a Binary Search Tree (BST) and a range [min, max], remove all keys
which are outside the given range. 
*/

function removeNodeOutOfGivenRange(root,min,max){
	if(root==undefined) return;

	root.left = removeNodeOutOfGivenRange(root.left,min,max);
	root.right = removeNodeOutOfGivenRange(root.right,min,max);

	if(root.val<min){
		var rightNode = root.right;
		delete root;
		return rightNode; 
	}

	if(root.val>max){
		var leftNode = root.left;
		delete root;
		return leftNode; 
	}
	return root;
}

var tree = require('./TreeDS');
tree.put(6);
tree.put(-13);
tree.put(14);
tree.put(-8);
tree.put(15);
tree.put(13);
tree.put(7);
tree.inOrder();

var newroot = removeNodeOutOfGivenRange(tree.getRoot(), -10, 13);
