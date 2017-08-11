var assert = require('assert');
var sol = require('../advents/8.js');

describe('8.js', () => {
  describe('getScreen', () => {
    it('should be empty by default', () => {
      var s = new sol();
      s.initialize(10,10);
      var pixels = s.getScreen();

      pixels.forEach((row) => {
        row.forEach((pixel)=> {
          assert.equal(s.disabledPixel, pixel);
        })
      })
    })
  })
  describe('setRect', () => {
    it('should set 1x1', () => {
      var s = new sol();
      s.initialize(10,10);
      var input1 = 1;
      var input2 = 1;
      s.setRect(input1,input2);
      var pixels = s.getScreen();

      assert.equal(pixels[0][0], s.enabledPixel);
    });
    it('should set 3x1', () => {
      var s = new sol();
      s.initialize(10,10);
      var input1 = 3;
      var input2 = 1;
      s.setRect(input1,input2);
      var pixels = s.getScreen();

      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[0][1], s.enabledPixel);
      assert.equal(pixels[0][2], s.enabledPixel);
    });
    it('should set 1x3', () => {
      var s = new sol();
      s.initialize(10,10);
      var inputX = 1;
      var inputY = 3;
      s.setRect(inputX,inputY);
      var pixels = s.getScreen();

      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[1][0], s.enabledPixel);
      assert.equal(pixels[2][0], s.enabledPixel);
    });

    it('should set 1x3 and 3x1', () => {
      var s = new sol();
      s.initialize(10,10);
      var inputX = 1;
      var inputY = 3;
      s.setRect(inputX,inputY);
      s.setRect(inputY, inputX);
      var pixels = s.getScreen();

      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[1][0], s.enabledPixel);
      assert.equal(pixels[2][0], s.enabledPixel);
      assert.equal(pixels[0][1], s.enabledPixel);
      assert.equal(pixels[0][2], s.enabledPixel);
      assert.equal(pixels[1][1], s.disabledPixel);
      assert.equal(pixels[1][2], s.disabledPixel);
    });

  });
  describe('rotateRow', () => {
    it('should rotate row 1 by 1', () => {
      var s = new sol();
      s.initialize(10,10);
      s.setRect(1,3);
      var inputRow = 1;
      var inputBy = 1;
      s.rotateRow(inputRow,inputBy);
      var pixels = s.getScreen();

      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[1][0], s.disabledPixel);
      assert.equal(pixels[1][1], s.enabledPixel);
      assert.equal(pixels[2][0], s.enabledPixel);

    });

    it('should rollover enabled pixels', () => {
      var s = new sol();
      s.initialize(3,3);
      s.setRect(1,3);
      s.rotateRow(1,3);
      var pixels = s.getScreen();
      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[1][0], s.enabledPixel);
      assert.equal(pixels[1][1], s.disabledPixel);
      assert.equal(pixels[2][0], s.enabledPixel);
    });

    it('should rollover enabled pixels further', () => {
      var s = new sol();
      s.initialize(3,3);
      s.setRect(1,3);
      s.rotateRow(1,5);
      var pixels = s.getScreen();
      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[1][0], s.disabledPixel);
      assert.equal(pixels[1][2], s.enabledPixel);
      assert.equal(pixels[2][0], s.enabledPixel);
    });
  });
  describe('rotataColumn', () => {
    it('should rotate column 1 by 1', () => {
      var s = new sol();
      s.initialize(3,3);
      s.setRect(3,1);
      s.rotateColumn(1,1);
      var pixels = s.getScreen();
      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[0][1], s.disabledPixel);
      assert.equal(pixels[1][1], s.enabledPixel);
      assert.equal(pixels[0][2], s.enabledPixel);
    });
  });
  describe('runCommand', () => {
    it('should draw a rectangle on "rect 1x1"', () => {
      var s = new sol();
      s.initialize(3,3);
      var command = 'rect 1x1';
      s.runCommand(command);
      var pixels = s.getScreen();
      assert.equal(pixels[0][0], s.enabledPixel);
    });
    it('should set 1x3 and 3x1', () => {
      var s = new sol();
      s.initialize(10,10);
      s.runCommand('rect 1x3');
      s.runCommand('rect 3x1');
      var pixels = s.getScreen();

      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[1][0], s.enabledPixel);
      assert.equal(pixels[2][0], s.enabledPixel);
      assert.equal(pixels[0][1], s.enabledPixel);
      assert.equal(pixels[0][2], s.enabledPixel);
      assert.equal(pixels[1][1], s.disabledPixel);
      assert.equal(pixels[1][2], s.disabledPixel);
    });
    it('should rotate column on "rotate column x=1 by 1"', () => {
      var s = new sol();
      s.initialize(3,3);
      s.setRect(3,1);
      s.runCommand('rotate column x=1 by 1');
      var pixels = s.getScreen();
      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[0][1], s.disabledPixel);
      assert.equal(pixels[1][1], s.enabledPixel);
      assert.equal(pixels[0][2], s.enabledPixel);
    });
    it('should rotate row on "rotate row x=1 by 1"', () => {
      var s = new sol();
      s.initialize(3,3);
      s.setRect(1,3);
      s.runCommand('rotate row x=1 by 1');
      var pixels = s.getScreen();
      assert.equal(pixels[0][0], s.enabledPixel);
      assert.equal(pixels[1][0], s.disabledPixel);
      assert.equal(pixels[1][1], s.enabledPixel);
      assert.equal(pixels[2][0], s.enabledPixel);
    });
  });
  describe('getNumberOfPixels', () => {
    it('should be 0 after initializing', () => {
      var s = new sol();
      s.initialize(3,3);
      var output = s.getNumberOfPixels();
      assert.equal(output, 0);
    });
    it('should be 3 after rect(1,3)', () => {
      var s = new sol();
      s.initialize(3,3);
      s.setRect(1,3);
      var output = s.getNumberOfPixels();
      assert.equal(output, 3);
    });
  });
});