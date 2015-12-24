/*
Fenwick tree BINARY INDEXED TREE
Application : Prefix sum of an array
Space : O(n)
Search : O(logn)
Update : O(logn)
Create for first time = O(nlogn);
to get the parent : get binary representation flip rightmost set bit

TODO : Have to updates comment .
*/

function FenwickTree(){
};

FenwickTree.prototype.updateBinaryIndexedTree = function(binaryIndexedTree,val,index){
	while(index<binaryIndexedTree.length){
		binaryIndexedTree[index] += val;
		index = this.getNext(index);
	}
};

FenwickTree.prototype.getSum = function(binaryIndexedTree,index){
	index = index + 1;
	var sum = 0;
	while(index>0){
		sum += binaryIndexedTree[index];
		index = this.getParent(index);
	}
	return sum;
};

FenwickTree.prototype.createTree = function(input){
	
	var binaryIndexedTree = new Array(input.length+1);
	
	for(var i=0;i<input.length+1;i++){
		binaryIndexedTree[i] = 0;
	}

	for(var i=1;i<=input.length;i++){
		this.updateBinaryIndexedTree(binaryIndexedTree,input[i-1],i);
	}
	return binaryIndexedTree;
};

FenwickTree.prototype.getNext = function(index){
	var next = index + (index & -index);
	//console.log(next);
	return next;
};

FenwickTree.prototype.getParent = function(index){
	var parent = index - (index & -index);
	//console.log(parent);
	return parent;
};

function main(){
	var input = [1,2,3,4,5,6,7];
	var ft = new FenwickTree();
	var bit = ft.createTree(input);

	console.log(ft.getSum(bit,0));
	console.log(ft.getSum(bit,1));
	console.log(ft.getSum(bit,2));
	console.log(ft.getSum(bit,3));
}

main();

