exports.prework = FILE => {
	console.log('start preworker');

	// TODO: do something

	erase_comment(FILE);

	console.log('end preworker');
};

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