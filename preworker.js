const fs = require('fs');

// get arguments
exports.getArgs = () => new Promise((resolve, reject) => {
	/*
		ARGS
			type: object
			[0]: (node)
			[1]: (address)
			[2]: INPUT_FILE
			[3]: OUTPUT_FILE
			[4]: OPTIONS

	*/
	let args = process.argv;
	if (args.length < 3) {
		return reject('Command Format: node betterHTML {input_file} [{output_file} {options}]');
	} else {
		/*
			FILE
				type: object
				input_file
				output_file
				options
				text
				obj

		*/
		let FILE = {
			input_file:  args[2],
			output_file: args[3] || null,
			options:     args[4] || null
		};
		return resolve(FILE);
	}
});

// load file and get text
exports.readFile = FILE => new Promise((resolve, reject) => {
	if (fs.existsSync(FILE.input_file)) {
		// file exist
		FILE.text = fs.readFileSync(FILE.input_file, 'utf8');
		return resolve(FILE);
	} else {
		// file not found
		return reject(`No such file:'${FILE.input_file}'`);
	}
});

// prework
exports.prework = FILE => new Promise((resolve, reject) => {
	console.log('start preworker');

	// TODO: do something
	erase_comment(FILE);

	console.log('end preworker');
	resolve(FILE);
});

// erase all comments
erase_comment = FILE => {

	// handle exceptions
	if (FILE.text.length == 0) return;

	var i, j;

	// erase comments
	while (true) {

		// find start of comment
		i = FILE.text.indexOf('<!--');

		// break when comment not found
		if (i == -1)
			break;
		
		// find end of comment
		j = FILE.text.indexOf('-->', i + 4);

		if (j == -1) {
			// erase until EOF
			FILE.text = FILE.text.slice(0, i);
		} else {
			// erase from i to j + 3
			FILE.text = FILE.text.slice(0, i) + FILE.text.slice(j + 3);
		}
	}		
};