// var Player = require("./player.js");

class Game {
  constructor() {
    this.player1 = new Player("one", "sunflower");
    this.player2 = new Player("two", "bee");
    this.a1 = 0;
    this.a2 = 0;
    this.a3 = 0;
    this.b1 = 0;
    this.b2 = 0;
    this.b3 = 0;
    this.c1 = 0;
    this.c2 = 0;
    this.c3 = 0;
    this.whosTurn = 1;
    this.win = false;
    this.draw = false;
  };

  playerOneTurn(square) {
    if (!this[square]) {
      this[square] = 1;
      this.whosTurn = 2;
      console.log(square);
  };
};

  playerTwoTurn(square) {
    if (!this[square]) {
      this[square] = 2;
      this.whosTurn = 1;
      console.log(square);
    }
  };

  checkForWin() {
    if (
    (this.a1 === this.a2) && (this.a2 === this.a3) ||
    (this.b1 === this.b2) && (this.b2 === this.b3) ||
    (this.c1 === this.c2) && (this.c2 === this.c3) ||
    (this.a1 === this.b1) && (this.b1 === this.c1) ||
    (this.a2 === this.b2) && (this.b2 === this.c2) ||
    (this.a3 === this.b3) && (this.b3 === this.c3) ||
    (this.a1 === this.b2) && (this.b2 === this.c3) ||
    (this.a3 === this.b2) && (this.b2 === this.c1))
    {
      this.win = true;
  } else if (this.a1 && this.a2 && this.a3 && this.b1 && this.b2 && this.b3
    && this.c1 && this.c2 && this.c3) {
      this.draw = true;
    };
  };

  resetBoard() {
    this.a1 = 0;
    this.a2 = 0;
    this.a3 = 0;
    this.b1 = 0;
    this.b2 = 0;
    this.b3 = 0;
    this.c1 = 0;
    this.c2 = 0;
    this.c3 = 0;
    this.win = false;
    this.draw = false;
  };
};

// var trial = new Game();
//
// trial.playerOneTurn("a1");
//
// trial.playerTwoTurn("b2");
//
// trial.playerOneTurn("c2");
//
// trial.playerTwoTurn("b3");
//
// trial.playerOneTurn("c3");
//
// trial.playerTwoTurn("b1");
//
// trial.playerOneTurn("a2");
//
// trial.playerTwoTurn("c1");
//
// trial.playerOneTurn("a3");
//
// trial.checkForWin();
// console.log(trial);

//Two instances of Player;
//9 squares with three states;
//who's turn is it, 1 or 2.

// If Win conditions:
//1a, 1b, 1c
//2a, 2b 2c
//3a 3b 3c
//1a 2a 3a
//1b 2b 3b
//1c 2c 3c
//1a 2b 3c
//3a 2b 1c
//check for win method
// use === to check for three squares the same.
//have an isWon property
//have a isDraw property
//change square value methods for each player. At the end, the who's turn is it property changes.
