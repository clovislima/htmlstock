'use strict';

const assert = require('chai').assert;

describe('Element._findAll', function() {
	this.timeout(3000);
	let hierTemplate, parent;

	beforeEach(() => {
		if (!parent) /*then*/ parent = document.querySelector('.parent');
		if (!hierTemplate) /*then*/ hierTemplate = parent.innerHTML;
	});

	it('should have the value of the passed match argument', () => {
		let querySelectorlAll = parent.querySelectorAll('.child');
		let _findAll = parent._findAll('.child');
		let pass = true;

		for (var i = querySelectorlAll.length - 1; i >= 0; i--) {
			pass = querySelectorlAll[i] === _findAll[i];
		};

		assert.isTrue(pass);
	});

	it('should have a HTMLStock as the value', () => {
		let _findAll = parent._findAll('.child');

		assert.equal(_findAll.constructor.name, 'HTMLStock');
	});
});