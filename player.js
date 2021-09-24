class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }
  updateWins() {
    this.wins += 1;
  }
  saveWinstoStorage() {
    localStorage.setItem(`player ${this.id}`, this.wins);
  }
  retrieveWinsFromStorage() {
    localStorage.getItem(`player ${this.id}`);
  }
}
