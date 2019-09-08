const fs        = require('fs');
const checker   = require('./checker.js');
const preworker = require('./preworker.js');

/*
	ARGS
		type: object
		[0]: (node)
		[1]: (address)
		[2]: INPUT_FILE
		[3]: OUTPUT_FILE
		[4]: OPTIONS

*/
let ARGS;
let INPUT_FILE;
let OUTPUT_FILE;
let OPTIONS;

let FILE = {
	text: ''
};

// get arguments
getArgs = () => {
	ARGS = process.argv;
	if (ARGS.length < 4) {
		console.log('Command Format: node betterHTML {input_file} {output_file} {options}');
	} else {
		INPUT_FILE  = ARGS[2];
		OUTPUT_FILE = ARGS[3];
		OPTIONS     = ARGS[4];
	}	
};

// load INPUT_FILE
loadFile = () => {
	if (fs.existsSync(INPUT_FILE)) {
		// file exist
		FILE.text = fs.readFileSync(INPUT_FILE, 'utf8');
	} else {
		// file not found
		console.log(`No such file:'${INPUT_FILE}'`);
		return;
	}
};

/*

run

*/

// start
console.log('[Better HTML]');

// get arguments
getArgs();

// load the file
loadFile();

// prework and check
preworker.prework(FILE);
checker.check(FILE);

// Output the result (for test)
console.log(FILE.text);