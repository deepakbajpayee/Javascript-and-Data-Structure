/*
This program implements Breadth first traverasal of a graph. We create queue to store unmarked vertices.
BFS constructor takes a graph and source vertex.
It has a path function which returns path to a given destination vertex.
*/

function Queue(){
	this.queue = [];

	this.isEmpty = function(){
		return this.queue.length==0;
	}

	this.add = function(item){
		this.queue.push(item);
	}
	
	this.poll = function(){
		if(this.isEmpty()) return null;
		var removeditem = this.queue.shift();
		return  removeditem;
	}
}


function BFS(graph,source){
	var edgeTo = [];
	var marked = [];
	var queue = new Queue();

	for(var i=0;i<graph.vertices();i++){
		edgeTo.push(0);
		marked.push(false);
	}

	queue.add(source);

	while(!queue.isEmpty()){
		
		var w = queue.poll();
		marked[w] = true;

		graph.adjArray(w).forEach(function(element,index,array){
			if(marked[element] ==false){
				queue.add(element);
				edgeTo[element] = w;
			}
		});
	}


	this.path = function(dest){
		var path =[];
		for(var i=dest;i!=source;i = edgeTo[i]){
			path.push(i);
		}
		path.push(source);
		return path;
	}

	console.log(edgeTo);
	console.log(marked);
}

var mygraph = new Graph(10);
mygraph.addEdge(1,2);
mygraph.addEdge(2,3);
mygraph.addEdge(4,5);
mygraph.addEdge(3,7);
mygraph.addEdge(7,9);
mygraph.addEdge(5,8);
mygraph.addEdge(4,7);

var bfs = new BFS(mygraph,1);
var path = bfs.path(9);
console.log(path);

