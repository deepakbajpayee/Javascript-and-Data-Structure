function Dictionary(){
	this.data = new Array();
}

Dictionary.prototype.add = function(key,value){
	this.data[key] = value;
}

Dictionary.prototype.find = function(key){
	return this.data[key];
}

Dictionary.prototype.remove = function(key){
	delete this.data[key];
}

Dictionary.prototype.showAll = function(){
	var keys = Object.keys(this.data);
	for(var i=0;i<keys.length;i++){
		console.log(keys[i] + " - >" + this.data[keys[i]]);
	}
}

/*
var dictionary = new Dictionary();
dictionary.add("1","Lucky");
dictionary.add("2","Tucky");
console.log(dictionary.find("1"));
dictionary.showAll();*/