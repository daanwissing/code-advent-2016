let assert = require('assert');
let sol = require('../advents/2.js');

describe('2.js', () => {
  describe('sol() fake', () => {
    it('should return 5 for no input', () => {
      let s = new sol();
      let expected = 5;
      let result = s.solve('', 'fake');
      assert.equal(expected, result);
    })

    it('should return 8 for input "D"', () => {
      let s = new sol();
      let expected = 8;
      let result = s.solve('D', 'fake');
      assert.equal(expected, result);
    })
    it('should return 2 for input "U"', () => {
      let s = new sol();
      let expected = 2;
      let result = s.solve('U', 'fake');
      assert.equal(expected, result);
    })
    it('should return 4 for input "L"', () => {
      let s = new sol();
      let expected = 4;
      let result = s.solve('L', 'fake');
      assert.equal(expected, result);
    })
    it('should return 2 for input "R"', () => {
      let s = new sol();
      let expected = 6;
      let result = s.solve('R', 'fake');
      assert.equal(expected, result);
    })
   it('should return 1 on UL', () => {
      let s = new sol();
      let expected = 1;
      let result = s.solve('UL', 'fake');
      assert.equal(expected, result);
    })
    it('should return 2 on UU', () => {
      let s = new sol();
      let expected = 2;
      let result = s.solve('UU', 'fake');
      assert.equal(expected, result);
    })
    it('should return 8 on DD', () => {
      let s = new sol();
      let expected = 8;
      let result = s.solve('DD', 'fake');
      assert.equal(expected, result);
    })
    it('should return 4 on LL', () => {
      let s = new sol();
      let expected = 4;
      let result = s.solve('LL', 'fake');
      assert.equal(expected, result);
    })
    it('should return 6 on RR', () => {
      let s = new sol();
      let expected = 6;
      let result = s.solve('RR', 'fake');
      assert.equal(expected, result);
    })
    it('should return 6 on RR', () => {
      let s = new sol();
      let expected = 6;
      let result = s.solve('RR', 'fake');
      assert.equal(expected, result);
    })
    it('should return 41 on L\\nU', () => {
      let s = new sol();
      let expected = "41";
      let result = s.solve('L\nU', 'fake');
      assert.equal(expected, result);
    })
  })
  describe('sol() real', () => {
    it('should return 5 on no input', () => {
      let s = new sol();
      let expected = 5;
      let result = s.solve('', 'real');
      assert.equal(expected, result);
    })
    it('should return 7 on RR', () => {
      let s = new sol();
      let expected = 7;
      let result = s.solve('RR', 'real');
      assert.equal(expected, result);
    })
    it('should return 5 on U', () => {
      let s = new sol();
      let expected = 5;
      let result = s.solve('U', 'real');
      assert.equal(expected, result);
    })
    it('should return 9 on RRRRR', () => {
      let s = new sol();
      let expected = 9;
      let result = s.solve('RRRRR', 'real');
      assert.equal(expected, result);
    })
    it('should return 5DB3 on ULLnRRDDD\\nLURDL\\nUUUUD', () => {
      let s = new sol();
      let expected = "5DB3";
      let result = s.solve('ULL\nRRDDD\nLURDL\nUUUUD', 'real');
      assert.equal(expected, result);
    })
  });
})
