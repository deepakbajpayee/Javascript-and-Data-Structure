/*
Analogous to how we sort data. Insertion sort...
*/

function insertionsort(array){
	var temp,j;
	for(var i=1;i<array.length;i++){
		temp = array[i];
		j = i;

		while(j>0 && array[j-1] >= temp){
			array[j] = array[j-1];
			j--;
		}
		array[j] = temp;
	}

	console.log("Sorted array :"
		+array)
}


insertionsort([1,5,2,6,3,7,1,4,5,9,7,8]);