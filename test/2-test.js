var assert = require('assert');
var sol = require('../advents/2.js');

describe('2.js', () => {
  describe('sol() fake', () => {
    it('should return 5 for no input', () => {
      var s = new sol();
      var expected = 5;
      var result = s.solve('', 'fake');
      assert.equal(expected, result);
    })

    it('should return 8 for input "D"', () => {
      var s = new sol();
      var expected = 8;
      var result = s.solve('D', 'fake');
      assert.equal(expected, result);
    })
    it('should return 2 for input "U"', () => {
      var s = new sol();
      var expected = 2;
      var result = s.solve('U', 'fake');
      assert.equal(expected, result);
    })
    it('should return 4 for input "L"', () => {
      var s = new sol();
      var expected = 4;
      var result = s.solve('L', 'fake');
      assert.equal(expected, result);
    })
    it('should return 2 for input "R"', () => {
      var s = new sol();
      var expected = 6;
      var result = s.solve('R', 'fake');
      assert.equal(expected, result);
    })
   it('should return 1 on UL', () => {
      var s = new sol();
      var expected = 1;
      var result = s.solve('UL', 'fake');
      assert.equal(expected, result);
    })
    it('should return 2 on UU', () => {
      var s = new sol();
      var expected = 2;
      var result = s.solve('UU', 'fake');
      assert.equal(expected, result);
    })
    it('should return 8 on DD', () => {
      var s = new sol();
      var expected = 8;
      var result = s.solve('DD', 'fake');
      assert.equal(expected, result);
    })
    it('should return 4 on LL', () => {
      var s = new sol();
      var expected = 4;
      var result = s.solve('LL', 'fake');
      assert.equal(expected, result);
    })
    it('should return 6 on RR', () => {
      var s = new sol();
      var expected = 6;
      var result = s.solve('RR', 'fake');
      assert.equal(expected, result);
    })
    it('should return 6 on RR', () => {
      var s = new sol();
      var expected = 6;
      var result = s.solve('RR', 'fake');
      assert.equal(expected, result);
    })
    it('should return 41 on L\\nU', () => {
      var s = new sol();
      var expected = "41";
      var result = s.solve('L\nU', 'fake');
      assert.equal(expected, result);
    })
  })
  describe('sol() real', () => {
    it('should return 5 on no input', () => {
      var s = new sol();
      var expected = 5;
      var result = s.solve('', 'real');
      assert.equal(expected, result);
    })
    it('should return 7 on RR', () => {
      var s = new sol();
      var expected = 7;
      var result = s.solve('RR', 'real');
      assert.equal(expected, result);
    })
    it('should return 5 on U', () => {
      var s = new sol();
      var expected = 5;
      var result = s.solve('U', 'real');
      assert.equal(expected, result);
    })
    it('should return 9 on RRRRR', () => {
      var s = new sol();
      var expected = 9;
      var result = s.solve('RRRRR', 'real');
      assert.equal(expected, result);
    })
    it('should return 5DB3 on ULLnRRDDD\\nLURDL\\nUUUUD', () => {
      var s = new sol();
      var expected = "5DB3";
      var result = s.solve('ULL\nRRDDD\nLURDL\nUUUUD', 'real');
      assert.equal(expected, result);
    })
  });
})
