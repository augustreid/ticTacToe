class Game {
  constructor() {
    this.player1
    this.player2
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
    if (this[square] === 0) {
      this[square] = 1;
      // this.whosTurn = 2;
  };
};

  playerTwoTurn(square) {
    if (this[square] === 0) {
      this[square] = 2;
      // this.whosTurn = 1;
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
    if (
      ((this.a1 === this.a2) && (this.a2 === this.a3) && (this.a3 === this.whosTurn)) ||
      ((this.b1 === this.b2) && (this.b2 === this.b3) && (this.b3 === this.whosTurn)) ||
      ((this.c1 === this.c2) && (this.c2 === this.c3) && (this.c3 === this.whosTurn)) ||
      ((this.a1 === this.b1) && (this.b1 === this.c1) && (this.c1 === this.whosTurn)) ||
      ((this.a2 === this.b2) && (this.b2 === this.c2) && (this.c2 === this.whosTurn)) ||
      ((this.a3 === this.b3) && (this.b3 === this.c3) && (this.c3 === this.whosTurn)) ||
      ((this.a1 === this.b2) && (this.b2 === this.c3) && (this.c3 === this.whosTurn)) ||
      ((this.a3 === this.b2) && (this.b2 === this.c1) && (this.c1 === this.whosTurn))) {
      // (this.a1 + this.a2 + this.a3 === 3) ||
      // (this.a1 + this.a2 + this.a3 === 6) ||
      // (this.b1 + this.b2 + this.b3 === 3) ||
      // (this.b1 + this.b2 + this.b3 === 6) ||
      // (this.c1 + this.c2 + this.c3 === 3) ||
      // (this.c1 + this.c2 + this.c3 === 6) ||
      // (this.a1 + this.b1 + this.c1 === 3) ||
      // (this.a1 + this.b1 + this.c1 === 6) ||
      // (this.a2 + this.b2 + this.c2 === 3) ||
      // (this.a2 + this.b2 + this.c2 === 6) ||
      // (this.a3 + this.b3 + this.c3 === 3) ||
      // (this.a3 + this.b3 + this.c3 === 6) ||
      // (this.a1 + this.b2 + this.c3 === 3) ||
      // (this.a1 + this.b2 + this.c3 === 6) ||
      // (this.a3 + this.b2 + this.c1 === 3) ||
      // (this.a3 + this.b2 + this.c1 === 6)) {
      this.win = true;
  } else if
    (this.a1 && this.a2 && this.a3 && this.b1 &&
    this.b2 && this.b3 && this.c1 && this.c2 &&
    this.c3) {
      this.draw = true;
    };
    this.changeTurn();
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
