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


function minimumCoinsDP(coins,value){

	var T = Array.Matrix(coins.length+1,value+1,0);

	for(var i=1;i<T[0].length;i++){
		T[0][i] = Number.MAX_VALUE;
	}

	for(var i=1;i<T.length;i++){
		for(var j=1;j<T[i].length;j++){
			if(j>=coins[i-1]){
				T[i][j] = Math.min(T[i-1][j],1+T[i][j-coins[i-1]]);
			}
			else{
				T[i][j] = T[i-1][j];
			}
		}
	}
	//console.log(T);
	return T[coins.length][value];
}



var mincoin = minimumCoinsDP([1,4,5],22);
console.log(mincoin);