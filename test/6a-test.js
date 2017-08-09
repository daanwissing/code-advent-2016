var assert = require('assert');
var sol = require('../advents/6a.js');
describe('6a.js', () => {
	describe('convertToCharCount', () => {
		it('should return [ {a:1}, {b:1} ] for "ab"', () => {
			var s = new sol();
			var input = 'ab';
			var expected = [ {a:1}, {b:1} ];
			var output = s.convertToCharCount(input);
			assert.deepEqual(output, expected);
		});
		it('should return [ {b:1}, {a:1} ] for "ab"', () => {
			var s = new sol();
			var input = 'ba';
			var expected = [ {b:1}, {a:1} ];
			var output = s.convertToCharCount(input);
			assert.deepEqual(output, expected);
		});
		it('should return [ { v: 1 }, { r: 1 }, { o: 1 }, { o: 1 }, { o: 1 }, { m: 1 } ] for vroooom', () => {
			var s = new sol();
			var input = 'vrooom';
			var expected = [ { v: 1 }, { r: 1 }, { o: 1 }, { o: 1 }, { o: 1 }, { m: 1 } ];
			var output = s.convertToCharCount(input);
			assert.deepEqual(output, expected);
		});
	});
	describe('addOccurrences', () => {
		it('should return [{a:1}] for input [], "a"', () => {
			var s = new sol();
			var input1 = [];
			var input2 = 'a';
			var expected = [{a:1}];
			var output = s.addOccurrences(input1, input2);
			assert.deepEqual(output, expected);
		});

		it('should return [{a:2}] for input [{a:1}], "a"', () => {
			var s = new sol();
			var input1 = [{a:1}];
			var input2 = 'a';
			var expected = [{a:2}];
			var output = s.addOccurrences(input1, input2);
			assert.deepEqual(output, expected);
		});
		it('should return [{a:1, b:1}] for input "[{a:1}]", "b"', () => {
			var s = new sol();
			var input1 = [{a:1}];
			var input2 = 'b';
			var expected = [{a:1, b:1}];
			var output = s.addOccurrences(input1, input2);
			assert.deepEqual(output, expected);
		});
	});

	describe('sumOccurrences', () => {
		it('should return [{a:1}] for input ["a"]', () => {
			var s = new sol();
			var input = ["a"];
			var expected = [{a:1}];
			var output = s.sumOccurrences(input);
			assert.deepEqual(output, expected);
		});
		it('should return [{a:1, b:1}] for input ["a", "b"]', () => {
			var s = new sol();
			var input = ["a", "b"];
			var expected = [{a:1, b:1}];
			var output = s.sumOccurrences(input);
			assert.deepEqual(output, expected);
		});
		it('should return [{a:1}, {b:1}] for input ["ab"]', () => {
			var s = new sol();
			var input = ["ab"];
			var expected = [{a:1}, {b:1}];
			var output = s.sumOccurrences(input);
			assert.deepEqual(output, expected);
		});
		it('should return [{a:2}, {b:2}] for input ["ab", "ab"]', () => {
			var s = new sol();
			var input = ["ab", "ab"];
			var expected = [{a:2}, {b:2}];
			var output = s.sumOccurrences(input);
			assert.deepEqual(output, expected);
		});
		it('should return [{a:2}, {b:1}] for input ["ab", "a"]', () => {
			var s = new sol();
			var input = ["ab", "a"];
			var expected = [{a:2}, {b:1}];
			var output = s.sumOccurrences(input);
			assert.deepEqual(output, expected);
		});
	});

	describe('getMostCommonCharAt', () => {
		it('should return "a" for input [{a:1}], 0', () => {
			var s = new sol();
			var input1 = [{a:1}];
			var input2 = 0;
			var expected = "a";
			var output = s.getMostCommonCharAt(input1, input2);
			assert.equal(output, expected);
		});
		it('should return "b" for input [{b:1}], 0', () => {
			var s = new sol();
			var input1 = [{b:1}];
			var input2 = 0;
			var expected = "b";
			var output = s.getMostCommonCharAt(input1, input2);
			assert.equal(output, expected);
		});
		it('should return "b" for input [{a:1, b:2}], 0', () => {
			var s = new sol();
			var input1 = [{a:1, b:2}];
			var input2 = 0;
			var expected = "b";
			var output = s.getMostCommonCharAt(input1, input2);
			assert.equal(output, expected);
		});
	});

	describe('getAverageString', () => {
		it('should return "a" for input ["a"]', () => {
			var s = new sol();
			var input = ["a"];
			var expected = "a";
			var output = s.getAverageString(input);
			assert.equal(output, expected);
		});
		it('should return "b" for input ["a", "b", "b"]', () => {
			var s = new sol();
			var input = ["a", "b", "b"];
			var expected = "b";
			var output = s.getAverageString(input);
			assert.equal(output, expected);
		});
		it('should return "easter" for example input', () => {
			var s = new sol();
			var input = ["eedadn",
						"drvtee",
						"eandsr",
						"raavrd",
						"atevrs",
						"tsrnev",
						"sdttsa",
						"rasrtv",
						"nssdts",
						"ntnada",
						"svetve",
						"tesnvt",
						"vntsnd",
						"vrdear",
						"dvrsen",
						"enarar"
			];
			var expected = "easter";
			var output = s.getAverageString(input);
			assert.equal(output, expected);
		})
	});
});