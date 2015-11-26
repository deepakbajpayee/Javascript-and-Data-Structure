function findKthLargest(array,k){
	var lo = 0;
	var hi = array.length-1;
	while(lo<=hi){
		var j = partition(array,lo,hi);
		if(j < k)       lo = j+1;
		else if(j > k)  hi = j-1;
		else            return array[k]; 
	}
	return array[k];
}

function partition(array,lo,hi){
	var i=lo;
	var j = hi+1;

	while(true){
		
		while(less(array[++i],array[lo]))
			if(i==hi) break; //Not needed but still
		
		while(less(array[lo],array[--j]))
			if(j==lo) break;
		
		if(i>=j) break;
		
		exchange(arr,i,j);
	}
	exchange(arr,lo,j);
	return j;
}

function exchange(arr,i,j){
	var t = arr[i];
	arr[i] = arr[j];
	arr[j] = t;
}

function less(a,b){
	return a<b;
}

var arr = [2,3,4,6,1,5];
var k = 1;
var item = findKthLargest(arr,k-1);
console.log(item);