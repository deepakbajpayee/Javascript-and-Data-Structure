function List(){
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.remove = remove;
	this.length = length;
}

function insert(element){
	this.dataStore[this.listSize++] = element;
}

function find(element){
	for(var i=0;i<this.listSize;i++){
		if(this.dataStore[i] === element){
			return i;
		}
	}
	return -1;
}

function remove(element){
	var foundAt = this.find(element);
	if(foundAt>-1){
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

function length(){
	return this.listSize;
}

function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize =0;
	this.pos = 0;
}

function toString(){
	return this.dataStore;
}

var names = new List();
names.insert("tucky");
names.insert("deepak");
names.insert("manish");
names.insert("abc");
names.remove("abc");
console.log(names);
console.log(names.length())


