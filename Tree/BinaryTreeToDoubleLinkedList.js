
/*
Tree data structure has been defined in file TreeDS.js
*/

var tree = require('./TreeDS');
tree.put(5);
tree.put(3);
tree.put(4);
tree.put(2);
tree.put(7);
tree.put(6);
tree.put(8);
//tree.inOrder();


/*
Here we have used two global variable to store prev node and head of the list.
*/
var prev;
var head;


/*
This function converts Tree to Doble Linked List.
*/

function TreeToList(root){
	if(root==undefined) return;

	TreeToList(root.left);
	
	if(prev==undefined){
		head = root;
	}
	else{
		root.left = prev;
		prev.right = root;
	}
	prev = root;

	TreeToList(root.right);
}


/*
Calling the method - TreeToList.
*/

TreeToList(tree.getRoot());


/*
Test the program by printing the list.
*/

printTheList(head);

function printTheList(first){
	while(first!=undefined){
		console.log(first.val);
		first = first.right;
	}
}