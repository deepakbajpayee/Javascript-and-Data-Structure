function MinimumDepth(root){
	if(root==undefined){
		return 0;
	}

	if(root.left==undefined && root.right ==undefined){
		return 1;
	}

	if(root.left==undefined){
		return MinimumDepth(root.right)+1;
	}
	if(root.right==undefined){
		return MinimumDepth(root.left)+1;
	}

	return Math.min(MinimumDepth(root.left),MinimumDepth(root.right))+1;
}

var tree = new Tree();
tree.put(1);
tree.put(3);
tree.put(4);
tree.put(5);
tree.put(6);
var min = MinimumDepth(tree.getRoot());
console.log("Miunimum Depth"+min);
