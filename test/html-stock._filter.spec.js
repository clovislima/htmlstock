'use strict';

const assert = require('chai').assert;

describe('HTMLStock._filter', function() {
	this.timeout(3000);
	let filterStock, secondTemplate, second;

	beforeEach(() => {
		if (!second) /*then*/ second = document.querySelector('._second');
		if (!secondTemplate) /*then*/ secondTemplate = second.innerHTML;

		second.innerHTML = secondTemplate;
		filterStock = new HTMLStock(document.querySelectorAll('._second *'));
	});

	it('should filter the elements based on a function', () => {
		let newStock = filterStock._filter((el) => el.textContent === 'something');

		assert.notEqual(filterStock.length, newStock.length);
		assert.equal(newStock.length, 1);
	});

	it('should return a new HTMLStock as the result', () => {
		let newStock = filterStock._filter((el) => el.textContent === 'something');

		assert.isFalse(newStock == filterStock);
		assert.equal(newStock.constructor.name, 'HTMLStock');
	});

	it('should be chainable', () => {
		let newStock = filterStock._filter((el) => el.tagName.toUpperCase() === 'SPAN')._filter((el) => el.textContent === 'something');

		assert.equal(newStock.length, 1);
	});

	it('should throw a TypeError if passed anything other than a function as a callback', () => {
		try {
			filterStock._filter('error');
		} catch(e) {
			assert.isTrue(/TypeError/.test(e.toString()));
		}
	});

});