(function(win, doc){

  'use strict';

  var $objString = Object.prototype.toString;
  var $arr = Array.prototype;

  function DOM(elements){
  	this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback){
    $arr.forEach.call(this.element, function(element){
  	  element.addEventListener(eventType, callback, false);  		
  	});
  };

  DOM.prototype.off = function off(eventType, callback){
    $arr.forEach.call(this.element, function(element){
  	  element.removeEventListener(eventType, callback, false);
  	});
  };

  DOM.prototype.get = function get(){
  	return this.element;
  };

  DOM.prototype.forEach = function forEach(){
    return $arr.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map(){
    return $arr.map.apply(this.element, arguments);
  };
  
  DOM.prototype.filter = function filter(){
    return $arr.filter.apply(this.element, arguments);
  };
  
  DOM.prototype.reduce = function reduce(){
    return $arr.reduce.apply(this.element, arguments);
  };
  
  DOM.prototype.reduceRight = function reduceRight(){
    return $arr.reduceRight.apply(this.element, arguments);
  };
  
  DOM.prototype.every = function every(){
    return $arr.every.apply(this.element, arguments);
  };
  
  DOM.prototype.some = function some(){
    return $arr.some.apply(this.element, arguments);
  };

  DOM.prototype.isArray = function isArray(param){
    return $objString.call(param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(param){
    return $objString.call(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param){
    return $objString.call(param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param){
    return $objString.call(param) === '[object Number]';
  };

  DOM.prototype.isString = function isString(param){
    return $objString.call(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param){
    return $objString.call(param) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param){
    return $objString.call(param) === '[object Null]' || $objString.call(param) === '[object Undefined]';
  };

  win.DOM = DOM;

})(window, document);