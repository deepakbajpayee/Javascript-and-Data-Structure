/*
This program implements Selection sort. 
In each iteration It computes the minimum element and swap it with current element.
*/

function selectionsort(array){
	
	var min, temp;
	for(var i=0;i<array.length-1;i++){
		min = i;

		for(var j=i+1;j<array.length;j++){

			if(array[j]<array[min]){
				min = j;
			}
		}

		swap(array,i,min);
	}

	console.log("Sorted array : "+array);
}

function swap(array,i,j){
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}



var array1 = [2,3,7,1,4,5,2,9,8,6,2,2,2,3,3];
selectionsort(array1);