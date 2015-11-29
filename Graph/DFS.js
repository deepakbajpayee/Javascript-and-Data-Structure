/*
This program implements DFS of a graph and returns a path if exist.
*/

function DFS(graph,source){
	var edgeTo = [];
	var marked = [];
	var v = graph.vertices();
	for(var i=0;i<v;i++){
		marked.push(false);
		edgeTo.push(0);
	}

	dfs(graph,source);

	function dfs(graph,source){
		marked[source] = true;
		graph.adjArray(source).forEach(function(element,index,array){
			if(marked[element] ==false){
				dfs(graph,element);
				edgeTo[element] = source;
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
mygraph.addEdge(1,5);
mygraph.addEdge(2,3);
mygraph.addEdge(4,5);
mygraph.addEdge(3,7);
mygraph.addEdge(7,9);
mygraph.addEdge(5,8);
mygraph.addEdge(4,7);

var dfs = new DFS(mygraph,1);
console.log(dfs.path(10));

