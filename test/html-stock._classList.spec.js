'use strict';

const assert = require('chai').assert;

describe('HTMLStock._classList', function() {
	this.timeout(3000);
	let classStock, classEvenStock, classOddStock;

	beforeEach(() => {
		if (!classStock) /*then*/ classStock = document._querySelectorAll('.child');
		if (!classEvenStock) /*then*/ classEvenStock = document._querySelectorAll('.child:nth-child(2n)');
		if (!classOddStock) /*then*/ classOddStock = document._querySelectorAll('.child:nth-child(2n + 1)');
	});

	describe('_add', function() {
		it('should add a class to every element on the HTMLStock', () => {
			classStock._classList._add('new-class');
			let pass = true;

			for (var i = classStock.length - 1; i >= 0; i--) {
				pass = (classStock[i].className === 'child new-class') && pass;
			};

			assert.isTrue(pass);
		});

		it('should add multiple classes to every element on the HTMLStock', () => {
			classStock._classList._add('multiple', 'classes');
			let pass = true;

			for (var i = classStock.length - 1; i >= 0; i--) {
				pass = (classStock[i].className === 'child new-class multiple classes') && pass;
			};

			assert.isTrue(pass);
		});

	});

	describe('_remove', function() {
		it('should remove a class to every element on the HTMLStock', () => {
			classEvenStock._classList._remove('new-class');
			let pass = true;

			for (var i = classEvenStock.length - 1; i >= 0; i--) {
				pass = (classEvenStock[i].className === 'child multiple classes') && pass;
			};

			assert.isTrue(pass);
		});

		it('should remove multiple classes to every element on the HTMLStock', () => {
			classEvenStock._classList._remove('multiple', 'classes');
			let pass = true;

			for (var i = classEvenStock.length - 1; i >= 0; i--) {
				pass = (classEvenStock[i].className === 'child') && pass;
			};

			assert.isTrue(pass);
		});
	});

	describe('_toggle', function() {
		it('should toggle a class to every element on the HTMLStock', () => {
			classStock._classList._toggle('new-class');
			let pass = true;

			for (var i = classEvenStock.length - 1; i >= 0; i--) {
				pass = (classEvenStock[i].className === 'child new-class') && pass;
			};

			for (var i = classOddStock.length - 1; i >= 0; i--) {
				pass = (classOddStock[i].className === 'child multiple classes') && pass;
			};

			assert.isTrue(pass);
		});
	});
});