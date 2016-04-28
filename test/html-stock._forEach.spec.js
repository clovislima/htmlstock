'use strict';

const assert = require('chai').assert;

describe('HTMLStock._forEach', function() {
	this.timeout(3000);
	let reduceStock, secondTemplate, ordered;

	beforeEach(() => {
		if (!ordered) /*then*/ ordered = document.querySelector('._ordered');
		if (!secondTemplate) /*then*/ secondTemplate = ordered.innerHTML;

		ordered.innerHTML = secondTemplate;
		reduceStock = new HTMLStock(document.querySelectorAll('._ordered *'));
	});

	it('should loop throught the HTMLStock executing a function in its elements', () => {
		let result = [];
		reduceStock._forEach((el) => result.push(el.textContent));

		assert.equal(result.toString(), '1,2,3,4,5,6,7,8,9');
	});

	it('should throw a TypeError if passed anything other than a function as a callback', () => {
		try {
			reduceStock._forEach('error');
		} catch(e) {
			assert.isTrue(/TypeError/.test(e.toString()));
		}
	});

});