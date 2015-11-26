/*
http://www.geeksforgeeks.org/print-missing-elements-that-lie-in-range-0-99/

Given an array of integers print the missing elements that lie in range 0-99. 
If there are more than one missing, collate them, otherwise just print the number.
*/

function printMissingRange(array){
	var seen = [];
	var limit = 100;

	for(var i=0;i<limit;i++){
		seen[i] = false;
	}
	
	for(var i=0;i<array.length;i++){
		seen[array[i]] = true;
	}
	i=0;
	while(i<limit){
		if(seen[i] ==false){
			var j = i+1;
			while(j <limit && seen[j] == false)
				j++;
			
			if(i+1==j){
				console.log(i);
			}
			else{
				console.log(i+"-"+(j-1));
			}

			i = j;
		}
		else{
			i++;
		}
	}
}

printMissingRange([88,105,3,2,200,0,10]);
