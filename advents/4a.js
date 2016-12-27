'use strict'
const fs = require('fs');
module.exports = function () {
	this.isRealRoom = (roomName) => {
		var encryptedName = this.getEncryptedName(roomName);
		var checkSum = this.getChecksum(roomName);
		var tally = this.getTalliedCharacters(encryptedName);
		var sorted = this.getSortedTally(tally);
		return checkSum == sorted.substr(0, 4);
	}

	this.getEncryptedName = (roomName) => {
		return roomName.substr(0, roomName.lastIndexOf("-"));
	}

	this.getSectorId = (roomName) => {
		var split = roomName.split("-");
		var tail = split[split.length - 1];
		return tail.substr(0,tail.indexOf("["));
	}

	this.getChecksum = (roomName) => {
		var split = roomName.split("-");
		var tail = split[split.length - 1];
		return tail.substring(tail.indexOf("[") + 1, tail.length - 1);
	}

	this.getTalliedCharacters = (word) => {
		var result = {};
		for(var char of word) {
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
				result.push(array1[i]);
				i++;
				continue;				
			}
			if (i >= array1.length) {
				result.push(array2[j]);
				j++;
				continue;
			}
			if (array1[i].val >= array2[j].val) {
				result.push(array1[i]);
				i++;
			} else {
				result.push(array2[j]);
				j++;
			}
		}

		return result
	}

}