let assert = require('assert');
let sol = require('../advents/6.js');
describe('6.js', () => {
  describe('addOccurrences', () => {
    it('should return [{a:1}] for input [], "a"', () => {
      let s = new sol();
      let input1 = [];
      let input2 = 'a';
      let expected = [{a:1}];
      let output = s.addOccurrences(input1, input2);
      assert.deepEqual(output, expected);
    });

    it('should return [{a:2}] for input [{a:1}], "a"', () => {
      let s = new sol();
      let input1 = [{a:1}];
      let input2 = 'a';
      let expected = [{a:2}];
      let output = s.addOccurrences(input1, input2);
      assert.deepEqual(output, expected);
    });
    it('should return [{a:1, b:1}] for input "[{a:1}]", "b"', () => {
      let s = new sol();
      let input1 = [{a:1}];
      let input2 = 'b';
      let expected = [{a:1, b:1}];
      let output = s.addOccurrences(input1, input2);
      assert.deepEqual(output, expected);
    });
  });

  describe('sumOccurrences', () => {
    it('should return [{a:1}] for input ["a"]', () => {
      let s = new sol();
      let input = ["a"];
      let expected = [{a:1}];
      let output = s.sumOccurrences(input);
      assert.deepEqual(output, expected);
    });
    it('should return [{a:1, b:1}] for input ["a", "b"]', () => {
      let s = new sol();
      let input = ["a", "b"];
      let expected = [{a:1, b:1}];
      let output = s.sumOccurrences(input);
      assert.deepEqual(output, expected);
    });
    it('should return [{a:1}, {b:1}] for input ["ab"]', () => {
      let s = new sol();
      let input = ["ab"];
      let expected = [{a:1}, {b:1}];
      let output = s.sumOccurrences(input);
      assert.deepEqual(output, expected);
    });
    it('should return [{a:2}, {b:2}] for input ["ab", "ab"]', () => {
      let s = new sol();
      let input = ["ab", "ab"];
      let expected = [{a:2}, {b:2}];
      let output = s.sumOccurrences(input);
      assert.deepEqual(output, expected);
    });
    it('should return [{a:2}, {b:1}] for input ["ab", "a"]', () => {
      let s = new sol();
      let input = ["ab", "a"];
      let expected = [{a:2}, {b:1}];
      let output = s.sumOccurrences(input);
      assert.deepEqual(output, expected);
    });
  });

  describe('getMostCommonCharAt', () => {
    it('should return "a" for input [{a:1}], 0', () => {
      let s = new sol();
      let input1 = [{a:1}];
      let input2 = 0;
      let expected = "a";
      let output = s.getMostCommonCharAt(input1, input2);
      assert.equal(output, expected);
    });
    it('should return "b" for input [{b:1}], 0', () => {
      let s = new sol();
      let input1 = [{b:1}];
      let input2 = 0;
      let expected = "b";
      let output = s.getMostCommonCharAt(input1, input2);
      assert.equal(output, expected);
    });
    it('should return "b" for input [{a:1, b:2}], 0', () => {
      let s = new sol();
      let input1 = [{a:1, b:2}];
      let input2 = 0;
      let expected = "b";
      let output = s.getMostCommonCharAt(input1, input2);
      assert.equal(output, expected);
    });
  });

  describe('getLeastCommonCharAt', () => {
    it('should return "a" for input [{a:1, b:2}], 0', () => {
      let s = new sol();
      let input1 = [{a:1, b:2}];
      let input2 = 0;
      let expected = "a";
      let output = s.getLeastCommonCharAt(input1, input2);
      assert.equal(output, expected);
    });
  });
  describe('getAverageString', () => {
    it('should return "a" for input ["a"]', () => {
      let s = new sol();
      let input = ["a"];
      let expected = "a";
      let output = s.getAverageString(input);
      assert.equal(output, expected);
    });
    it('should return "b" for input ["a", "b", "b"]', () => {
      let s = new sol();
      let input = ["a", "b", "b"];
      let expected = "b";
      let output = s.getAverageString(input);
      assert.equal(output, expected);
    });
    it('should return "easter" for example input', () => {
      let s = new sol();
      let input = ["eedadn",
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
      let expected = "easter";
      let output = s.getAverageString(input);
      assert.equal(output, expected);
    });
    it('should return "advent" for example input', () => {
      let s = new sol();
      let input = ["eedadn",
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
      let expected = "advent";
      let output = s.getAverageString(input, true);
      assert.equal(output, expected);

    })
  });
});