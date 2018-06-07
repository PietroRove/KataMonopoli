
module.exports = (function() {

	var Player = function(name, position) {
		this.name = name;
		this.Position = position || 0;
	};

	//ritorna il nome del giocatore
	Player.prototype.getName = function() {		
		return this.name;
	};

	//ritorna la posizione corrente
	Player.prototype.getPosition = function() {
		var result;

		if (this.Position === 0) {
			result = "VIA!";
		} else {
			result = "Location " + this.Position;
		}

		return result;
	
	};

	//ritorna nome e posizione
	Player.prototype.printSituation = function() {

		return "Player: " + this.getName() + " # Position " + this.getPosition();

	};

	//aggionra la posizione in base alla giocata
	Player.prototype.play = function(number) {
		
		if(number)
			this.Position += number;
		else
			this.Position +=1;
		//se sono arrivato a 40 ho finito un giro, devo ripartire da capo
		if(this.Position>=40)
			this.Position = this.Position % 40;
	
	};


	return Player;

})();