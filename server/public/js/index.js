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
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	function test() {
	  var a = 1;
	  console.log(a);
	}
	//ES6新增了块级作用域的概念，所谓块级作用域所在的范围就是在大括号里面的作用域{}，
	// 而在大括号外面访问不到 如果在作用域外访问会报未定义的错误
	test();
	// console.log(a);  //a is no defined

	//ES6还增加了常量这个概念 常量的特点就是不能被改变
	var PI = 0;
	// PI = 3;  //这样会报错

	var obj = {
	  a: 1
	};
	obj.a = 2; //不会报错 在常量是对象的时候或者引用类型的时候 可以改变或者添加属性都是可以的
	console.log(obj);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	//解构赋值 是es6新增的更加快捷的定义变量的一种定义方式
	//主要是数组解构赋值和对象解构赋值
	{
	  var a = void 0,
	      b = void 0,
	      c = void 0;

	  // console.log(a,b);
	  // console.log(c)
	  a = 1;
	  b = 2;
	}
	{
	  var _a = void 0,
	      _b = void 0,
	      _c = void 0;

	  // console.log(a,b,c); //a = 1 b =2 默认值c =3,4,5,6,7,8
	  // console.log(c)
	  _a = 1;
	  _b = 2;
	  _c = [3, 4, 5, 6, 7, 8];
	}
	{
	  var _a2 = void 0,
	      _b2 = void 0;

	  // console.log(a,b) //a =1 ;b =2
	  var _a$b = { a: 1, b: 2 };
	  _a2 = _a$b.a;
	  _b2 = _a$b.b;
	}
	//默认值
	{
	  var _a3 = void 0,
	      _b3 = void 0,
	      _c2 = void 0;

	  // console.log(a,b,c); //1,2,undefinde
	  var _ref = [1, 2];
	  _a3 = _ref[0];
	  _b3 = _ref[1];
	  _c2 = _ref[2];
	}
	{
	  var _a4 = void 0,
	      _b4 = void 0,
	      _c3 = void 0;

	  // console.log(a,b,c); //1,2,3
	  var _ref2 = [1, 2];
	  _a4 = _ref2[0];
	  _b4 = _ref2[1];
	  var _ref2$ = _ref2[2];
	  _c3 = _ref2$ === undefined ? 3 : _ref2$;
	}
	//那么解构赋值一般用在什么场景呢
	{
	  //便于变量的交换
	  var _a5 = 1;
	  var _b5 = 2;
	  var _ref3 = [_b5, _a5];
	  _a5 = _ref3[0];
	  _b5 = _ref3[1];

	  console.log(_a5, _b5); //2,1
	}
	{
	  //接受函数返回的多个值
	  var f = function f() {
	    return [1, 2];
	  };

	  var _a6 = void 0,
	      _b6 = void 0;

	  // console.log(a,b) //1,2

	  var _f = f();

	  var _f2 = _slicedToArray(_f, 2);

	  _a6 = _f2[0];
	  _b6 = _f2[1];
	}
	{
	  //当一个函数返回多个 值得 可以选择性的接受值
	  var _f3 = function _f3() {
	    return [1, 2, 3, 4, 5];
	  };

	  var _a7 = void 0,
	      _b7 = void 0,
	      _c4 = void 0;

	  //a = 1; //三个逗号之间有两个值，但是忽略了 我只想要接受第四个值  b=4
	  var _f4 = _f3();

	  var _f5 = _slicedToArray(_f4, 4);

	  _a7 = _f5[0];
	  _b7 = _f5[3];
	  console.log(_a7, _b7); //1,4
	}

	{
	  //这个场景就是不清楚一个函数返回多少个值 我只想要第一个值  其余的返回一个数组
	  var _f6 = function _f6() {
	    return [1, 2, 3, 4, 5];
	  };

	  var _a8 = void 0,
	      _b8 = void 0,
	      _c5 = void 0;

	  var _f7 = _f6();

	  var _f8 = _toArray(_f7);

	  _a8 = _f8[0];
	  _b8 = _f8.slice(1);

	  console.log(_a8, _b8);
	}

	//对象结构赋值  等号左右都是一个对象 根据key value进行匹配
	{
	  var o = { p: 42, q: true };
	  var p = o.p,
	      q = o.q;

	  console.log(p, q, o);
	}
	{
	  //对象解构赋值的对默认值的处理
	  var _a10 = { a: 3 },
	      _a10$a = _a10.a,
	      _a9 = _a10$a === undefined ? 10 : _a10$a,
	      _a10$b = _a10.b,
	      _b9 = _a10$b === undefined ? 5 : _a10$b;

	  console.log(_a9, _b9); //a=3 b =5;
	}
	{
	  //对象解构赋值应用场景  感觉这个很有用
	  var obj = {
	    title: "kkc",
	    test: [{
	      title: "abc"
	    }]
	    //我想要取出obj这个对象的两个title赋值给两个变量 如果是es5的话 是这样写的
	    // let title1 = obj.title;
	    // let title2 = obj.test[0].title;
	    //但是es6语法只需要一行代码 简单明了赋值的时候大括号里面的解构一定要和取值的对象的解构一样
	  };
	  var title1 = obj.title,
	      _obj$test = _slicedToArray(obj.test, 1),
	      title2 = _obj$test[0].title;

	  console.log(title1, title2);
	}

/***/ })
/******/ ]);