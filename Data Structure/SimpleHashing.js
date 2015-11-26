function HashTable(){
	this.table = new Array(137);
	this.simpleHashFunction = simpleHashFunction;
	this.put = put;
	this.get = get;
	this.display = display;
}

/*
Choice of hash function depends on type of key.
writing a good hash function is more of art than programming.
*/

function simpleHashFunction(data){
	var total = 0;
	for(var i=0;i<data.length;++i){
		total += data.charCodeAt(i);//The charCodeAt() method returns the numeric Unicode value of the character at the given index 
	}
	return total % this.table.length;
}

function put(item){
	var key = this.simpleHashFunction(item);
	this.table[key] = item;
}


function display(){
	var i=0;
	for(var i=0;i<this.table.length;i++){
		if(this.table[i] != undefined){
			console.log(i + " : "+ this.table[i]);
		}
	}
}



var mydogs = ["Bella","Rocky","Maggie","Sadie","Jake","Tucker","Coco","Shelby","Lexi","Rudy"];

var hashtable = new HashTable();
for(var i=0;i<mydogs.length;i++){
	hashtable.put(mydogs[i]);
}

hashtable.display();

