function rollDice(){
	var dice1 = Math.floor((Math.random() * 6) + 1);
	var dice2 = Math.floor((Math.random() * 6) + 1);
	var diceSum = dice1 + dice2;
	
	if (dice1 == dice2){
    doubles = true;
  }
	document.getElementById("output").innerHTML = ("Die 1: " + dice1);
	document.getElementById("output1").innerHTML = ("Die 2: " + dice2);
	document.getElementById("output2").innerHTML = ("Dice Total: " + diceSum); 
	
	return diceSum;
	
}

function diceGame(){
  var doubles;
  var computerPoints = 0;
  var computerScore = 0;
  var playerPoints = 0;
	var playerOneScore = 0;


	while (playerPoints < 50 && computerPoints < 50 && continueGame() != 2){
    doubles = false;
    playerOneScore = rollDice();
    computerScore = rollDice();
    if (doubles && (playerOneScore > computerScore)){
      playerPoints += playerOneScore * 2;
    } else if (doubles && (playerOneScore < computerScore)){
        computerPoints += computerScore * 2;
      } else if (playerOneScore > computerScore){
          playerPoints += playerOneScore;
        } else if (computerScore > playerOneScore){
            computerPoints += computerScore;     
          }
	document.getElementById("playerPoints").innerHTML = ("Your Points: " + playerPoints);
	document.getElementById("computerPoints").innerHTML = ("Computer Points: " + computerPoints);
	}
  
}



function continueGame(){
	var answer = parseInt(prompt("Press enter to roll dice or 2 to quit"));
		return answer;
}