/**
 * @todo Resolve getter and setter behaviour of properties like textContent and innerHTML.
 */
(function HTMLStockInitiator(_global) {
	'strict mode';


	/*==========================================
	=           	 HTMLStock                 =
	==========================================*/

	/**
	 * HTMLStock is an abstraction of HTMLCollection and NodeList Classes to be used
	 * @class HTMLStock
	 * @public
	 * @param {object} arrayLike - A NodeList, HTMLCollection or an Array Like object containing HTMLElements or undefined properties
	 * @this HTMLStock
	 * @since 0.1.0
	 */
	function HTMLStock(arrLike) {
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

		/**
		 * HTMLStock._classList an instance of HTMLStockClassList
		 * @property HTMLStock#_classList
		 * @public
		 * @return HTMLStockClassList
		 * @since 0.1.0
		 */
		Object.defineProperty(this, '_classList', {
			value: new HTMLStockClassList(this)
		});

		return this;
	}

	Object.defineProperties(HTMLStock.prototype, {
		/**
		 * HTMLStock._map is an abstraction of Array's map that returns a HTMLStock instance instead of an Array
		 * @function HTMLStock.prototype#_map
		 * @public
		 * @param {function} func - A function that will be used on every element of the HTMLStock
		 * @param {object} _this - An object to be passed as the function's context
		 * @this HTMLStock
		 * @return HTMLStock
		 * @since 0.1.0
		 */
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

		/**
		 * HTMLStock._filter is an abstraction of Array's filter that returns a HTMLStock instance instead of an Array
		 * @function HTMLStock.prototype#_filter
		 * @public
		 * @param {function} func - A function that will be used to validate every element of the HTMLStock, it will keep the elements that return truthfully in the function execution
		 * @param {object} _this - An object to be passed as the function's context
		 * @this HTMLStock
		 * @return HTMLStock
		 * @since 0.1.0
		 */
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
	/**
	 * HTMLStockClassList is a proxy to access the classList property of the Elements inside the HTMLStock  
	 * @class HTMLStockClassList
	 * @public
	 * @param {HTMLStockClassList} instance - An initiated instance of HTMLStockClassList
	 * @this HTMLStockClassList
	 * @since 0.1.0
	 */
	function HTMLStockClassList(instance) {
		Object.defineProperty(this, 'instance', {
			value: instance
		});
	}
	
	/*=====  End of HTMLStockClassList  ======*/
	

	/*=======================================
	=            HTMLStockHelper            =
	=======================================*/
	
	/**
	 * Helper that copies some methods from other prototypes, as well create some of HTMLStock methods  
	 * @class HTMLStockHelper
	 * @public
	 * @param {HTMLStockClassList} instance - An initiated instance of HTMLStockClassList
	 * @this HTMLStockClassList
	 * @since 0.1.0
	 */
	function HTMLStockHelper() {
		return this.extendNative()
					.callMethods(
						/**
						 * HTMLStock._reduce is an implementation of Array.prototype.reduce for HTMLStock
						 * @function HTMLStock.prototype#_reduce
						 * @public
						 * @param {function} func - Function to execute on each value 
						 * @param [initialValue] - Optional. Value to use as the first argument to the first call of the callback.
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._reduceRight is an implementation of Array.prototype.reduceRight for HTMLStock
						 * @function HTMLStock.prototype#_reduceRight
						 * @public
						 * @param {function} func - Function to execute on each value 
						 * @param [initialValue] - Optional. Value to use as the first argument to the first call of the callback.
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._forEach is an implementation of Array.prototype.forEach for HTMLStock
						 * @function HTMLStock.prototype#_forEach
						 * @public
						 * @param {function} func - Function to execute for each element
						 * @param [thisArg] - Optional. Value to use as this when executing callback.
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._every is an implementation of Array.prototype.every for HTMLStock
						 * @function HTMLStock.prototype#_every
						 * @public
						 * @param {function} func - Function to execute on each value 
						 * @param [thisArg] - Optional. Value to use as this when executing callback.
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._some is an implementation of Array.prototype.some for HTMLStock
						 * @function HTMLStock.prototype#_some
						 * @public
						 * @param {function} func - Function to test for each element 
						 * @param [thisArg] - Optional. Value to use as this when executing callback.
						 * @since 0.1.0
						 */
						['copyProto', ['forEach', 'reduce', 'reduceRight', 'every', 'some'], Array],

						/**
						 * HTMLStock._addEventListener is a proxy to use the HTMLStock's elements addEventListener
						 * @function HTMLStock.prototype#_addEventListener
						 * @public
						 * @param {string} type - A string representing the event type to listen for. 
						 * @param {function} func - The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.
						 * @param {object} [options] - An options object that specifies characteristics about the event listener
						 * @param {boolean} [useCapture] - A Boolean that indicates that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events that are bubbling upward through the tree will not trigger a listener designated to use capture. Event bubbling and capturing are two ways of propagating events that occur in an element that is nested within another element, when both elements have registered a handle for that event. The event propagation mode determines the order in which elements receive the event. See DOM Level 3 Events and JavaScript Event order for a detailed explanation. If not specified, useCapture defaults to false. 
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._listen is a proxy to use the HTMLStock's elements addEventListener
						 * @function HTMLStock.prototype#_listen
						 * @public
						 * @param {string} type - A string representing the event type to listen for. 
						 * @param {function} func - The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.
						 * @param {object} [options] - An options object that specifies characteristics about the event listener
						 * @param {boolean} [useCapture] - A Boolean that indicates that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events that are bubbling upward through the tree will not trigger a listener designated to use capture. Event bubbling and capturing are two ways of propagating events that occur in an element that is nested within another element, when both elements have registered a handle for that event. The event propagation mode determines the order in which elements receive the event. See DOM Level 3 Events and JavaScript Event order for a detailed explanation. If not specified, useCapture defaults to false. 
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._removeEventListener is a proxy to use the HTMLStock's elements removeEventListener
						 * @function HTMLStock.prototype#_removeEventListener
						 * @public
						 * @param {string} type - A string representing the event type to remove. 
						 * @param {function} func - The EventListener function to remove from the event target.
						 * @param {object} [options] - An options object that specifies characteristics about the event listener
						 * @param {boolean} [useCapture] - Specifies whether the EventListener to be removed is registered as a capturing listener or not. If this parameter is absent, a default value of false is assumed. 
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._unlisten is a proxy to use the HTMLStock's elements removeEventListener
						 * @function HTMLStock.prototype#_unlisten
						 * @public
						 * @param {string} type - A string representing the event type to remove. 
						 * @param {function} func - The EventListener function to remove from the event target.
						 * @param {object} [options] - An options object that specifies characteristics about the event listener
						 * @param {boolean} [useCapture] - Specifies whether the EventListener to be removed is registered as a capturing listener or not. If this parameter is absent, a default value of false is assumed. 
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._remove is a proxy to use the HTMLStock's childNodes remove
						 * @function HTMLStock.prototype#_remove
						 * @public
						 * @since 0.1.0
						 */

						/**
						 * HTMLStock._insertAdjacentHTML is a proxy to use the HTMLStock's elements insertAdjacentHTML
						 * @function HTMLStock.prototype#_insertAdjacentHTML
						 * @public
						 * @param {string} position - position is the position relative to the element. 
						 * @param {string} text - text is the string to be parsed as HTML or XML and inserted into the tree.
						 * @since 0.1.0
						 */

						['applyMethodToElements', [
							{alias: '_listen', prop: 'addEventListener'},
							'addEventListener',
							{alias: '_unlisten', prop: 'removeEventListener'},
							'removeEventListener',
							'remove',
							'insertAdjacentHTML'
						]],

						/**
						 * HTMLStockClassList._add is a proxy to use the HTMLStock's elements classList.add
						 * @function HTMLStockClassList.prototype#_add
						 * @public
						 * @param {string[]} classes - Class values. If these classes already exist in attribute of the element, then they are ignored. 
						 * @since 0.1.0
						 */

						/**
						 * HTMLStockClassList._remove is a proxy to use the HTMLStock's elements classList.remove
						 * @function HTMLStockClassList.prototype#_remove
						 * @public
						 * @param {string[]} classes - Class values. 
						 * @since 0.1.0
						 */

						/**
						 * HTMLStockClassList._toggle is a proxy to use the HTMLStock's elements classList.toggle
						 * @function HTMLStockClassList.prototype#_toggle
						 * @public
						 * @param {string[]} classes - Class values. When only one argument is present: Toggle class value; i.e., if class exists then remove it, if not, then add it. When a second argument is present: If the second argument is true, add specified class value, and if it is false, remove it.
						 * @since 0.1.0
						 */
						['buildHTMLStockClassListProto', [
							'add', 'toggle', 'remove'
						]]
					);
	}

	Object.defineProperties(HTMLStockHelper.prototype, {
		/**
		 * Proxy a given property to every classList HTMLStock HTMLElements
		 * @function HTMLStockHelper.prototype#buildHTMLStockClassListProto
		 * @public
		 * @param {string} prop - The property name that will be proxied HTMLStock elements
		 * @since 0.1.0
		 */
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

		/**
		 * Proxy a given method to every HTMLStock HTMLElements
		 * @function HTMLStockHelper.prototype#applyMethodToElements
		 * @public
		 * @param {(string|object)} conf - An object with the alias and prop names, if as string is passed then the alias will be the same but with a _ (underscore) in front of it
		 * @param {string} [_classMethod] - A classMethod name that can be passed on so the property will be accessed
		 * @return HTMLStockHelper
		 * @since 0.1.0
		 */
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

		/**
		 * Proxy a given value to every HTMLStock HTMLElements through a setter
		 * @function HTMLStockHelper.prototype#applySetterToElements
		 * @public
		 * @param {(string|object)} conf - An object with the alias and prop names, if as string is passed then the alias will be the same but with a _ (underscore) in front of it
		 * @return HTMLStockHelper
		 * @since 0.1.0
		 */
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

		/**
		 * A factory for aliases methods for a Class that will use the original Class methods but return a HTMLStock
		 * @function HTMLStockHelper.prototype#aliasMethods
		 * @public
		 * @param {(string|object)} propObj - An object with the alias and prop names, if as string is passed then the alias will be the same but with a _ (underscore) in front of it
		 * @param {function} _class - A Class that will have the alias builtin
		 * @return HTMLStockHelper
		 * @since 0.1.0
		 */
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

		/**
		 * A factory for aliases getters for a Class that will use the original Class getter but return a HTMLStock
		 * @function HTMLStockHelper.prototype#aliasGetters
		 * @public
		 * @param {(string|object)} propObj - An object with the alias and prop names, if as string is passed then the alias will be the same but with a _ (underscore) in front of it
		 * @param {function} _class - A Class that will have the alias builtin
		 * @return HTMLStockHelper
		 * @since 0.1.0
		 */
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

		/**
		 * Copy properties from a Class.prototype to HTMLStock.prototype
		 * @function HTMLStockHelper.prototype#copyProto
		 * @public
		 * @param {string} prop - the target property
		 * @param {function} _class - A Class that will have its prototype property copied
		 * @return HTMLStockHelper
		 * @since 0.1.0
		 */
		copyProto: {
			value: function copyProto(prop, _class) {
				Object.defineProperty(HTMLStock.prototype, '_' + prop, {
					value: _class.prototype[prop]
				});

				return this;
			}
		},

		/**
		 * Delegates a method based on the arguments passed
		 * @function HTMLStockHelper.prototype#callMethods
		 * @public
		 * @return HTMLStockHelper
		 * @since 0.1.0
		 */
		callMethods: {
			value: function callMethods() {
				for (var i = 0, len = arguments.length; i < len; i++) /*do*/ this.delegateCall.apply(this, arguments[i]);
				return this;
			}
		},

		/**
		 * Calls a method passing the properties and the class that will be used by it
		 * @function HTMLStockHelper.prototype#delegateCall
		 * @public
		 * @param {string} delegated - HTMLStockHelper method that will be called
		 * @param {Array} props - An array with strings or objects with the property/alias that will be passed to the method
		 * @param {function} _class - The target Class
		 * @return HTMLStockHelper
		 * @since 0.1.0
		 */
		delegateCall: {
			value: function delegateCall(delegated, props, _class) {
				for (var i = props.length - 1; i >= 0; i--) /*do*/ this[delegated].call(this, props[i], _class);
				return this;
			}
		},

		/**
		 * Extend some Native Classes and prototypes like Element, Node and HTMLDocument
		 * @function HTMLStockHelper.prototype#extendNative
		 * @public
		 * @since 0.1.0
		 */
		extendNative: {
			value: function extendNative() {

				/*----------  Extending Node  ----------*/
 				Object.defineProperties(Node.prototype, {
					/**
					 * Returns all parentNodes from an Element until it reaches the HTMLBodyElement
					 * @function Node.prototype#_parents
					 * @public
					 * @this HTMLElement
					 * @return HTMLStock
					 * @since 0.1.0
					 */
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

				this.callMethods(
					/**
					 * The Element interface represents an object of a Document. This interface describes methods and properties common to all kinds of elements. Specific behaviors are described in interfaces which inherit from Element but add additional functionality. For example, the HTMLElement interface is the base interface for HTML elements, while the SVGElement interface is the basis for all SVG elements.
					 * @class Element
					 * @public
					 */
					/**
					 * A querySelectorAll alias that returns a HTMLStock instead of NodeList
					 * @function Element.prototype#_querySelectorAll
					 * @public
					 * @return HTMLStock
					 * @since 0.1.0
					 */
					/**
					 * A querySelectorAll alias that returns a HTMLStock instead of NodeList
					 * @function Element.prototype#_findAll
					 * @public
					 * @return HTMLStock
					 * @since 0.1.0
					 */

					/**
					 * A Node is an interface from which a number of DOM types inherit, and allows these various types to be treated (or tested) similarly.
					 * @class Node
					 * @public
					 */
					/**
					 * A children alias that returns a HTMLStock instead of HTMLCollection
					 * @function Node.prototype#_children
					 * @public
					 * @return HTMLStock
					 * @since 0.1.0
					 */
					/**
					 * A childNodes alias that returns a HTMLStock instead of HTMLCollection
					 * @function Node.prototype#_childNodes
					 * @public
					 * @return HTMLStock
					 * @since 0.1.0
					 */

					/**
					 * HTMLDocument is an abstract interface of the DOM which provides access to special properties and methods not present by default on a regular (XML) document.
					 * @class HTMLDocument
					 * @public
					 */
					/**
					 * A querySelectorAll alias that returns a HTMLStock instead of NodeList
					 * @function HTMLDocument.prototype#_querySelectorAll
					 * @public
					 * @return HTMLStock
					 * @since 0.1.0
					 */
					/**
					 * A querySelectorAll alias that returns a HTMLStock instead of NodeList
					 * @function HTMLDocument.prototype#_findAll
					 * @public
					 * @return HTMLStock
					 * @since 0.1.0
					 */
					/**
					 * A children alias that returns a HTMLStock instead of HTMLCollection
					 * @function HTMLDocument.prototype#_children
					 * @public
					 * @return HTMLStock
					 * @since 0.1.0
					 */
					/**
					 * A childNodes alias that returns a HTMLStock instead of HTMLCollection
					 * @function HTMLDocument.prototype#_childNodes
					 * @public
					 * @return HTMLStock
					 * @since 0.1.0
					 */
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