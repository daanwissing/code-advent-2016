const fs = require('fs');
module.exports = function() {

  this.screen = [];
  this.disabledPixel = '.';
  this.enabledPixel = '#';

  this.initialize = (x,y) => {
    this.screen = [];
    for(let i = 0; i < y; ++i) {
      let row = [];
      for(let j = 0; j < x; ++j) {
        row.push(this.disabledPixel);
      }
      this.screen.push(row);
    }

  }
  this.setRect = (x,y) => {
    for(let i = 0; i < y; ++i) {
      for(let j = 0; j < x; ++j) {
        this.screen[i][j] = this.enabledPixel;
      }
    }
  };

  this.getScreen = () => {
    return this.screen;
  }

  this.rotateRow = (rowId, amount) => {
    let row = this.getRow(rowId);
    this.setRow(rowId, this.rotate(row, amount));
  }

  this.rotateColumn = (colId, amount) => {
    let col = this.getColumn(colId);
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

  this.getRow = (rowId) => {
    return this.screen[rowId];
  }

  this.setRow = (rowId, row) => {
    this.screen[rowId] = row;
  }

  this.rotate = (array, amount) => {
    amount = amount % array.length;
    let elements = array.splice(-amount);
    return elements.concat(array);
  }

  this.runCommand = (cmd) => {
    let args = cmd.split(' ');
    let func = args[0];
    if (func === 'rect') {
      this.runRect(args[1]);
    } else if (func === 'rotate') {
      this.runRotate(args[1], args[2], args[4])
    }
  }

  this.runRotate = (dim, index, amountStr) => {
      let id = parseInt(index.split('=')[1]);
      let amount = parseInt(amountStr);
      if (dim === 'column') {
        this.rotateColumn(id, amountStr);
      } else if (dim === 'row') {
        this.rotateRow(id, amountStr);
      }
    }

  this.runRect = (args) => {
    let dimensions = args.split('x');
    let x = parseInt(dimensions[0]);
    let y = parseInt(dimensions[1]);
    this.setRect(x,y);
  }

  this.solve = (input) => {
    this.initialize(50,6);
    let commands = input.split('\n');
    for(let i = 0; i < commands.length; ++i) {
      let cmd = commands[i];
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
    console.log("8b: display:");
    this.screen.forEach((row) => {
      console.log(row.join(' '));
    })
  }

}