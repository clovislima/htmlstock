/**

	TODO:
	- Resolve getter and setter behaviour of properties like textContent and innerHTML

 */
(function HTMLStockInitiator(_global) {
	'strict mode';

	/*=============================================
	=            		HTMLStock          		  =
	=============================================*/
	function HTMLStock(arrLike) { this.constructor.apply(this, arguments); }

	Object.defineProperties(HTMLStock.prototype, {
		 constructor: {
		 	value: function HTMLStock(arrLike) {
				var numValue = Number(arrLike);
				var len = isNaN(numValue) ? (arrLike && arrLike.length ? arrLike.length : 0) : numValue;

				Object.defineProperty(this, 'length', {
					value: len
				});

				if (!arrLike || !isNaN(numValue)) /*then*/ return this;

				for (var i = 0, elm;  i < len; i++ ) {
					if (i in arrLike) {
						elm = arrLike[i];

						if (typeof elm === 'undefined' || (typeof elm === 'object' && elm instanceof Node)) {
							Object.defineProperty(this, '' + i, { value: arrLike[i], enumerable: true});
						} else {
							throw TypeError();
						}
					}
				}

				Object.defineProperty(this, '_classList', {
					value: new HTMLStockClassList(this)
				});

				return this;
			}
		},

		_map: {
			value: function(func, _this) {
				'use strict';
				if (this === null || this === undefined) /*then*/ throw new TypeError(' this is null or not defined');
				if (typeof func !== 'function') /*then*/ throw new TypeError(func + ' is not a function');

				var res = [];
				var len = this.length || 0;

				for (var i = 0; i < len; i++) /*do*/ if (i in this) /*then*/ res[i] = func.call(_this, this[i], i, this);

				return new HTMLStock(res);
			}
		}, 

		_filter: {
			value: function(func, _this) {
				'use strict';
				if (this === undefined || this === null) /*then*/ throw new TypeError();
				if (typeof func !== 'function') /*then*/ throw new TypeError();

				var res;
				var len = this.length || 0;
				var filtered = [];

				for (var i = 0; i < len; i++) {
					if (i in this) {
						var val = this[i];

						if (func.call(_this, val, i, this)) {
							filtered.push(val);
						}
					}
				}

				return new HTMLStock(filtered);
			}
		}
	});

	/*=====			End of HTMLStock 	 	======*/
	

	/*==========================================
	=            HTMLStockClassList            =
	==========================================*/
	
	function HTMLStockClassList() { this.constructor.apply(this, arguments); }

	Object.defineProperties(HTMLStockClassList.prototype, {
		constructor: {
			value: function HTMLStockClassList(instance) {
				Object.defineProperty(this, 'instance', {
					value: instance
				});
			}
		}
	});
	
	/*=====  End of HTMLStockClassList  ======*/
	

	/*=======================================
	=            HTMLStockHelper            =
	=======================================*/
	
	function HTMLStockHelper() { this.constructor.apply(this, arguments); }

	Object.defineProperties(HTMLStockHelper.prototype, {
		constructor: {
			value: function HTMLStockHelper() {
				return this.extendNative()
							.makeCopies(
								['copyProto', ['forEach', 'reduce', 'reduceRight', 'every', 'some'], Array],

								['applyMethodToElements', [
									{alias: '_listen', prop: 'addEventListener'},
									'addEventListener',
									{alias: '_unlisten', prop: 'removeEventListener'},
									'removeEventListener',
									'remove',
									'insertAdjacentHTML'
								]],

								['buildHTMLStockClassListProto', [
									'add', 'toggle', 'remove'
								]]
							);
			}
		},

		buildHTMLStockClassListProto: {
			value: function(prop) {
				Object.defineProperty(HTMLStockClassList.prototype, '_' +prop, {
					value: function _add() {
						var _this = this.instance;
						for (var i = _this.length - 1; i >= 0; i--) {
							var elm = _this[i];
							elm.classList[prop].apply(elm.classList, arguments);
						}
					}
				});
			}
		},

		applyMethodToElements: {
			value: function applyMethodToElements(conf, _classMethod) {
				var obj = typeof conf === 'string' ? {alias: '_' + conf, prop: conf } : conf;
				Object.defineProperty((_classMethod ? HTMLStock.prototype['_' + _classMethod] : HTMLStock.prototype), obj.alias, {
					value: function() {
						var _this = _classMethod ? this.instance : this;

						for (var i = _this.length - 1; i >= 0; i--) if (i in _this) /*do*/ (_classMethod ? _this[i][_classMethod][obj.prop] : _this[i][obj.prop]).apply((_classMethod? _this[i][_classMethod] : _this[i]), arguments);

						return _classMethod ? this : _this;
					}
				});

				return this;
			}
		},

		applySetterToElements: {
			value: function applySetterToElements(conf) {
				var obj = typeof conf === 'string' ? {alias: '_' + conf, prop: conf } : conf;
				Object.defineProperty(HTMLStock.prototype, obj.alias, {
					set: function(value) {
						for (var i = this.length - 1; i >= 0; i--) if (i in this) /*do*/ this[i][obj.prop] = value;
						return value;
					}
				});

				return this;
			}
		},


		aliasMethods: {
			value: function aliasMethods(propObj, _class) {
				var prop = typeof propObj ==='string' ? {alias: '_'+ propObj, prop: propObj } : propObj;

				Object.defineProperty(_class.prototype, prop.alias, {
					value: function() {
						return new HTMLStock(_class.prototype[prop.prop].apply(this, arguments));
					}
				});				

				return this;
			}
		},

		aliasGetters: {
			value: function aliasGetters(propObj, _class) {
				var prop = typeof propObj ==='string' ? {alias: '_'+ propObj, prop: propObj } : propObj;

				Object.defineProperty(_class.prototype, prop.alias, {
					get: function() {
						return new HTMLStock(this[prop.prop]);
					}
				});				

				return this;
			}
		},

		copyProto: {
			value: function copyProto(prop, _class) {
				Object.defineProperty(HTMLStock.prototype, '_' + prop, {
					value: _class.prototype[prop]
				});

				return this;
			}
		},

		makeCopies: {
			value: function makeCopies() {
				for (var i = 0, len = arguments.length; i < len; i++) /*do*/ this.delegateCopy.apply(this, arguments[i]);
				return this;
			}
		},

		delegateCopy: {
			value: function delegateCopy(delegated, props, _class) {
				for (var i = props.length - 1; i >= 0; i--) /*do*/ this[delegated].call(this, props[i], _class);
				return this;
			}
		},

		extendNative: {
			value: function extendNative() {

				/*----------  Extending Object  ----------*/
				Object.defineProperties(Object, {
					_assign: {
						value: function extend() {
							var result = {};
							for (var obj, i = arguments.length - 1; i >=0; i--) {
								obj = arguments[i];

								for (var k in obj) /*do*/ result[k] = obj[k];
							}

							return result;
						}
					},

					_assignRight: {
						value: function extendRight() {
							var result = {};
							for (var obj, i = 0, len = arguments.length; i < len; i++) {
								obj = arguments[i];

								for (var k in obj) /*do*/ result[k] = obj[k];
							}

							return result;
						}
					}
				});

				/*----------  Extending Object.prototype  ----------*/
				Object.defineProperties(Object.prototype, {
					_getClassName: {
						value: function() {
							return this.constructor && this.constructor.name && this.constructor.name !== 'Array' && this.constructor.name !== 'Object' && this.constructor.name.length && this.constructor.name.length > 2  ? this.constructor.name : Object.prototype.toString.call(this).replace(/\[\s?object\s+(.+?)\]/, '$1');
						}
					}
				});


				/*----------  Extending Node  ----------*/
 				Object.defineProperties(Node.prototype, {
 					_parents: {
 						get: function() {
 							var elm = this.parentNode;
 							var res = [];

 							while (elm.parentNode && !/^html$/i.test(elm.tagName)) {
 								res.push(elm);
 								elm = elm.parentNode;
 							}

 							return new HTMLStock(res);
 						}
 					}
 				});

				/*----------  Extending Node and HTMLDocument  ----------*/
				
				var aliasMethods = ['querySelectorAll', {alias: '_findAll', prop: 'querySelectorAll'}]; 
				var aliasGetters = ['children', 'childNodes'];

				this.makeCopies(
					['aliasMethods', aliasMethods, Element],
					['aliasMethods', aliasMethods, HTMLDocument],
					['aliasGetters', aliasGetters, Node],
					['aliasGetters', aliasGetters, HTMLDocument]
				);

				return this;
			}
		}

	});

	/*=====  End of HTMLStockHelper  ======*/
	_global.HTMLStock = HTMLStock;

	return new HTMLStockHelper();
})(window);