
var chai = require('chai')
            ,expect = chai.expect
            ,should = chai.should();    //aggiunta per poter utilizzare should

//includo il file src dei player
var Player = require("../src/player");

describe("Player", function() 
{
    beforeEach
    (
        function() {
		    this.player = new Player("Car");
        }
    );


    it("Player on beginning location (numbered 0), rolls 7, ends up on location 7", function() {

		this.player.play(7);
		this.player.getPosition().should.be.equal("Location 7");

    });
    
    it("Player on location numbered 39, rolls 6, ends up on location 5", function() {
        this.player = new Player("Car",39);
		this.player.play(6);
        this.player.getPosition().should.be.equal("Location 5");

	});


	it("should return the name of the player", function() {
  
        this.player.getName().should.satisfy(function (name) {
            if ((name === "Horse") || (name === "Car")) {
                return true;
            } else {
                return false;
            }
        });
	});
	
	

});