'use strict'
const fs = require('fs');
module.exports = function () {

  this.visited = [];

  this.directionIndex = 0; 
  this.X = 0;
  this.Y = 0;

  this.changeDirection = (dir) =>  {
    if (dir === 'R') {
      this.directionIndex = (this.directionIndex + 1) % 4;
    } else {
      this.directionIndex = (this.directionIndex + 3) % 4;
    }
  };

  this.move = (amount) => {
    switch(this.directionIndex) {
      // case 0: // North
      //   for (var i = 0; i <= amount; ++i) {
      //     this.X++
      //     if (this.visited.indexOf([this.X, this.Y]) > -1) {
      //       console.log("Found! " + this.X + " - " + this.Y);
      //     }
      //     this.visited.push([this.X, this.Y]);
      //   }
      //   break;
      // case 1: // East
      //   for (var i = 0; i <= amount; ++i) {
      //     this.Y++;
      //     if (this.visited.indexOf([this.X, this.Y]) > -1) {
      //       console.log("Found! " + this.X + " - " + this.Y);
      //     }
      //     this.visited.push([this.X, this.Y]);
      //   }
      //   break;
      // case 2: // South
      //   for (var i = 0; i <= amount; ++i) {
      //     this.X--;
      //     if (this.visited.indexOf([this.X, this.Y]) > -1) {
      //       console.log("Found! " + this.X + " - " + this.Y);
      //     }
      //     this.visited.push([this.X, this.Y]);
      //   }
      //   break;
      // case 3: // West
      //   for (var i = 0; i <= amount; ++i) {
      //     this.Y--;
      //     if (this.visited.indexOf([this.X, this.Y]) > -1) {
      //       console.log("Found! " + this.X + " - " + this.Y);
      //     }
      //     this.visited.push([this.X, this.Y]);
      //   }
      //   break;
      case 0:
        this.X += amount;
        break;
      case 1:
        this.Y += amount;
        break;
      case 2:
        this.X -= amount;
        break;
      case 3:
        this.Y -= amount;
        break;
    }
  };

  this.solve = () => {
    // Read input
    let input = fs.readFileSync('advents/input/1a.txt', 'utf8');

    // Split into an array
    let directions = input.split(', ');

    this.directionIndex = 0;

    for(var i = 0; i < directions.length; ++i) {
      var instruction = directions[i];
      this.changeDirection(instruction[0]);
      this.move(parseInt(instruction.substr(1)));
    }
    return [this.X, this.Y];
  }
};


