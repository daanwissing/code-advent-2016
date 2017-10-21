'use strict'
const fs = require('fs');
module.exports = function () {

  this.visited = [[0]];

  this.intersection = 0;
  this.foundIntersection = false;

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

  this.hasVisited = (x,y) => {
    if (this.visited[x] === null || this.visited[x] === undefined) {
      return false;
    }
  };

  this.visitedBefore = (x,y) => {
    if (this.visited[x] !== null && this.visited[x] !== undefined) {
      if (this.visited[x].indexOf(y) >= 0) {
        return true;
      }
    }
    return false;
  };

  this.addVisitedInLine = (amount) => {
    for (var i = 1; i <= amount; ++i) {
      switch(this.directionIndex) {

        case 0: this.addVisited(this.X + i, this.Y); break;
        case 1: this.addVisited(this.X, this.Y + i); break;
        case 2: this.addVisited(this.X - i, this.Y); break;
        case 3: this.addVisited(this.X, this.Y - i); break;
      }
    }
  };

  this.addVisited = (x,y) => {
    if (this.visitedBefore(x,y) && !this.foundIntersection) {
      this.intersection = Math.abs(x) + Math.abs(y);
      this.foundIntersection = true;
    }

    if (this.visited[x] === null || this.visited[x] === undefined) {
      this.visited[x] = [];
    }
    this.visited[x].push(y);
  };

  this.move = (amount) => {
    this.addVisitedInLine(amount);
    switch(this.directionIndex) {
      case 0: // North
        this.X += amount;
        break;
      case 1: // East
        this.Y += amount;
        break;
      case 2: // South
        this.X -= amount;
        break;
      case 3: // West
        this.Y -= amount;
        break;
    }
  };

  this.solve = (directionsString) => {
    // Split into an array
    let directions = directionsString.split(', ');

    this.directionIndex = 0;

    for(let i = 0; i < directions.length; ++i) {
      let instruction = this.getInstruction(directions[i]);
      this.changeDirection(instruction.direction);
      this.move(parseInt(instruction.distance));
    }
    return Math.abs(this.X) + Math.abs(this.Y);
  }

  this.getInstruction = (instructionString) => {
    return {
      direction: instructionString[0],
      distance : instructionString.substr(1)
    };
  }

  this.run = () => {
    let input = fs.readFileSync('advents/input/1.txt', 'utf8');
    let result = this.solve(input);
    console.log("1a: Distance on map: " + result);

    console.log("1b: True distance:" + this.intersection)
  }
};


