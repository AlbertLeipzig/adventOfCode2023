const random = () => Math.floor(Math.random() * 10);

class SingleBagOfCubes {
  constructor() {
    this.blue = this.generateCubesAmount();
    this.green = this.generateCubesAmount();
    this.red = this.generateCubesAmount();
  }
  generateCubesAmount() {
    return random();
  }
}

class SingleGame {
  constructor() {
    this.bags = this.generateBags(); 
  }

  generateBags() {
    const numberOfBags = random();
    let bags = [];
    for (let i = 0; i < numberOfBags; i++) {
      bags.push({ blue: random(), green: random(), red: random() });
    }
    return bags;
  }
}

const gameRecord = {
  game1: new SingleGame(1, 2, 3),
};

const numberOfPossibleGames = (cubesAmount) => {};

export const d2 = () => {
  return new SingleGame();
};
