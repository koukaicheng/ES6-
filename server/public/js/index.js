/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */


/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);

/***/ }),


/***/ (function(module, exports) {

	"use strict";


	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


	function test() {
	  var a = 1;
	  console.log(a);
	}
	//ES6新增了块级作用域的概念，所谓块级作用域所在的范围就是在大括号里面的作用域{}，
	// 而在大括号外面访问不到 如果在作用域外访问会报未定义的错误
	test();
	// console.log(a);  //a is no defined


	var Text = function Text() {
	  _classCallCheck(this, Text);

	  this.a = "ssss";
	};

	var text = new Text();
	document.body.innerHTML = text.a;
=======
	  console.log(title1, title2);
	}
=======
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Text = function Text() {
	  _classCallCheck(this, Text);

	  this.a = "ssss";
	};

	var text = new Text();
	document.body.innerHTML = text.a;


/***/ })
/******/ ]);