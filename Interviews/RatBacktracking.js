var maze = [[1,0,0,0],
			[1,1,0,1],
			[0,1,0,0],
			[1,1,1,1]];

solveTheMaze(maze);

function solveTheMaze(maze){
	var solution = [[0,0,0,0],
					[0,0,0,0],
					[0,0,0,0],
					[0,0,0,0]];
	if(exploreMaze(maze,0,0,solution)==false){
		console.log("Path couldnt be found");
		return false;
	}
	else{
		printThePath(solution);
		return true;
	}
}


function exploreMaze(maze,startX,startY,solution){
	if(startX==maze.length-1 && startY==maze.length-1){
		solution[startX][startY] = 1;
		return true;
	}
	if(isSafe(maze,startX,startY)==true){
		solution[startX][startY] = 1;

		 /* Move forward in x direction */
        if (exploreMaze(maze, startX+1, startY, solution) == true)
            return true;
 
        /* If moving in x direction doesn't give solution then
           Move down in y direction  */
        if (exploreMaze(maze, startX, startY+1, solution) == true)
            return true;
 
        /* If none of the above movements work then BACKTRACK: 
            unmark x,y as part of solution path */
        solution[startX][startY] = 0;
        return false;

	}

	return false;
}

function isSafe(maze,x,y){
	if(x>=0 && x<maze.length && y>=0 && y<maze.length && maze[x][y]==1){
		return true;
	}
	return false;
}

function printThePath(solution){
	for(var i=0;i<solution.length;i++){
		console.log(solution[i]);
	}
}
