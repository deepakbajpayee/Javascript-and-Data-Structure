function printSpiral(root){
	var h = height(root);
	var ltr = false;
	for(var i=1;i<=h;i++){
		printGivenLevel(root,i,ltr);
		ltr = !ltr;
	}
}



function printGivenLevel(root,level,ltr){
	if(root==undefined) return;
	if(level ==1) console.log(root.val);

	else if(level > 1){
		if(ltr){
			printGivenLevel(root.left,level-1,ltr);
			printGivenLevel(root.right,level-1,ltr);
		}
		else{
			printGivenLevel(root.right,level-1,ltr);
			printGivenLevel(root.left,level-1,ltr);
		}
	}
}



function height(root){
	if(root==undefined) return 0;
	var leftHeight = height(root.left);
	var rightHeight = height(root.right);
	return 1 + Math.max(leftHeight,rightHeight);
}


var tree = new Tree();
tree.put(13);
tree.put(3);
tree.put(1);
tree.put(5);
tree.put(23);
tree.put(3tree.put(3);
tree.put(3);
tree.put(3);3);

printSpiral(tree.getRoot());