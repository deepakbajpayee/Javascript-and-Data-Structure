function QuickSort(array){
	var lo = 0;
	var hi = array.length-1;
	console.log("Before sorting :"+array);

	quicksort(array,lo,hi);

	function quicksort(array,lo,hi){
		if(lo<=hi){
			var j = partition(array,lo,hi);
			quicksort(array,lo,j-1);
			quicksort(array,j+1,hi);
		}
	}

	console.log("After sorting :"+array);
	function partition(array,lo,hi){
		var i=lo;
		var j = hi+1;

		while(true){
			while(less(array[++i],array[lo]))
				if(i==hi)break;

			while(less(array[lo],array[--j]))
				if(j==lo) break;

			if(i>=j) break;
			exchange(array,i,j);
		}

		exchange(array,lo,j);
		return j;
	}


	function exchange(array,i,j){
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	function less(a,b){
		return a<b;
	}
}

QuickSort([3,2,1,5,4,8,9,10,2,5,7]);
