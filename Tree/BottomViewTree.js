/*
The following are steps to print Bottom View of Bianry Tree.
1. We put tree nodes in a queue for the level order traversal.

2. Start with the horizontal distance(hd) 0 of the root node, keep on adding left child 
	to queue along with the horizontal distance as hd-1 and right child as hd+1.

3. Also, use a TreeMap which stores key value pair sorted on key.

4. Every time, we encounter a new horizontal distance or an existing horizontal
 distance put the node data for the horizontal distance as key.
 For the first time it will add to the map, next time it will replace the value. 
 This will make sure that the bottom most element for that horizontal distance is present in the map 
 and if you see the tree from beneath that you will see that element.
*/


function Node(val,hd){
	this.val = val;
	this.hd = hd||0;
	this.left;
	this.right;
};


function printBottomView(root){
	if(root==undefined) return;

	var hd = 0;
	var map = {}; //behaves as TreeMap 
	var queue = []; //behaves as Queue

	root.hd = hd;
	queue.push(root);

	while(queue.length!=0){
		var temp = queue.shift();
		//console.log(temp);
		hd = temp.hd;
		//console.log("HD"+hd);

		map[hd] = temp.val;

		if(temp.left!=undefined){
			temp.left.hd = hd-1;
			queue.push(temp.left);
		}

		if(temp.right!=undefined){
			temp.right.hd = hd+1;
			queue.push(temp.right);
		}	
	}

	//console.log(map);
	//sort the value of this map
	return map;
};


var root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

var map = printBottomView(root);
console.log(map);
//The value of this object will contain the value of the nodes which can be seen from bottom view.
