function Node(val){
	this.val = val;
	this.left;
	this.right;
}

function inOrder(root){
	if(root==undefined) return;
	inOrder(root.left);
	console.log(root.val);
	inOrder(root.right);
}

var arr = [1,3,5,6,7,8,10,12,15];
var newroot = sortedArrayToBST(arr,0,arr.length);
inOrder(newroot);

function sortedArrayToBST(array,lo,hi){
	if(lo>hi) return undefined;
	var mid = Math.floor((lo+hi)/2);
	var root = new Node(array[mid]);
	root.left = sortedArrayToBST(array,lo,mid-1);
	root.right = sortedArrayToBST(array,mid+1,hi);
	return root;
}
