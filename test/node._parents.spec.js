'use strict';

const assert = require('chai').assert;

describe('Node._parents', function() {
	this.timeout(3000);
	let child;

	beforeEach(() => {
		if (!child) /*then*/ parent = document.querySelector('.child');
	});

	it('should have a HTMLStock with all parents of the node', () => {
		let parents = [document.querySelector('.parent'), document.querySelector('.hierarchy'),  document.body];
		let _parents = parent._parents;
		let pass = true;

		for (var i = parents.length - 1; i >= 0; i--) {
			pass = (parents[i] === _parents[i]) && pass;
		};

		assert.isTrue(pass);
	});

	it('should have a HTMLStock as the value', () => {
		let _parents = parent._parents;

		assert.equal(_parents.constructor.name, 'HTMLStock');
	});

	it('should thrown a TypeError when trying to reassign the _parents property', () => {
		try {
			parent._parents = 0;
		} catch(e) {
			assert.isTrue(/Cannot\sset\sproperty.+?which\shas\sonly\sa\sgetter/.test(e));
		}
	});

	it('should throw a TypeError when trying to redefine the _parents property', () => {
		try {
			Object.defineProperty(parent, '_parents', {
				value: 0
			})
		} catch(e) {
			assert.isTrue(/Cannot\sredefine\sproperty/.test(e));
		}
	});
});