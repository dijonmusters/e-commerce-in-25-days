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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/static-gen.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/static-gen.js":
/*!*****************************!*\
  !*** ./pages/static-gen.js ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jon/code/e-commerce-in-25-days/11-next-ssg/next-app/pages/static-gen.js\";\n\n\nconst url = \"https://pokeapi.co/api/v2/pokemon?limit=151\";\nconst headers = {\n  \"Cache-Control\": \"no-cache\"\n};\n\nfunction HomePage({\n  pokemon\n}) {\n  return pokemon.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: pokemon.map(poke => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: poke.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"Height: \", poke.height, \" | Weight: \", poke.weight]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, this)]\n    }, poke.name, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\nconst getStaticProps = async () => {\n  const {\n    data\n  } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {\n    headers\n  });\n  const promises = data.results.map(result => {\n    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(result.url, {\n      headers\n    });\n  });\n  const results = await Promise.all(promises);\n  const pokeData = results.map(r => ({\n    name: r.data.name,\n    height: r.data.height,\n    weight: r.data.weight\n  }));\n  console.log(results);\n  return {\n    props: {\n      pokemon: pokeData\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdGF0aWMtZ2VuLmpzP2MwMjQiXSwibmFtZXMiOlsidXJsIiwiaGVhZGVycyIsIkhvbWVQYWdlIiwicG9rZW1vbiIsImxlbmd0aCIsIm1hcCIsInBva2UiLCJuYW1lIiwiaGVpZ2h0Iiwid2VpZ2h0IiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiYXhpb3MiLCJnZXQiLCJwcm9taXNlcyIsInJlc3VsdHMiLCJyZXN1bHQiLCJQcm9taXNlIiwiYWxsIiwicG9rZURhdGEiLCJyIiwiY29uc29sZSIsImxvZyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLEdBQUcsR0FBRyw2Q0FBWjtBQUNBLE1BQU1DLE9BQU8sR0FBRztBQUNkLG1CQUFpQjtBQURILENBQWhCOztBQUlBLFNBQVNDLFFBQVQsQ0FBa0I7QUFBRUM7QUFBRixDQUFsQixFQUErQjtBQUM3QixTQUFPQSxPQUFPLENBQUNDLE1BQVIsR0FBaUIsQ0FBakIsZ0JBQ0w7QUFBQSxjQUNHRCxPQUFPLENBQUNFLEdBQVIsQ0FBYUMsSUFBRCxpQkFDWDtBQUFBLDhCQUNFO0FBQUEsa0JBQUlBLElBQUksQ0FBQ0M7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLCtCQUNXRCxJQUFJLENBQUNFLE1BRGhCLGlCQUNtQ0YsSUFBSSxDQUFDRyxNQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLE9BQVVILElBQUksQ0FBQ0MsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREssZ0JBWUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFaRjtBQWNEOztBQUVNLE1BQU1HLGNBQWMsR0FBRyxZQUFZO0FBQ3hDLFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVWIsR0FBVixFQUFlO0FBQUVDO0FBQUYsR0FBZixDQUF2QjtBQUVBLFFBQU1hLFFBQVEsR0FBR0gsSUFBSSxDQUFDSSxPQUFMLENBQWFWLEdBQWIsQ0FBa0JXLE1BQUQsSUFBWTtBQUM1QyxXQUFPSiw0Q0FBSyxDQUFDQyxHQUFOLENBQVVHLE1BQU0sQ0FBQ2hCLEdBQWpCLEVBQXNCO0FBQUVDO0FBQUYsS0FBdEIsQ0FBUDtBQUNELEdBRmdCLENBQWpCO0FBSUEsUUFBTWMsT0FBTyxHQUFHLE1BQU1FLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaLENBQXRCO0FBRUEsUUFBTUssUUFBUSxHQUFHSixPQUFPLENBQUNWLEdBQVIsQ0FBYWUsQ0FBRCxLQUFRO0FBQ25DYixRQUFJLEVBQUVhLENBQUMsQ0FBQ1QsSUFBRixDQUFPSixJQURzQjtBQUVuQ0MsVUFBTSxFQUFFWSxDQUFDLENBQUNULElBQUYsQ0FBT0gsTUFGb0I7QUFHbkNDLFVBQU0sRUFBRVcsQ0FBQyxDQUFDVCxJQUFGLENBQU9GO0FBSG9CLEdBQVIsQ0FBWixDQUFqQjtBQU1BWSxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsT0FBWjtBQUVBLFNBQU87QUFDTFEsU0FBSyxFQUFFO0FBQ0xwQixhQUFPLEVBQUVnQjtBQURKO0FBREYsR0FBUDtBQUtELENBdEJNO0FBd0JRakIsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zdGF0aWMtZ2VuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCB1cmwgPSBcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTFcIjtcbmNvbnN0IGhlYWRlcnMgPSB7XG4gIFwiQ2FjaGUtQ29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXG59O1xuXG5mdW5jdGlvbiBIb21lUGFnZSh7IHBva2Vtb24gfSkge1xuICByZXR1cm4gcG9rZW1vbi5sZW5ndGggPiAwID8gKFxuICAgIDxkaXY+XG4gICAgICB7cG9rZW1vbi5tYXAoKHBva2UpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3Bva2UubmFtZX0+XG4gICAgICAgICAgPHA+e3Bva2UubmFtZX08L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBIZWlnaHQ6IHtwb2tlLmhlaWdodH0gfCBXZWlnaHQ6IHtwb2tlLndlaWdodH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7IGhlYWRlcnMgfSk7XG5cbiAgY29uc3QgcHJvbWlzZXMgPSBkYXRhLnJlc3VsdHMubWFwKChyZXN1bHQpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHJlc3VsdC51cmwsIHsgaGVhZGVycyB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICBjb25zdCBwb2tlRGF0YSA9IHJlc3VsdHMubWFwKChyKSA9PiAoe1xuICAgIG5hbWU6IHIuZGF0YS5uYW1lLFxuICAgIGhlaWdodDogci5kYXRhLmhlaWdodCxcbiAgICB3ZWlnaHQ6IHIuZGF0YS53ZWlnaHQsXG4gIH0pKTtcblxuICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb2tlbW9uOiBwb2tlRGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/static-gen.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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