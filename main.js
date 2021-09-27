var board = document.querySelector("#board")
var boardA1 = document.querySelector("#a1")
var boardA2 = document.querySelector("#a2")
var boardA3 = document.querySelector("#a3")
var boardB1 = document.querySelector("#b1")
var boardB2 = document.querySelector("#b2")
var boardB3 = document.querySelector("#b3")
var boardC1 = document.querySelector("#c1")
var boardC2 = document.querySelector("#c2")
var boardC3 = document.querySelector("#c3")
var gameTitle = document.querySelector("#gameTitle")
var player1Wins = document.querySelector("#player1");
var player2Wins = document.querySelector("#player2");

var game = new Game();
var squares = []
var beesAndSuns = [boardA1, boardA2, boardA3, boardB1, boardB2, boardB3, boardC1, boardC2, boardC3]
var player1 = new Player("one", "sunflower");
var player2 = new Player("two", "bee");

//event listeners:
board.addEventListener("click", makeAMove)
window.addEventListener("load", trackWins)

//functions
function makeAMove() {
  playTurn(event);
  game.checkForWin();
  render();
  declareWinner();
  setTimeout(function() {reset()}, 4000);
};

function playTurn(event) {
  var clickedSquare = event.target.id;
  if (game.whosTurn === 1) {
    game.playerOneTurn(clickedSquare);
  } else if (game.whosTurn === 2) {
    game.playerTwoTurn(clickedSquare);
  };
  squares = [game.a1, game.a2, game.a3, game.b1, game.b2, game.b3, game.c1, game.c2, game.c3];
};

function render() {
  event.preventDefault();
  for (var i = 0; i < squares.length; i++) {
    if (squares[i] === 1) {
      beesAndSuns[i].innerHTML = "&#127803";
    } else if (squares[i] === 2) {
      beesAndSuns[i].innerHTML = "&#128029";
    };
  };
  nameTurn();
};

function nameTurn() {
  if (game.whosTurn === 1) {
    gameTitle.innerHTML = "Player One's Turn &#127803";
  } else {
    gameTitle.innerHTML = "Player Two's Turn &#128029";
  };
};

function declareWinner() {
  if (game.win && game.whosTurn === 2) {
    gameTitle.innerHTML = "Player One wins! &#127803";
    player1.updateWins();
    player1.saveWinstoStorage();
    player1Wins.innerText = `Wins: ${player1.wins}`;
  } else if (game.win && game.whosTurn === 1) {
    gameTitle.innerHTML = "Player two wins! &#128029";
    player2.updateWins();
    player2.saveWinstoStorage();
    player2Wins.innerText = `Wins: ${player2.wins}`;
  } else if (game.draw) {
    gameTitle.innerText = "It's a draw!";
  };
};

function reset() {
  if (game.win || game.draw) {
    game.resetBoard();
    for (var i = 0; i < squares.length; i++) {
      beesAndSuns[i].innerHTML = "";
    };
    nameTurn();
  };
};

function trackWins() {
  var oneWins = player1.retrieveWinsFromStorage();
  var twoWins = player2.retrieveWinsFromStorage();
  player1.wins = oneWins;
  player2.wins = twoWins;
  if (oneWins) {
    player1Wins.innerText = `Wins: ${oneWins}`;
  } else {
    player1Wins.innerText = "Wins: 0";
  };
  if (twoWins) {
    player2Wins.innerText = `Wins: ${twoWins}`;
  } else {
    player2Wins.innerText = "Wins: 0";
  };
};
