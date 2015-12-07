function createQueue(){
	this.queue = [];

	this.isEmpty = function(){
		return this.queue.length==0;
	}

	this.add = function(item){
		this.queue.push(item);
	}
	
	this.poll = function(){
		if(this.isEmpty()) return null;
		var removeditem = this.queue.shift();
		return  removeditem;
	}
}


function levelOrderTraversal(root){
		var queue = new createQueue();
		console.log("Printing Level Order");
		queue.add(root);
		
		while(!queue.isEmpty()){
			var node = queue.poll();
			if(node!=null){
				console.log(node.val);
				if(node && node.left!=undefined)  queue.add(node.left);
				if(node && node.right!=undefined) queue.add(node.right);
			}
		}
}

var tree = require('./TreeDS');
tree.put(5);
tree.put(2);
tree.put(4);
tree.put(1);
tree.put(7);
tree.put(8);
tree.put(9);
levelOrderTraversal(tree.getRoot());