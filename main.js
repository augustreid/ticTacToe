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

var game = new Game();
var squares = []
var beesAndSuns = [boardA1, boardA2, boardA3, boardB1, boardB2, boardB3, boardC1, boardC2, boardC3]


//event listeners:
board.addEventListener("click", makeAMove)





//functions
function makeAMove() {
  playTurn(event);
  game.checkForWin();
  render();
  declareWinner();
}


function playTurn(event) {
  var clickedSquare = event.target.id;
  if (game.whosTurn === 1) {
    game.playerOneTurn(clickedSquare);
  } else if (game.whosTurn === 2) {
    game.playerTwoTurn(clickedSquare);
  };
  squares = [game.a1, game.a2, game.a3, game.b1, game.b2, game.b3, game.c1, game.c2, game.c3]
};

function declareWinner() {
  if (game.win && game.whosTurn === 2) {
    gameTitle.innerHTML = "Player One wins! &#127803"
  } else if (game.win && game.whosTurn === 1) {
    gameTitle.innerHTML = "Player two wins! &#128029"
  } else if (game.draw) {
    gameTitle.innerText = "It's a draw!"
  }
}

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
    gameTitle.innerHTML = "Player One's Turn &#127803"
  } else {
    gameTitle.innerHTML = "Player Two's Turn &#128029"
  }
}
