var assert = require('assert');
var sol = require('../advents/7.js');

describe('7.js', () => {
  describe('isAbba', () => {
    it('should return true on "abba"', () => {
      let s = new sol();
      let input = "abba";
      let expected = true;
      let output = s.isAbba(input);
      assert.equal(expected, output);
    });
    it('should return false on "bbbb"', () => {
      let s = new sol();
      let input = "bbbb";
    let expected = false;
      let output = s.isAbba(input);
      assert.equal(expected, output);
    });
    it('should return false on "abca"', () => {
      let s = new sol();
      let input = "abca";
      let expected = false;
      let output = s.isAbba(input);
      assert.equal(expected, output);
    });
    it('should return true on "oxxo"', () => {
      let s = new sol();
      let input = "oxxo";
      let expected = true;
      let output = s.isAbba(input);
      assert.equal(expected, output);
    });
  });
  describe('containsAbba', () => {
    it('should return true on "abba"', () => {
      let s = new sol();
      let input = "abba";
      let expected = true;
      let output = s.containsAbba(input);
      assert.equal(expected, output);
    });
    it('should return true on "abbax"', () => {
      let s = new sol();
      let input = "abbax";
      let expected = true;
      let output = s.containsAbba(input);
      assert.equal(expected, output);
    });
    it('should return true on "xabba"', () => {
      let s = new sol();
      let input = "xabba";
      let expected = true;
      let output = s.containsAbba(input);
      assert.equal(expected, output);
    });
    it('should return true on "xabbal"', () => {
      let s = new sol();
      let input = "xabbal";
      let expected = true;
      let output = s.containsAbba(input);
      assert.equal(expected, output);
    });
    it('should return false on "xabax"', () => {
      let s = new sol();
      let input = "xabax";
      let expected = false;
      let output = s.containsAbba(input);
      assert.equal(expected, output);
    });
  })
  describe('getHypernet', () => {
    it('should return abc on "[abc]"', () => {
      let s = new sol();
      let input = "[abc]";
      let expected = "abc";
      let output = s.getHypernet(input);
      assert.equal(expected, output);
    });
    it('should return abc on "xxx[abc]eee"', () => {
      let s = new sol();
      let input = "xxx[abc]eee";
      let expected = "abc";
      let output = s.getHypernet(input);
      assert.equal(expected, output);
    });
  });
  describe('supportsTLS', () => {
    it('should return true on "abba"', () => {
      let s = new sol();
      let input = "abba";
      let expected = true;
      let output = s.supportsTLS(input);
      assert.equal(expected, output);
    });
    it('should return false on "abbc"', () => {
      let s = new sol();
      let input = "abbc";
      let expected = false;
      let output = s.supportsTLS(input);
      assert.equal(expected, output);
    });
    it('should return false on "[abba]"', () => {
      let s = new sol();
      let input = "[abba]";
      let expected = false;
      let output = s.supportsTLS(input);
      assert.equal(expected, output);
    });
    it('should return false on "abcd[bddb]xyyx"', () => {
      let s = new sol();
      let input = "abcd[bddb]xyyx";
      let expected = false;
      let output = s.supportsTLS(input);
      assert.equal(expected, output);
    });
    it('should return false on "aaaa[qwer]tyui"', () => {
      let s = new sol();
      let input = "aaaa[qwer]tyui";
      let expected = false;
      let output = s.supportsTLS(input);
      assert.equal(expected, output);
    });
    it('should return true on "ioxxoj[asdfgh]zxcvbn"', () => {
      let s = new sol();
      let input = "ioxxoj[asdfgh]zxcvbn";
      let expected = true;
      let output = s.supportsTLS(input);
      assert.equal(expected, output);
    });
    it('should return true on "abba[mnop]qrst"', () => {
      let s = new sol();
      let input = "abba[mnop]qrst";
      let expected = true;
      let output = s.supportsTLS(input);
      assert.equal(expected, output);
    });
    it('should return false on "abba[xyz]sssf[oxxo]ssf"', () => {
      let s = new sol();
      let input = "abba[xyz]sssf[oxxo]ssf";
      let expected = false;
      let output = s.supportsTLS(input);
      assert.equal(expected, output);

    })
  });
  describe('countTLSAddresses', () => {
    it('should return 1 on ["abba"]', () => {
      let s = new sol();
      let input = ["abba"];
      let expected = 1;
      let output = s.countTLSAddresses(input);
      assert.equal(expected, output);
    });
    it('should return 2 on ["abba", "oxxo"]', () => {
      let s = new sol();
      let input = ["abba", "oxxo"];
      let expected = 2;
      let output = s.countTLSAddresses(input);
      assert.equal(expected, output);
    });
    it('should return 2 on ["abba", "abbc", "oxxo"]', () => {
      let s = new sol();
      let input = ["abba", "abbc", "oxxo"];
      let expected = 2;
      let output = s.countTLSAddresses(input);
      assert.equal(expected, output);
    });
  });
  describe('getHypernets', () => {
    it('should return ["a", "b"] for "a[a]x[b]"', () => {
      let s = new sol();
      let input = "a[a]x[b]";
      let expected = ["a", "b"];
      let output = s.getHypernets(input);
      assert.deepEqual(expected, output);
    });
  });
});