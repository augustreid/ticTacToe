class Game {
  constructor() {
    this.player1
    this.player2
    this.a1 = "empty";
    this.a2 = "empty";
    this.a3 = "empty";
    this.b1 = "empty";
    this.b2 = "empty";
    this.b3 = "empty";
    this.c1 = "empty";
    this.c2 = "empty";
    this.c3 = "empty";
    this.whosTurn = 1;
    this.win = false;
    this.draw = false;
  };

  playerOneTurn(square) {
    if (this[square] === "empty") {
      this[square] = 1;
      this.whosTurn = 2;
  };
};

  playerTwoTurn(square) {
    if (this[square] === "empty") {
      this[square] = 2;
      this.whosTurn = 1;
    }
  };

  checkForWin() {
    if (
      (this.a1 + this.a2 + this.a3 === 3) ||
      (this.a1 + this.a2 + this.a3 === 6) ||
      (this.b1 + this.b2 + this.b3 === 3) ||
      (this.b1 + this.b2 + this.b3 === 6) ||
      (this.c1 + this.c2 + this.c3 === 3) ||
      (this.c1 + this.c2 + this.c3 === 6) ||
      (this.a1 + this.b1 + this.c1 === 3) ||
      (this.a1 + this.b1 + this.c1 === 6) ||
      (this.a2 + this.b2 + this.c2 === 3) ||
      (this.a2 + this.b2 + this.c2 === 6) ||
      (this.a3 + this.b3 + this.c3 === 3) ||
      (this.a3 + this.b3 + this.c3 === 6) ||
      (this.a1 + this.b2 + this.c3 === 3) ||
      (this.a1 + this.b2 + this.c3 === 6) ||
      (this.a3 + this.b2 + this.c1 === 3) ||
      (this.a3 + this.b2 + this.c1 === 6)) {
      this.win = true;
  } else if
    (this.a1 !== "empty" && this.a2 !== "empty" &&
    this.a3 !== "empty" && this.b1 !== "empty" &&
    this.b2 !== "empty" && this.b3 !== "empty" &&
    this.c1 !== "empty" && this.c2 !== "empty" &&
    this.c3 !== "empty") {
      this.draw = true;
    };
  };

  resetBoard() {
    this.a1 = "empty";
    this.a2 = "empty";
    this.a3 = "empty";
    this.b1 = "empty";
    this.b2 = "empty";
    this.b3 = "empty";
    this.c1 = "empty";
    this.c2 = "empty";
    this.c3 = "empty";
    this.win = false;
    this.draw = false;
  };
};
