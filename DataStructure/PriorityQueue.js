/*
Find largest M items in stream of N items.
if(pq.size()>M) {pq.delMin()}

The idea of binary heap is based on idea of complete binary tree(perfectly balanced except for bottom level).
Largest key is A[1] which is root of tree. we are not going to need links.We can solve it using arithmetic on array.

Parent of node k is at k/2
Children of node at k at 2k and 2k+1.

Promotion in heap : Child's key becomes larger than parent's key
				-Exchange key in child with key in parent


Demotion in heap : Parent's key smaller than one or both of its children
				-Exchange key in parent with key in larger child.
 
 <TheRealSlimDeepak>
*/

/*****************************************MAX*********PRIROITY**********QUEUE*************************************************/

var MaxPriorityQueue  = (function(){
	var pq = [];
	var N = 0;

	var instantiate = function(capacity){
		pq = new Array(capacity+1);
	};

	var isEmpty = function(){
		return N == 0;
	};

	var insert = function(x){
		pq[++N] = x;
		swim(N);
	};

	var delMax = function(){
		//console.log(pq);
		var max = pq[1];
		exch(1,N--);
		pq[N+1] = undefined;
		sink(1);
		return max;
	};

	var swim = function(k){
		while(k>=1 && less(Math.floor(k/2),k)){

			exch(k,Math.floor(k/2));
			k = Math.floor(k/2);
		}
	};

	var sink = function(k){
		while(2*k <= N){
			var j = 2*k;
			if(j<N && less(j, j+1)) j++;
			if(!less(k,j)) break;
			exch(k, j);
			k = j;
		}
	};

	var less = function(i,j){
		//console.log("I"+i+"J"+j);
		return pq[i]<pq[j];
	};

	var exch = function(i,j){
		var temp = pq[i];
		pq[i] = pq[j];
		pq[j] = temp;
	};

	return{
		instantiate : instantiate,
		insert : insert,
		delMax : delMax,
		isEmpty : isEmpty
	}
})();


/*var maxpq = MaxPriorityQueue;
maxpq.instantiate(15);

maxpq.insert(14);
maxpq.insert(8);
maxpq.insert(3);
maxpq.insert(7);
maxpq.insert(4);
maxpq.insert(9);
maxpq.insert(5);
maxpq.insert(2);
maxpq.insert(11);
maxpq.insert(13);


console.log(maxpq.delMax());
console.log(maxpq.delMax());
console.log(maxpq.delMax());
console.log(maxpq.isEmpty());*/

/**********************************************END**OF**PROGRAM********************************************************************/