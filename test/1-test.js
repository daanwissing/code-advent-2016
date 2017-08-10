var assert = require('assert');
var sol = require('../advents/1a.js');

describe('1a.js', () => {
  describe('solve()', () => {
    it('should return 2 when given R1 R1', () => {
      var s = new sol();
      var result = s.solve('R1, R1');
      console.log(s.intersection)
      assert.equal(result, 2);
    });

    it('should return 1 when given R1 R1 R1', () => {
      var s = new sol();
      var result = s.solve('R1, R1, R1');
      assert.equal(result, 1);
    });

    it('should return 1 when given L1 L1 L1', () => {
      var s = new sol();
      var result = s.solve('L1, L1, L1');
      assert.equal(result, 1);
    });

    it ('should find an intersection when given R1, R1, R1, R1', () => {
      var s = new sol();
      var result = s.solve('R1, R1, R1, R1');
      assert.equal(s.intersection, 0);

    })
  })

  describe('visitedBefore()', () => {
    it('should return false when given (1,1)', () => {
      var s = new sol();
      s.visited = [[0]];
      var result = s.visitedBefore(1,1);
      assert.equal(false, result);
    });
    it('should return true when given (0,0)', () => {
      var s = new sol();
      s.visited = [[0]];
      var result = s.visitedBefore(0,0);
      assert.equal(true, result);
    });
    it('should return false when given (0,1)', () => {
      var s = new sol();
      s.visited = [[0]];
      var result = s.visitedBefore(0,1);
      assert.equal(false, result);
    });
    it('should return true when given (0,1)', () => {
      var s = new sol();
      s.visited = [[1]];
      var result = s.visitedBefore(0,1);
      assert.equal(true, result);
    });
    it('should return true when given (-1,0)', () => {
      var s = new sol();
      s.visited[-1] = [0];
      var result = s.visitedBefore(-1,0);
      assert.equal(true, result);
    });
  });
  describe('addVisited()', () => {
    it('should add (1,1) to visited', () => {
      var s = new sol();
      s.addVisited(1,1);
      assert.deepEqual([[0], [1]], s.visited);
    });
    it('should add (0,1) to visited', () => {
      var s = new sol();
      s.addVisited(0,1);
      assert.deepEqual([[0, 1]], s.visited);
    });
    it('should add (-1,1) to visited', () => {
      var s = new sol();
      s.addVisited(-1,1);
      var expected = [[0]];
      expected[-1] = [1];
      assert.deepEqual(expected, s.visited);
    });


  });
});
