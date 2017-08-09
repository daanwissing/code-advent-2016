'use strict';
const fs = require('fs');

module.exports = function() {
  this.isAbba = (possibleAbba) => {
    if (possibleAbba.length !== 4) return false;
    return (possibleAbba[0] === possibleAbba[3])
      && (possibleAbba[1] === possibleAbba[2])
      && (possibleAbba[0] !== possibleAbba[1]);
  };

  this.containsAbba = (hasPossibleAbba) => {
    for (var i = 0; i < hasPossibleAbba.length - 3; ++i) {
      var possibleAbba = hasPossibleAbba.substr(i,4);
      if(this.isAbba(possibleAbba)) {
        return true;
      }
    }
    return false;
  };

  this.getHypernet = (IP) => {
    var indexOfStart = IP.indexOf("[");
    var indexOfEnd = IP.indexOf("]");
    if (indexOfStart < 0 || indexOfEnd < 0) return '';
    return IP.substring(indexOfStart + 1, indexOfEnd);
  };

  this.getHypernets = (IP) => {
    var subparts = IP.split("]");
    var nets = [];
    subparts.forEach((part) => {
      if (part !== "") {
        nets.push(this.getHypernet(part + "]"));
      }
    });
    return nets;
  }

  this.supportsTLS = (IP) => {
    let hypernets = this.getHypernets(IP);

    return this.containsAbba(IP) &&
      !hypernets.some(this.containsAbba);
  };

  this.countTLSAddresses = (addresses) => {
    return addresses.reduce((total, address) => {
      if (this.supportsTLS(address)) {
        return total + 1;
      };
      return total;
    }, 0);
  }

  this.run = () => {
    let input = fs.readFileSync('advents/input/7.txt', 'utf8');
    let result = this.solve(input);
    console.log("Number of TLS addresses: " + result)
  }

  this.solve = (input) => {
    var strings = input.split('\n');
    return this.countTLSAddresses(strings);
  }

};
