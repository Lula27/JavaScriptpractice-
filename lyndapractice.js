//console.log("Do you like green eggs and ham?"); 
/*alert("Do you like green eggs and ham?"); 

var message = prompt("Do you like green eggs and ham?");

var myNum = 7, scriptNum = "7";
var Nums = [3, 5, 9];
var multiply = myNum*Nums;
console.log(multiply);
console.log(myNum);
console.log(typeof scriptNum);
console.log(typeof myNum); */


//Exploring the power of functions! 

// Create the game score 
var myScore; 

// Setup and change the game score 
init(1000); 
changeScore(100);
changeScore(50);
changeScore(-250);
changeScore(125); 


// Function to initialize the game score 
function init(newScore){

	myScore = newScore;
	displayScore();
	console.log("Setting the score to " + newScore);
}

// Function to change the score of the game 
function changeScore(scoreDelta){   //Delta represents change in value

	myScore = myScore + scoreDelta; 
	displayScore();
	console.log("Loretta's score:" + myScore); 
}

function displayScore()
{
	console.log("Player score:" + myScore); //print "Player score:#" 
}

console.log(init); 
console.log("Loretta's score:" + myScore); //print "Loretta's score:#"