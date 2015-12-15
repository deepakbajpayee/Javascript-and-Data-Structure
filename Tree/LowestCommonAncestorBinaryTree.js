/*
		*****Binary Search Tree*******

Let T be a rooted tree. The lowest common ancestor between two nodes n1 and n2 is defined as the lowest node 
in T that has both n1 and n2 as descendants (where we allow a node to be a descendant of itself).

*/


var bst = require('./TreeDS');
bst.put(5);
bst.put(3);
bst.put(4);
bst.put(2);
bst.put(7);
bst.put(6);
bst.put(8);

var answer = LCA(bst.getRoot(),3,4);
console.log(answer.val);

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


