// need to call each function to update the number
// maybe easier to have a display score function?

function Game(p1, p2) {
	this.player1 = p1;
	this.player2 = p2;
	FORMAT = ["0", "15", "30", "40", "ADV"];

	this.winPoint = function(player){


		if(this.player1.games === 6 && this.player2.games === 6)
		{
			player.addTiebreak();			
		}
		else
		{
			player.score+=1;
			if ((this.player1.score === this.player2.score) && this.player1.score >=3)
				{
				this.player1.score=3;
				this.player2.score=3;
				}

			if((this.player1.score >= 4 && this.player1.score-player2.score >= 2) || (this.player2.score >= 4 && this.player2.score - this.player1.score >= 2) ) 
				{
				this.player1.score = 0;
				this.player2.score = 0;
				player.addGame();
				}
			}
			return this.pointsConversion();
		}

	this.pointsConversion = function(){
		return FORMAT[this.player1.score] + "-" + FORMAT[this.player2.score];
	}

	this.games = function(){
		return this.player1.games + "-" + this.player2.games;
	}

	this.sets = function(){
		if((this.player1.games === 6 && this.player2.games === 6) && player1.tiebreak >= 7 && (player1.tiebreak - player2.tiebreak >= 2))
			{
			this.player1.sets +=1
			this.player1.games = 0;
			this.player2.games = 0;
			this.player1.tiebreak = 0;
			this.player2.tiebreak = 0;
			}	

		if((this.player2.games === 6 && this.player1.games === 6) && player2.tiebreak >= 7 && (player2.tiebreak - player1.tiebreak >= 2))
			{
			this.player2.sets +=1
			this.player1.games = 0;
			this.player2.games = 0;
			this.player1.tiebreak = 0;
			this.player2.tiebreak = 0;
			}			

		if(this.player1.games >= 6 && (this.player1.games - this.player2.games)>=2){
			this.player1.games = 0;
			this.player2.games = 0;
			this.player1.sets += 1;
		}
		
		if(this.player2.games >= 6 && (this.player2.games - this.player1.games)>=2){
			this.player2.games = 0;
			this.player1.games = 0;
			this.player2.sets += 1;
		}

		return this.player1.sets + "-" + this.player2.sets;
	}

	this.match = function(){
		if(this.player1.gender === "female" && this.player1.sets === 2)
			{this.player1.match +=1; 
			this.player1.sets = 0;
			this.player2.sets = 0;
		}

		if(this.player2.gender === "female" && this.player2.sets === 2)
			{this.player2.match +=1; 
			this.player1.sets = 0;
			this.player2.sets = 0;
		}

		if(this.player1.gender === "male" && this.player1.sets === 3)
			{this.player1.match +=1; 
			this.player1.sets = 0;
			this.player2.sets = 0;
		}

		if(this.player2.gender === "male" && this.player2.sets === 3)
			{this.player2.match +=1; 
			this.player1.sets = 0;
			this.player2.sets = 0;
		}

		return this.player1.match + "-" + this.player2.match;
	}

	this.tiebreak = function(){
		return this.player1.tiebreak + "-" + this.player2.tiebreak;

	}

}






