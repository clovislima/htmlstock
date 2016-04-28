'use strict';

const assert = require('chai').assert;

describe('HTMLStock._reduce', function() {
	this.timeout(3000);
	let reduceStock, secondTemplate, ordered;

	beforeEach(() => {
		if (!ordered) /*then*/ ordered = document.querySelector('._ordered');
		if (!secondTemplate) /*then*/ secondTemplate = ordered.innerHTML;

		ordered.innerHTML = secondTemplate;
		reduceStock = new HTMLStock(document.querySelectorAll('._ordered *'));
	});

	it('should reduce from, left to right, the HTMLStock to a result based on a function', () => {
		let reduction = reduceStock._reduce((left, right) => (left ? (typeof left === 'string' ? left : left.textContent) : '') + right.textContent);

		assert.equal(reduction, '123456789');
	});

	it('should throw a TypeError if passed anything other than a function as a callback', () => {
		try {
			reduceStock._reduce('error');
		} catch(e) {
			assert.isTrue(/TypeError/.test(e.toString()));
		}
	});

});