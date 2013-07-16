describe("Player",function(){ 

	beforeEach(function(){
		player=new Player();
	});


it("should start of with no points by default", function() {
	expect (player.score).toEqual(0);
});

it("should have one point when it wins a point",function(){
	player.addScore();
	expect(player.score).toEqual(1);
});




}) 



