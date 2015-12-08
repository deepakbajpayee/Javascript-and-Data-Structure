var TrieDS = (function(){
	var R = 256;
	var root ;

	function Node(){
		this.value;
		this.next = new Array(R);
	};

	var getRoot = function(){
		return root;
	}
	var put = function(key,value){
		root = _put(root,key,value,0);
	};

	function _put(x,key,value,d){
		if(x==undefined) x = new Node();

		if(d==key.length){
			x.value = value;
			return x;
		}

		x.next[key.charCodeAt(d)] = _put(x.next[key.charCodeAt(d)],key,value,d+1);
		return x;
	};

	var contains = function(key){
		return get(key)!=undefined;
	};

	var get = function(key){
		var x = _get(root,key,0);
		if(x==undefined)
			return  undefined;
		return x.value;
	};

	function _get(x,key,d){
		if(x==undefined) return undefined;
		if(d==key.length) return x;
		return _get(x.next[key.charCodeAt(d)],key,d+1);
	};

	return{																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																															
		put:put,
		getRoot:getRoot,
		get:get,
		contains:contains
	};
})();

var trie = TrieDS;
trie.put("Shelby",1);
trie.put("Coco",2);
console.log(trie.get("Shelby"));
