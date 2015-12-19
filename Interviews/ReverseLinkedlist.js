/*
This program revrses a linked list iteratively.
*/


//Node constructor;
function Node(val){
	this.val = val;
	this.next;
}

//LinkedList Constructor
function LinkedList(){
	//pointer to head of list
	this.first;
	//length of list
	this.L=0;
	
	//insert into linkedlist
	this.add = function(val){
		var oldfirst = this.first;
		var newNode = new Node(val);
		newNode.next = oldfirst;
		this.first = newNode;
		this.L++;
	}

	//display the linked list
	this.display = function(){
		var item = this.first;
		for(var i=0;i<this.L;i++){
			console.log(item.val);
			item = item.next;
		}
	}

	//reverse the linked list : 3 pointer technique
	this.reverse = function(){
		var prev = undefined;
		var current = this.first;
		var nextElement = this.first;

		while(current!=undefined){
			nextElement = current.next;
			current.next = prev;
			prev = current;
			current = nextElement;
		}
		this.first = prev;
	}

}

//test code
/*var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.display();
list.reverse();
list.display();*/
