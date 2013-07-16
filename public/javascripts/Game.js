function Game(p1, p2) {
	this.player1 = p1;
	this.player2 = p2;
	FORMAT = ["0", "15", "30", "40", "ADV"];

	this.winPoint = function(player){
		player.score+=1;
		if (this.player1.score === this.player2.score && this.player1.score >=3){
			this.player1.score=3;
			this.player2.score=3;
		}

		if((player1.score >= 4 && player1.score-player2.score >= 2) || (player2.score >= 4 && player2.score-player1.score >= 2) ) {
			this.player1.score = 0;
			this.player2.score = 0;
		}
		return this.conversion();
	}
	this.conversion = function(){
		return FORMAT[this.player1.score] + "-" + FORMAT[this.player2.score];
	}
}




