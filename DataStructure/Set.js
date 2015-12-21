/*

*/

var Set = (function(){
	var store = [];

	var add = function(item){
		if(store.indexOf(item)<0){
			store.push(item);
		}
	};

	var isEmpty = function(){
		return store.length==0;
	};

	var contains = function(item){
		return store.indexOf(item)>=0;
	};

	var remove = function(item){
		store.splice(store.indexOf(item),1);
	}

	return{
		add:add,
		isEmpty:isEmpty,
		contains:contains,
		remove:remove,
		toString:function(){
			return store;
		}
	}
})();

module.exports = Set;

/*var set = Set;
set.add(1);
set.add(1);
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(3);
set.remove(3);
console.log(set.toString());*/