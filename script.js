window.onload = function(){

	initDices();
	initSnails();
	
};

function getDicesConfig(){
	
	var diceImgOrange = "http://img115.xooimage.com/files/7/6/9/button-1--56b2791.png";
	var diceImgYellow = "http://img115.xooimage.com/files/3/0/0/button-2--56b2794.png";
	var diceImgRed = "http://img114.xooimage.com/files/6/1/8/button-3--56b2797.png";
	var diceImgBlue = "http://img114.xooimage.com/files/8/7/0/button-4--56b2798.png";
	var diceImgGreen = "http://img111.xooimage.com/files/c/6/f/button-5--56b2799.png";
	var diceImgPurple = "http://img113.xooimage.com/files/8/6/e/button-56b279c.png";
	
	var dicesConfig = [
			[ 'orange', diceImgOrange ],
			[ 'yellow', diceImgYellow ],
			[ 'red', diceImgRed ],
			[ 'blue', diceImgBlue ],
			[ 'green', diceImgGreen ],
			[ 'purple', diceImgPurple ]
		]
		
	return dicesConfig;
	
}

function repositionSnails(){
	
	document.getElementById("snail-blue").style.left = '17px';
	document.getElementById("snail-orange").style.left = '17px';
	document.getElementById("snail-purple").style.left = '17px';
	document.getElementById("snail-yellow").style.left = '17px';
	document.getElementById("snail-green").style.left = '17px';
	document.getElementById("snail-red").style.left = '17px';
	
}

// on affiche les dés pour le départ
function initDices(){
	
	  document.getElementById("dice-one").src = "http://img111.xooimage.com/files/c/6/f/button-5--56b2799.png";
	  document.getElementById("dice-two").src = "http://img113.xooimage.com/files/8/6/e/button-56b279c.png";
	  
	  document.getElementById("dice-one").style.display = 'block';
	  document.getElementById("dice-two").style.display = 'block';
	  
}

// récupération de la position des escargots
function getSnailsPosition(){
	
	var SnailPositionOrange = document.getElementById("snail-orange").offsetLeft;
	var SnailPositionPurple = document.getElementById("snail-purple").offsetLeft;
	var SnailPositionYellow = document.getElementById("snail-yellow").offsetLeft;
	var SnailPositionRed = document.getElementById("snail-red").offsetLeft;
	var SnailPositionBlue = document.getElementById("snail-blue").offsetLeft;
	var SnailPositionGreen = document.getElementById("snail-green").offsetLeft;
	
	var positions = [
			[ 'orange', SnailPositionOrange ],
			[ 'yellow', SnailPositionYellow ],
			[ 'red', SnailPositionRed ],
			[ 'blue', SnailPositionBlue ],
			[ 'green', SnailPositionGreen ],
			[ 'purple', SnailPositionPurple ]
		]
		
	return positions;
	
}

// on affiche les escargots sur la ligne de départ
function initSnails(){
	
	document.getElementById("snail-blue").src = "http://img112.xooimage.com/files/8/f/3/snail-4--56b27ae.png";
	document.getElementById("snail-orange").src = "http://img112.xooimage.com/files/e/e/9/snail-1--56b27a3.png";
	document.getElementById("snail-purple").src = "http://img113.xooimage.com/files/2/2/0/snail-56b27b2.png";
	document.getElementById("snail-yellow").src = "http://img115.xooimage.com/files/0/b/9/snail-2--56b27aa.png";
	document.getElementById("snail-green").src = "http://img114.xooimage.com/files/2/2/5/snail-5--56b27b1.png";
	document.getElementById("snail-red").src = "http://img112.xooimage.com/files/b/8/2/snail-3--56b27ad.png";
	
	document.getElementById("snail-blue").style.display =  'block';
	document.getElementById("snail-orange").style.display =  'block';
	document.getElementById("snail-purple").style.display =  'block';
	document.getElementById("snail-yellow").style.display =  'block';
	document.getElementById("snail-green").style.display =  'block';
	document.getElementById("snail-red").style.display =  'block';
	
}

// Lancement des dés //
function roll() {
	
	// on récupère les images et les couleurs qui vont avec
    var dices = getDicesConfig();
	
	// -------- Lancer du dé N°1
	var launchOne = Math.floor(Math.random() * dices.length);
	//on récupère la couleur du nouveau dé
	var colorOne = dices[launchOne][0];
	// on affiche l'image du nouveau dé
	document.getElementById("dice-one").src = dices[launchOne][1];
	
	// -------- Lancer du dé N°2
	var launchTwo = Math.floor(Math.random() * dices.length);
	var colorTwo = dices[launchTwo][0];
	document.getElementById("dice-two").src = dices[launchTwo][1];
	
	// on va appeler la fonction pour faire avancer les escargots
	moveSnails(colorOne, colorTwo);

}

function moveSnails(firstColor, secondColor){
	
	var maxMovement = 800;
	
	// déplacement du premier lancer
	var snailsPositions = getSnailsPosition();
	for ( let i = 0; i < snailsPositions.length; i++ ){
		
		if ( snailsPositions[i][0] == firstColor ){
			
			var NewPositionLeft = snailsPositions[i][1] + 130;
			document.getElementById("snail-"+snailsPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft >= maxMovement ) { gameWin(snailsPositions[i][0]); exit; }
			
		}
	}
	
		// déplacement du deuxieme lancer
	var snailsPositions = getSnailsPosition();
	for ( let i = 0; i < snailsPositions.length; i++ ){
		
		if ( snailsPositions[i][0] == secondColor ){
			
			var NewPositionLeft = snailsPositions[i][1] + 120;
			document.getElementById("snail-"+snailsPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft >= maxMovement ) gameWin(snailsPositions[i][0]);
			
		}
	}

}

function gameWin(winner){
	
	alert('Escargot '+ winner + ' gagne !');
	resetGame();
	
}

function resetGame(){
	
	initDices();
	initSnails();
	repositionSnails();
	
}

