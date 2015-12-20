/*
Let T be a rooted tree. The lowest common ancestor between two nodes n1 and n2 is defined as the lowest node 
in T that has both n1 and n2 as descendants (where we allow a node to be a descendant of itself).

<Author : Deepak>
*/


/*
LCA : Binary Search Tree.
*/

var bst = require('./TreeDS');
bst.put(5);
bst.put(3);
bst.put(4);
bst.put(2);
bst.put(7);
bst.put(6);
bst.put(8);

/*var answer = LCA(bst.getRoot(),3,4);
console.log(answer.val);*/

function LCA(root,n1,n2){
	if(root==undefined) return undefined;

	if(root.val>n1 && root.val>n2){
		return LCA(root.left,n1,n2);
	}
	
	if(root.val<n1 && root.val<n2){
		return LCA(root.right,n1,n2);
	}	
	return root;
};



/*
Binary Tree. The Code undreneath calculate the LCA for binary tree.
*/

/*
Node constructor : To create a Node.
*/
function Node(val){
    this.val = val;
    this.left;
    this.right;
};


/*
This function search in binary tree.
*/

function findInBinaryTree(x,path,data){
	if(x==undefined) return false;
	if(x.val == data) return true;
	else{
		path.push(x.val);
		return findInBinaryTree(x.left,path,data) || findInBinaryTree(x.right,path,data);
	}
}

/*
This function calculates the LCA by seeing path between root and node.
*/

function findLCA(root,n1,n2){
	var path1 = [];
	var path2 = [];
	findInBinaryTree(root,path2,n2);
	findInBinaryTree(root,path1,n1);

	//console.log(path1);
	//console.log(path2);

	var i;
	for(i=0;i<path1.length && i<path2.length;i++){
		if(path1[i] != path2[i])
			break;
	}
	return path1[i-1];
};

/*
Creation of tree.
*/

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

/*
Test Code.
*/

/*console.log(findLCA(root,4,5));
console.log(findLCA(root,4,6));
console.log(findLCA(root,2,3));
console.log(findLCA(root,6,7));
*/