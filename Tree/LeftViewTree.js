
var currentLevel = 0;
function LeftView(root,level){
	if(root==undefined)return;
	if(currentLevel<level){
		console.log(root.val);
		currentLevel = level;
	}
	LeftView(root.left,level+1);
	LeftView(root.right,level+1);
}




var tree = require('./TreeDS');
tree.put(5);
tree.put(3);
tree.put(2);
tree.put(4);
tree.put(7);
tree.put(8);
tree.put(9);
LeftView(tree.getRoot(),1);