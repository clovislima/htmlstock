'use strict';

const assert = require('chai').assert;

describe('Node._children', function() {
	this.timeout(3000);
	let hierTemplate, parent;

	beforeEach(() => {
		if (!parent) /*then*/ parent = document.querySelector('.parent');
		if (!hierTemplate) /*then*/ hierTemplate = parent.innerHTML;
	});

	it('should have the value of all children of the selected element', () => {
		let children = parent.children;
		let _children = parent._children;
		let pass = true;

		for (var i = children.length - 1; i >= 0; i--) {
			pass = (children[i] === _children[i]) && pass;
		};

		assert.isTrue(pass);
	});

	it('should have a HTMLStock as the value', () => {
		let _children = parent._children;

		assert.equal(_children.constructor.name, 'HTMLStock');
	});

	it('should thrown a TypeError when trying to reassign the _children property', () => {
		try {
			parent._children = 0;
		} catch(e) {
			assert.isTrue(/Cannot\sset\sproperty.+?which\shas\sonly\sa\sgetter/.test(e));
		}
	});

	it('should throw a TypeError when trying to redefine the _children property', () => {
		try {
			Object.defineProperty(parent, '_children', {
				value: 0
			})
		} catch(e) {
			assert.isTrue(/Cannot\sredefine\sproperty/.test(e));
		}
	});
});