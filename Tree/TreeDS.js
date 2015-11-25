
/*
This program creates a tree data structure in which items can be inserted 
and we can search an element. 
*/
function Node(val){
	this.val = val;
	this.left;
	this.right;
}


function Tree(){
	this.root;

	this.getRoot = function(){
		return this.root;
	}

	this.put = function(val){
		this.root = put(this.root,val);
	}
	this.inOrder = function(){
		inOrder(this.root);
	}
	
	this.get = function(val){
		var x = this.root;
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


	function put(x,val){
		if(x == undefined) return new Node(val);
		var cmp = val - x.val;
		if(cmp>0){
			x.right = put(x.right,val);
		}
		else if(cmp<0){
			x.left = put(x.left,val);
		}
		else{
			x.val = val;
		}
		return x;
	}


	function inOrder(root){
		if(root==undefined)return;
		inOrder(root.left);
		console.log(root.val);
		inOrder(root.right);
	}
}



var tree = new Tree();
tree.put(5);
tree.put(3);
tree.put(6);
tree.put(2);
tree.put(1);
var a = tree.get(4);
var b = tree.get(3);
console.log(a);
console.log(b);

tree.inOrder();