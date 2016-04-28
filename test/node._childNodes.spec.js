'use strict';

const assert = require('chai').assert;

describe('Node._childNodes', function() {
	this.timeout(3000);
	let hierTemplate, parent;

	beforeEach(() => {
		if (!parent) /*then*/ parent = document.querySelector('.parent');
		if (!hierTemplate) /*then*/ hierTemplate = parent.innerHTML;
	});

	it('should have the value of all child nodes of the selected element', () => {
		let childNodes = parent.childNodes;
		let _childNodes = parent._childNodes;
		let pass = true;

		for (var i = childNodes.length - 1; i >= 0; i--) {
			pass = (childNodes[i] === _childNodes[i]) && pass;
		};

		assert.isTrue(pass);
	});

	it('should have a HTMLStock as the value', () => {
		let _childNodes = parent._childNodes;

		assert.equal(_childNodes.constructor.name, 'HTMLStock');
	});

	it('shouldthrown a TypeError when trying to reassign the _childNodes property', () => {
		try {
			parent._childNodes = 0;
		} catch(e) {
			assert.isTrue(/Cannot\sset\sproperty.+?which\shas\sonly\sa\sgetter/.test(e));
		}
	});

	it('should throw a TypeError when trying to redefine the _childNodes property', () => {
		try {
			Object.defineProperty(parent, '_childNodes', {
				value: 0
			})
		} catch(e) {
			assert.isTrue(/Cannot\sredefine\sproperty/.test(e));
		}
	});
});