/***
This program implements Linked List using prototypal class pattern
**/

function Node(){
	this.data;
	this.next;
}

function LinkedList(){
	this.first;
}

LinkedList.prototype.add = function(item){
	var old = this.first;
	var node = new Node();
	node.data = item;
	node.next = old;
	this.first = node;
}

LinkedList.prototype.isEmpty = function(){
	return this.first == undefined;
}

LinkedList.prototype.getFirst = function(){
	return this.first;
}


LinkedList.prototype.remove = function(){
	try{
		if(this.isEmpty()) throw "Error";
		var item = this.first;
		this.first = this.first.next;
		return item;
	}
	catch(err){
		console.log("List is Empty");
	}
	
}


var list = new LinkedList();
list.add(5);
list.add(10);
list.add(15);
console.log("Item removed is : "+list.remove().data);
console.log("Head of list is : "+list.getFirst().data);
list.add(30);
console.log("Head of list is : "+list.getFirst().data);