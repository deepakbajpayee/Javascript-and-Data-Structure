/*
find the k’th smallest element in the Binary Search Tree.
*/
var index = 0;

function KthSmallest(root,k){

	if(root == undefined) return;	
	
	KthSmallest(root.left,k);
	
	index++;

	if(k === index){
		console.log(root.val);
		return;
	}

	KthSmallest(root.right,k);
	
};


var tree = new Tree();
tree.put(5);
tree.put(3);
tree.put(7);
tree.put(2);
tree.put(4);
tree.put(6);
tree.put(8);
var k = 2;
KthSmallest(tree.getRoot(),k);
