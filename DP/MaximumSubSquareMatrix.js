/*
Find the maximum sub square matrix from a matrix of 0/1.
*/

function maximumSubSquareMatrix(inputArray){
	var T = [];
	var row = inputArray.length;
	var column = inputArray[0].length;
	for(var i=0;i<=row;i++){
		T.push([]);
		for(var j=0;j<=column;j++){
			T[i][j] = 0;
		}
	}

	for(var i=1;i<=row;i++){	
		for(var j=1;j<=column;j++){
			if(inputArray[i-1][j-1]==1){
				T[i][j] = 1 + Math.min(T[i-1][j-1],Math.min(T[i-1][j],T[i][j-1])); 
			}
			else{
				T[i][j] = 0;
			}
		}
	}
	console.log(T);
	//just iterate again and print the max value from the matrix.

	var max = Number.MIN_VALUE;

	for(var i=0;i<=row;i++){
		for(var j=0;j<=column;j++){
			if(max<T[i][j]){
				max = T[i][j];
			}
		}
	}

	console.log("The max size subsquare matrix is :"+max);
}

var input = [[0,0,1,1,1],[1,0,1,1,1],[0,1,1,1,1],[1,0,1,1,1]];

maximumSubSquareMatrix(input);