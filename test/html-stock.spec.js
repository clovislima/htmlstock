// 'use strict';

// const assert = require('chai').assert;

// describe('HTMLStock', function() {
// 	this.timeout(3000);

// 	describe('characteristics', function() {

// 		it('should not be able to reassign indexed properties', () => {
// 			let elms = document.querySelectorAll('p');
// 			let htmlStock = new HTMLStock(elms);

// 			try {
// 				htmlStock[0] = 'changed';
// 			} catch(e) { 
// 				assert.isTrue(/Cannot\sassign\sto\sread\sonly\sproperty/.test(e));
// 			}
// 		});

// 		it('should not be able to redefine indexed properties', () => {
// 			let elms = document.querySelectorAll('p');
// 			let htmlStock = new HTMLStock(elms);

// 			try {
// 				Object.defineProperty(htmlStock, '0', {
// 					value: 'changed'
// 				})
// 			} catch(e) {
// 				assert.isTrue(/Cannot\sredefine\sproperty/.test(e));
// 			}
// 		});

// 		it('should not be able to reassign the length property', () => {
// 			let elms = document.querySelectorAll('p');
// 			let htmlStock = new HTMLStock(elms);

// 			try {
// 				htmlStock.length = 0;
// 			} catch(e) { 
// 				assert.isTrue(/Cannot\sassign\sto\sread\sonly\sproperty/.test(e));
// 			}
// 		});

// 		it('should not be able to redefine the length property', () => {
// 			let elms = document.querySelectorAll('p');
// 			let htmlStock = new HTMLStock(elms);

// 			try {
// 				Object.defineProperty(htmlStock, 'length', {
// 					value: 0
// 				})
// 			} catch(e) {
// 				assert.isTrue(/Cannot\sredefine\sproperty/.test(e));
// 			}
// 		});

// 		it('should not have any enumerable not indexed properties', () => {
// 			let elms = document.querySelectorAll('p');
// 			let htmlStock = new HTMLStock(elms);

// 			assert.isNotOk(Object.keys(htmlStock).filter((el) => isNaN(el)).length);
// 		});
// 	});
// });