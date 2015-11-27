function MaximumSumIncreasingSubsequence(array){
	var max_value = [];
	var actual_square = [];

	for(var i=0;i<array.length;i++){
		max_value[i] = array[i];
		actual_square[i] = i;
	}

	for(var i=0;i<array.length;i++){
		for(var j=0;j<i;j++){
			if(array[j]<array[i]){
				var k = max_value[i];
				
				max_value[i] = Math.max(max_value[j] + array[i],max_value[i]);
				
				if(k!=max_value[i]){
					actual_square[i] = j;
				}

			}
		}
	}

	var max = Number.MIN_VALUE;
	for(var i=0;i<max_value.length;i++){
		if(max<max_value[i]){
			max = max_value[i];
		}
	}

	//console.log(max_value);
	//console.log(actual_square);
	return max;
}


var max_value = MaximumSumIncreasingSubsequence([4,6,1,3,8,4,6]);
console.log(max_value);