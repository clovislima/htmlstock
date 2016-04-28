'use strict';

const assert = require('chai').assert;

describe('HTMLStock._every', function() {
	this.timeout(3000);
	let everyStock, secondTemplate, second;

	beforeEach(() => {
		if (!second) /*then*/ second = document.querySelector('._second');
		if (!secondTemplate) /*then*/ secondTemplate = second.innerHTML;

		second.innerHTML = secondTemplate;
		everyStock = new HTMLStock(document.querySelectorAll('._second *'));
	});

	it('should return true when the condition from a callback is fulfilled for every element of the HTMLStock', () => {
		assert.isTrue(everyStock._every((el) => el.textContent));
	});

	it('should return false when the condition from a callback isn\'t fulfilled for every element of the HTMLStock', () => {
		assert.isFalse(everyStock._every((el) => el.textContent == 'something'));
	});

	it('should return a boolean as the result', () => {
		assert.isTrue(typeof everyStock._every((el) => el.textContent) === 'boolean');
		assert.isTrue(typeof everyStock._every((el) => el.textContent == 'something') === 'boolean');
	});

	it('should throw a TypeError if passed anything other than a function as a callback', () => {
		try {
			everyStock._every('error');
		} catch(e) {
			assert.isTrue(/TypeError/.test(e.toString()));
		}
	});

});