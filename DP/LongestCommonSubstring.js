/**
This function find longest Common Substring using Dynamic Programming.
**/

function longestCommonSubstring(string1,string2){
	var len1 = string1.length;
	var len2 = string2.length;

	var T = [];

	for(var i=0;i<=len1;i++){
		T.push([]);
		for(var j=0;j<=len2;j++){
			T[i][j] = 0;
		}
	}


	for(var i=1;i<=len1;i++){
		for(var j=1;j<=len2;j++){
			if(string1[i-1] == string2[j-1]){
				T[i][j] = 1 + T[i-1][j-1];
			}
			else{
				T[i][j] = 0;
			}
		}
	}
	
	console.log(T);
	
	var I,J;
	var max = Number.MIN_VALUE;

	for(var i=0;i<=len1;i++){
		for(var j=0;j<=len2;j++){
			if(max<T[i][j]){
				max = T[i][j];
				I = i;
				J = j;
			}
		}
	}

	findString(T,I,J,string1);
}


function findString(T,I,J,string){

	var longestCommonString ="";
	while(T[I][J]!=0){
		longestCommonString += string[I-1];
		I--;
		J--;
	}
	console.log("Longest Common String : "
		+longestCommonString.split("").reverse().join(""));
}


longestCommonSubstring("abcdaf","zbcdf");