'use strict'
const fs = require('fs');
module.exports = function () {

	this.run = () => {
    let input = fs.readFileSync('advents/input/4a.txt', 'utf8');
    let result = this.solve(input);

    console.log('4a: Result: ' + result);
	}

	this.solve = (rooms) => {
		var roomNames = rooms.split('\n');
		var sectorSum = 0;
		roomNames.forEach((roomName) => {
			if (this.isRealRoom(roomName)) {
				var sectorId = this.getSectorId(roomName)
				sectorSum += sectorId;
			}
		});

		return sectorSum;
	}

	this.isRealRoom = (roomName) => {
		var encryptedName = this.getEncryptedName(roomName);
		var checkSum = this.getChecksum(roomName);
		var tally = this.getTalliedCharacters(encryptedName);
		var sorted = this.getSortedTally(tally);
		var sub = sorted.substr(0,5);
		return checkSum == sub;
	}

	this.getEncryptedName = (roomName) => {
		return roomName.substr(0, roomName.lastIndexOf("-"));
	}

	this.getSectorId = (roomName) => {
		var split = roomName.split("-");
		var tail = split[split.length - 1];
		return parseInt(tail.substr(0,tail.indexOf("[")));
	}

	this.getChecksum = (roomName) => {
		var split = roomName.split("-");
		var tail = split[split.length - 1];
		return tail.substring(tail.indexOf("[") + 1, tail.indexOf("]"));
	}

	this.getTalliedCharacters = (word) => {
		var result = {};

		for(var char of word) {
			if (!char.match(/[a-zA-Z]/)) continue;
			if (result[char] == undefined) result[char] = 0;
			result[char]++;
		}
		return result;
	}

	this.getSortedTally = (tally) => {
		var tallyArray = []
		for(var attribute in tally) {
			if (tally.hasOwnProperty(attribute)) {
				tallyArray.push({
					char: attribute,
					val: tally[attribute]
				});
			}
		}
		return this.sortTallyArray(tallyArray);
	}

	this.sortTallyArray = (tallyArray) => {
		var sortedTally = this.mergeSort(tallyArray);
		var result = "";
		sortedTally.forEach((item) => {
			result += item.char;
		})

		return result;
	}

	this.mergeSort = (array) => {
		if (array.length > 1) {
			var array1 = array.slice(0, array.length / 2);
			var array2 = array.slice(array.length / 2);
			return this.merge(this.mergeSort(array1), this.mergeSort(array2))
		}

		return array;
	}

	this.merge = (array1, array2) => {
		var i = 0;
		var j = 0;
		var result = [];
		while((i + j) < (array1.length + array2.length)) {

			if (j >= array2.length) {
				result.push(array1[i++]);
				continue;
			}
			if (i >= array1.length) {
				result.push(array2[j++]);
				continue;
			}

			if (array1[i].val > array2[j].val) {
				result.push(array1[i++]);
				continue;
			}
			if (array2[j].val > array1[i].val) {
				result.push(array2[j++]);
				continue;
			}

			if (array1[i].char.charCodeAt() < array2[j].char.charCodeAt()){
				result.push(array1[i++]);				
			} else {
				result.push(array2[j++]);
			}
		}

		return result
	}

	this.decryptName = (roomName) => {
		var encryptedName = this.getEncryptedName(roomName);
		var shift = this.getSectorId(roomName);
		return this.cipherWordWith(encryptedName, shift);
	}

	this.cipherWordWith = (cipher, shift) => {
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var cipheredText = "";
		for (var char of cipher) {
			var currentAlphabetIndex = alphabet.indexOf(char);
			if (currentAlphabetIndex < 0) {
				cipheredText += " ";
				continue;
			}

			var nextAlphabetIndex = (currentAlphabetIndex + shift) % alphabet.length;
			cipheredText += alphabet[nextAlphabetIndex];
		}

		return cipheredText;
	}

}