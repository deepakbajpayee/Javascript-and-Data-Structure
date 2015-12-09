


var tree = require('./TreeDS');
tree.put(50);
tree.put(30);
tree.put(70);
tree.put(20);
tree.put(40);
tree.put(60);
tree.put(80);


var root = tree.getRoot();
var obj = {pre:undefined,suc:undefined};


function FindPreSuc(root,obj,key){
	if(root==undefined)return;

	if(root.val == key){

		if(root.left!=undefined){
			var tmp = root.left;
			while(tmp.right!=undefined){
				tmp = tmp.right;
			}
			obj.pre = tmp;
		}

		if(root.right!=undefined){
			var tmp = root.right;
			while(tmp.left!=undefined){
				tmp = tmp.left;
			}
			obj.suc = tmp;
		}

		return;
	}
	if(root.val > key){
		obj.suc = root;
		FindPreSuc(root.left,obj,key);
	}
	else{
		obj.pre = root;
		FindPreSuc(root.right,obj,key);
	}
}

FindPreSuc(root,obj,30);
console.log(obj);
