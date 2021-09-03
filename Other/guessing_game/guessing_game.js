const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Player {
  constructor(name) {
    this.name = name;
  }
  guess() {}
}

class Game {
  constructor() {
    this.player1 = new Player("Player 1");
    this.player2 = new Player("Player 2");
    this.random = Math.floor(Math.random() * 100);
  }
}
