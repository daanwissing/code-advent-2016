'use strict'
const crypto = require('crypto');
const fs = require('fs');

module.exports = function() {
  this.run = () => {
    let input = fs.readFileSync('advents/input/5a.txt', 'utf8');
    let result = this.solve(input);

    console.log('5a: Result: ' + result);
  }

  this.solve = (input) => {
    return this.getPassword(input, 8);
  }

  this.getPassword = (id, length) => {
    var i = 0;
    var password = "";
    while (password.length < length) {
      var hashInput = id + i.toString();
      var hash = this.md5(hashInput);
      if (this.isInterestingHash(hash)){
        password += hash[5];
      }
      ++i;
    }
    return password;
  }

  this.isInterestingHash = (hash) => {
    return hash.substr(0,5) === "00000";
  }

  this.md5 = (input) => {
    let md5sum = crypto.createHash('md5');
    return md5sum.update(input).digest('hex');
  }
}