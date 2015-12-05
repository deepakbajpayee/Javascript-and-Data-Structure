/*
Directed Acyclic Graph . A graph that has no cycle.
1.Run Depth First Search.
2.Return vertices in reverse postorder.

Reverse DFS postorder of a DAG is a topological sort.

<TheRealSlimDeepak>
*/

/*
Code for Directed Graph.
*/

var DiGraph = (function(){
	var adj = [];
	var vertex = 0;

	var instantiate = function(v){
		vertex = v;
		for(var i=0;i<vertex;i++){
			adj[i] = [];
		}
	};

	var addEdge = function(u,v){
		adj[u].push(v);
	};

	var vertices = function(){
		return vertex;
	};

	var adjArray = function(i){
		return adj[i];
	};

	return{
		instantiate : instantiate,
		addEdge : addEdge,
		vertices : vertices,
		adjArray : adjArray
	};
})();

/*
Code for Toplogical Sort.
*/

var ToplogicalSort = function(graph){
	var marked = [];
	var reversePost = [];

	for(var i=0;i<graph.vertices();i++){
		marked[i] = false;
		reversePost[i] = 0;
	};

	for(var i=0;i<graph.vertices();i++){
		if(marked[i] == false){
			dfs(graph,i);
		}
	};

	function dfs(graph,v){
		marked[v] = true;
		graph.adjArray(v).forEach(function(element,index,array){
			if(marked[element] == false){
				dfs(graph,element);
			}
		});
		reversePost.unshift(v);
	};
	//console.log(marked);
	//console.log(reversePost);

	this.reversePostOrder = function(){
		return reversePost;
	};
};


/**
Client Code.
*/


var graph = DiGraph;
graph.instantiate(10);
graph.addEdge(1,2);
graph.addEdge(2,3);
graph.addEdge(3,4);
graph.addEdge(5,6);
graph.addEdge(6,7);

for(var i=0;i<graph.vertices();i++){
	graph.adjArray(i).forEach(function(element,index,array){
		console.log(i+" - > "+element);
	});	
}

var topologicalsort = new ToplogicalSort(graph);
console.log("The topological order is : -> "+topologicalsort.reversePostOrder());




