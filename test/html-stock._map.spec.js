'use strict';

const assert = require('chai').assert;

describe('HTMLStock._map', function() {
	this.timeout(3000);
	let htmlStock, template, main;

	beforeEach(() => {
		if (!main) /*then*/ main = document.querySelector('main');
		if (!template) /*then*/ template = main.innerHTML;

		main.innerHTML = template;
		htmlStock = new HTMLStock(document.querySelectorAll('p'));
	});

	it('should modify all elements following the selected function', () => {
		let len = htmlStock.length;

		for (let i = len - 1; i >= 0; i--) /*do*/ assert.equal(htmlStock[i].textContent, '');

		htmlStock._map((el) => {
			el.textContent = 'changed';
			return el;
		})

		for (let i = len - 1; i >= 0; i--) /*do*/ assert.equal(htmlStock[i].textContent, 'changed');
	});

	it('should return a new HTMLStock as the result', () => {
		let newStock = htmlStock._map((el) => {
			el.innerHTML = 'changed';
			return el;
		});

		assert.isFalse(newStock == htmlStock);
		assert.equal(newStock.constructor.name, 'HTMLStock');
	});

	it('should be chainable', () => {
		let newStock = htmlStock._map((el) => {
			el.textContent = 'first exchange';
			return el;
		})._map((el) => {
			el.textContent = 'second exchange';
		});

		for (let i = newStock.length - 1; i >= 0; i--) /*do*/ assert.equal(htmlStock[i].textContent, 'second exchange');
	});


	it('should throw a TypeError if passed anything other than a function as a callback', () => {
		try {
			htmlStock._map('error');
		} catch(e) {
			assert.isTrue(/not\sa\sfunction/.test(e.toString()));
		}
	});

});