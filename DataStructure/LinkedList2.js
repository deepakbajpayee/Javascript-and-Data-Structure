function Node(element){
	this.element = element;
	this.next = null;
}

function LList(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
}

function find(item){
	var current = this.head;
	while(current.element!=item){
		current = current.next;
	}
	return current;
}

function insert(newElement,item){
	var node = new Node(newElement);
	var current =this.find(item);
	node.next = current.next;
	current.next = node;
}

function display(){
	var current = this.head;
	while(!(current.next==null)){
		console.log(current.next.element);
		current = current.next;
	}
}

function findPrevious(item){
	var current = this.head;
	while(!(current.next==null) && (current.next.element != item)){
		current = current.next;
	}
	return current;
}

function remove(item){
	var prevNode = this.findPrevious(item);
	if(!(prevNode.next==null)){
		prevNode.next = prevNode.next.next;
	}
}


/*var citites = new LList();
citites.insert("Delhi","head");
citites.insert("Mumbai","Delhi");
citites.remove("Delhi");
citites.display();*/
