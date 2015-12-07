

function size(root){
	if(root==undefined) return 0;
	var leftHeight = size(root.left);
	var rightHeight = size(root.right);
	return 1+leftHeight+rightHeight;
}

var tree = require('./TreeDS');
tree.put(3);
tree.put(1);
tree.put(2);
tree.put(7);
tree.put(9);
tree.put(4);
tree.put(5);
var size = size(tree.getRoot());
console.log("Total number of nodes : "+size);
