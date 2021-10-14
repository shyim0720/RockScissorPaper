var card = null;
	while (1) {
		var r = prompt("Please enter ROCK, PAPER, or SCISSORS").toUpperCase();
		if (r == 'ROCK' || r == 'PAPER' || r == 'SCISSORS') {
			card = r;
			break;
		}
	}
	
	var computerCard = null;
	var rN = Math.random();
	if (rN < 0.35) {
		computerCard = 'PAPER';
	} else if (rN >= 0.68) {
		computerCard = 'ROCK';
	} else {
		computerCard = 'SCISSORS';
	}


console.log("User is " + card + " and Computer is " + computerCard + ":");

console.log(determination(card, computerCard));


function determination(r1, r2) {
	if (r1 == r2) {
		return "It's a tie";
	} else if (r1 == 'ROCK' && r2 == 'PAPER') {
		return "Computer Wins";
	} else if (r1 == 'ROCK' && r2 == 'SCISSORS') {
		return "User Wins";
	} else if (r1 == 'PAPER' && r2 == 'ROCK') {
		return "User Wins";
	} else if (r1 == 'PAPER' && r2 == 'SCISSORS') {
		return "Computer Wins";
	} else if (r1 == 'SCISSORS' && r2 == 'ROCK') {
		return "Computer Wins";
	} else if (r1 == 'SCISSORS' && r2 == 'PAPER') {
		return "User Wins";
	}
}