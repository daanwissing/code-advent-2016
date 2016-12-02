var assert = require('assert');
var sol = require('../advents/1a.js');

describe('1a.js', () => {
  describe('solve()', () => {
    it('should return (1,1) when given R1 R1', () => {
      var s = new sol();
      var result = s.solve();
      assert.equal(-123, result[0]);
      assert.equal(-123, result[1])
    });
  })
});
