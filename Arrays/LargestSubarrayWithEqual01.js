function largestSubArrayWithEqual0n1(array){
	var sum = 0;
	var maxsize = -1;
	var startIndex;

	for(var i=0;i<array.length-1;i++){
		sum = (array[i] == 0) ? -1 : 1;

		for(var j=i+1;j<array.length;j++){

			(array[j] == 0)? sum += (-1) : sum +=1;

			if(sum==0 && maxsize < j-i+1){

				maxsize = j-i+1;
				startIndex = i;
			}
		}
	}

	if(maxsize == -1){
		console.log("No Such Subarray");
	}
	else{
		console.log("The maxsize arrray is from"+startIndex+" to "+(startIndex + maxsize -1));
	}
}

largestSubArrayWithEqual0n1([1, 0, 0, 1, 0, 1, 1]);