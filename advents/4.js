'use strict'
const fs = require('fs');
module.exports = function () {

	this.roomId = 0;

	this.run = () => {
	    let input = fs.readFileSync('advents/input/4.txt', 'utf8');
	    let result = this.solve(input);

	    console.log('4a: SectorId sum: ' + result);
	    console.log('4b: RoomId of storage:' + this.roomId);
	}

	this.solve = (rooms) => {
		let roomNames = rooms.split('\n');
		let sectorSum = 0;
		roomNames.forEach((roomName) => {
			if (this.isRealRoom(roomName)) {
				let sectorId = this.getSectorId(roomName);
				if (this.decryptName(roomName) === 'northpole object storage'){
					this.roomId = sectorId;
				}
				sectorSum += sectorId;
			}
		});

		return sectorSum;
	}

	this.isRealRoom = (roomName) => {
		let encryptedName = this.getEncryptedName(roomName);
		let checkSum = this.getChecksum(roomName);
		let tally = this.getTalliedCharacters(encryptedName);
		let sorted = this.getSortedTally(tally);
		let sub = sorted.substr(0,5);
		return checkSum == sub;
	}

	this.getEncryptedName = (roomName) => {
		return roomName.substr(0, roomName.lastIndexOf("-"));
	}

	this.getSectorId = (roomName) => {
		let split = roomName.split("-");
		let tail = split[split.length - 1];
		return parseInt(tail.substr(0,tail.indexOf("[")));
	}

	this.getChecksum = (roomName) => {
		let split = roomName.split("-");
		let tail = split[split.length - 1];
		return tail.substring(tail.indexOf("[") + 1, tail.indexOf("]"));
	}

	this.getTalliedCharacters = (word) => {
		let result = {};

		for(let char of word) {
			if (!char.match(/[a-zA-Z]/)) continue;
			if (result[char] == undefined) result[char] = 0;
			result[char]++;
		}
		return result;
	}

	this.getSortedTally = (tally) => {
		let tallyArray = []
		for(let attribute in tally) {
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
		let sortedTally = this.mergeSort(tallyArray);
		let result = "";
		sortedTally.forEach((item) => {
			result += item.char;
		})

		return result;
	}

	this.mergeSort = (array) => {
		if (array.length > 1) {
			let array1 = array.slice(0, array.length / 2);
			let array2 = array.slice(array.length / 2);
			return this.merge(this.mergeSort(array1), this.mergeSort(array2))
		}

		return array;
	}

	this.merge = (array1, array2) => {
		let i = 0;
		let j = 0;
		let result = [];
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
		let encryptedName = this.getEncryptedName(roomName);
		let shift = this.getSectorId(roomName);
		return this.cipherWordWith(encryptedName, shift);
	}

	this.cipherWordWith = (cipher, shift) => {
		let alphabet = "abcdefghijklmnopqrstuvwxyz";
		let cipheredText = "";
		for (let char of cipher) {
			let currentAlphabetIndex = alphabet.indexOf(char);
			if (currentAlphabetIndex < 0) {
				cipheredText += " ";
				continue;
			}

			let nextAlphabetIndex = (currentAlphabetIndex + shift) % alphabet.length;
			cipheredText += alphabet[nextAlphabetIndex];
		}

		return cipheredText;
	}

}