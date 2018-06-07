var Dice = require("./src/dice");
var	Player = require("./src/player");
var Game = require("./src/game");
    
var dice = new Dice();
var monopolyGame = new Game(dice);

var player1 = new Player("Horse");
var player2 = new Player("Car");
var turn = 20;

monopolyGame.addPlayer(player1); 
monopolyGame.addPlayer(player2);
monopolyGame.run(turn);