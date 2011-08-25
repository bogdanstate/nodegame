function Monitor_Example () {
	
	this.name = 'Game Example';
	this.description = 'General Description';
	this.version = '0.2';
	
	this.minPlayers = 1;
	this.maxPlayers = 10;
	
	this.automatic_step = true;
	
	this.init = function() {
		nodeWindow.setup('MONITOR');
	};
	
	var pregame1 = function(){
		
		
		//nodeWindowloadPage('monitorgame/monitorgame.html');

		console.log('Pregame');
	};
	
	var instructions = function(){
	
		var that = this;
		
		console.log('Instructions');
	};
	
	var postgame1 = function(){
	
		
		console.log('Postgame');
	};
	
	var endgame1 = function(){
	
		
		console.log('Game ended');
	};
	
	var game1 = function(){
		console.log('Game1');
	};
	
	var game2 = function(){
	
	
		
		console.log('Game2');
	};
	
	var game3 = function(){
	
	
		
		console.log('Game3');
	};
	
	var waiting = function(){
	

		
		console.log('Waiting');
	};
	
	
	
	// Assigning Functions to Loops
	
	var pregameloop = {
		1: pregame1
	};
	
	var instructionsloop = {
		1: instructions
	};
	
	var gameloop = { // The different, subsequent phases in each round
		1: game1,
		2: game2,
		3: game3
	};
	
	var postgameloop = {
		1: postgame1
	};
	
	var endgameloop = {
		1: endgame1
	};
	
	
	// Creating the game object
		
	// LOOPS
	this.loops = {
			1: {loop:pregameloop},
			2: {loop:instructionsloop},
			3: {rounds:10, loop:gameloop},
			4: {loop:postgameloop},
			5: {loop:endgameloop}
		};	
}