var tree = require('./TreeDS');
tree.put(5);
tree.put(3);
tree.put(4);
tree.put(2);
tree.put(7);
tree.put(8);
tree.put(9);
var MYSTACK = require('../DataStructure/Stack');

//inorder(tree.getRoot());
//reverseInorder(tree.getRoot());

isPairPresent(tree.getRoot(),11);

function isPairPresent(root,target){
	var stack1 = new MYSTACK();
	var stack2 = new MYSTACK();

	var done1 = false;
	var done2 = false;

	var val1 = 0;
	var val2 = 0;

	var curr1 = root;
	var curr2 = root;

	while(true){
		

		while(done1==false){
			if(curr1!=undefined){
				stack1.push(curr1);
				curr1 = curr1.left;
			}
			else{
				if(stack1.isEmpty()) done1 = true;
				else{
					curr1 = stack1.pop();
					val1 = curr1.val;
					curr1  = curr1.right;
					done1 = true;	
				}
				
			}
		}

		while(done2==false){
			if(curr2!=undefined){
				stack2.push(curr2);
				curr2 = curr2.right;
			}
			else{
				if(stack2.isEmpty()) done2 = true;
				else{
					curr2 = stack2.pop();
					val2 = curr2.val;
					curr2  = curr2.left;
					done2 = true;	
				}
				
			}
		}


		if ((val1 != val2) && (val1 + val2) == target){
            console.log("val1 : "+val1 + "  val2 : "  + val2 + "  target : " + target);
            return true;
        }
 
        // If sum of current values is smaller, then move to next node in
        // normal inorder traversal
        else if ((val1 + val2) < target)
            done1 = false;
 
        // If sum of current values is greater, then move to next node in
        // reverse inorder traversal
        else if ((val1 + val2) > target)
            done2 = false;
 
        // If any of the inorder traversals is over, then there is no pair
        // so return false
        if (val1 >= val2)
            return false;
	}
}


/*function inorder(root){
	var stack = new MYSTACK();
	while(true){
		if(root!=undefined){
			stack.push(root);
			root = root.left;
		}
		else{
			if(stack.isEmpty()) break;
			root = stack.pop();
			console.log(root.val);
			root = root.right;
		}
	}
}


function reverseInorder(root){
	var stack = new MYSTACK();
	while(true){
		if(root!=undefined){
			stack.push(root);
			root= root.right;
		}
		else{
			if(stack.isEmpty()) break;
			root = stack.pop();
			console.log(root.val);
			root = root.left;
		}

	}
}*/