'use strict'
const fs = require('fs');
module.exports = function () {

  this.keypadX = 1;
  this.keypadY = 1;

  this.keypadMatrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];

  this.numbers = ""

  this.solve = (directions) => {
    for(var i = 0; i < directions.length; ++i){
      var direction = directions[i];
      if (direction === 'D') this.keypadX = Math.min(2, this.keypadX + 1);
      if (direction === 'U') this.keypadX = Math.max(0, this.keypadX - 1);
      if (direction === 'L') this.keypadY = Math.max(0, this.keypadY - 1);
      if (direction === 'R') this.keypadY = Math.min(2, this.keypadY + 1);      
      if (direction === '\n') this.numbers += this.keypadMatrix[this.keypadX][this.keypadY];
    }
    this.numbers += this.keypadMatrix[this.keypadX][this.keypadY];
    return this.numbers;
  }

  this.run = () => {
    let input = fs.readFileSync('advents/input/2a.txt', 'utf8');
    let result = this.solve(input);

    console.log('2a: Result: ' + result);
  };
}