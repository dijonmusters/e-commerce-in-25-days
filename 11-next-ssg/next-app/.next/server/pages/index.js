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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/jon/code/e-commerce-in-25-days/11-next-ssg/next-app/pages/index.js\";\n\n\nconst url = \"https://pokeapi.co/api/v2/pokemon?limit=151\";\nconst headers = {\n  \"Cache-Control\": \"no-cache\"\n};\n\nfunction HomePage(props) {\n  const {\n    0: pokemon,\n    1: setPokemon\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const fetchPokemon = async () => {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {\n        headers\n      });\n      const promises = data.results.map(result => {\n        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(result.url, {\n          headers\n        });\n      });\n      const results = await Promise.all(promises);\n      const pokeData = results.map(r => ({\n        name: r.data.name,\n        imageUrl: r.data.sprites.front_default\n      }));\n      setPokemon(pokeData);\n    };\n\n    fetchPokemon();\n  }, []);\n  return pokemon.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: pokemon.map(poke => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: poke.imageUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: poke.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, this)]\n    }, poke.name, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybCIsImhlYWRlcnMiLCJIb21lUGFnZSIsInByb3BzIiwicG9rZW1vbiIsInNldFBva2Vtb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoUG9rZW1vbiIsImRhdGEiLCJheGlvcyIsImdldCIsInByb21pc2VzIiwicmVzdWx0cyIsIm1hcCIsInJlc3VsdCIsIlByb21pc2UiLCJhbGwiLCJwb2tlRGF0YSIsInIiLCJuYW1lIiwiaW1hZ2VVcmwiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImxlbmd0aCIsInBva2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUcsNkNBQVo7QUFDQSxNQUFNQyxPQUFPLEdBQUc7QUFDZCxtQkFBaUI7QUFESCxDQUFoQjs7QUFJQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxZQUFZLEdBQUcsWUFBWTtBQUMvQixZQUFNO0FBQUVDO0FBQUYsVUFBVyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVYLEdBQVYsRUFBZTtBQUFFQztBQUFGLE9BQWYsQ0FBdkI7QUFFQSxZQUFNVyxRQUFRLEdBQUdILElBQUksQ0FBQ0ksT0FBTCxDQUFhQyxHQUFiLENBQWtCQyxNQUFELElBQVk7QUFDNUMsZUFBT0wsNENBQUssQ0FBQ0MsR0FBTixDQUFVSSxNQUFNLENBQUNmLEdBQWpCLEVBQXNCO0FBQUVDO0FBQUYsU0FBdEIsQ0FBUDtBQUNELE9BRmdCLENBQWpCO0FBSUEsWUFBTVksT0FBTyxHQUFHLE1BQU1HLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaLENBQXRCO0FBRUEsWUFBTU0sUUFBUSxHQUFHTCxPQUFPLENBQUNDLEdBQVIsQ0FBYUssQ0FBRCxLQUFRO0FBQ25DQyxZQUFJLEVBQUVELENBQUMsQ0FBQ1YsSUFBRixDQUFPVyxJQURzQjtBQUVuQ0MsZ0JBQVEsRUFBRUYsQ0FBQyxDQUFDVixJQUFGLENBQU9hLE9BQVAsQ0FBZUM7QUFGVSxPQUFSLENBQVosQ0FBakI7QUFLQWxCLGdCQUFVLENBQUNhLFFBQUQsQ0FBVjtBQUNELEtBZkQ7O0FBaUJBVixnQkFBWTtBQUNiLEdBbkJRLEVBbUJOLEVBbkJNLENBQVQ7QUFxQkEsU0FBT0osT0FBTyxDQUFDb0IsTUFBUixHQUFpQixDQUFqQixnQkFDTDtBQUFBLGNBQ0dwQixPQUFPLENBQUNVLEdBQVIsQ0FBYVcsSUFBRCxpQkFDWDtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFQSxJQUFJLENBQUNKO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUksSUFBSSxDQUFDTDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBLE9BQVVLLElBQUksQ0FBQ0wsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREssZ0JBVUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFWRjtBQVlEOztBQUVjbEIsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgdXJsID0gXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTUxXCI7XG5jb25zdCBoZWFkZXJzID0ge1xuICBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxufTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcbiAgY29uc3QgW3Bva2Vtb24sIHNldFBva2Vtb25dID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQb2tlbW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7IGhlYWRlcnMgfSk7XG5cbiAgICAgIGNvbnN0IHByb21pc2VzID0gZGF0YS5yZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiBheGlvcy5nZXQocmVzdWx0LnVybCwgeyBoZWFkZXJzIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgIGNvbnN0IHBva2VEYXRhID0gcmVzdWx0cy5tYXAoKHIpID0+ICh7XG4gICAgICAgIG5hbWU6IHIuZGF0YS5uYW1lLFxuICAgICAgICBpbWFnZVVybDogci5kYXRhLnNwcml0ZXMuZnJvbnRfZGVmYXVsdCxcbiAgICAgIH0pKTtcblxuICAgICAgc2V0UG9rZW1vbihwb2tlRGF0YSk7XG4gICAgfTtcblxuICAgIGZldGNoUG9rZW1vbigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBva2Vtb24ubGVuZ3RoID4gMCA/IChcbiAgICA8ZGl2PlxuICAgICAge3Bva2Vtb24ubWFwKChwb2tlKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtwb2tlLm5hbWV9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwb2tlLmltYWdlVXJsfSAvPlxuICAgICAgICAgIDxwPntwb2tlLm5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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