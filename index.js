const checker   = require('./checker.js');
const preworker = require('./preworker.js');

console.log('[Better HTML]');

preworker
	.getArgs()                   // get arguments
	.then(preworker.readFile)    // read file
	.then(preworker.prework)     // prework
	.then(checker.check)         // check
	.then(FILE => {
		console.log(FILE.text);  // Output the result (for test)
	})
	.catch(console.log);         // output error