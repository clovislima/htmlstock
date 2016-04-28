'use strict';

const assert = require('chai').assert;

describe('HTMLStock._some', function() {
	this.timeout(3000);
	let someStock, secondTemplate, second;

	beforeEach(() => {
		if (!second) /*then*/ second = document.querySelector('._second');
		if (!secondTemplate) /*then*/ secondTemplate = second.innerHTML;

		second.innerHTML = secondTemplate;
		someStock = new HTMLStock(document.querySelectorAll('._second *'));
	});

	it('should return true when the condition from a callback is fulfilled for some element of the HTMLStock', () => {
		assert.isTrue(someStock._some((el) => el.textContent == 'something'));
	});

	it('should return false when the condition from a callback isn\'t fulfilled for some element of the HTMLStock', () => {
		assert.isFalse(someStock._some((el) => el.textContent == 'other thing'));
	});

	it('should return a boolean as the result', () => {
		assert.isTrue(typeof someStock._some((el) => el.tagName.toUpperCase() === 'STRONG' ) === 'boolean');
		assert.isTrue(typeof someStock._some((el) => el.Invalid) === 'boolean');
	});

	it('should throw a TypeError if passed anything other than a function as a callback', () => {
		try {
			someStock._some('error');
		} catch(e) {
			assert.isTrue(/TypeError/.test(e.toString()));
		}
	});
});