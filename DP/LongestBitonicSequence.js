/**

LONGEST BITONIC SUBSEQUENCE

Given an array arr[0 … n-1] containing n positive integers, a subsequence of arr[] is called Bitonic
 if it is first increasing, then decreasing. Write a function that takes an array as argument
and returns the length of the longest bitonic subsequence.


**/

function LongestBitonicSequence(array){
	var forward = [];
	var backward = [];
	for(var i=0;i<array.length;i++){
		forward[i] = 1;
		backward[i] = 1;
	}

	for(var i=0;i<array.length;i++){
		for(var j=0;j<i;j++){
			if(array[i]>array[j]){
				forward[i] = Math.max( forward[i], 1+forward[j] );
			}
		}
	}


	for(var i=array.length-1;i>=0;i--){
		for(var j=array.length-1;j>i;j--){
			if(array[i]>array[j]){
				backward[i] = Math.max( backward[i] , 1+backward[j] ); 
			}
		}
	}
	

	var max = Number.MIN_VALUE;

	for(var i=0;i<array.length;i++){
		var sum = forward[i] + backward[i];
		if(sum > max){
			max = sum;
		}
	}

	console.log("The Longest Bitonic Sequence is"+max-1);
}


LongestBitonicSequence([2,-1,4,3,5,-1,3,2]);