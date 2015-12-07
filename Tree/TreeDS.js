
/*
This program creates a tree data structure in which items can be inserted 
and we can search an element. 

Tree is defined as a module so that it can be exported to different module.
_ underscore marked are private function.
*/


var Tree = (function(){
	
	function Node(val){
		this.val = val;
		this.left;
		this.right;
	};

	var root;

	var getRoot = function(){
		return root;
	}

	var put = function(val){
		root = _put(root,val);
	}
	var inOrder = function(){
		_inOrder(root);
	}
	
	var get = function(val){
		var x = root;
		while(x!=undefined){
			var cmp = val-x.val;
			if(cmp==0){
				return true;
			}
			else if(cmp>0){
				x = x.right;
			}
			else{
				x = x.left;
			}
		}
		return false;
	}


	function _put(x,val){
		if(x == undefined) return new Node(val);
		var cmp = val - x.val;
		if(cmp>0){
			x.right = _put(x.right,val);
		}
		else if(cmp<0){
			x.left = _put(x.left,val);
		}
		else{
			x.val = val;
		}
		return x;
	}


	function _inOrder(root){
		if(root==undefined)return;
		_inOrder(root.left);
		console.log(root.val);
		_inOrder(root.right);
	}
	return{
		put:put,
		get:get,
		getRoot:getRoot,
		inOrder:inOrder
	};
})();

module.exports = Tree;


/*var tree = Tree;
tree.put(5);
tree.put(3);
tree.put(6);
tree.put(2);
tree.put(1);
var a = tree.get(4);
var b = tree.get(3);
console.log(a);
console.log(b);

tree.inOrder();*/