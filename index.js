const fs = require('fs');
var advent_id = 0;

process.argv.forEach((val) => {
  advent_id = val;
})

// Check if the advent is present
if (!fs.existsSync('advents/' + advent_id + '.js')) throw 'Event ' + advent_id + ' not found'

// Include the event, running it immediately
var Sol = require('./advents/' + advent_id);
var adv = new Sol();
adv.solve();