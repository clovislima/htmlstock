'use strict'
const jsdom = require('jsdom');
const fs = require('fs');

fs.readFile(__dirname + '/dom.utils.html', resolveData);
jsdom.defaultDocumentFeatures = { 
	FetchExternalResources: ['script'],
	ProcessExternalResources: ['script'],
	MutationEvents: '2.0',
	QuerySelector: false
};


function resolveData(err, data) {
	if (err) /*then*/ throw err;
	let script = fs.readFileSync(__dirname + '/../src/html-stock.js').toString();
	let html = data.toString().replace('{{script}}', script);
	let doc = jsdom.jsdom(html);
	let win = doc.defaultView;

	for (let k in win) {
		if (!win.hasOwnProperty(k) || k in global) /*then*/ continue;
		global[k] = win[k];
	}

	global.document = doc;
	global.window = win;
}
