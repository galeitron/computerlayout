(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"));
	else if(typeof define === 'function' && define.amd)
		define(["framer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer")) : factory(root["Framer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./App.tsx\": \"./code/App.tsx\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./code sync recursive \\\\.(t|j)s(x?)|\\\\.css$\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlIHN5bmMgXFwuKHR8ailzKHgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb2RlIHN5bmMgcmVjdXJzaXZlIFxcLih0fGopcyh4Pyl8XFwuY3NzJC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9BcHAudHN4XCI6IFwiLi9jb2RlL0FwcC50c3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0cmV0dXJuIG1vZHVsZTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKCdDYW5ub3QgZmluZCBtb2R1bGUgXCInICsgcmVxICsgJ1wiLicpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vY29kZSBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih0fGopcyh4Pyl8XFxcXC5jc3MkXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code sync recursive \\.(t|j)s(x?)|\\.css$\n");

/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nexports.Bounce = framer_1.PropertyStore({\n    scale: 1,\n    onTap() {\n        window[\"__checkBudget__\"]();\n        this.scale.set(0.6);\n        framer_1.animate.spring(this.scale, 1);\n    }\n}, true);\nexports.Animation = framer_1.PropertyStore({\n    opacity: 1,\n    rotation: 0\n}, true);\nexports.Switch = framer_1.PropertyStore({\n    toggle: true,\n    onTap() {\n        window[\"__checkBudget__\"]();\n        framer_1.animate.spring(exports.Animation, {\n            opacity: this.toggle ? 0.5 : 1,\n            rotation: this.toggle ? 180 : 0\n        });\n        this.toggle = !this.toggle;\n    }\n});\nexports.__info__ = [{ name: \"Bounce\", type: \"store\" }, { name: \"Animation\", type: \"store\" }, { name: \"Switch\", type: \"store\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixnQ0FBZ0MsR0FBRyxtQ0FBbUMsR0FBRyxnQ0FBZ0MiLCJmaWxlIjoiLi9jb2RlL0FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmV4cG9ydHMuQm91bmNlID0gZnJhbWVyXzEuUHJvcGVydHlTdG9yZSh7XG4gICAgc2NhbGU6IDEsXG4gICAgb25UYXAoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICB0aGlzLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyh0aGlzLnNjYWxlLCAxKTtcbiAgICB9XG59LCB0cnVlKTtcbmV4cG9ydHMuQW5pbWF0aW9uID0gZnJhbWVyXzEuUHJvcGVydHlTdG9yZSh7XG4gICAgb3BhY2l0eTogMSxcbiAgICByb3RhdGlvbjogMFxufSwgdHJ1ZSk7XG5leHBvcnRzLlN3aXRjaCA9IGZyYW1lcl8xLlByb3BlcnR5U3RvcmUoe1xuICAgIHRvZ2dsZTogdHJ1ZSxcbiAgICBvblRhcCgpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKGV4cG9ydHMuQW5pbWF0aW9uLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiB0aGlzLnRvZ2dsZSA/IDAuNSA6IDEsXG4gICAgICAgICAgICByb3RhdGlvbjogdGhpcy50b2dnbGUgPyAxODAgOiAwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9ICF0aGlzLnRvZ2dsZTtcbiAgICB9XG59KTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIkJvdW5jZVwiLCB0eXBlOiBcInN0b3JlXCIgfSwgeyBuYW1lOiBcIkFuaW1hdGlvblwiLCB0eXBlOiBcInN0b3JlXCIgfSwgeyBuYW1lOiBcIlN3aXRjaFwiLCB0eXBlOiBcInN0b3JlXCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/App.tsx\n");

/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// The template for the dynamic webpack entry. Be aware of the variables\n\nconst packageJson = __webpack_require__(/*! ./package.json */ \"./package.json\")\n\nconst package = {\n    packageJson,\n    sourceModules: {},\n    dependencies: {},\n}\n\n// This is a special webpack thing that watches the whole directory\n// https://github.com/webpack/docs/wiki/context\nconst ctx = __webpack_require__(\"./code sync recursive \\\\.(t|j)s(x?)|\\\\.css$\")\n\nctx.keys().forEach(key => {\n    package.sourceModules[key] = () => ctx(key)\n})\n\n// The packages are passed in through a template\nconst packages = {}\n\n                packages[\"framer\"] = () => {\n                    var package = {}\n                    try {\n                        package = __webpack_require__(/*! framer */ \"framer\")\n                    } catch (e) {\n                        console.log(e)\n                    }\n                    package.__framer__ = package.__framer__ || {}\n                    package.__framer__.packageJson = {\"name\":\"framer\",\"version\":\"0.1.8\",\"main\":\"build/framer.js\",\"types\":\"build/framer.d.ts\",\"author\":\"Framer\",\"license\":\"UNLICENSED\",\"devDependencies\":{\"@types/chalk\":\"^2.2.0\",\"@types/draft-js\":\"0.10.19\",\"@types/enzyme\":\"^3.1.10\",\"@types/jest\":\"^23.0.0\",\"@types/jest-diff\":\"^20.0.0\",\"@types/node\":\"^9.6.0\",\"@types/react\":\"16.3.12\",\"@types/react-dom\":\"^16.0.5\",\"@types/tinycolor2\":\"^1.4.0\",\"cache-loader\":\"^1.2.2\",\"chalk\":\"^2.4.1\",\"convert-tsconfig-paths-to-webpack-aliases\":\"^0.9.2\",\"css.escape\":\"^1.5.1\",\"dts-bundle\":\"^0.7.3\",\"enzyme\":\"^3.3.0\",\"enzyme-adapter-react-16\":\"^1.1.1\",\"fork-ts-checker-webpack-plugin\":\"^0.4.1\",\"hoist-non-react-statics\":\"^2.5.0\",\"jest\":\"^23.1.0\",\"jest-diff\":\"^22.0.3\",\"jest-junit\":\"^3.4.1\",\"progress-bar-webpack-plugin\":\"^1.11.0\",\"raf\":\"^3.4.0\",\"react\":\"^16.3.2\",\"react-dev-utils\":\"^5.0.1\",\"react-dom\":\"^16.3.2\",\"ts-jest\":\"^22.4.5\",\"ts-loader\":\"^4.1.0\",\"tslint\":\"^5.10.0\",\"tslint-microsoft-contrib\":\"^5.0.3\",\"typescript\":\"^2.8.3\",\"watch\":\"^1.0.2\",\"webpack\":\"^4.4.1\",\"webpack-cli\":\"^2.0.13\",\"webpack-dev-server\":\"^3.1.4\",\"xcssmatrix\":\"^0.2.2\"},\"peerDependencies\":{\"react\":\"^16.3.2\",\"react-dom\":\"^16.3.2\"},\"dependencies\":{\"draft-js\":\"0.10.4\",\"eventemitter3\":\"^3.1.0\",\"immutable\":\"^3.8.2\",\"tinycolor2\":\"^1.4.1\"},\"framer\":{\"components\":[{\"name\":\"Scroll\",\"children\":true,\"properties\":[{\"key\":\"direction\",\"title\":\"Direction\",\"kind\":\"enum\",\"options\":[\"horizontal\",\"vertical\",\"both\"]}]},{\"name\":\"Page\",\"children\":true},{\"name\":\"Stack\",\"children\":true},{\"name\":\"FramerAppleWatch38\",\"type\":\"device\"},{\"name\":\"FramerAppleWatch42\",\"type\":\"device\"},{\"name\":\"FramerSonySmartWatch\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhoneSE\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhone8\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhone8Plus\",\"type\":\"device\"},{\"name\":\"FramerAppleIPhoneX\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus4\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus5X\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexus6\",\"type\":\"device\"},{\"name\":\"FramerGooglePixel2\",\"type\":\"device\"},{\"name\":\"FramerGooglePixel2XL\",\"type\":\"device\"},{\"name\":\"FramerHTCOneA9\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftLumia950\",\"type\":\"device\"},{\"name\":\"FramerSamsungNote5\",\"type\":\"device\"},{\"name\":\"FramerSamsungGalaxyS8\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadAir\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadMini\",\"type\":\"device\"},{\"name\":\"FramerAppleIPadPro\",\"type\":\"device\"},{\"name\":\"FramerGoogleNexusTablet\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfacePro3\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfacePro4\",\"type\":\"device\"},{\"name\":\"FramerAppleIMac\",\"type\":\"device\"},{\"name\":\"FramerAppleThunderboltDisplay\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBook\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBookAir\",\"type\":\"device\"},{\"name\":\"FramerAppleMacBookPro\",\"type\":\"device\"},{\"name\":\"FramerDellXPS\",\"type\":\"device\"},{\"name\":\"FramerMicrosoftSurfaceBook\",\"type\":\"device\"},{\"name\":\"FramerSonyW850C\",\"type\":\"device\"}]},\"scripts\":{\"coverage\":\"jest --config jest.json --coverage\",\"test\":\"jest --config jest.json\",\"watch\":\"jest --config jest.json --watch\"}}\n                    return package\n                }\n\npackage.dependencies = packages\n\nexports.__framer__ = package\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxtSkFBbUosczVCQUFzNUIscUJBQXFCLHdDQUF3QyxpQkFBaUIsd0ZBQXdGLFdBQVcsZUFBZSwrQ0FBK0MsK0ZBQStGLEVBQUUsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxnREFBZ0QsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSw0Q0FBNEMsRUFBRSw4Q0FBOEMsRUFBRSx3Q0FBd0MsRUFBRSxpREFBaUQsRUFBRSw0Q0FBNEMsRUFBRSwrQ0FBK0MsRUFBRSw0Q0FBNEMsRUFBRSw2Q0FBNkMsRUFBRSw0Q0FBNEMsRUFBRSxpREFBaUQsRUFBRSxvREFBb0QsRUFBRSxvREFBb0QsRUFBRSx5Q0FBeUMsRUFBRSx1REFBdUQsRUFBRSw0Q0FBNEMsRUFBRSwrQ0FBK0MsRUFBRSwrQ0FBK0MsRUFBRSx1Q0FBdUMsRUFBRSxvREFBb0QsRUFBRSx5Q0FBeUMsRUFBRSxZQUFZO0FBQ3A1RjtBQUNBOztBQUVBOztBQUVBIiwiZmlsZSI6Ii4vcGFja2FnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGR5bmFtaWMgd2VicGFjayBlbnRyeS4gQmUgYXdhcmUgb2YgdGhlIHZhcmlhYmxlc1xuXG5jb25zdCBwYWNrYWdlSnNvbiA9IHJlcXVpcmUoXCIuL3BhY2thZ2UuanNvblwiKVxuXG5jb25zdCBwYWNrYWdlID0ge1xuICAgIHBhY2thZ2VKc29uLFxuICAgIHNvdXJjZU1vZHVsZXM6IHt9LFxuICAgIGRlcGVuZGVuY2llczoge30sXG59XG5cbi8vIFRoaXMgaXMgYSBzcGVjaWFsIHdlYnBhY2sgdGhpbmcgdGhhdCB3YXRjaGVzIHRoZSB3aG9sZSBkaXJlY3Rvcnlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL2RvY3Mvd2lraS9jb250ZXh0XG5jb25zdCBjdHggPSByZXF1aXJlLmNvbnRleHQoXCIuL2NvZGVcIiwgdHJ1ZSwgL1xcLih0fGopcyh4Pyl8XFwuY3NzJC8pXG5cbmN0eC5rZXlzKCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHBhY2thZ2Uuc291cmNlTW9kdWxlc1trZXldID0gKCkgPT4gY3R4KGtleSlcbn0pXG5cbi8vIFRoZSBwYWNrYWdlcyBhcmUgcGFzc2VkIGluIHRocm91Z2ggYSB0ZW1wbGF0ZVxuY29uc3QgcGFja2FnZXMgPSB7fVxuXG4gICAgICAgICAgICAgICAgcGFja2FnZXNbXCJmcmFtZXJcIl0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWNrYWdlID0ge31cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2thZ2UgPSByZXF1aXJlKFwiZnJhbWVyXCIpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFja2FnZS5fX2ZyYW1lcl9fID0gcGFja2FnZS5fX2ZyYW1lcl9fIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIHBhY2thZ2UuX19mcmFtZXJfXy5wYWNrYWdlSnNvbiA9IHtcIm5hbWVcIjpcImZyYW1lclwiLFwidmVyc2lvblwiOlwiMC4xLjhcIixcIm1haW5cIjpcImJ1aWxkL2ZyYW1lci5qc1wiLFwidHlwZXNcIjpcImJ1aWxkL2ZyYW1lci5kLnRzXCIsXCJhdXRob3JcIjpcIkZyYW1lclwiLFwibGljZW5zZVwiOlwiVU5MSUNFTlNFRFwiLFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiQHR5cGVzL2NoYWxrXCI6XCJeMi4yLjBcIixcIkB0eXBlcy9kcmFmdC1qc1wiOlwiMC4xMC4xOVwiLFwiQHR5cGVzL2VuenltZVwiOlwiXjMuMS4xMFwiLFwiQHR5cGVzL2plc3RcIjpcIl4yMy4wLjBcIixcIkB0eXBlcy9qZXN0LWRpZmZcIjpcIl4yMC4wLjBcIixcIkB0eXBlcy9ub2RlXCI6XCJeOS42LjBcIixcIkB0eXBlcy9yZWFjdFwiOlwiMTYuMy4xMlwiLFwiQHR5cGVzL3JlYWN0LWRvbVwiOlwiXjE2LjAuNVwiLFwiQHR5cGVzL3Rpbnljb2xvcjJcIjpcIl4xLjQuMFwiLFwiY2FjaGUtbG9hZGVyXCI6XCJeMS4yLjJcIixcImNoYWxrXCI6XCJeMi40LjFcIixcImNvbnZlcnQtdHNjb25maWctcGF0aHMtdG8td2VicGFjay1hbGlhc2VzXCI6XCJeMC45LjJcIixcImNzcy5lc2NhcGVcIjpcIl4xLjUuMVwiLFwiZHRzLWJ1bmRsZVwiOlwiXjAuNy4zXCIsXCJlbnp5bWVcIjpcIl4zLjMuMFwiLFwiZW56eW1lLWFkYXB0ZXItcmVhY3QtMTZcIjpcIl4xLjEuMVwiLFwiZm9yay10cy1jaGVja2VyLXdlYnBhY2stcGx1Z2luXCI6XCJeMC40LjFcIixcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI6XCJeMi41LjBcIixcImplc3RcIjpcIl4yMy4xLjBcIixcImplc3QtZGlmZlwiOlwiXjIyLjAuM1wiLFwiamVzdC1qdW5pdFwiOlwiXjMuNC4xXCIsXCJwcm9ncmVzcy1iYXItd2VicGFjay1wbHVnaW5cIjpcIl4xLjExLjBcIixcInJhZlwiOlwiXjMuNC4wXCIsXCJyZWFjdFwiOlwiXjE2LjMuMlwiLFwicmVhY3QtZGV2LXV0aWxzXCI6XCJeNS4wLjFcIixcInJlYWN0LWRvbVwiOlwiXjE2LjMuMlwiLFwidHMtamVzdFwiOlwiXjIyLjQuNVwiLFwidHMtbG9hZGVyXCI6XCJeNC4xLjBcIixcInRzbGludFwiOlwiXjUuMTAuMFwiLFwidHNsaW50LW1pY3Jvc29mdC1jb250cmliXCI6XCJeNS4wLjNcIixcInR5cGVzY3JpcHRcIjpcIl4yLjguM1wiLFwid2F0Y2hcIjpcIl4xLjAuMlwiLFwid2VicGFja1wiOlwiXjQuNC4xXCIsXCJ3ZWJwYWNrLWNsaVwiOlwiXjIuMC4xM1wiLFwid2VicGFjay1kZXYtc2VydmVyXCI6XCJeMy4xLjRcIixcInhjc3NtYXRyaXhcIjpcIl4wLjIuMlwifSxcInBlZXJEZXBlbmRlbmNpZXNcIjp7XCJyZWFjdFwiOlwiXjE2LjMuMlwiLFwicmVhY3QtZG9tXCI6XCJeMTYuMy4yXCJ9LFwiZGVwZW5kZW5jaWVzXCI6e1wiZHJhZnQtanNcIjpcIjAuMTAuNFwiLFwiZXZlbnRlbWl0dGVyM1wiOlwiXjMuMS4wXCIsXCJpbW11dGFibGVcIjpcIl4zLjguMlwiLFwidGlueWNvbG9yMlwiOlwiXjEuNC4xXCJ9LFwiZnJhbWVyXCI6e1wiY29tcG9uZW50c1wiOlt7XCJuYW1lXCI6XCJTY3JvbGxcIixcImNoaWxkcmVuXCI6dHJ1ZSxcInByb3BlcnRpZXNcIjpbe1wia2V5XCI6XCJkaXJlY3Rpb25cIixcInRpdGxlXCI6XCJEaXJlY3Rpb25cIixcImtpbmRcIjpcImVudW1cIixcIm9wdGlvbnNcIjpbXCJob3Jpem9udGFsXCIsXCJ2ZXJ0aWNhbFwiLFwiYm90aFwiXX1dfSx7XCJuYW1lXCI6XCJQYWdlXCIsXCJjaGlsZHJlblwiOnRydWV9LHtcIm5hbWVcIjpcIlN0YWNrXCIsXCJjaGlsZHJlblwiOnRydWV9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlV2F0Y2gzOFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlV2F0Y2g0MlwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lclNvbnlTbWFydFdhdGNoXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGhvbmVTRVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBob25lOFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBob25lOFBsdXNcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJBcHBsZUlQaG9uZVhcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJHb29nbGVOZXh1czRcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJHb29nbGVOZXh1czVYXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlTmV4dXM2XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlUGl4ZWwyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyR29vZ2xlUGl4ZWwyWExcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJIVENPbmVBOVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lck1pY3Jvc29mdEx1bWlhOTUwXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU2Ftc3VuZ05vdGU1XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU2Ftc3VuZ0dhbGF4eVM4XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGFkQWlyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVJUGFkTWluaVwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSVBhZFByb1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckdvb2dsZU5leHVzVGFibGV0XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyTWljcm9zb2Z0U3VyZmFjZVBybzNcIixcInR5cGVcIjpcImRldmljZVwifSx7XCJuYW1lXCI6XCJGcmFtZXJNaWNyb3NvZnRTdXJmYWNlUHJvNFwiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlSU1hY1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lckFwcGxlVGh1bmRlcmJvbHREaXNwbGF5XCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rQWlyXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyQXBwbGVNYWNCb29rUHJvXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyRGVsbFhQU1wiLFwidHlwZVwiOlwiZGV2aWNlXCJ9LHtcIm5hbWVcIjpcIkZyYW1lck1pY3Jvc29mdFN1cmZhY2VCb29rXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn0se1wibmFtZVwiOlwiRnJhbWVyU29ueVc4NTBDXCIsXCJ0eXBlXCI6XCJkZXZpY2VcIn1dfSxcInNjcmlwdHNcIjp7XCJjb3ZlcmFnZVwiOlwiamVzdCAtLWNvbmZpZyBqZXN0Lmpzb24gLS1jb3ZlcmFnZVwiLFwidGVzdFwiOlwiamVzdCAtLWNvbmZpZyBqZXN0Lmpzb25cIixcIndhdGNoXCI6XCJqZXN0IC0tY29uZmlnIGplc3QuanNvbiAtLXdhdGNoXCJ9fVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFja2FnZVxuICAgICAgICAgICAgICAgIH1cblxucGFja2FnZS5kZXBlbmRlbmNpZXMgPSBwYWNrYWdlc1xuXG5leHBvcnRzLl9fZnJhbWVyX18gPSBwYWNrYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./package.js\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, dependencies, framer, author, license, name, version, default */
/***/ (function(module) {

eval("module.exports = {\"main\":\"build/index.js\",\"dependencies\":{\"@types/react\":\"^16.0.31\",\"framer\":\"^0.1.8\",\"react\":\"^16.3.0\",\"react-dom\":\"^16.3.0\"},\"framer\":{\"id\":\"67145086-fa6f-4829-89df-18c63625cc59\",\"displayName\":\"Feather Icons\"},\"author\":\"Cole Bemis\",\"license\":\"MIT\",\"name\":\"@framer/colebemis.feather-icons\",\"version\":\"1.2.0\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2UuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./package.json\n");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiRnJhbWVyXCIsXCJjb21tb25qczJcIjpcImZyYW1lclwiLFwiY29tbW9uanNcIjpcImZyYW1lclwiLFwiYW1kXCI6XCJmcmFtZXJcIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnJhbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZyYW1lcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///framer\n");

/***/ })

/******/ });
});