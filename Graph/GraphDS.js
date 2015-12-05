/**
This program represent a graph , by storing it in adjacency list fashion.
The graph is undirected . If we say there is a path (A-B).It means there is a path
from A to B and B to A as well.
**/


/*************************************************************************************************************************/
/*	This Graph data structure follows Revealing Module pattern. I used this pattern so that I can
   export this module , and in other file I can use it.*/

var GraphDS = (function(){
	var vertex =  0;
	var adj = [];

	var instantiate = function(v){
		vertex = v;
		for(var i=0;i<=vertex;i++){
			adj.push([]);
		}
	}

	var addEdge = function(u,v){
		adj[u].push(v);
		adj[v].push(u);
	}

	var vertices = function(){
		return vertex;
	}

	var adjArray = function(i){
		return adj[i];
	}
	return{
		instantiate:instantiate,
		addEdge : addEdge,
		vertices : vertices,
		adjArray : adjArray
	}
})();


/*
//This is the test code to check function of graph.

GraphDS.instantiate(10);
GraphDS.addEdge(1,2);
GraphDS.addEdge(1,5);
GraphDS.addEdge(2,4);
GraphDS.addEdge(3,7);
GraphDS.addEdge(4,8);
GraphDS.addEdge(4,9);

for(var i=0;i<GraphDS.vertices();i++){
	GraphDS.adjArray(i).forEach(function(element,index,array){
		console.log(i+" - > "+element);
	});	
}

*/
//If you don't use Node.js You have to implement this file to my other Graph programs.
module.exports = GraphDS;



/*******************************************************************************************************************************/
//This is pseudoclassical pattern way of creating Graph.


/*
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
}*/

/*****************************************************************************************************************************/