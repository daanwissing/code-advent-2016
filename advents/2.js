'use strict'
const fs = require('fs');
const firstKeypad = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"]
  ];

const secondKeypad = [
    ["X", "X", "1", "X", "X"],
    ["X", "2", "3", "4", "X"],
    ["5", "6", "7", "8", "9"],
    ["X", "A", "B", "C", "X"],
    ["X", "X", "D", "X", "X"],
  ];

module.exports = function () {

  this.keypadY;
  this.keypadX;

  this.upperBorder;
  this.rightBorder;

  this.numbers = ""
  this.keypad;

  this.solve = (directions, keypad) => {

    if (keypad === 'fake') {
      this.keypadY = 1;
      this.keypadX = 1;
      this.keypadMatrix = firstKeypad;
    } else {
      this.keypadY = 2;
      this.keypadX = 0;
      this.keypadMatrix = secondKeypad;
    }

    this.upperBorder = this.keypadMatrix.length - 1;
    this.rightBorder = this.keypadMatrix[0].length - 1;

    for(var i = 0; i < directions.length; ++i){
      var direction = directions[i];
      if (direction === 'D') this.goDown();
      if (direction === 'U') this.goUp();
      if (direction === 'L') this.goLeft();
      if (direction === 'R') this.goRight();
      if (direction === '\n') this.pushButton();
    }
    this.pushButton();
    return this.numbers;
  }

  this.run = () => {
    let input = fs.readFileSync('advents/input/2.txt', 'utf8');
    let result = this.solve(input, 'fake');
    // reset numbers
    this.numbers = "";
    let result2 = this.solve(input, 'real');

    console.log('2a: Result: ' + result);
    console.log('2b: Result: ' + result2);
  };

  this.goDown = () => {
    this.keypadY = Math.min(this.upperBorder, this.keypadY + 1)
    var currentButton = this.getCurrentButton();
    if (currentButton === "X" || currentButton === undefined) {
      this.goUp();
    }
  }

  this.goUp = () => {
    this.keypadY = Math.max(0, this.keypadY - 1);
    var currentButton = this.getCurrentButton();
    if (currentButton === "X" || currentButton === undefined) {
      this.goDown();
    }
  }

  this.goLeft = () => {
    this.keypadX = Math.max(0, this.keypadX - 1);
    var currentButton = this.getCurrentButton();
    if (currentButton === "X" || currentButton === undefined) {
      this.goRight();
    }
  }

  this.goRight = () => {
    this.keypadX = Math.min(this.rightBorder, this.keypadX + 1);
    var currentButton = this.getCurrentButton();
    if (currentButton === "X" || currentButton === undefined) {
      this.goLeft();
    }
  }

  this.pushButton = () => {
    this.numbers += this.getCurrentButton();
  }

  this.getCurrentButton = () => {
    return this.keypadMatrix[this.keypadY][this.keypadX];
  }
}