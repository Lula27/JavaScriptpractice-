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
changeScore();
init(); 

function init(){

	myScore = 7000;

}

function changeScore(){

	myScore = myScore + 7000; 
	console.log("Loretta's score:" + myScore); 

}

console.log(changeScore);