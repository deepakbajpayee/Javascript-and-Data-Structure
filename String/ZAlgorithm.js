/*
Z(k) = Longest substring at k which is also prefix of string.

Matches pattern in 0(m+n)
*/

function findZArray(input){
	var Z =[];
	console.log(input);
	Z[0] = 0;
	var left = 0;
	var right = 0;
	for(var k=1;k<input.length;k++){
		if(k>right){
			left = right = k;
			while(right<input.length && input[right] == input[right-left]){
				right++;
			} 
			Z[k] = right - left;
			right--;
		}
		else{
			var k1 = k - left;
			if(Z[k1]<right-k-1){
				Z[k] = Z[k1];
			}
			else{
				left = k;
				while(right<input.length && input[right] == input[right-left]){
					right++;
				} 
				Z[k] = right - left;
				right--;
			}
		}
	}
	console.log(Z);
	return Z;
}


function findMatch(text,pattern){
	var fulltext = pattern+'$'+text;
	var zarray = findZArray(fulltext);
	var patternlength = pattern.length;
	var result = [];
	for(var i=0;i<zarray.length;i++){
		if(zarray[i] == patternlength){
			result.push(i-(patternlength+1));
		}
	}
	return result;
}

console.log(findMatch("xabcabzabc","abc"))