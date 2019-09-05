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

	common functions

*/

// log
log = obj => {
	console.log(obj);
};

/*

	prework functions

*/

// get arguments
getArgs = () => {
	ARGS = process.argv;
	if (ARGS.length < 4) {
		log('Command Format: node betterHTML {input_file} {output_file} {options}');
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
		log(`No such file:'${INPUT_FILE}'`);
		return;
	}
	log(FILE);
};

// TODO: edit it
remove_comment = () => {
	/* TODO: edit code:
		loop
			find '<!--'
			find '-->' (or EOF)
			slice it
	*/
		
};
/*

run

*/

// start
log('[Better HTML]');

// get arguments
getArgs();

// load the file
loadFile();

// TODO: remove comment
remove_comment();

// TODO: structure up & check tag-error
// TODO: check web standard compliance