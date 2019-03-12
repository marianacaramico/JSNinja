(function(){

  'use strict';
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.
  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.
  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false
  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  var $objString = Object.prototype.toString;
  var $arr = Array.prototype;

  function DOM(elements){
  	this.element = document.querySelectorAll(elements);
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
  
})();