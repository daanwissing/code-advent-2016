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

  this.isAba = (possibleAba) => {
    return possibleAba[0] === possibleAba[2]
      && possibleAba[0] !== possibleAba[1];
  }

  this.getBabs = (IP) => {
    var hypernets = this.getHypernets(IP);
    var abas = [];
    hypernets.forEach((hypernet) => {
      for (var i = 0; i < hypernet.length - 2; ++i) {
        var possibleAba = hypernet.substr(i,3);
        if(this.isAba(possibleAba)) {
          abas.push(possibleAba);
        }
      }
    });
    return abas;
  }

  this.hasAba = (source, aba) => {
    var bab = this.reverseAba(aba);
    return source.indexOf(bab) >= 0;
  }

  this.reverseAba = (aba) => {
    return aba[1] + aba[0] + aba[1];
  }

  this.getNonHypernet = (IP) => {
    var indexOfStart = 0;
    var indexOfEnd = IP.indexOf("[");
    if (indexOfEnd < 0) return IP;
    return IP.substring(indexOfStart , indexOfEnd);
  };

  this.getNonHypernets = (IP) => {
    var subparts = IP.split("]");
    var nets = [];
    subparts.forEach((part) => {
      if (part !== "") {
        nets.push(this.getNonHypernet(part));
      }
    });
    return nets;
  }

  this.supportsSSL = (IP) => {
    var nonHypernets = this.getNonHypernets(IP);
    var babs = this.getBabs(IP);
    var result = false;
    babs.forEach((bab) => {
      nonHypernets.forEach((nonHypernet) => {
        if (this.hasAba(nonHypernet, bab)) {
          result = true;
        }
      });
    });
    return result;
  };

  this.countSSLAddresses = (input) => {
    var strings = input.split('\n');
    return strings.reduce((total, address) => {
      if (this.supportsSSL(address)) {
        return total + 1;
      };
      return total;
    }, 0);
  }

  this.run = () => {
    let input = fs.readFileSync('advents/input/7.txt', 'utf8');
    let result = this.solve(input);
    let numSSL = this.countSSLAddresses(input);
    console.log("7a: Number of TLS addresses: " + result);
    console.log("7b: Number of SSL addresses: " + numSSL);
  }

  this.solve = (input) => {
    var strings = input.split('\n');
    return this.countTLSAddresses(strings);
  }

};
