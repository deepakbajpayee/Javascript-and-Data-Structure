/*
BAG data structure which gives constant time complexity for adding and removing of item.
*/

function Bag(){

	this.first;

	function node(val,next){
		this.val = val;
		this.next = next;
	}
	

	this.add = function(val){
		var oldFirst = this.first;
		var newnode = new node(val);
		newnode.next = oldFirst;
		this.first = newnode;
	}

	this.isEmpty = function(){
		return this.first == undefined;
	}

	this.remove = function(){
		var item = null;
		if(!this.isEmpty()){
			item = this.first;
			this.first = this.first.next;
		}
		return item;
	}

	this.iterator = function(){
		var current = this.first;
		return{
			hasNext : function(){
				return current!=undefined;
			},
			next : function(){
				var item = null;
				if(current!=undefined){
					item = current;
					current = current.next;
				}
				return item;
			}
		}
	}
}

var mybag = new Bag();
mybag.add(3);
mybag.add(5);
mybag.add(7);
mybag.add(8);
var iterator = mybag.iterator();
while(iterator.hasNext()){
	console.log(iterator.next().val);
}

console.log(mybag.remove().val);
