class Game {
  constructor() {
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
    this.winner = 0;
    this.draw = false;
    this.totalTurns = 0;
  };

  playerOneTurn(square) {
    if (this[square] === 0) {
      this[square] = 1;
      this.totalTurns++;
    };
  };

  playerTwoTurn(square) {
    if (this[square] === 0) {
      this[square] = 2;
      this.totalTurns++;
    };
  };

  changeTurn() {
    if (this.whosTurn === 1) {
      this.whosTurn = 2;
    } else {
      this.whosTurn = 1;
    };
  };

  checkForWin() {
    this.checkVerticalWin();
    this.checkHorizontalWin();
    this.checkDiagonalWin();
    if (this.winner) {
      this.win = true;
    } else if (this.totalTurns === 9) {
      this.draw = true;
    };
    this.changeTurn();
  };

  checkVerticalWin() {
    if (((this.a1 === this.a2) && (this.a2 === this.a3) && (this.a3 === this.whosTurn)) ||
      ((this.b1 === this.b2) && (this.b2 === this.b3) && (this.b3 === this.whosTurn)) ||
      ((this.c1 === this.c2) && (this.c2 === this.c3) && (this.c3 === this.whosTurn))) {
      this.winner = this.whosTurn;
    };
  };

  checkHorizontalWin() {
    if (((this.a1 === this.b1) && (this.b1 === this.c1) && (this.c1 === this.whosTurn)) ||
      ((this.a2 === this.b2) && (this.b2 === this.c2) && (this.c2 === this.whosTurn)) ||
      ((this.a3 === this.b3) && (this.b3 === this.c3) && (this.c3 === this.whosTurn))) {
      this.winner = this.whosTurn;
    };
  };

  checkDiagonalWin() {
    if (((this.a1 === this.b2) && (this.b2 === this.c3) && (this.c3 === this.whosTurn)) ||
      ((this.a3 === this.b2) && (this.b2 === this.c1) && (this.c1 === this.whosTurn))) {
      this.winner = this.whosTurn;
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
    this.totalTurns = 0;
    this.winner = 0;
  };
};
