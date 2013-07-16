
describe ("Game", function() {

	beforeEach(function(){
		player1 = new Player();
		player2 = new Player();
		game = new Game(player1, player2);
	});

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






}); 

