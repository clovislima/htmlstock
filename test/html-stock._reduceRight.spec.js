'use strict';

const assert = require('chai').assert;

describe('HTMLStock._reduceRight', function() {
	this.timeout(3000);
	let reduceStock, secondTemplate, ordered;

	beforeEach(() => {
		if (!ordered) /*then*/ ordered = document.querySelector('._ordered');
		if (!secondTemplate) /*then*/ secondTemplate = ordered.innerHTML;

		ordered.innerHTML = secondTemplate;
		reduceStock = new HTMLStock(document.querySelectorAll('._ordered *'));
	});

	it('should reduce from, right to left, the HTMLStock to a result based on a function', () => {
		let reduction = reduceStock._reduceRight((right, left) => (right ? (typeof right === 'string' ? right : right.textContent) : '') + left.textContent);

		assert.equal(reduction, '987654321');
	});

	it('should throw a TypeError if passed anything other than a function as a callback', () => {
		try {
			reduceStock._reduceRight('error');
		} catch(e) {
			assert.isTrue(/TypeError/.test(e.toString()));
		}
	});

});