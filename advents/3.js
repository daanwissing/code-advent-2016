'use strict'
const fs = require('fs');
module.exports = function () {
	this.solve = (string) => {

		var triangles = string.split('\n');
		var sides = [];
		triangles.forEach((triangle) => {
			sides.push(this.getSidesFromString(triangle));
		});

		var numOfValidTriangles = 0;
		for (var i = 0; i < sides.length; i++) {

			var side = sides[i];
			if (this.sidesMakeTriangle(side[0], side[1], side[2])) {
				numOfValidTriangles++;
			}
		}
		return numOfValidTriangles;
	}

	this.getSidesFromString = (string) => {
		var sidesString = string.split(' ');
		var sides = [];
		sidesString.forEach((side) => {
			var parsed = parseInt(side);
			if (!isNaN(parsed)) {
				sides.push(parsed);
			}
		});
		return sides;
	};

	this.sidesMakeTriangle = (side1, side2, side3) => {
		return ((side1 + side2) > side3) &&
						((side1 + side3) > side2) && 
						((side2 + side3) > side1); 
	}

	this.run = () => {
    let input = fs.readFileSync('advents/input/3.txt', 'utf8');
    input = input.replace("  ", " ");
    let result = this.solve(input);

    console.log('3a: Result: ' + result);
	}
};