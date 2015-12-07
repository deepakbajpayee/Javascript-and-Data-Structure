/**
Given a binary tree, check whether it is a mirror of itself.
<RealSlimDeepak>
**/


function Node(val){
	this.val = val;
	this.left = undefined;
	this.right = undefined;
}


function SymmetricTree(root){
	return isMirror(root,root);
}


function isMirror(root1,root2){
	
	if(root1==undefined && root2==undefined){
		return true;
	}
	
	if(root1!==undefined && root2!==undefined){
		return (root1.val===root2.val)&&(isMirror(root1.left,root2.right)
							 && isMirror(root1.right,root2.left));
	}
	else
	return false;
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);
//console.log(root);
console.log(SymmetricTree(root));
