
/*
In Binary Search Tree, Inorder Successor of an input node can also be defined
as the node with the smallest key greater than the key of input node.
So, it is sometimes important to find next node in sorted order
*/

function inOrderSuccessor(root,node){
	try{
		if(root==undefined) throw new Error("Root is undefined");

		if(node.right=undefined){
			return FindMinimum(node.right);
		}

		var succ;

		while(root!=null){
			if(node.val<root.val){
				succ = root;
				root = root.left;
			}
			else if(node.val>root.val){
				root = root.right;
			}
			else{
				break;
			}
		}
		return succ;
	}
	catch(err){
		console.log(err);
	}
}

/*var tree = require('./TreeDS');
tree.put(9);
tree.put(7);
tree.put(8);
tree.put(6);
tree.put(1);
tree.put(2);
tree.put(4);
tree.put(5);
tree.put(3);
tree.put(6);

var result = inOrderSuccessor(tree.getRoot(),tree.getRoot().left.right);
console.log(result.val);*/