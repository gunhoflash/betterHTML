/*
	ARGS
		type: object
		[0]: (node)
		[1]: (address)
		[2]: INPUT_FILE
		[3]: OUTPUT_FILE
		[4]: OPTIONS

*/
let ARGS = process.argv;
let INPUT_FILE;
let OUTPUT_FILE;
let OPTIONS;

// Check argument
if (ARGS.length < 4) {
	log('Command Format: node betterHTML {input_file} {output_file} {options}');
} else {
	INPUT_FILE = ARGS[2];
	OUTPUT_FILE = ARGS[3];
	OPTIONS = ARGS[4];
}

console.log('Hello, world!');

/*

	functions

*/

// log
log = obj => {
	console.log(obj);
};