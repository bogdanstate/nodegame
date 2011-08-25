/*
 * GameLoop
 * 
 * Handle the states of the game
 * 
 */

function GameLoop (loop) {
	this.loop = loop;
	
	this.limits = Array();
	
	for (var key in this.loop) {
		if (this.loop.hasOwnProperty(key)) {
			var round = loop[key].rounds || 1;
			this.limits.push({rounds:round,steps:Utils.getListSize(this.loop[key]['loop'])});
		}
	}
	
	this.nStates = this.limits.length;
	
}


GameLoop.prototype.exist = function (gameState) {

	if (typeof(this.loop[gameState.state]) === 'undefined') {
		console.log('(E): Unexisting state: ' + gameState.state);
		return false;
	}
	
	if (typeof(this.loop[gameState.state]['loop'][gameState.step]) === 'undefined'){
		console.log('(E): Unexisting step: ' + gameState.step);
		return false;
	}
	// States are 1 based, arrays are 0-based => -1
	if(gameState.round > this.limits[gameState.state-1]['rounds']) {
		console.log('(E): Unexisting round: ' + gameState.round + 'Max round: ' + this.limits[gameState.state]['rounds']);
		return false;
	}
	
		
	return true;
};
		
GameLoop.prototype.next = function (gameState) {
	
	console.log('NEXT OF THIS ' + gameState);
	//console.log(this.limits);
	
	// Game has not started yet, do it!
	if (gameState.state === 0) {
		console.log('NEXT: NEW');
		return new GameState(1,1,1);
	}
	
	if (!this.exist(gameState)) {
		console.log('No next state of non-existing state: ' + gameState);
	}
	
	var idxLimit = Number(gameState.state)-1; // 0 vs 1 based
	
	if (this.limits[idxLimit]['steps'] > gameState.step){
		var newStep = Number(gameState.step)+1;
		console.log('Limit: ' + this.limits[gameState.state]['steps']);
		console.log('NEXT STEP: '  + new GameState(gameState.state,newStep,gameState.round));
		return new GameState(gameState.state,gameState.step+1,gameState.round);
	}
	
	if (this.limits[idxLimit]['rounds'] > gameState.round){
		var newRound = Number(gameState.round)+1;
		console.log('NEXT ROUND: ' + new GameState(gameState.state,1,newRound));
		return new GameState(gameState.state,1,newRound);
	}
	
	if (this.nStates > gameState.state){		
		var newState = Number(gameState.state)+1;
		console.log('NEXT STATE: ' + new GameState(newState,1,1));
		return new GameState(newState,1,1);
	}
	
	return false; // game over
};

GameLoop.prototype.previous = function (gameState) {
	
	if (!this.exist(gameState)) {
		console.log('No previous state of non-existing state: ' + gameState);
	}
	
	var idxLimit = Number(gameState.state)-1; // 0 vs 1 based
	
	if (gameState.step > 1){
		var oldStep = Number(gameState.step)-1;
		return new GameState(gameState.state,oldStep,gameState.round);
	}
	else if (gameState.round > 1){
		var oldRound = Number(gameState.round)-1;
		var oldStep = this.limits[idxLimit]['steps'];
		return new GameState(gameState.state,oldStep,oldRound);
	}
	else if (gameState.state > 1){
		var oldRound = this.limits[idxLimit-1]['rounds'];
		var oldStep = this.limits[idxLimit-1]['steps'];
		var oldState = idxLimit;
		return new GameState(oldState,oldStep,oldRound);
	}
	
	return false; // game init
};

GameLoop.prototype.getFunction = function(gameState) {
	return this.loop[gameState.state]['loop'][gameState.step];
};