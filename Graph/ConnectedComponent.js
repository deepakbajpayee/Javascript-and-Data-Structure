/*
Connected Component : We check whether two vertices are connected or not.
A connected component is a maximal set of connected vertices.
Initalize all vertices as unmarked . For each unmarked vertex v, run DFS to identify 
all vertices discovered as part os same component.

TheRealSlimDeepak..
*/


function ConnectedComponent(graph){
	var marked = [];
	var id = [];
	var count=0;

	for(var i=0;i<graph.vertices();i++){
		marked[i] = false;
		id[i] = 0;
	}

	for(var i=0;i<graph.vertices();i++){
		if(marked[i] == false){
			dfs(graph,i);
			count++;
		}
	}

	function dfs(graph,v){
		marked[v] = true;
		id[v] = count;

		graph.adjArray(v).forEach(function(element,index,array){
			if(marked[element] == false){
				dfs(graph,element);
			}
		});
	};

	this.isConnected = function(u,v){
		return id[u]==id[v];
	};

	//console.log(id);
	//console.log(marked);
};


var graph = require("./GraphDS");
graph.instantiate(10);
graph.addEdge(1,2);
graph.addEdge(1,5);
graph.addEdge(2,4);
graph.addEdge(3,7);
graph.addEdge(4,8);
graph.addEdge(6,9);
var cc = new ConnectedComponent(graph);

if(cc.isConnected(2,3)){
	console.log("They are connected !!");	
}
else{
	console.log("They are not connected !!")
}



