/*
This program finds all permutation of an array " BackTracking "
*/

function Permutation(arr,k,n){
	if(k==n){
		console.log(arr);
	}
	else{
		for(var i=k;i<=n;i++){
			
			swap(arr,i-1,n-1);
			Permutation(arr,k+1,n);
			swap(arr,i-1,n-1);

		}
	}
}

function swap(arr,i,j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}



var arr =['a','b','c'];
Permutation(arr,1,arr.length);