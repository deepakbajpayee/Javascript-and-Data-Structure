/*
The idea is to do something similar to vertical Order Traversal. Like vertical Order Traversal,
we need to nodes of same horizontal distance together. We do a level order traversal so that the
topmost node at a horizontal node is visited before any other node of same horizontal distance below it. 
Hashing is used to check if a node at given horizontal distance is seen or not.
*/

function TreeNode(val){
	this.val = val;
	this.left;
	this.right;
};

function QItem(node,hd){
	this.node = node;
	this.hd = hd;
};

function printTopView(root){
	if(root==undefined) retrun;

	var set = [];
	var queue = [];

	queue.push(new QItem(root,0));

	while(queue.length!=0){
		var qitem = queue.shift();
		var hd = qitem.hd;
		var node = qitem.node;

		if(set.indexOf(hd)<0){
			set.push(hd);
			console.log(node.val);
		}

		if(node.left!=undefined){
			queue.push(new QItem(node.left,hd-1));
		}
		if(node.right!=undefined){
			queue.push(new QItem(node.right,hd+1));
		}
	}
 }

 /*var root = new TreeNode(1);
 root.left = new TreeNode(2);
 root.left.right = new TreeNode(4);
 root.left.right.right = new TreeNode(5);
 root.left.right.right.right = new TreeNode(6);
 root.right = new TreeNode(3);
 printTopView(root);*/
