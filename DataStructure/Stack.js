/**
This program implements Stack using pseudo classical pattern.
**/

function Stack(){
	this.store = [];
	this.top = 0;
}

Stack.prototype.isEmpty = function(){
	return this.top==0;
}

Stack.prototype.push = function(item){
	this.store[this.top++] = item;
}

Stack.prototype.pop = function(){
	var item;
	try{
	 if(this.isEmpty()) throw "Stack is Empty";
	  item = this.store[--this.top];
	  //this.store.splice(this.top,1);
	}
	catch(err){
		console.log("Stack Underflows");
	}
	return item;
}

Stack.prototype.size = function(){
	return this.top;
}


/*var mystack = new Stack();
console.log(mystack);
mystack.push(1);
mystack.push(2);
console.log(mystack.pop());
mystack.push(3);
mystack.push(4);
console.log(mystack.pop());
mystack.push(3);
mystack.push(4);
console.log(mystack.pop());
console.log(mystack);
console.log(mystack.isEmpty());
*/
module.exports = Stack;