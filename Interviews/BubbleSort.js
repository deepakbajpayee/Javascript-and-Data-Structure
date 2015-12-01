/*
This program implements Bubble sort. O(n^2)
*/

function bubblesort(array){
	
	for(var i=array.length;i>=1;i--){
		
		for(var j=0;j<=i-1;j++){
			
			if(array[j]>array[j+1]){
				swap(array,j,j+1);
			}

		}
	}

	console.log("Sorted Array : "+array);
}

function swap(array,i,j){
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}


var array = [3,4,5,1,6,7,8,3];
bubblesort(array);