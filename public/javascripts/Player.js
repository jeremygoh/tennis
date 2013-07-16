function Player() {
	this.score = 0;
	this.games = 0;
	this.sets = 0;
}

Player.prototype.addScore = function()  {
	this.score += 1;
};

Player.prototype.addGame = function() {
	this.games += 1;
}

Player.prototype.addSet = function() {
	this.sets += 1;
}

