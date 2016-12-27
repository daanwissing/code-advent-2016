'use strict'
const fs = require('fs');
module.exports = function () {
	this.isRealRoom = (roomName) => {
		var encryptedName = this.getEncryptedName(roomName);
		var checkSum = this.getChecksum(roomName);
		var tally = this.getTalliedCharacters(encryptedName);
		var sorted = this.getSortedTally(tally);
		return true;
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
		return "abc";
	}

}