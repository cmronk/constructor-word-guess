// this will not require any other files

// we will need a constructor Letter
var Letter = function(character) {
    // we will get this from inquirer input?
    this.character = character;
    this.guessed = true;
    this.returnChar = function(){
        // returns letter if guessed correctly, else underscores
        if(this.guessed) {
            console.log(this.character);
        } else{
            console.log("_");
        }
    };
    this.updateGuessed = function(userGuess){
        // updates boolean value of this.guessed 
        if(userGuess === this.character) {
            this.guessed = true;
        } else {
            this.guessed = false;
        }
    };
};

module.exports = Letter;

