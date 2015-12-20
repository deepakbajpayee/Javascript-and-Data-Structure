
//Importing tree and queue data structure definition from my repository.To checkout these files, please
//go to respective file using given path 
var tree = require('./TreeDS');
var queue = require('../DataStructure/SimpleQueue');
var stack = require('../DataStructure/Stack');


function searchRecursive(x,data){
	if(x==undefined) return false;
	if(x.val == data) return true;
	return searchRecursive(x.left,data) || searchRecursive(x.right,data);
};


function searchUsingQueue(x,data){
	if(x==undefined) return false;
	
	var Q = new queue();
	Q.enqueue(x);

	while(!Q.isEmpty()){
		var temp = Q.dequeue();
		if(temp.val == data){
			return true;
		}
		if(temp.left!=undefined){
			Q.enqueue(temp.left);
		}
		if(temp.right!=undefined){
			Q.enqueue(temp.right);
		}
	}
	return false;
};


function searchUsingStack(x,data){
	if(x==undefined) return false;
	var mystack = new stack();
	mystack.push(x);

	while(!mystack.isEmpty()){
		
		var temp = mystack.pop();

		if(temp.val == data){
			return true;
		}

		if(temp.right!=undefined){
			mystack.push(temp.right);
		}

		if(temp.left!=undefined){
			mystack.push(temp.left);
		}
	}
	return false;
};



tree.put(2);
tree.put(3);
tree.put(8);
tree.put(5);
tree.put(4);
tree.put(7);
tree.put(9);
console.log(searchUsingQueue(tree.getRoot(),7));
console.log(searchRecursive(tree.getRoot(),7));
console.log(searchUsingStack(tree.getRoot(),7));