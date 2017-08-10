const fs = require('fs');
var advent_id = process.argv[2];
var adventDir = './advents/';

if (advent_id) {
  // Check if the advent is present
  if (!fs.existsSync(adventDir + advent_id + '.js')) {
    console.log('Event ' + advent_id + ' not found');
    return;
  }

  // Include the event, running it immediately
  var Sol = require(adventDir + advent_id);
  var adv = new Sol();
  adv.run();
} else {
  // Run all of the events
  fs.readdir(adventDir, (err, files) => {
    files.forEach((file) => {
      var path = adventDir + file;
      if (fs.lstatSync(path).isDirectory()) return;
      var Sol = require(path);
      adv = new Sol();
      adv.run();
    });
  });
};
