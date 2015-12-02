/*
*
*	Given an array that contains both positive and negative integers, find the product of the maximum product subarray. 
*	Expected Time complexity is O(n) and only O(1) extra space can be used.
*
*/

function maxProductSubarray(array){

	//max positive product ending at current position
	var max_ending_here = 1;
	
	//min negative product ending at current position.
	var min_ending_here = 1;

	//initialize overall max product. 
	var max_so_far = 1;

	for (var i = 0; i < array.length; i++) {
		
		if(array[i] > 0){
			max_ending_here = max_ending_here * array[i];
			min_ending_here = Math.min(max_ending_here * array[i],1);
		}

		else if(array[i] == 0){
			max_ending_here = 1;
			min_ending_here = 1;
		}

		else{

			var temp = max_ending_here;
			max_ending_here = Math.max(min_ending_here*array[i],1);
			min_ending_here = temp * array[i];
		}


		if(max_so_far < max_ending_here){
			max_so_far = max_ending_here;
		}
	};

	return max_so_far;
}

var product = maxProductSubarray([1, -2, -3, 0, 7, -8, -2]);
console.log("Maximum product subarray"+product);