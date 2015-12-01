'use strict';
/**
This program creates a doubly linked list.
@author: "RealSlimDeepak"
**/
function DoubleLinkedList(){
	this.length1 = 0;
	this.head = null;
	this.tail = null;

	Object.defineProperty(this,'length',{
		get : function(){
			return this.length1;
		}.bind(this)
	});
}


//A LinkedList Node

function Node(value){
	this.value = value;
	this.prev = null;
	this.next = null;
}


/**
Whether list is empty
@return Boolean
**/

DoubleLinkedList.prototype.isEmpty = function(){
	return this.length1==0;
}


/**
Adds the element to end of list or desired index
**/

DoubleLinkedList.prototype.add = function(n,index){
	if(index > this.length1 || index<0){
		throw new Error("IndexOutOfBound");
	}

	var node = new Node(n);

	if(index!==undefined && index<this.length1){
		var prevNode,
			nextNode;

		if(index==0){
			//Insert in begining
			nextNode = this.head;
			this.head = node;
		}
		else{
			nextNode = this.getNode(index);
			prevNode = nextNode.prev;
			prevNode.next = node;
			node.prev = prevNode;
		}

		nextNode.prev = node;
		node.next = nextNode;
	}
	else{
		//Insert at end
		if(!this.head) this.head = node;
		if(this.tail){
			this.tail.next = node;
			node.prev = this.tail;
		}
		this.tail = node;
	}
	this.length1++;
};


/*
Return the value associated with the node.
@param {Number} index
@return value
*/

DoubleLinkedList.prototype.get = function(index){
	return this.getNode(index).value;
};


/*
get O(n)

@param {Number} index
@return Node
*/

DoubleLinkedList.prototype.getNode = function(index){
	if(index >= this.length1 || index<0){
		throw new Error('Index out of bounds');
	}

	var node = this.head;
	for(var i=1;i<=index;i++){
		node = node.next;
	}

	return node;
};



/*
Delete the element at given index.
@param {Number} index
*/

DoubleLinkedList.prototype.delete = function(index){
	if(index>this.length1 || index<0){
		throw new Error("Index Out of Bounds");
	}
	this.deleteNode(this.getNode(index));
};


DoubleLinkedList.prototype.deleteNode = function(node){
	if(node == this.tail){
		//node is last element
		this.tail = node.prev;
	}
	else{
		node.next.prev = node.prev;
	}

	if(node==this.head){
		//node is first element
		this.head = node.next;
	}
	else{
		node.prev.next = node.next;
	}

	this.length1--;
}






DoubleLinkedList.prototype.forEach = function(fn){
	var node = this.head;
	while(node){
		fn(node.value);
		node= node.next;
	}
};




var doublelinkedlist = new DoubleLinkedList();
doublelinkedlist.add(13);
doublelinkedlist.add(23);
doublelinkedlist.add(33);
doublelinkedlist.add(43);
doublelinkedlist.delete(2);

doublelinkedlist.forEach(function(value){
	console.log(value);
});




























