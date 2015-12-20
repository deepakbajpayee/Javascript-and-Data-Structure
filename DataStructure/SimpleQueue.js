/*
This program implements queue using an array
*/

function Queue(){
	this.array= [];
}

Queue.prototype.enqueue = function(item){
	this.array.push(item);
}

Queue.prototype.dequeue = function(){
	return this.array.shift();
}

Queue.prototype.front = function(){
	return this.array[0];
}

Queue.prototype.rear = function(){
	return this.array[this.array.length-1];
}

Queue.prototype.isEmpty = function(){
	if(this.array.length==0){
		return true;
	}
	else{
		return false;
	}
}


module.exports = Queue;

/*var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.rear());
*/
