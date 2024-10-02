const rules = {
  rock: { scissors: 'player1', paper: 'player2', lizard: 'player1', spock: 'player2' },
  paper: { rock: 'player1', scissors: 'player2', lizard: 'player2', spock: 'player1' },
  scissors: { rock: 'player2', paper: 'player1', lizard: 'player1', spock: 'player2' },
  lizard: { rock: 'player2', paper: 'player1', scissors: 'player2', spock: 'player1' },
  spock: { rock: 'player1', paper: 'player2', scissors: 'player1', lizard: 'player2' }
};

function rockPaperScissors(player1, player2) {
  const validMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  
  if (!validMoves.includes(player1) || !validMoves.includes(player2)) {
    throw new Error("Invalid move");
  }

  if (player1 === player2) {
    return "draw";
  } else {
    return rules[player1][player2];
  }
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
};
