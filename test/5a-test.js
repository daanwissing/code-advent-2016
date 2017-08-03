var assert = require('assert');
var sol = require('../advents/5a.js');

describe('5a.js', () => {
  describe('md5', () => {
    it('should return 098f6bcd4621d373cade4e832627b4f6 on "test"', ()=> {
      var s = new sol();
      var input = "test";
      var output = s.md5(input);
      var expected = "098f6bcd4621d373cade4e832627b4f6";
      assert.equal(expected, output);
    });
  });
  describe('isInterestingHash', () => {
    it('should return true on 00000a', () => {
      var s = new sol();
      var input = "00000a";
      var output = s.isInterestingHash(input);
      var expected = true;
      assert.equal(expected, output);
    });
    it('should return false on 10000a', () => {
      var s = new sol();
      var input = "10000a";
      var output = s.isInterestingHash(input);
      var expected = false;
      assert.equal(expected, output);
    });
  });
  describe('getPassword', () => {
    it('should return "1" for door "abc" and length 1', () => {
      var s = new sol();
      var input = "abc";
      var output = s.getPassword(input, 1);
      var expected = "1";
      assert.equal(expected, output);
    }).timeout(50000);
  })
});