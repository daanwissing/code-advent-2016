const fs = require('fs');

module.exports = function() {
  this.convertToCharCount = (string) => {
    var output = [];
    for (var i = string.length - 1; i >= 0; i--) {
      let char = string[i];
      let block = {};
      block[char] = 1;
      output[i] = block;
    }
    return output;
  };

  this.addOccurrences = (charCount, inputString) => {
    for(var i = 0; i < inputString.length; ++i) {
      if (charCount[i] === undefined || charCount[i] === null) {
        charCount[i] = {};
      }
      let count = charCount[i];
      let inputChar = inputString[i];
      if (count[inputChar] !== undefined) {
        count[inputChar]++;
      } else {
        count[inputChar] = 1;
      }
    }
    return charCount;
  };

  this.sumOccurrences = (strings) => {
    return strings.reduce((count, string) => {
      return this.addOccurrences(count, string);
    }, []);
  };

  this.getLeastCommonCharAt = (charCount, index) => {
    var count = charCount[index];
    var min = Number.MAX_VALUE;
    var foundChar = '_';
    for(var char in count) {
      if (count[char] < min) {
        min = count[char];
        foundChar = char;
      }
    }
    return foundChar;
  };

  this.getMostCommonCharAt = (charCount, index) => {
    var count = charCount[index];
    var max = 0;
    var foundChar = '_';
    for(var char in count) {
      if (count[char] > max) {
        max = count[char];
        foundChar = char;
      }
    }
    return foundChar;
  };

  this.getAverageString = (strings, least) => {
    var totalCounts = this.sumOccurrences(strings);
    var commonChars = totalCounts.map((count, index) => {
      if (least) {
        return this.getLeastCommonCharAt(totalCounts, index);
      } else {
        return this.getMostCommonCharAt(totalCounts, index);
      }
    });

    return commonChars.join("");
  };

  this.run = () => {
    let input = fs.readFileSync('advents/input/6.txt', 'utf8');
    let result = this.solve(input, false);
    console.log("Most common: " + result)
    result = this.solve(input, true);
    console.log("Least common: " + result)
  }

  this.solve = (input, least) => {
    var strings = input.split('\n');
    return this.getAverageString(strings, least);
  }

};