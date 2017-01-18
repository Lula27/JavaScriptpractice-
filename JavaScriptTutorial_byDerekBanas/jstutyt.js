// linked to html 

var yourName = prompt("What is your name?");
 
if(yourName != null) {
	document.getElementById("sayHello").innerHTML = "Hello" + yourName;	
} else {
	alert("Please enter a name next time"); 
}

document.write("5 + 4 = " + 5 + 4 "<br/>"); 