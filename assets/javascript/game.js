
// Global Variables


//crate an array of Words
var word = ["jordan", "bryant", "shooter", "fouls"];
// Choose word randomly
var randNum = Math.floor(Math.random() * word.length);

var rightWord =[];
var wrongWord =[];
var numBlanks = 0;
var blanksAndSuccesses =[];
var wrongLetters = [];
var choosenWord = "";
var underScore =[];
var wins=[];

// variables
var wins = 0;
var underscore= " ";
var loseCount = 0;
var guessesLeft= 12;
var wrongGuess = [];

// dom manipulations
var docUnderScores = document.getElementById('underscores');
var docUnderScores = document.getElementById('wins');
// var docRightGuess = document.getElementsByClassName('rightGuess');
var docRightWrong = document.getElementsByClassName('wrongGuess');


// var $guessedLetters = document.getElementById('guessedLetters');
// var $guessesRemaining = document.getElementById('guessesRemaining');
// var $wins = document.getElementById('wins')

// Create underscore based on lenght of word
var generateUnderscore = () => {
    for (var i=0; i<chosenWord.length ;i++){
            underScore.push('_');
            underScore.join('');
            }
        return underScore;
        }

// console.log(generateUnderscore());
//Get users guess
document.addEventListener('keypress',(event)=>{
    var keyword = String.fromCharCode(event.keycode);
    // Check if guess is right

    if(chosenWord.indexOf(keyword) > -1) {
//if right push to right array
        rightWord.push(keyword);
//replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;    
        docunderScore[0].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;

        if (underScore.join ('')=== chosenWord){
            wins++
     }
// //if wrong push to wrong array

        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;

     if (underScore.join ('')=== chosenWord){
            wins++
     }
     else {
         wrongWord.push(keyword);
     }
    }
    });

    generateUnderscore[0].innerHTML= generateUunderscore().join('');

//         var hangLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//         var wins = "";
//         var currWord = "";
//         var guessesRemaining= 12;
//         var guessedLetters = [];

//         document.onkeyup = function(event) {
//             var yourGuess = event.key; 
//             guessedLetters.push(yourGuess);

//             currWord = "";
//             guessesRemaining= 12;
//             guessedLetters = [];


          
//             }
// // write all to the DOM

// $guessesRemaining.textContent = guessesRemaining; 
// $underscores.textContent = currWord.join('');
// $guessedLetters.textContent = guessedLetters;

// function letterGuess(letter) {
//     console.log(letter);

//             if(guessedLetters.indexOf(letter) === -1) {

//                 guessedLetters.push(letter);

//                         for (var i=0;i< chosenWord.length;i++){
//                             if (chosenWord[i] === letter) {
//                                 currWord [i]===chosenWord[i];
                            
//                             }
//                 }
// //     }
   
// }


//     }


// //grab DOM Elements
// var $underscores = document.getElementById('underscores');
// var $guessedLetters = document.getElementById('guessedLetters');
// var $guessesRemaining = document.getElementById('guessesRemaining');
// var $wins = document.getElementById('wins')