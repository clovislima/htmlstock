[![Build Status](https://travis-ci.org/clovislima/htmlstock.svg?branch=master)](https://travis-ci.org/clovislima/htmlstock)
[![Dependencies](https://david-dm.org/clovislima/htmlstock.svg)](https://david-dm.org/clovislima/htmlstock)
## Classes

<dl>
<dt><a href="#HTMLStock">HTMLStock</a></dt>
<dd></dd>
<dt><a href="#HTMLStockClassList">HTMLStockClassList</a></dt>
<dd></dd>
<dt><a href="#HTMLStockHelper">HTMLStockHelper</a></dt>
<dd></dd>
<dt><a href="#Element">Element</a></dt>
<dd></dd>
<dt><a href="#Node">Node</a></dt>
<dd></dd>
<dt><a href="#HTMLDocument">HTMLDocument</a></dt>
<dd></dd>
</dl>

<a name="HTMLStock"></a>

## HTMLStock
**Kind**: global class  
**this**: <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

* [HTMLStock](#HTMLStock)
    * [new HTMLStock(arrayLike)](#new_HTMLStock_new)
    * [._map(func, _this)](#HTMLStock++_map) ⇒
    * [._filter(func, _this)](#HTMLStock++_filter) ⇒
    * [._reduce(func, [initialValue])](#HTMLStock++_reduce)
    * [._reduceRight(func, [initialValue])](#HTMLStock++_reduceRight)
    * [._forEach(func, [thisArg])](#HTMLStock++_forEach)
    * [._every(func, [thisArg])](#HTMLStock++_every)
    * [._some(func, [thisArg])](#HTMLStock++_some)
    * [._addEventListener(type, func, [options], [useCapture])](#HTMLStock++_addEventListener)
    * [._listen(type, func, [options], [useCapture])](#HTMLStock++_listen)
    * [._removeEventListener(type, func, [options], [useCapture])](#HTMLStock++_removeEventListener)
    * [._unlisten(type, func, [options], [useCapture])](#HTMLStock++_unlisten)
    * [._remove()](#HTMLStock++_remove)
    * [._insertAdjacentHTML(position, text)](#HTMLStock++_insertAdjacentHTML)

<a name="new_HTMLStock_new"></a>

### new HTMLStock(arrayLike)
HTMLStock is an abstraction of HTMLCollection and NodeList Classes to be used


| Param | Type | Description |
| --- | --- | --- |
| arrayLike | <code>object</code> | A NodeList, HTMLCollection or an Array Like object containing HTMLElements or undefined properties |

<a name="HTMLStock++_map"></a>

### htmlStock._map(func, _this) ⇒
HTMLStock._map is an abstraction of Array's map that returns a HTMLStock instance instead of an Array

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Returns**: HTMLStock  
**this**: <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | A function that will be used on every element of the HTMLStock |
| _this | <code>object</code> | An object to be passed as the function's context |

<a name="HTMLStock++_filter"></a>

### htmlStock._filter(func, _this) ⇒
HTMLStock._filter is an abstraction of Array's filter that returns a HTMLStock instance instead of an Array

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Returns**: HTMLStock  
**this**: <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | A function that will be used to validate every element of the HTMLStock, it will keep the elements that return truthfully in the function execution |
| _this | <code>object</code> | An object to be passed as the function's context |

<a name="HTMLStock++_reduce"></a>

### htmlStock._reduce(func, [initialValue])
HTMLStock._reduce is an implementation of Array.prototype.reduce for HTMLStock

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function to execute on each value |
| [initialValue] |  | Optional. Value to use as the first argument to the first call of the callback. |

<a name="HTMLStock++_reduceRight"></a>

### htmlStock._reduceRight(func, [initialValue])
HTMLStock._reduceRight is an implementation of Array.prototype.reduceRight for HTMLStock

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function to execute on each value |
| [initialValue] |  | Optional. Value to use as the first argument to the first call of the callback. |

<a name="HTMLStock++_forEach"></a>

### htmlStock._forEach(func, [thisArg])
HTMLStock._forEach is an implementation of Array.prototype.forEach for HTMLStock

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function to execute for each element |
| [thisArg] |  | Optional. Value to use as this when executing callback. |

<a name="HTMLStock++_every"></a>

### htmlStock._every(func, [thisArg])
HTMLStock._every is an implementation of Array.prototype.every for HTMLStock

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function to execute on each value |
| [thisArg] |  | Optional. Value to use as this when executing callback. |

<a name="HTMLStock++_some"></a>

### htmlStock._some(func, [thisArg])
HTMLStock._some is an implementation of Array.prototype.some for HTMLStock

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | Function to test for each element |
| [thisArg] |  | Optional. Value to use as this when executing callback. |

<a name="HTMLStock++_addEventListener"></a>

### htmlStock._addEventListener(type, func, [options], [useCapture])
HTMLStock._addEventListener is a proxy to use the HTMLStock's elements addEventListener

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | A string representing the event type to listen for. |
| func | <code>function</code> | The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function. |
| [options] | <code>object</code> | An options object that specifies characteristics about the event listener |
| [useCapture] | <code>boolean</code> | A Boolean that indicates that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events that are bubbling upward through the tree will not trigger a listener designated to use capture. Event bubbling and capturing are two ways of propagating events that occur in an element that is nested within another element, when both elements have registered a handle for that event. The event propagation mode determines the order in which elements receive the event. See DOM Level 3 Events and JavaScript Event order for a detailed explanation. If not specified, useCapture defaults to false. |

<a name="HTMLStock++_listen"></a>

### htmlStock._listen(type, func, [options], [useCapture])
HTMLStock._listen is a proxy to use the HTMLStock's elements addEventListener

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | A string representing the event type to listen for. |
| func | <code>function</code> | The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function. |
| [options] | <code>object</code> | An options object that specifies characteristics about the event listener |
| [useCapture] | <code>boolean</code> | A Boolean that indicates that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events that are bubbling upward through the tree will not trigger a listener designated to use capture. Event bubbling and capturing are two ways of propagating events that occur in an element that is nested within another element, when both elements have registered a handle for that event. The event propagation mode determines the order in which elements receive the event. See DOM Level 3 Events and JavaScript Event order for a detailed explanation. If not specified, useCapture defaults to false. |

<a name="HTMLStock++_removeEventListener"></a>

### htmlStock._removeEventListener(type, func, [options], [useCapture])
HTMLStock._removeEventListener is a proxy to use the HTMLStock's elements removeEventListener

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | A string representing the event type to remove. |
| func | <code>function</code> | The EventListener function to remove from the event target. |
| [options] | <code>object</code> | An options object that specifies characteristics about the event listener |
| [useCapture] | <code>boolean</code> | Specifies whether the EventListener to be removed is registered as a capturing listener or not. If this parameter is absent, a default value of false is assumed. |

<a name="HTMLStock++_unlisten"></a>

### htmlStock._unlisten(type, func, [options], [useCapture])
HTMLStock._unlisten is a proxy to use the HTMLStock's elements removeEventListener

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | A string representing the event type to remove. |
| func | <code>function</code> | The EventListener function to remove from the event target. |
| [options] | <code>object</code> | An options object that specifies characteristics about the event listener |
| [useCapture] | <code>boolean</code> | Specifies whether the EventListener to be removed is registered as a capturing listener or not. If this parameter is absent, a default value of false is assumed. |

<a name="HTMLStock++_remove"></a>

### htmlStock._remove()
HTMLStock._remove is a proxy to use the HTMLStock's childNodes remove

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  
<a name="HTMLStock++_insertAdjacentHTML"></a>

### htmlStock._insertAdjacentHTML(position, text)
HTMLStock._insertAdjacentHTML is a proxy to use the HTMLStock's elements insertAdjacentHTML

**Kind**: instance method of <code>[HTMLStock](#HTMLStock)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>string</code> | position is the position relative to the element. |
| text | <code>string</code> | text is the string to be parsed as HTML or XML and inserted into the tree. |

<a name="HTMLStockClassList"></a>

## HTMLStockClassList
**Kind**: global class  
**this**: <code>[HTMLStockClassList](#HTMLStockClassList)</code>  
**Access:** public  
**Since**: 0.1.0  

* [HTMLStockClassList](#HTMLStockClassList)
    * [new HTMLStockClassList(instance)](#new_HTMLStockClassList_new)
    * [._add(classes)](#HTMLStockClassList++_add)
    * [._remove(classes)](#HTMLStockClassList++_remove)
    * [._toggle(classes)](#HTMLStockClassList++_toggle)

<a name="new_HTMLStockClassList_new"></a>

### new HTMLStockClassList(instance)
HTMLStockClassList is a proxy to access the classList property of the Elements inside the HTMLStock


| Param | Type | Description |
| --- | --- | --- |
| instance | <code>[HTMLStockClassList](#HTMLStockClassList)</code> | An initiated instance of HTMLStockClassList |

<a name="HTMLStockClassList++_add"></a>

### htmlStockClassList._add(classes)
HTMLStockClassList._add is a proxy to use the HTMLStock's elements classList.add

**Kind**: instance method of <code>[HTMLStockClassList](#HTMLStockClassList)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| classes | <code>Array.&lt;string&gt;</code> | Class values. If these classes already exist in attribute of the element, then they are ignored. |

<a name="HTMLStockClassList++_remove"></a>

### htmlStockClassList._remove(classes)
HTMLStockClassList._remove is a proxy to use the HTMLStock's elements classList.remove

**Kind**: instance method of <code>[HTMLStockClassList](#HTMLStockClassList)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| classes | <code>Array.&lt;string&gt;</code> | Class values. |

<a name="HTMLStockClassList++_toggle"></a>

### htmlStockClassList._toggle(classes)
HTMLStockClassList._toggle is a proxy to use the HTMLStock's elements classList.toggle

**Kind**: instance method of <code>[HTMLStockClassList](#HTMLStockClassList)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| classes | <code>Array.&lt;string&gt;</code> | Class values. When only one argument is present: Toggle class value; i.e., if class exists then remove it, if not, then add it. When a second argument is present: If the second argument is true, add specified class value, and if it is false, remove it. |

<a name="HTMLStockHelper"></a>

## HTMLStockHelper
**Kind**: global class  
**this**: <code>[HTMLStockClassList](#HTMLStockClassList)</code>  
**Access:** public  
**Since**: 0.1.0  

* [HTMLStockHelper](#HTMLStockHelper)
    * [new HTMLStockHelper(instance)](#new_HTMLStockHelper_new)
    * [.buildHTMLStockClassListProto(prop)](#HTMLStockHelper++buildHTMLStockClassListProto)
    * [.applyMethodToElements(conf, [_classMethod])](#HTMLStockHelper++applyMethodToElements) ⇒
    * [.applySetterToElements(conf)](#HTMLStockHelper++applySetterToElements) ⇒
    * [.aliasMethods(propObj, _class)](#HTMLStockHelper++aliasMethods) ⇒
    * [.aliasGetters(propObj, _class)](#HTMLStockHelper++aliasGetters) ⇒
    * [.copyProto(prop, _class)](#HTMLStockHelper++copyProto) ⇒
    * [.callMethods()](#HTMLStockHelper++callMethods) ⇒
    * [.delegateCall(delegated, props, _class)](#HTMLStockHelper++delegateCall) ⇒
    * [.extendNative()](#HTMLStockHelper++extendNative)

<a name="new_HTMLStockHelper_new"></a>

### new HTMLStockHelper(instance)
Helper that copies some methods from other prototypes, as well create some of HTMLStock methods


| Param | Type | Description |
| --- | --- | --- |
| instance | <code>[HTMLStockClassList](#HTMLStockClassList)</code> | An initiated instance of HTMLStockClassList |

<a name="HTMLStockHelper++buildHTMLStockClassListProto"></a>

### htmlStockHelper.buildHTMLStockClassListProto(prop)
Proxy a given property to every classList HTMLStock HTMLElements

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | The property name that will be proxied HTMLStock elements |

<a name="HTMLStockHelper++applyMethodToElements"></a>

### htmlStockHelper.applyMethodToElements(conf, [_classMethod]) ⇒
Proxy a given method to every HTMLStock HTMLElements

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Returns**: HTMLStockHelper  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| conf | <code>string</code> &#124; <code>object</code> | An object with the alias and prop names, if as string is passed then the alias will be the same but with a _ (underscore) in front of it |
| [_classMethod] | <code>string</code> | A classMethod name that can be passed on so the property will be accessed |

<a name="HTMLStockHelper++applySetterToElements"></a>

### htmlStockHelper.applySetterToElements(conf) ⇒
Proxy a given value to every HTMLStock HTMLElements through a setter

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Returns**: HTMLStockHelper  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| conf | <code>string</code> &#124; <code>object</code> | An object with the alias and prop names, if as string is passed then the alias will be the same but with a _ (underscore) in front of it |

<a name="HTMLStockHelper++aliasMethods"></a>

### htmlStockHelper.aliasMethods(propObj, _class) ⇒
A factory for aliases methods for a Class that will use the original Class methods but return a HTMLStock

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Returns**: HTMLStockHelper  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| propObj | <code>string</code> &#124; <code>object</code> | An object with the alias and prop names, if as string is passed then the alias will be the same but with a _ (underscore) in front of it |
| _class | <code>function</code> | A Class that will have the alias builtin |

<a name="HTMLStockHelper++aliasGetters"></a>

### htmlStockHelper.aliasGetters(propObj, _class) ⇒
A factory for aliases getters for a Class that will use the original Class getter but return a HTMLStock

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Returns**: HTMLStockHelper  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| propObj | <code>string</code> &#124; <code>object</code> | An object with the alias and prop names, if as string is passed then the alias will be the same but with a _ (underscore) in front of it |
| _class | <code>function</code> | A Class that will have the alias builtin |

<a name="HTMLStockHelper++copyProto"></a>

### htmlStockHelper.copyProto(prop, _class) ⇒
Copy properties from a Class.prototype to HTMLStock.prototype

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Returns**: HTMLStockHelper  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>string</code> | the target property |
| _class | <code>function</code> | A Class that will have its prototype property copied |

<a name="HTMLStockHelper++callMethods"></a>

### htmlStockHelper.callMethods() ⇒
Delegates a method based on the arguments passed

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Returns**: HTMLStockHelper  
**Access:** public  
**Since**: 0.1.0  
<a name="HTMLStockHelper++delegateCall"></a>

### htmlStockHelper.delegateCall(delegated, props, _class) ⇒
Calls a method passing the properties and the class that will be used by it

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Returns**: HTMLStockHelper  
**Access:** public  
**Since**: 0.1.0  

| Param | Type | Description |
| --- | --- | --- |
| delegated | <code>string</code> | HTMLStockHelper method that will be called |
| props | <code>Array</code> | An array with strings or objects with the property/alias that will be passed to the method |
| _class | <code>function</code> | The target Class |

<a name="HTMLStockHelper++extendNative"></a>

### htmlStockHelper.extendNative()
Extend some Native Classes and prototypes like Element, Node and HTMLDocument

**Kind**: instance method of <code>[HTMLStockHelper](#HTMLStockHelper)</code>  
**Access:** public  
**Since**: 0.1.0  
<a name="Element"></a>

## Element
**Kind**: global class  
**Access:** public  

* [Element](#Element)
    * [new Element()](#new_Element_new)
    * [._querySelectorAll()](#Element++_querySelectorAll) ⇒
    * [._findAll()](#Element++_findAll) ⇒

<a name="new_Element_new"></a>

### new Element()
The Element interface represents an object of a Document. This interface describes methods and properties common to all kinds of elements. Specific behaviors are described in interfaces which inherit from Element but add additional functionality. For example, the HTMLElement interface is the base interface for HTML elements, while the SVGElement interface is the basis for all SVG elements.

<a name="Element++_querySelectorAll"></a>

### element._querySelectorAll() ⇒
A querySelectorAll alias that returns a HTMLStock instead of NodeList

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: HTMLStock  
**Access:** public  
**Since**: 0.1.0  
<a name="Element++_findAll"></a>

### element._findAll() ⇒
A querySelectorAll alias that returns a HTMLStock instead of NodeList

**Kind**: instance method of <code>[Element](#Element)</code>  
**Returns**: HTMLStock  
**Access:** public  
**Since**: 0.1.0  
<a name="Node"></a>

## Node
**Kind**: global class  
**Access:** public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Node.prototype._children | <code>[HTMLStock](#HTMLStock)</code> | A children alias that returns a HTMLStock instead of HTMLCollection |
| Node.prototype._childNodes | <code>[HTMLStock](#HTMLStock)</code> | A childNodes alias that returns a HTMLStock instead of HTMLCollection |


* [Node](#Node)
    * [new Node()](#new_Node_new)
    * [._parents()](#Node++_parents) ⇒

<a name="new_Node_new"></a>

### new Node()
A Node is an interface from which a number of DOM types inherit, and allows these various types to be treated (or tested) similarly.

<a name="Node++_parents"></a>

### node._parents() ⇒
Returns all parentNodes from an Element until it reaches the HTMLBodyElement

**Kind**: instance method of <code>[Node](#Node)</code>  
**Returns**: HTMLStock  
**this**: <code>HTMLElement</code>  
**Access:** public  
**Since**: 0.1.0  
<a name="HTMLDocument"></a>

## HTMLDocument
**Kind**: global class  
**Access:** public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| HTMLDocument.prototype._children | <code>[HTMLStock](#HTMLStock)</code> | A children alias that returns a HTMLStock instead of HTMLCollection |
| HTMLDocument.prototype._childNodes | <code>[HTMLStock](#HTMLStock)</code> | A childNodes alias that returns a HTMLStock instead of HTMLCollection |


* [HTMLDocument](#HTMLDocument)
    * [new HTMLDocument()](#new_HTMLDocument_new)
    * [._querySelectorAll()](#HTMLDocument++_querySelectorAll) ⇒
    * [._findAll()](#HTMLDocument++_findAll) ⇒

<a name="new_HTMLDocument_new"></a>

### new HTMLDocument()
HTMLDocument is an abstract interface of the DOM which provides access to special properties and methods not present by default on a regular (XML) document.

<a name="HTMLDocument++_querySelectorAll"></a>

### htmlDocument._querySelectorAll() ⇒
A querySelectorAll alias that returns a HTMLStock instead of NodeList

**Kind**: instance method of <code>[HTMLDocument](#HTMLDocument)</code>  
**Returns**: HTMLStock  
**Access:** public  
**Since**: 0.1.0  
<a name="HTMLDocument++_findAll"></a>

### htmlDocument._findAll() ⇒
A querySelectorAll alias that returns a HTMLStock instead of NodeList

**Kind**: instance method of <code>[HTMLDocument](#HTMLDocument)</code>  
**Returns**: HTMLStock  
**Access:** public  
**Since**: 0.1.0  
