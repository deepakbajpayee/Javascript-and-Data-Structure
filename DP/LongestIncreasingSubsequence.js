/***
The longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence
 of a given sequence such that all elements of the subsequence are sorted in increasing order

 http://www.geeksforgeeks.org/dynamic-programming-set-3-longest-increasing-subsequence/

**/

function LongestIncreasingSubsequence(array){
	var T = [];
	var lis = Number.MIN_VALUE;

	for(var i=0;i<array.length;i++){
		T[i] = 1;
	}

	for(var i=0;i<array.length;i++){
		for(var j=0;j<i;j++){
			if(array[i]>array[j]){
				T[i] = Math.max(T[i],1 + T[j])
				if(lis<T[i])
					lis = T[i];
			}
		}
	}

	//Traverse this entire array to find the max value
	//console.log(T);
	//console.log(lis);
	return lis;
}

var len = LongestIncreasingSubsequence([3,4,-1,0,6,2,3]);
console.log(len);