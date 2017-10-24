let assert = require('assert');
let sol = require('../advents/4.js');

describe('4.js', () => {
  describe('isRealRoom()', () => {
    it('should return true on input "aaaaa-bbb-z-y-x-123[abxyz]"', () => {
    	let s = new sol();
    	let input = "aaaaa-bbb-z-y-x-123[abxyz]";
    	let expected = true;
    	let result = s.isRealRoom(input);
    	assert.equal(expected, result);
		});
    it('should return true on input "a-b-c-d-e-f-g-h-987[abcde]"', () => {
    	let s = new sol();
    	let input = "a-b-c-d-e-f-g-h-987[abcde]";
    	let expected = true;
    	let result = s.isRealRoom(input);
    	assert.equal(expected, result);
		});
    it('should return false on input "aaaaa-bbb-z-y-x-123[abxyz]"', () => {
    	let s = new sol();
    	let input = "totally-real-room-200[decoy]";
    	let expected = false;
    	let result = s.isRealRoom(input);
    	assert.equal(expected, result);
		});
	});

	describe('getEncryptedName()', () => {
		it('should return abc on input "abc-123', () => {
			let s = new sol();
			let input = "abc-123";

			let expected = "abc";
			let result = s.getEncryptedName(input);
			assert.equal(expected, result);
		});

		it("should return abc-123 on input abc-123-234[xyx]", () => {
			let s = new sol();
			let input = "abc-123-234[xyx]";
			let expected = "abc-123";

			let result = s.getEncryptedName(input);
			assert.equal(expected, result);
		})
	});

	describe('getChecksum()', () => {
		it('should return xyz on input abc-123-234[xyz]', () => {
			let s = new sol();
			let input = "abc-123-234[xyz]";
			let expected = "xyz";

			let result = s.getChecksum(input);
			assert.equal(expected, result);			
		});
	});

	describe('getSortedTally', () => {
		it('should return "abc" for input {a:3, b:2, c:1}', () => {
			let s = new sol();
			let input = {a:3, b:2, c:1};
			let expected = "abc";

			let result = s.getSortedTally(input);
			assert.equal(expected, result);			
		})

		it('should return "abc" for input {a:1, b:1, c:1}', () => {
			let s = new sol();
			let input = {a:1, b:1, c:1};
			let expected = "abc";

			let result = s.getSortedTally(input);
			assert.equal(expected, result);			
		});

		it('should return "cba" for input {a:1, b:2, c:3}', () => {
			let s = new sol();
			let input = {a:1, b:2, c:3};
			let expected = "cba";

			let result = s.getSortedTally(input);
			assert.equal(expected, result);			
		})
	})

	describe('mergeSort()', () => {
		it('should return [1] on input [1]', () => {
			let s = new sol();
			let input = [{char:"a", val:1}];
			let expected = [{char:"a", val:1}];

			let result = s.mergeSort(input);

			assert.deepEqual(result, expected)

		})
	})

	describe('merge()', () => {
		it('should return [1] on input([1],[]', () => {
			let s = new sol();
			let input1 = [{char:"a", val:1}];
			let input2 = [];
			let expected = [{char:"a", val:1}];

			let result = s.merge(input1, input2);

			assert.deepEqual(result, expected)

		});
	});

	describe('merge()', () => {
		it('should return [4321] on input([1,4],[2,3]', () => {
			let s = new sol();
			let input1 = [{char:"d", val:4}, {char:"a", val:1}];
			let input2 = [{char:"c", val:3}, {char:"b", val:2}];
			let expected = [
				{char:"d", val:4},
				{char:"c", val:3},
				{char:"b", val:2},
				{char:"a", val:1}
			];

			let result = s.merge(input1, input2);

			assert.deepEqual(result, expected)

		});
	});

	describe('sortTallyArray', () => {
		it('should return [a,b,c] for input [a:1, b:1, c:1]', () =>{
			let s = new sol();
			let input = [{char:"a", val:1}
			, {char:"b", val:1}, {char: "c", val: 1}];
			let expected = "abc";

			let result = s.sortTallyArray(input);
			assert.equal(expected, result);			

		})
	})

	describe('getTalliedCharacters()', () => {
		it('should return {a:1, b:2, c:1} for input abcb', () => {
			let s = new sol();
			let input = "abcb";
			let expected = {a:1, b:2, c:1};

			let result = s.getTalliedCharacters(input);
			assert.deepEqual(expected, result);			
		});

		it('should return {a:1, b:2} for input a-b', () => {
			let s = new sol();
			let input = "a-b";
			let expected = {a:1, b:1};

			let result = s.getTalliedCharacters(input);
			assert.deepEqual(expected, result);			

		})
	});

	describe('getSectorId()', () => {
		it('should return 234 on input abc-123-234[xyx]', () => {
			let s = new sol();
			let input = "abc-123-234[xyx]";
			let expected = "234";

			let result = s.getSectorId(input);
			assert.equal(expected, result);
		})
	});

	describe('cipherWordWith', () => {
		it('should return bcd for inputs abc, 1', () => {
			let s = new sol();
			let cipher = "abc";
			let shift = 1;
			let expected = "bcd";

			let result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);

		})

		it('should return ghi for inputs abc, 6', () => {
			let s = new sol();
			let cipher = "abc";
			let shift = 6;
			let expected = "ghi";

			let result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);

		})

		it('should return "very encrypted name" for inputs qzmt-zixmtkozy-ivhz, 343', () => {
			let s = new sol();
			let cipher = "qzmt-zixmtkozy-ivhz";
			let shift = 343;
			let expected = "very encrypted name";

			let result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);

		})

		it('should return gh i for inputs ab-c, 6', () => {
			let s = new sol();
			let cipher = "abc";
			let shift = 6;
			let expected = "ghi";

			let result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);
		})

		it('should return ghi for inputs abc, 32', () => {
			let s = new sol();
			let cipher = "abc";
			let shift = 32;
			let expected = "ghi";

			let result = s.cipherWordWith(cipher, shift);
			assert.equal(expected, result);

		})
	})

	describe('decryptName()', () => {
		it('should return "very encrypted name" for input qzmt-zixmtkozy-ivhz-343[xyz]', () => {
			let s = new sol();
			let roomName = "qzmt-zixmtkozy-ivhz-343[xyz]";
			let expected = "very encrypted name";

			let result = s.decryptName(roomName);
			assert.equal(expected, result);
		})
	})
});
