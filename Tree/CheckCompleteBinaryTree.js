/**
The function checks if a given tree is complete or not.

@param <root,0,number_of_node> <Node,Number,Number>
@return boolean

**/

function isCompleteBinaryTree(root,index,number_nodes){
	if(root==undefined) return true;

	if(index >= number_nodes){
		return false;
	}

	return (isCompleteBinaryTree(root.left,2*index+1,number_nodes) && isCompleteBinaryTree(root.right,2*index+2,number_nodes));
}



function count(root){
	if(root == undefined) return 0;
	return (1+count(root.left)+count(root.right));
}


var tree = require('./TreeDS');
tree.put(5);
tree.put(3);
tree.put(7);
tree.put(2);
tree.put(4);

var number_node = count(tree.getRoot());
var initital_index = 0;

//console.log(number_node);
if( isCompleteBinaryTree(tree.getRoot(),initital_index,number_node) ){
	console.log("Binary tree is complete !!");
}
else{
	console.log("The binary tree is not complete !!");
}