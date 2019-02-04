

var winsDiv = document.getElementById("wins");
var underscoresDiv = document.getElementById("underscores");
var guessesLeftDiv = document.getElementById("guessesLeft");
var guessedLettersDiv = document.getElementById("guessedLetters");
var sound = document.getElementById("sound");
var correctWordDiv = document.getElementById("correct-word");


//create variable for game (wordBank, wins, guesses left, game running, picked word placeholder, incorrect letter bank)
var wordBank = ["Michael Jordan", "Kobe Bryant", "Shooter", "Fouls", "Lakers","Sixers","Hoop","Coach","Guard","Free Throw"];
var wins = 0;
var gameRunning = false;
var incorrectLetterBank = [];
var pickedWordUnderscoresArr =[];
var guessesLeft = 12;
var guessedLetterBank =[];
var pickedWord = '';




// newGame function to reset all stats, pick new word and create placeholders
function newGame (){
    gameRunning = true;
    guessesLeft=10;
    guessedLetterBank=[];
    incorrectLetterBank = [];
    pickedWordUnderscoresArr = [];
    
    // console.log("!");

    pickedWord = wordBank[Math.floor(Math.random()* wordBank.length)];

            for (var i=0;i < pickedWord.length; i++){
                if (pickedWord[i] === ' '){
                    pickedWordUnderscoresArr.push(' ');
                } else {
                    pickedWordUnderscoresArr.push('_');
                }
            }

    
    //write all to the DOM
    guessesLeftDiv.textContent = guessesLeft; 
    underscoresDiv.textContent = pickedWordUnderscoresArr.join('');
    guessedLettersDiv.textContent = incorrectLetterBank;
}


//letterGuess function, takes in the letter you presses and sees if it is in the selected word
function letterGuess (letter){
    // console.log(letter);
            if(gameRunning && guessedLetterBank.indexOf(letter) === -1){
            
             guessedLetterBank.push(letter);

                for (var i = 0; i<pickedWord.length ;i++){
                    if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                    // if a match, swip _ for letter
                        pickedWordUnderscoresArr[i] = pickedWord[i];
                    }   
                }
                underscores.textContent = pickedWordUnderscoresArr.join('');

                        console.log(checkwins);

                checkIncorrect(letter);
                checkwins();
  
            }
            else{
                if(!gameRunning) {
                    alert("Try Again!");
                }
            }

}




// check incorrect letter

// checkLose, updates wrong guess letter lists

// check incorrect letter

function checkIncorrect(letter) {

//check to see if letter didnt make it into our underscore (incorrect)
    if ( 
        pickedWordUnderscoresArr.indexOf(letter.toLowerCase()) === -1
            &&
            pickedWordUnderscoresArr.indexOf(letter.toUpperCase()) === -1
            ) { 
                //decrement guessesLeft
                guessesLeft--;

                if(guessesLeft===0){
                    newGame();
                }

                // add incorrect letter to incorrectLetterBank
                incorrectLetterBank.push(letter);
                //write new bank of incorrect letters to DOM
                guessedLettersDiv.textContent = incorrectLetterBank.join(' ');
                //write new amount of guesses left to DOM
                guessesLeftDiv.textContent = guessesLeft;
            }


}   


// check wins

function checkwins(){
    var soundFlag =true;

    if (pickedWord.toLowerCase() === pickedWordUnderscoresArr.join('').toLowerCase()) {
        // add point to "win"
  
              wins++;
                gameRunning= false;
                winsDiv.textContent = wins; 
                correctWordDiv.textContent = pickedWord.toUpperCase();
                    

                if (soundFlag){
                sound.pause();
                sound.currentTime = 0;
                sound.play();
                soundFlag = false;
                }


                newGame();
            }

}
console.log(checkwins);




//Add onekeyup event to trigger letterGuess

document.onkeyup = function(event){
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}


newGame();
