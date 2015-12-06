/***
This program calculates the shortest path in a graph if exists.

<TheRealSlimDeepak>
****/


/*
@param array
@return boolean

checks if an array contains an element or not.
*/

Array.prototype.contain= function(element){
	for(var i=0;i<this.length;i++){
		if(this[i]==element){
				return true;
		}
	}
	return false;
};



/*
@param vertices and weight 
@return an edge weighted directed edge

This constructor creates a directed edge with weight.
*/

function DirectedEdge(v,w,weight){
	this.v  = v;
	this.w  = w;
	this.weight = weight;

	this.from = function(){
		return this.v;
	}
	this.to = function(){
		return this.w;
	}
	this.getweight = function(){
		return this.weight;
	}
}



/*
@param #vertex in thre graph
@return a graph data structure

This constructor creates a EdgeWeightedDiGraph.
*/

function EdgeWeightedDiGraph(v){
	this.V = v;
	this.adj = [];

	for(var i=0;i<v;i++){
		this.adj.push([]);
	}

	this.addEdge = function(e){
		var p = e.from();
		this.adj[p].push(e);
	}
	this.vertices = function(){
		return this.V;
	}
	this.adjArray = function(i){
		return this.adj[i];
	}
}


/*
@param A EdgeWeightedDiGraph and a source vertex
@retrun A shortest path from source to a given vertex which you have to send in pathTo method.

This constructor has methods which calculates Shortest Path Tree if exists.
*/

function ShortestPath(graph,source){
	this.edgeTo = [];
	this.S = source ||0;
	this.set = [];
	this.distTo = [];
	var that = this;
	

	for(var i=0;i<graph.vertices();i++){
		this.distTo[i] = Number.MAX_VALUE;
	}
	this.distTo[this.S] = 0;

	this.relax = function(edge){
		var v = edge.from();
		var w = edge.to();

		if(this.distTo[w]>this.distTo[v]+edge.getweight()){
			this.distTo[w] = this.distTo[v] + edge.getweight();
			this.edgeTo[w] = edge;
		}
	}


	for(var i=0;i<graph.vertices();i++){
		
		graph.adjArray(i).forEach(function(element,index,array){
			
			if(!that.set.contain(element)){

				that.relax(element);
				that.set.push(element);

			}
		});
	}


	this.pathTo = function(v){
		var path = [];
		for(var e = this.edgeTo[v]; e!=undefined; e = this.edgeTo[e.from()]){
			path.push(e);
		}
		path.push(e);
		return path;
	}
}


/**
Client Code
**/
var graph = new EdgeWeightedDiGraph(10);
graph.addEdge(new DirectedEdge(1,2,2.0));
graph.addEdge(new DirectedEdge(2,3,4.0));
graph.addEdge(new DirectedEdge(3,4,5.0));
graph.addEdge(new DirectedEdge(2,4,3.0));
graph.addEdge(new DirectedEdge(4,7,5.0));
graph.addEdge(new DirectedEdge(5,8,8.0));
graph.addEdge(new DirectedEdge(3,5,6.0));

var shortestPath = new ShortestPath(graph,1);
// It will contain the shortest path tree.
console.log(shortestPath.pathTo(7));


/*****************************************END*********OF*************PROGRAM***********************************************************/


	