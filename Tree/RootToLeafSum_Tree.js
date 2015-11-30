/*

This program find if there exist a path from root to leaf of given sum in a tree.
It returns the path.
*/

function rootToLeafSum(root,sum,result){
	
	if(root==undefined) return false;

	if(root.left==undefined && root.right==undefined){
		if(root.val==sum){
			result.push(root.val);
			return true;
		}
		else{
			return false;
		}
	}

	if(rootToLeafSum(root.left,sum-root.val,result)){
		result.push(root.val);
		return true;
	}
	
	if(rootToLeafSum(root.right,sum-root.val,result)){
		result.push(root.val);
		return true;
	}
	
	return false;
}


var result = [];
var sum = 21;

var tree = new Tree();
tree.put(13);
tree.put(3);
tree.put(23);
tree.put(1);
tree.put(5);
tree.put(33);


rootToLeafSum(tree.getRoot(),sum,result);
console.log(result);