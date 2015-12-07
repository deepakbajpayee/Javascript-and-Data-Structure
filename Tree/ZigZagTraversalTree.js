/**
This program prints the zig-zag traversal of a binary tree.
**/


function Stack(){
	this.queue = [];

	this.isEmpty = function(){
		return this.queue.length==0;
	}

	this.push = function(item){
		this.queue.push(item);
	}
	
	this.pop = function(){
		if(this.isEmpty()) return null;
		var removeditem = this.queue.splice(this.queue.length-1,1);
		return  removeditem[0];
	}
}



function ZigZagTraversalTree(root){
	var stack1 = new Stack();
	var stack2 = new Stack();
	stack1.push(root);
	console.log("Printing ZigZag traversal....");
	while(!stack1.isEmpty() || !stack2.isEmpty()){
		while(!stack1.isEmpty()){
			var node1 = stack1.pop();
			if(node1!=null){
				console.log(node1.val);
				if(node1.left!=undefined) stack2.push(node1.left);
				if(node1.right!=undefined) stack2.push(node1.right);
			} 
		}
		while(!stack2.isEmpty()){
			var node2 = stack2.pop();
			if(node2!=null){
				console.log(node2.val);
				if(node2.right!=undefined) stack1.push(node2.right);
				if(node2.left!=undefined) stack1.push(node2.left);
			}
		}
	}
}

var tree = require('./TreeDS');
tree.put(5);
tree.put(2);
tree.put(1);
tree.put(4);
tree.put(7);
tree.put(6);
tree.put(8);
ZigZagTraversalTree(tree.getRoot());

