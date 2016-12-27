var assert = require('assert');
var sol = require('../advents/4a.js');

describe('4a.js', () => {
  describe('isRealRoom()', () => {
    it('should return true on input "aaaaa-bbb-z-y-x-123[abxyz]"', () => {
    	var s = new sol();
    	var input = "aaaaa-bbb-z-y-x-123[abxyz]";
    	var expected = true;
    	var result = s.isRealRoom(input);
    	assert.equal(expected, result);
		});
    it('should return false on input "aaaaa-bbb-z-y-x-123[abxyz]"', () => {
    	var s = new sol();
    	var input = "totally-real-room-200[decoy]";
    	var expected = false;
    	var result = s.isRealRoom(input);
    	assert.equal(expected, result);
		});
	});

	describe('getEncryptedName()', () => {
		it('should return abc on input "abc-123', () => {
			var s = new sol();
			var input = "abc-123";

			var expected = "abc";
			var result = s.getEncryptedName(input);
			assert.equal(expected, result);
		});

		it("should return abc-123 on input abc-123-234[xyx]", () => {
			var s = new sol();
			var input = "abc-123-234[xyx]";
			var expected = "abc-123";

			var result = s.getEncryptedName(input);
			assert.equal(expected, result);
		})
	});

	describe('getChecksum()', () => {
		it('should return xyz on input abc-123-234[xyz]', () => {
			var s = new sol();
			var input = "abc-123-234[xyz]";
			var expected = "xyz";

			var result = s.getChecksum(input);
			assert.equal(expected, result);			
		});
	});

	describe('getSortedTally', () => {
		it('should return "abc" for input {a:3, b:2, c:1}', () => {
			var s = new sol();
			var input = {a:3, b:2, c:1};
			var expected = "abc";

			var result = s.getSortedTally(input);
			assert.equal(expected, result);			
		})

		it('should return "abc" for input {a:1, b:1, c:1}', () => {
			var s = new sol();
			var input = {a:1, b:1, c:1};
			var expected = "abc";

			var result = s.getSortedTally(input);
			assert.equal(expected, result);			
		});

		it('should return "cba" for input {a:1, b:2, c:3}', () => {
			var s = new sol();
			var input = {a:1, b:2, c:3};
			var expected = "cba";

			var result = s.getSortedTally(input);
			assert.equal(expected, result);			
		})
	})

	describe('mergeSort()', () => {
		it('should return [1] on input [1]', () => {
			var s = new sol();
			var input = [{char:"a", val:1}];
			var expected = [{char:"a", val:1}];

			var result = s.mergeSort(input);

			assert.deepEqual(result, expected)

		})
	})

	describe('merge()', () => {
		it('should return [1] on input([1],[]', () => {
			var s = new sol();
			var input1 = [{char:"a", val:1}];
			var input2 = [];
			var expected = [{char:"a", val:1}];

			var result = s.merge(input1, input2);

			assert.deepEqual(result, expected)

		});
	});

	describe('merge()', () => {
		it('should return [4321] on input([1,4],[2,3]', () => {
			var s = new sol();
			var input1 = [{char:"d", val:4}, {char:"a", val:1}];
			var input2 = [{char:"c", val:3}, {char:"b", val:2}];
			var expected = [
				{char:"d", val:4},
				{char:"c", val:3},
				{char:"b", val:2},
				{char:"a", val:1}
			];

			var result = s.merge(input1, input2);

			assert.deepEqual(result, expected)

		});
	});

	describe('sortTallyArray', () => {
		it('should return [a,b,c] for input [a:1, b:1, c:1]', () =>{
			var s = new sol();
			var input = [{char:"a", val:1}
			, {char:"b", val:1}, {char: "c", val: 1}];
			var expected = "abc";

			var result = s.sortTallyArray(input);
			assert.equal(expected, result);			

		})
	})

	describe('getTalliedCharacters()', () => {
		it('should return {a:1, b:2, c:1} for input abcb', () => {
			var s = new sol();
			var input = "abcb";
			var expected = {a:1, b:2, c:1};

			var result = s.getTalliedCharacters(input);
			assert.deepEqual(expected, result);			
		});
	});

	describe('getSectorId()', () => {
		it('should return 234 on input abc-123-234[xyx]', () => {
			var s = new sol();
			var input = "abc-123-234[xyx]";
			var expected = "234";

			var result = s.getSectorId(input);
			assert.equal(expected, result);
		})
	})
});
