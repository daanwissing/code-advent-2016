let assert = require('assert');
let sol = require('../advents/3.js');

describe('3.js', () => {
  describe('sol()', () => {
    it('should return 0 on input "5 10 25"', () => {
    	let s = new sol();
    	let expected = 0;
    	let input = "5 10 25";
    	let result = s.solve(input)

    	assert.equal(result, expected);
		});
		it('should return 1 on input "5 10 14"', () => {
    	let s = new sol();
    	let expected = 1;
    	let input = "5 10 14";
    	let result = s.solve(input)

    	assert.equal(result, expected);
		});
		it ('should return 1 on input "14 5 10"', () =>{
     	let s = new sol();
    	let expected = 1;
    	let input = "14 5 10";
    	let result = s.solve(input)
    	assert.equal(result, expected);
		});
		it('should return 0 on 25 5 10', () => {
			let s = new sol();
			let expected = 0;
			let input = "25 5 10";
			let result = s.solve(input);
			assert.equal(expected, result);
		});
		it('should return 2 on "5 5 5\n6 6 6"', () => {
			let s = new sol();
			let expected = 2;
			let input = "5 5 5\n6 6 6";
			let result = s.solve(input);
			assert.equal(expected, result);
		});
		it('should return 3 on "5 6 7\n5 6 7\n5 6 7"', () => {
			let s = new sol();
			let expected = 3;
			let input = "5 6 7\n5 6 7\n5 6 7";
			let result = s.solve(input, true);
			assert.equal(expected, result);
		});

		it('should return 2 on "  633  404  794\n  443  689  477"', () => {
			let s = new sol();
			let expected = 2;
			let input = "  633  404  794\n  443  689  477";
			let result = s.solve(input);
			assert.equal(expected, result);
		});
  });
});