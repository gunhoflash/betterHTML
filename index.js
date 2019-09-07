const fs = require('fs');

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

let FILE = null;

/*

	prework functions

*/

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
		FILE = fs.readFileSync(INPUT_FILE, 'utf8');
	} else {
		// file not found
		FILE = null;
		console.log(`No such file:'${INPUT_FILE}'`);
		return;
	}
};

// delete all comments
remove_comment = () => {
	// handle exceptions
	if (typeof(FILE) != 'string') return;
	if (FILE.length == 0) return;

	var i, j;

	// delete comments
	while (true) {

		// find start of comment
		i = FILE.indexOf('<!--');

		// break when comment not found
		if (i == -1)
			break;
		
		// find end of comment
		j = FILE.indexOf('-->', i + 4);

		if (j == -1) {
			// remove until EOF
			FILE =  FILE.slice(0, i);
		} else {
			// remove from i to j + 3
			FILE = FILE.slice(0, i) + FILE.slice(j + 3);
		}
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

// TODO: remove comment
remove_comment();

console.log(FILE);

// TODO: structure up & check tag-error
// TODO: check web standard compliance