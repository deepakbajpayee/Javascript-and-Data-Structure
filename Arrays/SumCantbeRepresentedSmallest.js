function minSum(array){
	var n = array.length;
	var res = 1;

	for(var i=0;i<n && array[i]<=res;i++){
		res += array[i];
	}
	return res;
}

var a = minSum([1,3,6,10,11,15]);
console.log(a);

var a = minSum([1,1,1,1]);
console.log(a);