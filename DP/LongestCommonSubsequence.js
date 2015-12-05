
/*
This program calculates the longest common subsequence.
*/


function longestCommonSubsequence(string1,string2){
	var L1 = string1.length;
	var L2 = string2.length;
	var T = [];
	for(var i=0;i<=L1;i++){
		T[i] = [];
		for(var j=0;j<=L2;j++){
			T[i][j] = 0;
		}
	}

	for(var i=1;i<=L1;i++){
		for(var j=1;j<=L2;j++){
			if(string1[i-1]==string2[j-1]){
				T[i][j] = T[i-1][j-1] + 1;
			}
			else{
				T[i][j] = Math.max(T[i-1][j],T[i][j-1]);
			}
		}
	}
	console.log(T);
	findString(T,string1);
}


function findString(T,string){
	var i=T.length-1;
	var j=T[0].length-1;
	var longestCommonSubsequence = "";

	while(i!==0 && j!==0){

		if(T[i][j] == T[i-1][j]){
			i--;
		}	
		
		else if(T[i][j] == T[i][j-1]){
			j--;
		}

		else{
			longestCommonSubsequence += string[i-1];
			i--;
			j--;
		}
	}

	console.log("Longest Common subsequence is : "
		+longestCommonSubsequence.split("").reverse().join(""));
}


longestCommonSubsequence("therealslimdeepak","abcslimxyzdeepak");
