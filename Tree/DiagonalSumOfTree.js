
/**
* This function calculates the diagonal sum of a tree.
* @param <root of the tree>
* @return <void> prints the object which contains the diagonal sum.
* <author : RealSlimDeepak>
**/

function diagonalSumOfTree(root){
	if(root==undefined){
		throw new Error("Sorry ,root is not defined !!");
	}
	var queue = new Queue();
	var map = {};
	root.vrtcl_dstnc = 0;
	queue.add(root);
	
		while(!queue.isEmpty()){

			var current = queue.remove();

			var vd = current.vrtcl_dstnc;

			while(current!=undefined){
				
				var prevSum = (map[vd] == undefined)?0:map[vd];
				map[vd] = prevSum + current.val;

				if(current.left!=undefined){

					current.left.vrtcl_dstnc = vd+1;
					queue.add(current.left); 

				}
				current = current.right;
			}
		}
	console.log(map);
}


/*
* Constructor of a node.
*/

function Node(val){
	this.val = val;
	this.left;
	this.right;
	this.vrtcl_dstnc = Number.MAX_VALUE;
}


/**
* Tree data structure.
**/

function Tree(){
	this.root;
	this.put = function(data){
		this.root = put(this.root,data);
	}
	this.getRoot = function(){
		return this.root;
	} 
	this.inOrder = function(){
		inOrder(this.root);
	}


	function put(root,data){
		if(root ==undefined) return new Node(data);
			var cmp = root.val - data;
			if(cmp>0){
				root.left = put(root.left,data);
			}
			else if(cmp<0){
				root.right = put(root.right,data);
			}
			else{
				root.val = data;
			}
			return root;
	}

	function inOrder(root){
		if(root==undefined)return;
		inOrder(root.left);
		console.log(root.val);
		inOrder(root.right);
	}
}


/**
* Queue data structure.
**/

function Queue(){
	this.store = [];
	this.add = function(data){
		this.store.push(data);
	}
	this.remove = function(){
		return this.store.shift();
	}
	this.isEmpty = function(){
		return this.store.length==0;
	}
}


//Binary Search tree
var tree = require('./TreeDS');
tree.put(10);
tree.put(7);
tree.put(14);
tree.put(5);
tree.put(6);
tree.put(9);
tree.put(8);
tree.put(15);
tree.put(12);
tree.put(11);
tree.put(13);

diagonalSumOfTree(tree.getRoot());



