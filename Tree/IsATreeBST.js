/*
This program checks if a given binary tree is BST or not
*/

function isTheTreeBST(root,min,max){
	if(root==undefined) return true;
	if(root.val<=min || root.val>max){
		return false;
	}
	else return isTheTreeBST(root.left,min,root.data)&&isTheTreeBST(root.right,root.data,max);
}

var tree = new Tree();
tree.put(3);
tree.put(2);
tree.put(5);
tree.put(4);
tree.put(8);
tree.put(6);
tree.put(7);
tree.put(9);

var isBst = isTheTreeBST(tree.getRoot());
console.log("Is the tree BST? : "+isBst);