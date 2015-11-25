
function add(array1,array2){
	var max = Math.max(array1.length,array2.length);
	var output = "";
	array1 = array1.reverse();
	array2 = array2.reverse();

	var carry = 0;
	var num1 = 0;
	var num2 = 0;
	for(var i=0;i<max;i++){
		num1 = array1[i] || 0;
		num2 = array2[i] || 0;

		var sum = carry + num1 + num2;
		if(sum>=10){
			carry = 1;
		}
		else{
			carry = 0;
		}
		output += sum%10;
	}
	if(carry==1){
		output +=1;
	}
	console.log(output.split("").reverse().join());
}
add([1,2,3,4,5,6],[1]);