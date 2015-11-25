/*
 This program calculates the height of a function.
 Please do not forget to add a reference to parent file TreeDS.js
*/


function height(root){
	if(root==undefined) return 0;
	var leftHeight = height(root.left);
	var rightHeight = height(root.right);
	return 1+ Math.max(leftHeight,rightHeight);
}


var tree = new Tree();
tree.put(5);
tree.put(3);
tree.put(6);
var heightOfTree = height(tree.getRoot());
console.log("Height of the given tree is : "+heightOfTree)


