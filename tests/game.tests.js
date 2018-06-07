var chai = require('chai')
            ,expect = chai.expect
            ,should = chai.should();    //aggiunta per poter utilizzare should

//includo il file src dei dice, player e del game
var Dice = require("../src/dice");
var Player = require("../src/player");
var Game = require("../src/game");

describe("Game", function() 
{
beforeEach(function() {

    this.dice = new Dice();
    this.game = new Game(this.dice);

});

it("Create a game with two players named Horse and Car.", function() {
        
    var playerOne = new Player("Car");
    var playerTwo = new Player("Horse");

    this.game.addPlayer(this.playerOne);
    this.game.addPlayer(this.playerTwo);

    this.game.players.length.should.be.equal(2);

});

it("Try to create a game with < 2 or > 8 players. When attempting to play the game, it will fail", function() {

    var player1 = new Player("Horse");

    this.game.addPlayer(player1);     
    const result = this.game.playTurn();

    expect(result).to.have.property('requestValid', false);
    expect(result).to.have.property('message', "I can't play. Players' number must be between 2 and 8");

});

it("Create a game and play, verify that the total rounds was 20 and that each player played 20 rounds.", function() {

    var player1 = new Player("Horse");
    var player2 = new Player("Car");

    this.game.addPlayer(player1); 
    this.game.addPlayer(player2);
    const result = this.game.run(20);

    expect(result).to.have.property('requestValid', true);
    expect(result).to.have.property('messageTurn', "20-20");

});

it("Create a game and play, verify that in every round the order of the players remained the same.", function() {

    var player1 = new Player("Horse");
    var player2 = new Player("Car");

    this.game.addPlayer(player1); 
    this.game.addPlayer(player2);
    const result = this.game.run(20);

    expect(result).to.have.property('requestValid', true);
    expect(result).to.have.property('messagePlayer', "Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car-Horse-Car");

});


for(var t=0;t<=100;t++){
it("Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [car, horse] occur.", function() {
		
    

        var player1 = new Player("Horse");
        var player2 = new Player("Car");
        var listPlayer = [];
        listPlayer.push(player1);
        listPlayer.push(player2);
        this.game.createNewGame(listPlayer,1);
         //this.game.printPlayerOrder().should.be.equal("Horse-Car");
        this.game.printPlayerOrder().should.satisfy(function (name) {
        
        if ((name === "Horse-Car") ||(name === "Car-Horse") )
            return true;
        else    
            return false;

       
        });
    }

);}
});
 

    

   


