/**
Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively.
Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] 
such that sum of the weights of this subset is smaller than or equal to W. 
You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).
**/

Array.Matrix = function(numrows,numcolumns,defaultValue){
	var arr = [];
	for(var i=0;i<numrows;i++){
		arr[i] = [];
		for(var j=0;j<numcolumns;j++){
			arr[i][j] = defaultValue;
		}
	}
	return arr;
}


function knapsackDP(value,weight,capacity){
	var T = Array.Matrix(value.length+1,capacity+1,0);
	

	for(var i=1;i<T.length;i++){
		for(var j=1;j<T[i].length;j++){
			if(j>=weight[i-1]){
				T[i][j]  =  Math.max( T[i-1][j-weight[i-1]]+value[i-1]  ,  T[i-1][j]  );
			}
			else{
				T[i][j] =   T[i-1][j];
			}
		}
	}

	//console.log(T);
	return T[value.length][capacity];
}

var max_value = knapsackDP([60,100,120],[10,20,30],50);
console.log(max_value);