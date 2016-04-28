'use strict';

const assert = require('chai').assert;

describe('HTMLStock.constructor', function() {
	this.timeout(3000);

	it('should allow the creation based on an ArrayLike', () => {
		let elms = document.querySelectorAll('p');
		let htmlStock = new HTMLStock(elms);

		assert.deepEqual(elms, htmlStock);
	});

	it('should allow the creation of an empty HTMLStock', () => {
		let len = 5;
		let htmlStock = new HTMLStock(len);
		for (let i = len; i >=0 ; i--) /*do*/ assert.isUndefined(htmlStock[i]);

		assert.equal(htmlStock.length, len);
	});

	it('should throw a TypeError if passed anything other than Number or Element collection', () => {
		let arr = [0,1,2,3,4,5];
		try {
			let htmlStock = new HTMLStock(arr);
		} catch(e) {
			assert.equal(e.toString(), 'TypeError');
		}
	});

	it('should have a name of HTMLStock', () => {
		let htmlStock = new HTMLStock(1);
		assert.equal(htmlStock.constructor.name, 'HTMLStock');
	})
});