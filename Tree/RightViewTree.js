var currentLevel = 0;

function RightView(root,level){
	if(root==undefined)return;
	if(currentLevel<level){
		console.log(root.val);
		currentLevel = level;
	}
	RightView(root.right,level+1);
	RightView(root.left,level+1);
}


var tree = require('./TreeDS');
tree.put(5);
tree.put(3);
tree.put(2);
tree.put(4);
tree.put(7);
tree.put(8);
tree.put(9);
RightView(tree.getRoot(),1);