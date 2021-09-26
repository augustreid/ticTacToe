// const Game = require("./game.js");
// const Player = require("./player.js");

var game = new Game();
var squares = [game.a1, game.a2, game.a3, game.b1, game.b2, game.b3, game.c1, game.c2, game.c3]

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

var beesAndSuns = [boardA1, boardA2, boardA3, boardB1, boardB2, boardB3, boardC1, boardC2, boardC3]
//event listeners:
board.addEventListener("click", playTurn)





//functions
function render() {
  for (var i = 0; i < squares.length; i++) {
    if (squares[i] === 1) {
      beesAndSuns[i].innerText = "&#127803"
    } else if (squares[i] === 2) {
      beesAndSuns[i].innerText = "&#128029"
    };
  };
};
