let assert = require('assert');
let sol = require('../advents/5.js');

describe('5.js', () => {
  describe('md5', () => {
    it('should return 098f6bcd4621d373cade4e832627b4f6 on "test"', ()=> {
      let s = new sol();
      let input = "test";
      let output = s.md5(input);
      let expected = "098f6bcd4621d373cade4e832627b4f6";
      assert.equal(expected, output);
    });
  });
  describe('isInterestingHash', () => {
    it('should return true on 00000a', () => {
      let s = new sol();
      let input = "00000a";
      let output = s.isInterestingHash(input);
      let expected = true;
      assert.equal(expected, output);
    });
    it('should return false on 10000a', () => {
      let s = new sol();
      let input = "10000a";
      let output = s.isInterestingHash(input);
      let expected = false;
      assert.equal(expected, output);
    });
  });
  xdescribe('getPassword', () => {
    it('should return "1" for door "abc" and length 1', () => {
      let s = new sol();
      let input = "abc";
      let output = s.getPassword(input, 1);
      let expected = "1";
      assert.equal(expected, output);
    }).timeout(50000);
  })
});