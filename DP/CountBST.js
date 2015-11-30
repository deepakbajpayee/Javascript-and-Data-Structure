/**
Count total number of Binary Search tree given N(total number of keys).
How many BSTs we can have giben n keys.
**/


function countBinarySearchTree(n){
	var T = [];
	for(var i=0;i<=n;i++){
		T[i] = 0;
	}
	T[0] = 1;
	T[1] = 1;

	for(var i=2; i<=n; i++){
		for(var j=0; j<i; j++){

			T[i] += (T[j]*T[i-j-1]); //This number is called catalan number.
		
		}
	}

	//console.log(T);
	return T[n]
}


console.log(countBinarySearchTree(3));
console.log(countBinarySearchTree(4));
console.log(countBinarySearchTree(5));


