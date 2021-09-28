class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.rounds = 0;
    this.wins = 0;
  };

  updateRounds() {
    this.rounds++;
  };

  updateWins() {
    if (this.rounds >= 3) {
      this.wins++
      this.saveWinstoStorage();
    } else {
      var retrievedWins = this.retrieveWinsFromStorage();
      this.wins = retrievedWins || 0;
    };
  };

  saveWinstoStorage() {
    localStorage.setItem(`player ${this.id}`, this.wins);
  };

  retrieveWinsFromStorage() {
    var storedWins = localStorage.getItem(`player ${this.id}`);
    return storedWins;
  };
};
