var assert = require('assert');
var sol = require('../advents/2a.js');

describe('2a.js', () => {
  describe('sol()', () => {
    it('should return 5 for no input', () => {
      var s = new sol();
      var expected = 5;
      var result = s.solve('');
      assert.equal(expected, result);
    })

    it('should return 8 for input "D"', () => {
      var s = new sol();
      var expected = 8;
      var result = s.solve('D');
      assert.equal(expected, result);      
    })
    it('should return 2 for input "U"', () => {
      var s = new sol();
      var expected = 2;
      var result = s.solve('U');
      assert.equal(expected, result);      
    })
    it('should return 4 for input "L"', () => {
      var s = new sol();
      var expected = 4;
      var result = s.solve('L');
      assert.equal(expected, result);      
    })
    it('should return 2 for input "R"', () => {
      var s = new sol();
      var expected = 6;
      var result = s.solve('R');
      assert.equal(expected, result);      
    })
   it('should return 1 on UL', () => {
      var s = new sol();
      var expected = 1;
      var result = s.solve('UL');
      assert.equal(expected, result);            
    })
    it('should return 2 on UU', () => {
      var s = new sol();
      var expected = 2;
      var result = s.solve('UU');
      assert.equal(expected, result);            
    })
    it('should return 8 on DD', () => {
      var s = new sol();
      var expected = 8;
      var result = s.solve('DD');
      assert.equal(expected, result);            
    })
    it('should return 4 on LL', () => {
      var s = new sol();
      var expected = 4;
      var result = s.solve('LL');
      assert.equal(expected, result);            
    })
    it('should return 6 on RR', () => {
      var s = new sol();
      var expected = 6;
      var result = s.solve('RR');
      assert.equal(expected, result);            
    })
    it('should return 6 on RR', () => {
      var s = new sol();
      var expected = 6;
      var result = s.solve('RR');
      assert.equal(expected, result);            
    })
    it('should return 41 on L\nU', () => {
      var s = new sol();
      var expected = 41;
      var result = s.solve('L\nU');
      assert.equal(expected, result);            
    })


  })
})
