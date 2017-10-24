'use strict'
const fs = require('fs');
module.exports = function () {
	this.solve = (string, vertical) => {
		let sides = [];
		let triangles = string.split('\n');
		if (vertical) {
			for (let i = 0; i < triangles.length; i = i + 3) {
				let firstSides = this.getSidesFromString(triangles[i]);
				let secondSides = this.getSidesFromString(triangles[i + 1]);
				let thirdSides = this.getSidesFromString(triangles[i + 2]);

				sides.push([firstSides[0], secondSides[0], thirdSides[0]]);
				sides.push([firstSides[1], secondSides[1], thirdSides[1]]);
				sides.push([firstSides[2], secondSides[2], thirdSides[2]]);
			}
		} else {
			triangles.forEach((triangle) => {
				sides.push(this.getSidesFromString(triangle));
			});
		}

		let numOfValidTriangles = 0;

		sides.forEach((side) => {
			if (this.sidesMakeTriangle(side[0], side[1], side[2])) {
				numOfValidTriangles++;
			}
		});
		return numOfValidTriangles;
	}

	this.getTriangles = (string) => {
		let triangles = string.split('\n');
		let sides = [];
		triangles.forEach((triangle) => {
			sides.push(this.getSidesFromString(triangle));
		});
		return triangles;
	}

	this.getTrianglesVertical = (string) => {

	}

	this.getSidesFromString = (string) => {
		let sidesString = string.split(' ');
		let sides = [];
		sidesString.forEach((side) => {
			let parsed = parseInt(side);
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
    result = this.solve(input, true);
    console.log('3b: REsult: ' + result);
	}
};