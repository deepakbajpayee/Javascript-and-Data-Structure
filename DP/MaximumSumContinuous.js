function maximumSumContinuous(array){
	var max_ending_here = 0;
	var max_so_far = 0;

	for(var i=0;i<array.length;i++){
		max_so_far = max_so_far + array[i];

		if(max_so_far<0){
			max_so_far = 0;
		}

		if(max_ending_here<max_so_far){
			max_ending_here = max_so_far;
		}
	}
	console.log(max_ending_here);
	//return max_ending_here;
}

maximumSumContinuous([-2,-3,4,-1,-2,1,5,-3]);
