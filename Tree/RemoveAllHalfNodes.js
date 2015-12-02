/*
This functoin remove all half nodes from a tree.
*/

function removeHalfNode(root){
	if(root==undefined) return undefined;
	root.left = removeHalfNode(root.left);
	root.right = removeHalfNode(root.right);

	if(root.left ==undefined && root.right==undefined){
		return root;
	}

	if(root.left==undefined){
		var newroot = root.right;
		delete root;
		return newroot;
	}

	if(root.right==undefined){
		var newroot = root.left;
		delete root;
		return newroot;
	}
	return root;
}

var tree = new Tree();
tree.put(5);
tree.put(3);
tree.put(4);
tree.put(6);
tree.put(8);
tree.put(7);
tree.put(9);

var newroot = removeHalfNode(tree.getRoot());



//This code is to check if node has been removed or not.

inorder(newroot);

function inorder(root){
	if(root==undefined) return;
	inorder(root.left);
	console.log(root.val);
	inorder(root.right);
}
