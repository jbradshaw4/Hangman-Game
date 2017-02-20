//variables
//word bank//
var words=["barbiegirl","heartbeat","eatit","mmmbop"];

//this holds the random word to be guessed
var selectedWord="";

// wrong guesses here//
var wrongLetter =[];

// correct guesses and blanks here//
var rightLetter=[];

//number of letters in each word
var numLetters =[];

//number of blanks in each word
var blanks = 0;


var wins= 0;
var losses=	0;
var guessLeft= 5;


//--------------------------------------------------
//Functions

function chooseLetter (){ 

	//this selects the random word from the wordbank	
	selectedWord = words[Math.floor(Math.random() * words.length)];
	numLetters = selectedWord.split("");
	blanks = numLetters.length;
	

	//I need these to reset

    wrongLetter =[];

    rightLetter=[];

    guessLeft= 5;



//this is to get the blanks to share space with rightLetters-
for(var i=0; i<blanks; i++){

	rightLetter.push("_");
	
}

//html js game functions

document.getElementById("guessWord").innerHTML = rightLetter.join ("  ");
document.getElementById("wrongLetter").innerHTML = wrongLetter.join(" ");
document.getElementById("numGuess").innerHTML = guessLeft;
document.getElementById("winCounter").innerHTML= wins;
document.getElementById("lossCounter").innerHTML= losses;


	
// Testing-------------------

	console.log(selectedWord);
	console.log(numLetters);
	console.log(blanks)
	console.log(rightLetter);
}


function checkLetters (letter){
	//check if letter picked is in random word	

	var isLetterInWord = false;
	
	console.log(blanks);

//this compares if guessed letter is correct or not
//this for loop is not working for some reason
	for(var i=0; i<blanks; i++){

		if(selectedWord[i]==letter){

			isLetterInWord = true;
			
		}
	}
	//check where in the word letter exists-populate word and adjust blanks
	if(isLetterInWord){

		for(var i=0;i<blanks;i++){

			if(selectedWord[i]==letter){

					if(rightLetter[i]=letter);
			}
		}	
	}

	//letter wasn't not correct
	else{
		wrongLetter.push(letter);
		guessLeft--
	}
		console.log (rightLetter);
}	

function roundComplete(){	

		console.log("Wins " + wins + " | losses " + losses + 
					" | guessLeft" + guessLeft);

			//Update the HTML to reflect the most recent count stats
document.getElementById("numGuess").innerHTML = guessLeft;
document.getElementById("guessWord").innerHTML = rightLetter.join(" ");
document.getElementById("wrongLetter").innerHTML = wrongLetter.join(" ");


	
//To see if winner

	if (numLetters.toString() == rightLetter.toString()) {
		wins++;

		alert("You Win!")



				//Update the win counter in the HTML
		document.getElementById("winCounter").innerHTML = wins;
	

		chooseLetter();		
		


}

// To see if lost
	else if (guessLeft == 0) {
		losses++;	

		alert("You Lost!");

//Update the HTML
		document.getElementById("lossCounter").innerHTML = losses;


		chooseLetter();
	
	}
}
 

//--------------------------------------------------
//Processes

chooseLetter();



//then this onkeyup should engage and verify if guesses are correct or not
//register key clicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

checkLetters(letterGuessed);
roundComplete();
	
//testing
console.log(letterGuessed);
	
}	



