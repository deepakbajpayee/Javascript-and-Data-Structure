/**
This program represent a graph , by storing it in adjacency list fashion.
The graph is undirected . If we say there is a path (A-B).It means there is a path
from A to B and B to A as well
**/

function Graph(v){
	this.V = v;
	this.adj = [];
	for(var i=0;i<=v;i++){
		this.adj.push([]);
	}

	this.addEdge = function(u,v){
		this.adj[u].push(v);
		this.adj[v].push(u);
	}

	this.vertices = function(){
		return this.V;
	}

	this.adjArray = function(i){
		return this.adj[i];
	}

}

var graph = new Graph(10);
graph.addEdge(1,2);
graph.addEdge(1,5);
graph.addEdge(2,4);
graph.addEdge(3,7);
graph.addEdge(4,8);
graph.addEdge(4,9);

for(var i=0;i<graph.vertices();i++){
	graph.adjArray(i).forEach(function(element,index,array){
		console.log(i+" - > "+element);
	});	
}

