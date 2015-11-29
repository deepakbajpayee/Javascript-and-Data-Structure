function BinarySearch(array,key){
	var lo = 0;
	var hi = array.length-1;

	while(lo<=hi){
		var mid = Math.floor((lo+hi)/2);


		if(array[mid]==key){
			return mid;
		}
		
		else if(array[mid]>key){
			hi = mid - 1;
		}
		
		else{
			lo = mid + 1;
		}

	}
	return -1;
}

var position = BinarySearch([1,2,4,5,7,8],8);
console.log("Position :"+position);