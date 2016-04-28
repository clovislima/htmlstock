# HTMLStock
A class based on NodeList/HTMLCollection classes that proxies some Element methods like addEventListener, remove, classList 

## Constructor
Receives as argument an Array-like object containing HTMLElements or a Number that will serve as the size of the HTMLStock.
The length and numeric indexed properties will be ready-only as in NodeList/HTMLCollection classes. 

### Methods
Copied from Array.prototype
* _forEach
* _reduce
* _reduceRight
* _every
* _some
* _includes

Same as Array but returning a HTMLStock instead of an Array
* _map
* _filter

Proxy to HTMLStock instance's elements
* _addEventListener
* _listen
* _removeEventListener
* _unlisten
* _remove
* _insterAdjacentHTML
* _classList
	* An instance of HTMLStockClassList
	* _add
	* _toggle
	* _remove

### HTMLStockClassList
The methods _add, _toggle and _remove are chainable

## Native Extensions
The following methods/properties are skins of their counterparts that return a HTMLStock instead a NodeList or HTMLCollection. The Methods applied by HTMLStock will be marked with an underscore. eg: _querySelectorAll
* _querySelectorAll
* _findAll
* _children
* _childNodes

### Other Methods/Properties
* Node.prototype._parents
	* Gather all parent tags before the HTML tag in a HTMLStock
* Object._extend
	* return a new Object with the value of all objects passed as arguments reducing to the left 
* Object._extendRight
	* return a new Object with the value of all objects passed as arguments reducing to the right
