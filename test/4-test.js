var assert = require('assert');
var sol = require('../advents/4.js');

describe('4.js', () => {
  describe('isRealRoom()', () => {
    it('should return true on input "aaaaa-bbb-z-y-x-123[abxyz]"', () => {
    	var s = new sol();
    	var input = "aaaaa-bbb-z-y-x-123[abxyz]";
    	var expected = true;
    	var result = s.isRealRoom(input);
    	assert.equal(expected, result);
		});
    it('should return true on input "a-b-c-d-e-f-g-h-987[abcde]"', () => {
    	var s = new sol();
    	var input = "a-b-c-d-e-f-g-h-987[abcde]";
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

		it('should return {a:1, b:2} for input a-b', () => {
			var s = new sol();
			var input = "a-b";
			var expected = {a:1, b:1};

			var result = s.getTalliedCharacters(input);
			assert.deepEqual(expected, result);			

		})
	});

	describe('getSectorId()', () => {
		it('should return 234 on input abc-123-234[xyx]', () => {
			var s = new sol();
			var input = "abc-123-234[xyx]";
			var expected = "234";

			var result = s.getSectorId(input);
			assert.equal(expected, result);
		})
	});

	describe('cipherWordWith', () => {
		it('should return bcd for inputs abc, 1', () => {
			var s = new sol();
			var cipher = "abc";
			var shift = 1;
			var expected = "bcd";

			var result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);

		})

		it('should return ghi for inputs abc, 6', () => {
			var s = new sol();
			var cipher = "abc";
			var shift = 6;
			var expected = "ghi";

			var result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);

		})

		it('should return "very encrypted name" for inputs qzmt-zixmtkozy-ivhz, 343', () => {
			var s = new sol();
			var cipher = "qzmt-zixmtkozy-ivhz";
			var shift = 343;
			var expected = "very encrypted name";

			var result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);

		})

		it('should return gh i for inputs ab-c, 6', () => {
			var s = new sol();
			var cipher = "abc";
			var shift = 6;
			var expected = "ghi";

			var result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);
		})

		it('should return ghi for inputs abc, 32', () => {
			var s = new sol();
			var cipher = "abc";
			var shift = 32;
			var expected = "ghi";

			var result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);

		})
	})

	describe('decryptName()', () => {
		it('should return "very encrypted name" for input qzmt-zixmtkozy-ivhz-343[xyz]', () => {
			var s = new sol();
			var roomName = "qzmt-zixmtkozy-ivhz-343[xyz]";
			var expected = "very encrypted name";

			var result = s.decryptName(roomName);
			assert.equal(expected, result);
		})
	})
});
