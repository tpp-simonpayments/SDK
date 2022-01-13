/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sdk"] = factory();
	else
		root["sdk"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_PAYMENT_URL\": () => (/* binding */ APP_PAYMENT_URL)\n/* harmony export */ });\nvar APP_PAYMENT_URL = \"http://localhost:8080\";\n\n//# sourceURL=webpack://sdk/./src/config/constants.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateParamsString\": () => (/* binding */ generateParamsString),\n/* harmony export */   \"generatePaymentUrl\": () => (/* binding */ generatePaymentUrl)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/constants */ \"./src/config/constants.js\");\n\nvar generateParamsString = function generateParamsString() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var result = \"?params=\".concat(JSON.stringify(params));\n  return result;\n};\nvar generatePaymentUrl = function generatePaymentUrl(appKey, query) {\n  return \"\".concat(_config_constants__WEBPACK_IMPORTED_MODULE_0__.APP_PAYMENT_URL, \"/\").concat(appKey).concat(query);\n};\n\n//# sourceURL=webpack://sdk/./src/helpers/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Triple)\n/* harmony export */ });\n/* harmony import */ var _renderUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderUI */ \"./src/renderUI/index.js\");\n/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ \"./src/messenger/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\nvar Triple = /*#__PURE__*/function () {\n  function Triple(apiKey) {\n    _classCallCheck(this, Triple);\n\n    this.appKey = apiKey;\n  }\n\n  _createClass(Triple, [{\n    key: \"generatePaymentForm\",\n    value: function generatePaymentForm(_ref) {\n      var containerSelector = _ref.containerSelector,\n          amount = _ref.amount,\n          _ref$onError = _ref.onError,\n          onError = _ref$onError === void 0 ? function () {} : _ref$onError,\n          _ref$onSuccess = _ref.onSuccess,\n          onSuccess = _ref$onSuccess === void 0 ? function () {} : _ref$onSuccess,\n          newWindow = _ref.newWindow;\n\n      if (this.element) {\n        return;\n      }\n\n      this.containerSelector = containerSelector;\n      this.amount = amount; // this.transactionId = transactionId;\n      // this.ticket = ticket;\n      // this.meta = meta;\n\n      this.iframe = null;\n      this.onError = onError;\n      this.onSuccess = onSuccess;\n      this.element = null;\n      this.newWindow = newWindow; // this.onSuccessUrl = onSuccessUrl;\n      // this.onFailedUrl = onFailedUrl;\n\n      this.init();\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.amount = null;\n      this.transactionId = null;\n      this.ticket = null;\n      this.meta = null;\n      this.iframe = null;\n      this.onError = null;\n      this.onSuccess = null;\n      this.newWindow = null; // this.onSuccessUrl = null;\n      // this.onFailedUrl = null;\n      // const element = this.getDomElement();\n      // element.remove();\n\n      this.element = null;\n      this.containerSelector = null;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (!this.newWindow) {\n        this.useIframe();\n        return;\n      }\n    }\n  }, {\n    key: \"processPayment\",\n    value: function processPayment() {\n      var _this = this;\n\n      if (!this.newWindow) {\n        return;\n      }\n\n      var queryParams = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.generateParamsString)({\n        amount: this.amount,\n        // transactionId: this.transactionId,\n        // meta: this.meta,\n        // ticket: this.ticket,\n        // onSuccessUrl: this.onSuccessUrl,\n        // onFailedUrl: this.onFailedUrl,\n        location: window.location.href,\n        newWindow: true\n      });\n      var paymentUrl = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.generatePaymentUrl)(this.appKey, queryParams);\n      var newWindow = window.open(paymentUrl, null, 'left=100,top=100,width=520,height=400');\n\n      window.onmessage = function (e) {\n        if (e.origin !== _config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_PAYMENT_URL) {\n          return;\n        }\n\n        var parsed = JSON.parse(e.data || '{}');\n\n        if (parsed.status) {\n          _this.onSuccess(parsed);\n\n          newWindow.close();\n        } else {\n          _this.onError(parsed);\n        }\n      };\n    }\n  }, {\n    key: \"getDomElement\",\n    value: function getDomElement() {\n      var element = document.querySelector(this.containerSelector);\n\n      if (!element) {\n        throw new Error(\"Such container doesn't exist\");\n      }\n\n      return element;\n    }\n  }, {\n    key: \"useIframe\",\n    value: function useIframe() {\n      var element = this.getDomElement();\n      this.element = element;\n      this.iframe = (0,_renderUI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.appKey, {\n        amount: this.amount // transactionId: this.transactionId,\n        // meta: this.meta,\n        // ticket: this.ticket,\n\n      });\n      this.createMessenger();\n    }\n  }, {\n    key: \"createMessenger\",\n    value: function createMessenger() {\n      this.messenger = new _messenger__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        iframe: this.iframe,\n        messageHandler: this.handleIncomingMessage.bind(this)\n      });\n      this.messenger.subscribe();\n    }\n  }, {\n    key: \"handleIncomingMessage\",\n    value: function handleIncomingMessage(e) {\n      var data = JSON.parse(e.data || '{}');\n      var id = data.payload;\n\n      if (data.action === 'error') {\n        this.onError({\n          transactionId: id\n        });\n        return;\n      }\n\n      if (data.action === 'success') {\n        this.onSuccess({\n          transactionId: id\n        });\n        return;\n      }\n    }\n  }]);\n\n  return Triple;\n}();\n\n\n\nif (window && !window.Triple) {\n  window.Triple = Triple;\n}\n\n//# sourceURL=webpack://sdk/./src/index.js?");

/***/ }),

/***/ "./src/messenger/index.js":
/*!********************************!*\
  !*** ./src/messenger/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Messenger = /*#__PURE__*/function () {\n  function Messenger(_ref) {\n    var iframe = _ref.iframe,\n        messageHandler = _ref.messageHandler;\n\n    _classCallCheck(this, Messenger);\n\n    this.iframe = iframe;\n    this.messageHandler = messageHandler;\n  }\n\n  _createClass(Messenger, [{\n    key: \"send\",\n    value: function send(data) {\n      if (!this.iframe) {\n        throw new Error('Iframe is not selected');\n      }\n\n      this.iframe.contentWindow.postMessage(data, '*');\n    }\n  }, {\n    key: \"subscribe\",\n    value: function subscribe() {\n      window.onmessage = this.messageHandler;\n    }\n  }, {\n    key: \"unsubscribe\",\n    value: function unsubscribe() {\n      window.onmessage = function () {};\n    }\n  }]);\n\n  return Messenger;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Messenger);\n\n//# sourceURL=webpack://sdk/./src/messenger/index.js?");

/***/ }),

/***/ "./src/renderUI/index.js":
/*!*******************************!*\
  !*** ./src/renderUI/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../helpers */ \"./src/helpers/index.js\");\n\nvar elementStyle = 'width: 500px; min-height: 300px; border: none; max-width: 100vw;';\n\nvar generateTemplate = function generateTemplate(appKey, query) {\n  var iframe = document.createElement('iframe');\n  iframe.style = elementStyle;\n  iframe.src = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generatePaymentUrl)(appKey, query);\n  return iframe;\n};\n\nvar renderUI = function renderUI(element, appKey, params) {\n  element.innerHTML = '';\n  var query = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateParamsString)(params);\n  var iframe = generateTemplate(appKey, query);\n  element.appendChild(iframe);\n  return iframe;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderUI);\n\n//# sourceURL=webpack://sdk/./src/renderUI/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});