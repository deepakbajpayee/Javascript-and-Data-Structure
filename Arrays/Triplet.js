function triplet(array,sum){
	
	array.sort(function(a,b){
		return a-b;
	});
	console.log(array);
	var count =0;
	for(var i=0;i<array.length;i++){
		var j=i+1;
		var k =array.length-1;

		while(j<k){
			var temp = array[i]+array[j]+array[k];
			if(temp >= sum){
				k--;
			}
			else{
				count += (k-j);
				j++;
			}
		}

	}
	console.log(count);
}

triplet([5, 1, 3, 4, 7],12)