// Show a word 
// and if the person types the word correctly they win 
// step 0: show the word to the user
// step 1: ask them to a type word
// step 2: display if the letter is correct or not 
// step 3: if it's correct tell them they are correct


//Step 1: creating variables 
var words = ["asparagus", "potato", "tomato", "carrot"];
var ranNum = Math.floor(Math.random()*words.length); //attributes numbers to array of letters (0, 1, 2, 3)
var word = words[ranNum]; /*new variable linking word array variable with number*/
var textTyped = "";
var wins = 0; 
console.log(wins);

//Step 2: Java Script stuff
document.querySelector('#textToShow').innerHTML = word; //document.querySelector returns first element w/in document
document.querySelector('#wins').innerHTML = wins; 

document.onkeyup = function(event){
	var key = event.key; 

	if (textTyped == word){
		alert('did it');
		wins++; 
		document.querySelector('#wins').innerHTML = wins; 
		ranNum = Math.floor(Math.random()*words.length); //0, 1, 2, 3
		word = words[ranNum];
		textTyped = ''; 
		document.querySelector('#lettersTyped').innerHTML = textTyped; 
	}
}






