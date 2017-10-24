const fs = require('fs');

module.exports = function() {

  this.addOccurrences = (stringTally, inputString) => {
    for(let i = 0; i < inputString.length; ++i) {
      if (stringTally[i] === undefined || stringTally[i] === null) {
        stringTally[i] = {};
      }
      let positionTally = stringTally[i];
      let inputChar = inputString[i];
      if (positionTally[inputChar] !== undefined) {
        positionTally[inputChar]++;
      } else {
        positionTally[inputChar] = 1;
      }
    }
    return stringTally;
  };

  this.sumOccurrences = (strings) => {
    return strings.reduce((count, string) => {
      return this.addOccurrences(count, string);
    }, []);
  };

  this.getLeastCommonCharAt = (stringTally, index) => {
    let positionTally = stringTally[index];
    let min = Number.MAX_VALUE;
    let foundChar = '_';
    for(let char in positionTally) {
      if (positionTally[char] < min) {
        min = positionTally[char];
        foundChar = char;
      }
    }
    return foundChar;
  };

  this.getMostCommonCharAt = (charCount, index) => {
    let positionTally = charCount[index];
    let max = 0;
    let foundChar = '_';
    for(let char in positionTally) {
      if (positionTally[char] > max) {
        max = positionTally[char];
        foundChar = char;
      }
    }
    return foundChar;
  };

  this.getAverageString = (strings, least) => {
    let totalTally = this.sumOccurrences(strings);
    let commonChars = totalTally.map((count, index) => {
      if (least) {
        return this.getLeastCommonCharAt(totalTally, index);
      } else {
        return this.getMostCommonCharAt(totalTally, index);
      }
    });

    return commonChars.join("");
  };

  this.run = () => {
    let input = fs.readFileSync('advents/input/6.txt', 'utf8');
    let result = this.solve(input, false);
    console.log("6a: Most common: " + result)
    result = this.solve(input, true);
    console.log("6b: Least common: " + result)
  }

  this.solve = (input, least) => {
    let strings = input.split('\n');
    return this.getAverageString(strings, least);
  }

};