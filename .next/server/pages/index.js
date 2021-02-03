module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Counter; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/ryota/Documents/react/next_app/components/Counter.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass Counter extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"msgStyle\", {\n      fontSize: \"16pt\",\n      backgroundColor: \"eef\",\n      padding: \"5px\"\n    });\n\n    this.state = {\n      counter: 0,\n      msg: 'counter: 0'\n    };\n    this.doAction = this.doAction.bind(this);\n  }\n\n  doAction() {\n    this.setState(state => {\n      const num = state.counter + 1;\n      return {\n        counter: num,\n        msg: \"counter:\" + num\n      };\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      onClick: this.doAction,\n      style: this.msgStyle,\n      children: this.state.msg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 12\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50ZXIuanM/Yjc4NSJdLCJuYW1lcyI6WyJDb3VudGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInN0YXRlIiwiY291bnRlciIsIm1zZyIsImRvQWN0aW9uIiwiYmluZCIsInNldFN0YXRlIiwibnVtIiwicmVuZGVyIiwibXNnU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxNQUFNQSxPQUFOLFNBQXNCQywrQ0FBdEIsQ0FBZ0M7QUFPM0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFPO0FBQ2QsVUFBTUEsS0FBTjs7QUFEYyxzQ0FOUjtBQUNOQyxjQUFRLEVBQUMsTUFESDtBQUVOQyxxQkFBZSxFQUFDLEtBRlY7QUFHTkMsYUFBTyxFQUFDO0FBSEYsS0FNUTs7QUFFZCxTQUFLQyxLQUFMLEdBQVk7QUFDUkMsYUFBTyxFQUFDLENBREE7QUFFUkMsU0FBRyxFQUFDO0FBRkksS0FBWjtBQUlBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0g7O0FBRURELFVBQVEsR0FBRTtBQUNOLFNBQUtFLFFBQUwsQ0FBZUwsS0FBRCxJQUFXO0FBQ3JCLFlBQU1NLEdBQUcsR0FBR04sS0FBSyxDQUFDQyxPQUFOLEdBQWdCLENBQTVCO0FBQ0EsYUFBUTtBQUNKQSxlQUFPLEVBQUVLLEdBREw7QUFFSkosV0FBRyxFQUFFLGFBQWFJO0FBRmQsT0FBUjtBQUlILEtBTkQ7QUFPSDs7QUFFREMsUUFBTSxHQUFFO0FBQ1Isd0JBQU87QUFBRyxhQUFPLEVBQUUsS0FBS0osUUFBakI7QUFBMkIsV0FBSyxFQUFFLEtBQUtLLFFBQXZDO0FBQUEsZ0JBQWtELEtBQUtSLEtBQUwsQ0FBV0U7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0M7O0FBNUIwQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ291bnRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIG1zZ1N0eWxlID17XG4gICAgICAgIGZvbnRTaXplOlwiMTZwdFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJlZWZcIixcbiAgICAgICAgcGFkZGluZzpcIjVweFwiXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgICAgICAgIGNvdW50ZXI6MCxcbiAgICAgICAgICAgIG1zZzonY291bnRlcjogMCcsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZG9BY3Rpb24oKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHN0YXRlLmNvdW50ZXIgKyAxO1xuICAgICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgY291bnRlcjogbnVtLFxuICAgICAgICAgICAgICAgIG1zZzogXCJjb3VudGVyOlwiICsgbnVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIDxwIG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259IHN0eWxlPXt0aGlzLm1zZ1N0eWxlfT57dGhpcy5zdGF0ZS5tc2d9PC9wPjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Counter.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Counter */ \"./components/Counter.js\");\n/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/Style */ \"./static/Style.js\");\n\nvar _jsxFileName = \"/Users/ryota/Documents/react/next_app/pages/index.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  children: [_static_Style__WEBPACK_IMPORTED_MODULE_2__[\"default\"], /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"Next.js\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Welcome to next.js!\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 21\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVlLGtGQUFLO0FBQUEsYUFDZkEscURBRGUsZUFFaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGZ0IsZUFHaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIZ0IsZUFJaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpnQixlQUtoQixxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFwQiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zdGF0aWMvU3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PjxkaXY+XG4gICAge3N0eWxlfVxuICAgIDxoMT5OZXh0LmpzPC9oMT5cbiAgICA8cD5XZWxjb21lIHRvIG5leHQuanMhPC9wPlxuICAgIDxociAvPlxuICAgIDxDb3VudGVyIC8+XG48L2Rpdj4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/ryota/Documents/react/next_app/static/Style.js\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n  children: `\n    body {\n        margin:10px;\n    }\n    h1 {\n        font-size:68pt;\n        font-weight:bold;\n        text-align:right;\n        letter-spacing:-8px;\n        color:#f0f0f0;\n        margin:-32px 0px;\n    }\n    p {\n        margin:0px;\n        color:#666;\n        font-size:16px;\n    }\n`\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 1,\n  columnNumber: 16\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanM/NzFhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFlO0FBQUEsWUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJlO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBZiIsImZpbGUiOiIuL3N0YXRpYy9TdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IDxzdHlsZT57YFxuICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46MTBweDtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6NjhwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6LThweDtcbiAgICAgICAgY29sb3I6I2YwZjBmMDtcbiAgICAgICAgbWFyZ2luOi0zMnB4IDBweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICAgIGNvbG9yOiM2NjY7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIH1cbmB9PC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });