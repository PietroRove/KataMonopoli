
module.exports = (function() {

	var Game = function(dice) {
		this.dice = dice;
        this.players = [];
        this.playersTurns = [];
        this.currentPlayer = 0;
        this.rounds = 0;
    };
    
    //crea un gioco a partire da una lista di giocatori assegnata
    Game.prototype.createNewGame = function(pPlayers, random) {
        if(random === 0)
            this.players = pPlayers;
    };

    //aggiunge un giocatore
	Game.prototype.addPlayer = function(player) {
        this.players.push(player);
        this.playersTurns.push(0);
	};

    //passa al giocatore successivo
    var nextPlayer = function() {
        this.currentPlayer +=1;
		this.currentPlayer = this.currentPlayer % this.players.length;
    };

    //stampa l'ordine dei giocatori
    Game.prototype.printPlayerOrder = function() {

		var result = "";
		this.players.forEach(function(player) {
			result += player.getName() + "-";
		});
		return result.substring(0, result.length - 1);

	};

    //ritorna il giocatore che sta giocando
    Game.prototype.IsPlayngNow = function() {        
        return this.players[this.currentPlayer];
    }
    
    //esecuzione di una giocata (giocatore singolo) del monopoli
    Game.prototype.playTurn = function() {
        //prima di giocare un turno verifico il numero dei giocatori
        if(this.players.length<2 || this.players.length> 8)
            return { requestValid: false, message: "I can't play. Players' number must be between 2 and 8" };
        //tiro il dato
        var diceResult = this.dice.roll();
        //recupero il giocatore corrente e gioco il turno
		var player = this.players[this.currentPlayer];
        player.play(diceResult);
        //aumento il turno
        this.playersTurns[this.currentPlayer] +=1;
        
        var resultConsole = player.printSituation() + " ## Dice result: " + diceResult;
        console.log(resultConsole);

        var result = player.getName();

        //passo al giocatore successivo
        nextPlayer.call(this);

        return { requestValid: true, message: result };
    };
    
    //avvia il gioco
    Game.prototype.run = function(totalRound) {
        this.rounds = totalRound;
        var playerOrder="";
        var turnNumber="";
        //ciclo sui turni
        
        console.log("Start Game");
        
        for(var i=0;i<this.rounds;i++)
        {
            console.log("** Turn "+(i+1) );
            //ciclo sui giocatori
            for(var j=0;j<this.players.length;j++)
            {
                var c = this.playTurn();
                playerOrder += c['message']+ "-";
            }
        }
        playerOrder = playerOrder.substring(0, playerOrder.length - 1);
        
        //stampo il numero di turni
        for(var t = 0;t<this.playersTurns.length;t++)
        {
            turnNumber +=this.playersTurns[t]+ "-";
        }
        turnNumber = turnNumber.substring(0, turnNumber.length - 1);
        
        console.log("End Game");
        
        return { requestValid: true, messageTurn: turnNumber, messagePlayer: playerOrder };

    };

	return Game;

})();