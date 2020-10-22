// VARIABLES AT THE TOP
let options = 
	["rock","paper","scissors"];
let computerchoice;
let userchoice;
let result, buttons;
let user_win = 0;
let user_loss= 0;
let computer_win = 0;
let computer_loss = 0;
let tie = 0;
let change = false;


// FUNCTIONS AFTER VARIABLES

function changeCharacters() {
	console.log("changed");
	if (change == false){
		change = true;
		let rock = document.getElementsByClassName("rock")[0];
		rock.style.backgroundImage = "url('images/rock2.png')";
		let paper = document.getElementsByClassName("paper")[0];
		paper.style.backgroundImage = "url('images/paper2.png')";
		let scissors = document.getElementsByClassName("scissors")[0];
		scissors.style.backgroundImage = "url('images/scissors2.png')";
	} else {
		change = false;
	let rock = document.getElementsByClassName("rock")[0];
	rock.style.backgroundImage = "url('images/rock.png')";
	let paper = document.getElementsByClassName("paper")[0];
	paper.style.backgroundImage = "url('images/paper.png')";
	let scissors = document.getElementsByClassName("scissors")[0];
	scissors.style.backgroundImage = "url('images/scissors.png')";

	}
}


function makeComputerChoice(){
	console.log("Computer was",computerchoice);
	return computerchoice = Math.floor( Math.random() * options.length );   
}
/* Dont need this part, just to see what computer is doing
function showComputerChoice(){
	document.write(options[computerchoice])
}
makeComputerChoice ();
showComputerChoice ();
===== END of testing======*/
function makeUserChoice(choice){
	makeComputerChoice();// makeComputerChoice when user made a choice
	userchoice = choice; 
	//  show the options in console
	console.log(
		options[userchoice],
		"vs",
		options[computerchoice]
	);
	//  show the options on the document

	if(change == true) {
		result.innerHTML ="<div class='user'><p id='information'>Your choice</p>"+
		"<img src='images/"+
			options[userchoice]+"2.png'></div>"+
		" vs "+ "<div class='user'><p id='information'>Computer's choice</p>"+"<img src='images/"+
			options[computerchoice]+"2.png'>";

	} else {
		result.innerHTML ="<div class='user'><p id='information'>Your choice</p>"+
		"<img src='images/"+
			options[userchoice]+".png'></div>"+
		" vs "+ "<div class='user'><p id='information'>Computer's choice</p>"+"<img src='images/"+
			options[computerchoice]+".png'>";

	}

	makeGameResult();
}
function makeGameResult(){
	let resultstring = "";
	if(userchoice == computerchoice) {
		console.log("It's a tie");
		tie++;
		document.getElementById("tie").innerHTML=tie;

		resultstring="<div>It's a tie</div>";

	}
	else if(
		(userchoice == 0 && computerchoice == 1) || 
        (userchoice == 1 && computerchoice == 2) || 
        (userchoice == 2 && computerchoice == 0) 
		) {
		console.log("You lost!");
		user_loss++;
		computer_win++;
		document.getElementById("user_loss").innerHTML=user_loss;
		document.getElementById("computer_win").innerHTML=computer_win;

		resultstring="<div>Oh no you lost!</div>";
	}
	else if( 
		(userchoice == 0 && computerchoice == 2) ||
        (userchoice == 1 && computerchoice == 0) ||
        (userchoice == 2 && computerchoice == 1)
        
		) {
		console.log("You won!");
		user_win++;
		computer_loss++;
		document.getElementById("user_win").innerHTML=user_win;
		document.getElementById("computer_loss").innerHTML=computer_loss;

		resultstring="<div>Wow you won!</div>";
	}

	result.innerHTML += 
		resultstring+
		"<div><button onclick='showOptions()'>Want to Play Again?</button></div>";
	showResults();
}
//Show and hide the 3 buttons. When showing results, show play agian button; Click play button, show three options.
function showOptions(){
	buttons.style.display = "flex";
	result.style.display = "none";
}
function showResults(){
	buttons.style.display = "none";
	result.style.display = "flex";
}


// model view controller MVC

// Everything is set up ready to go. Let the browser display your buttons. By default, showOptions() will display buttons and hide the result.
// Since we put our js on top, we need to add onload 
window.onload = function(){
	result = document.querySelector("#rps_result");
	buttons = document.querySelector("#rps_buttons");
    document.querySelector(".rock").addEventListener("click", function(){makeUserChoice(0);}, false)
    document.querySelector(".paper").addEventListener("click", function(){makeUserChoice(1);}, false)
    document.querySelector(".scissors").addEventListener("click", function(){makeUserChoice(2);}, false)
}