const fs = require('fs');
module.exports = function() {

  this.screen = [];
  this.disabledPixel = '.';
  this.enabledPixel = '#';

  this.initialize = (x,y) => {
    this.screen = [];
    for(var i = 0; i < y; ++i) {
      var row = [];
      for(var j = 0; j < x; ++j) {
        row.push(this.disabledPixel);
      }
      this.screen.push(row);
    }

  }
  this.setRect = (x,y) => {
    for(var i = 0; i < y; ++i) {
      for(var j = 0; j < x; ++j) {
        this.screen[i][j] = this.enabledPixel;
      }
    }
  };

  this.getScreen = () => {
    return this.screen;
  }

  this.rotateRow = (rowID, amount) => {

    var row = this.screen[rowID];
    this.screen[rowID] = this.rotate(row, amount);
  }

  this.rotateColumn = (colId, amount) => {
    var col = this.getColumn(colId);
    this.setColumn(colId, this.rotate(col, amount));
  }

  this.getColumn = (colId) => {
    return this.screen.reduce((column, row) => {
      column.push(row[colId]);
      return column;
    }, []);
  }

  this.setColumn = (colId, column) => {
    this.screen.map((row, index) => {
      row[colId] = column[index];
    })
  }

  this.rotate = (array, amount) => {
    amount = amount % array.length;
    var elements = array.splice(-amount);
    return elements.concat(array);
  }

  this.runCommand = (cmd) => {
    var args = cmd.split(' ');
    var func = args[0];
    if (func === 'rect') {
      var dimensions = args[1].split('x');
      var x = parseInt(dimensions[0]);
      var y = parseInt(dimensions[1]);
      this.setRect(x,y);
    } else if (func === 'rotate') {
      var id = parseInt(args[2].split('=')[1]);
      var amount = parseInt(args[4]);
      if (args[1] === 'column') {
        this.rotateColumn(id, amount);
      } else if (args[1] === 'row') {
        this.rotateRow(id, amount);
      }
    }
  }

  this.solve = (input) => {
    this.initialize(50,6);
    var commands = input.split('\n');
    for(var i = 0; i < commands.length; ++i) {
      var cmd = commands[i];
      this.runCommand(cmd);
    }

    return this.getNumberOfPixels();
  }

  this.getNumberOfPixels = () => {
    return this.screen.reduce((total, row) => {
      return row.reduce((rowTotal, element) => {
        if (element === this.enabledPixel) {
          return rowTotal + 1;
        }
        return rowTotal;
      }, 0) + total;
    }, 0);
  }

  this.run = () => {
    let input = fs.readFileSync('advents/input/8.txt', 'utf8');
    let result = this.solve(input);
    console.log("8a: number of pixels: " + result);
    this.screen.forEach((row) => {
      console.log(row.join(' '));
    })
  }

}