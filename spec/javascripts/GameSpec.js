
describe ("Game", function() {

	beforeEach(function(){
		player1 = new Player();
		player2 = new Player();
		game = new Game(player1, player2);
	});

describe("Points", function(){
it("has a player1 method",function(){
	expect(game.player1).toBe(player1);
});

it("has a player2 method",function(){
	expect(game.player2).toBe(player2);
});

it("should allow player 1 to win a point and have a score of 1", function(){
	game.winPoint(player1);
	expect(player1.score).toEqual(1);
});

it("should print 15-0 when a point has been won by player1", function(){
	expect(game.winPoint(player1)).toEqual("15-0");
});

it("should print 30-0 when two points have been won by player1", function(){
	game.winPoint(player1)
	expect(game.winPoint(player1)).toEqual("30-0");
});

it("should return 15-15 when a point has been one by each player", function(){
	game.winPoint(player1)
	expect(game.winPoint(player2)).toEqual("15-15");
	});

it("should return 0-0 when a player wins 4 points in a row", function() {
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.winPoint(player1)).toEqual("0-0");
});

it("should go to ADV-40 when both are at 40 and player1 wins a point",function(){
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	expect(game.winPoint(player1)).toEqual("ADV-40");
});

it("should go to 40-40 when it is advantage 40 and player2 wins a point", function(){
	game.winPoint(player1); 	//15  - 0
	game.winPoint(player1);		//30  - 0
	game.winPoint(player1); 	//40  - 0
	game.winPoint(player2);		//40  - 15
	game.winPoint(player2);		//40  - 30
	game.winPoint(player2);		//40  - 40 
	game.winPoint(player1);		//ADV - 40
								//ADV+1 - 40 Player 1 wins  OR ADV - ADV = 40 - 40 
	expect(game.winPoint(player2)).toEqual("40-40");
});

it("should go to 40-40 when it is advantage 40 and player2 wins a point", function(){
	game.winPoint(player1); 	//15  - 0
	game.winPoint(player1);		//30  - 0
	game.winPoint(player1); 	//40  - 0
	game.winPoint(player2);		//40  - 15
	game.winPoint(player2);		//40  - 30
	game.winPoint(player2);		//40  - 40 
	game.winPoint(player1);		//ADV - 40
	game.winPoint(player2);	 		//40 - 40 
	game.winPoint(player1);			//ADV - 40   
	game.winPoint(player2);			//40 - 40 
	expect(game.winPoint(player2)).toEqual("40-ADV");
});

it("should go to 40-40 when it is advantage 40 and player2 wins a point", function(){
	game.winPoint(player1); 	//15  - 0
	game.winPoint(player1);		//30  - 0
	game.winPoint(player1); 	//40  - 0
	game.winPoint(player2);		//40  - 15
	game.winPoint(player2);		//40  - 30
	game.winPoint(player2);		//40  - 40 
	game.winPoint(player1);		//ADV - 40
	game.winPoint(player2);	 		//40 - 40 
	game.winPoint(player1);			//ADV - 40   
	game.winPoint(player2);			//40 - 40 
	game.winPoint(player2);			//40 - ADV
	expect(game.winPoint(player2)).toEqual("0-0");
});

})


// games
describe("Games", function(){

it("should return the games each player has won when", function(){
	expect(game.games()).toEqual("0-0");
})

it("should return 1-0 when player1 has won one game", function(){
	game.player1.addGame();
	expect(game.games()).toEqual("1-0");
})

it("should return 1-0 when player1 has won 4 points in a row", function(){
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.games()).toEqual("1-0");
})

it("should return 1-1 when player1 has won 4 points in a row and then p2 wins 4 points", function(){
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	game.winPoint(player2);
	expect(game.games()).toEqual("1-1");
})


}) // end of describe games


//sets
describe("Sets", function(){
it("should return the sets each player has, this should be 0-0", function(){
	expect(game.sets()).toEqual("0-0");
})

it("should return 1-0 when a player has won a set", function(){
	game.player1.addSet();
	expect(game.sets()).toEqual("1-0");
})

it("should return 1-0 when a player has won six games in a row", function(){
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	game.winPoint(player1);
	expect(game.sets()).toEqual("1-0");
	
})

}) // end of describe sets



}) //end of overarching describe

