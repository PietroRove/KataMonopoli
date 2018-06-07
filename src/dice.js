module.exports = (function() {
	
	var Dice = function() {};
	//simula il lancio di una coppia di dadi, con valori da 2 a 12
    Dice.prototype.roll = function() 
    {
		return Math.floor((Math.random() * 10) + 2); 
	};

	return Dice;

})();