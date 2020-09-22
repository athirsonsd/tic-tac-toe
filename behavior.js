const blankSpot = "-"

var buttons = ["b00", "b01", "b02", "b10", "b11", "b12", "b20", "b21", "b22"];

var symbols = ["X", "O"];
var currSymbolIndex = 0;

var gameStatus = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];


function startGame(){
	currSymbolIndex = 0;
	document.getElementById('message').innerHTML = "Jogo da Velha Online";

	for (var i = 0; i < 9; i++ ) {
		document.getElementById(buttons[i]).innerHTML = blankSpot;
		document.getElementById(buttons[i]).disabled = false;
	}

	document.getElementById('rb').style.visibility = "hidden";

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			gameStatus[i][j] = "-"
		}
	}
}

function butClicked(row, column) {
	//body...
	
	idCurrButton = buttons [3*row+column];
	document.getElementById(idCurrButton).innerHTML = symbols[currSymbolIndex];


	gameStatus[row][column] = symbols[currSymbolIndex];

	hasWinner();

	currSymbolIndex = currSymbolIndex == 0 ? 1 : 0;
	document.getElementById(idCurrButton).disabled = true; 

}

function hasWinner() {
	// body...
	for (var i = 0; i < 3; i++) {
		if (gameStatus[i][0] == gameStatus[i][1] && gameStatus[i][0] == gameStatus[i][2]) {
			if (gameStatus[i][0] != "-") {
				winner();
				return;
			}
		}

		if (gameStatus[0][i] == gameStatus[1][i] && gameStatus[0][i] == gameStatus[2][i]) {
			if (gameStatus[0][i] != "-") {
				winner();
				return;
			}
		}
	}

	if (gameStatus[0][0] == gameStatus[1][1] && gameStatus[0][0] == gameStatus[2][2]) {
			if (gameStatus[0][0] != "-") {
				winner();
				return;
			}
		}

	if (gameStatus[0][2] == gameStatus[1][1] && gameStatus[0][2] == gameStatus[2][2]) {
			if (gameStatus[0][2] != "-") {
				winner();
				return;
			}
	}

	checkDraw();
}

	function winner(){
		document.getElementById('message').innerHTML = symbols[currSymbolIndex] + " VENCEU";
		document.getElementById('rb').style.visibility = "visible";

		for (var i = 0; i < 9; i++ ) {
			document.getElementById(buttons[i]).disabled = true;
		}
	}

	function draw(){
		document.getElementById('message').innerHTML = "Deu velha";	
		document.getElementById('rb').style.visibility = "visible";

		for (var i = 0; i < 9; i++ ) {
			document.getElementById(buttons[i]).disabled = true;
		}
	}

	function checkDraw(){
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if(gameStatus[i][j] == "-") {
				return;	
			}
		}
	}

	draw();
}


