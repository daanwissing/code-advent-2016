var assert = require('assert');
var sol = require('../advents/3a.js');

describe('3a.js', () => {
  describe('sol()', () => {
    it('should return 0 on input "5 10 25"', () => {
    	var s = new sol();
    	var expected = 0;
    	var input = "5 10 25";
    	var result = s.solve(input)

    	assert.equal(result, expected);
		});
		it('should return 1 on input "5 10 14"', () => {
    	var s = new sol();
    	var expected = 1;
    	var input = "5 10 14";
    	var result = s.solve(input)

    	assert.equal(result, expected);
		});
		it ('should return 1 on input "14 5 10"', () =>{
     	var s = new sol();
    	var expected = 1;
    	var input = "14 5 10";
    	var result = s.solve(input)
    	assert.equal(result, expected);
		});
		it('should return 0 on 25 5 10', () => {
			var s = new sol();
			var expected = 0;
			var input = "25 5 10";
			var result = s.solve(input);
			assert.equal(expected, result);
		});
		it('should return 2 on "5 5 5\n6 6 6"', () => {
			var s = new sol();
			var expected = 2;
			var input = "5 5 5\n6 6 6";
			var result = s.solve(input);
			assert.equal(expected, result);
		});
		it('should return 2 on "  633  404  794\n  443  689  477"', () => {
			var s = new sol();
			var expected = 2;
			var input = "  633  404  794\n  443  689  477";
			var result = s.solve(input);
			assert.equal(expected, result);

		})
  });
});