exports.check = FILE => new Promise((resolve, reject) => {
	console.log('start check');
	
	// TODO: do something

	// TODO: check web standard compliance
	
	console.log('end check');
	resolve(FILE);
});

/*
	change html text to object

	{
		tag: "tag_name"
		attr: { id: "id", class: "class", ... }
		child: [ tag, tag, tag, ... , "content" ]
	}
*/
html2obj = FILE => {
	FILE.obj = {
		child: []
	};
	content2obj(FILE.obj);
};

// parse content string to children and content
content2obj = (content, parent) => {
	/*
		TODO: repeat until end of content
			1. find open tag
			2. find close tag (if needed)
			3. register as a child and slice from content string
	*/
};