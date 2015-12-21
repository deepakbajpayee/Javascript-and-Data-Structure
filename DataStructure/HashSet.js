/*
Implementation of hashset.
0(1) add,get function
*/
var HashSet = (function HashSet(){

	var table = new Array(137);
	//This is a very bad example of hash function
	var simpleHashFunction = function(data){
		return data % table.length;
	};

	var add = function (item){
		var key = simpleHashFunction(item);
		table[key] = item;
	};

	var get = function(){
		var key = simpleHashFunction(item);
		return table[key];
	};

	var display = function(){
		var i=0;
		for(var i=0;i<table.length;i++){
			if(table[i] != undefined){
				console.log(i + " : "+ table[i]);
			}
		}
	};

	var contains = function(item){
		var key = simpleHashFunction(item);
		return table[key] == item;
	};

	var remove = function(item){
		var key = simpleHashFunction(item);
		table[key]=undefined;
	};

	
	return{
		get:get,
		add:add,
		contains:contains,
		remove:remove,
		display:display
	}

})();

module.exports = HashSet;


/*var mynumbers = [1,1,1,1,1,2,2,2,2,3,3,3,4,4,5];
var hashset = HashSet;
for(var i=0;i<mynumbers.length;i++){
	hashset.add(mynumbers[i]);
}
hashset.remove(2);
hashset.display();*/