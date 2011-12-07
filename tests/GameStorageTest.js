var GameState = require('../client/nodeGame/GameState.js');
module.exports = GameState;
var Utils = require('../client/nodeGame/Utils.js');
module.exports = Utils;

var GameState = GameState.GameState;

var GameStorage = require('../client/nodeGame/GameStorage.js').GameStorage;

var gs = new GameStorage();

var clients = ['a','b'];//['a','b','c','d'];
var states = [1,2]; //[1,2,3,4];
var ids = ['z','x'];//['z','x','c','v'];

for (var i=0;i<clients.length;i++) {
	for (var j=0;j<states.length;j++) {
		for (var x=0;x<ids.length;x++) {
			gs.add(clients[i], ids[x], Math.random(0,1), new GameState({state:states[j]}));
		}
	}
}

//console.log(gs.toString());

//console.log('Default sort (by Player)');
//gs.sort();
//console.log(gs.toString());
////console.log(gs);
//
//console.log('Reverse');
//gs.reverse();
//console.log(gs.toString());
//
//console.log('Sort by Player');
//gs.sort();
//console.log(gs.toString());
////console.log(gs);
//
//console.log('Sort by State');
//gs.sortByState();
//console.log(gs.toString());
//
//console.log('Sort by Key');
//gs.sortByKey();
//console.log(gs.toString());

//console.log('Get by Player');
//var g = gs.getByPlayer('b');
//console.log(g);

//console.log('Get by State');
//var g = gs.getByState(new GameState({state:2}));
//console.log(g);

//console.log('Get by Key');
//var g = gs.getByKey('z');
//console.log(g);

//console.log('Get Values');
//var v = gs.getValues();
//console.log(v);
//
//console.log('Get Values (reversed)');
//gs.reverse();
//var v = gs.getValues();
//console.log(v);
//
//console.log('Get Value of Player \'a\'');
//var v = gs.getValues({player: 'a'});
//console.log(v);

//console.log('Get Key-Values');
//var v = gs.getKeyValues();
//console.log(v);


var gs = new GameStorage();

var clients = ['a','b'];//['a','b','c','d'];
var states = [1,2]; //[1,2,3,4];
var ids = ['z','x'];//['z','x','c','v'];
for (var i=0;i<clients.length;i++) {
	for (var j=0;j<states.length;j++) {
		for (var x=0;x<ids.length;x++) {
			var objs = [{mario: 'yes', paolo: 'no', r: Math.random()}]
			for (var o=0;o<objs.length; o++) {
				gs.add(clients[i], ids[x], objs[o], new GameState({state:states[j]}));
			}
		}
	}
}

//console.log(gs);

//console.log('Default sort (by Player)');
//gs.sort();
//console.log(gs.toString());
////console.log(gs);
//
//console.log('Reverse');
//gs.reverse();
//console.log(gs.toString());

//console.log('Sort by Player');
//gs.sort();
//console.log(gs.toString());
////console.log(gs);
//
//console.log('Sort by State');
//gs.sortByState();
//console.log(gs.toString());
//
//console.log('Sort by Key');
//gs.sortByKey();
//console.log(gs.toString());

//console.log('Get by Player');
//var g = gs.getByPlayer('b');
//console.log(g);
//
//console.log('Get by State');
//var g = gs.getByState(new GameState({state:2}));
//console.log(g);
//
//console.log('Get by Key');
//var g = gs.getByKey('z');
//console.log(g);

//console.log('Get Values');
//var v = gs.getValues();
//console.log(v);

//console.log('Get Values (reversed)');
//gs.reverse();
//var v = gs.getValues();
//console.log(v);
//
//console.log('Get Value of Player \'a\'');
//var v = gs.getValues({player: 'a'});
//console.log(v);

//console.log('Get Key-Values');
//var v = gs.getKeyValues();
//console.log(v);

//console.log('Sort by Key-Values');
//gs.sortByValue('r');
//
//for (var gb in gs.storage) {
//	if (gs.storage.hasOwnProperty(gb)) {
//		console.log(gs.storage[gb].value);
//	}
//}


// Condition Filter
console.log('Filter Test');


var set = gs.select("value.r > 0.5");
console.log(set);

//set = set.split();
//console.log(set);


console.log('Fetch');
var out = set.fetchArray();
console.log(out);

console.log('FetchValues');
var out = set.fetchValuesArray();
console.log(out);

console.log('FetchKeyValues');
var out = set.fetchKeyValuesArray();
console.log(out);

//console.log('Get');
//var out = set.get();
//console.log(out);