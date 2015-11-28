

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


function IterativeInorderTraversal(root){
	var stack = new Stack();
	console.log("Printing Inorder Traversal of a tree ...")
	while(true){
		if(root!=undefined){
			stack.push(root);
			root = root.left;
		}
		else{
			if(stack.isEmpty()) break;
			root = stack.pop();
			console.log(root.val);
			root = root.right;
		}
	}
}

var tree = new Tree();
tree.put(4);
tree.put(2);
tree.put(3);
tree.put(5);
tree.put(1);
IterativeInorderTraversal(tree.getRoot());

