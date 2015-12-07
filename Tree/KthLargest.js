/*
find the k’th largest element in the Binary Search Tree.
*/
var index = 0;

function KthLargest(root,k){

	if(root == undefined) return;	
	
	KthLargest(root.right,k);
	
	index++;

	if(k === index){
		console.log(root.val);
		return;
	}

	KthLargest(root.left,k);
	
};


var tree = new Tree();
tree.put(5);
tree.put(3);
tree.put(7);
tree.put(2);
tree.put(4);
tree.put(6);
tree.put(8);
var k = 1;
KthLargest(tree.getRoot(),k);
