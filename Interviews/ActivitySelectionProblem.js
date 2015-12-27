/*
Greedy Algorithm

Always choosing next piece that offers most promising benefit.
It solves Optimization problem(At every step, we can make a choice that looks best at the moment, and we get the optimal solution of the complete problem.).

You are given n activities with their start and finish times.
Select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.
Example:

Consider the following 6 activities. 
     start[]  =  {1, 3, 0, 5, 8, 5};
     finish[] =  {2, 4, 6, 7, 9, 9};

The maximum set of activities that can be executed 
by a single person is {0, 1, 3, 4}

The greedy choice is to always pick the next activity whose finish
time is least among the remaining activities and the start time is 
more than or equal to the finish time of previously selected activity. 
We can sort the activities according to their finishing time so 
that we always consider the next activity as minimum finishing time activity.


1) Sort the activities according to their finishing time
2) Select the first activity from the sorted array and print it.
3) Do following for remaining activities in the sorted array. 
 a) If the start time of this activity is greater than the finish
    time of previously selected activity then select this activity
    and print it.

*/





function printMaxActivities(start,finish,n){
	var i=0,j=0;
	console.log(i);

	for(j=1;j<n;j++){
		if(start[j]>finish[i]){
			console.log(j);
			i=j;
		}
	}


}

var start =  [1, 3, 0, 5, 8, 5];
//Here I am taking sorted finish array.You might want to do it yourself.
var finish = [2, 4, 6, 7, 9, 9];
printMaxActivities(start, finish,start.length);
