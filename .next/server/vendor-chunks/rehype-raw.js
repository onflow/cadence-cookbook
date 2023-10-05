"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-raw";
exports.ids = ["vendor-chunks/rehype-raw"];
exports.modules = {

/***/ "(ssr)/./node_modules/rehype-raw/index.js":
/*!******************************************!*\
  !*** ./node_modules/rehype-raw/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeRaw)\n/* harmony export */ });\n/* harmony import */ var hast_util_raw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-raw */ \"(ssr)/./node_modules/hast-util-raw/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast-util-raw').Options} Options\n * @typedef {import('hast-util-raw')} DoNotTouchAsThisImportIncludesRawInTree\n */\n\n\n\n/**\n * Plugin to parse the tree again (and raw nodes).\n * Keeping positional info OK.  🙌\n *\n * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}\n */\nfunction rehypeRaw(options = {}) {\n  return (tree, file) => {\n    // Assume that when a root was given, it’s also returned.\n    const result = /** @type {Root} */ ((0,hast_util_raw__WEBPACK_IMPORTED_MODULE_0__.raw)(tree, file, options))\n    return result\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVoeXBlLXJhdy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSxpQ0FBaUM7QUFDOUMsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNlLCtCQUErQjtBQUM5QztBQUNBO0FBQ0EsOEJBQThCLE1BQU0sSUFBSSxrREFBRztBQUMzQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWRlbmNlLWNvb2tib29rLy4vbm9kZV9tb2R1bGVzL3JlaHlwZS1yYXcvaW5kZXguanM/ZjU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0LXV0aWwtcmF3JykuT3B0aW9uc30gT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdC11dGlsLXJhdycpfSBEb05vdFRvdWNoQXNUaGlzSW1wb3J0SW5jbHVkZXNSYXdJblRyZWVcbiAqL1xuXG5pbXBvcnQge3Jhd30gZnJvbSAnaGFzdC11dGlsLXJhdydcblxuLyoqXG4gKiBQbHVnaW4gdG8gcGFyc2UgdGhlIHRyZWUgYWdhaW4gKGFuZCByYXcgbm9kZXMpLlxuICogS2VlcGluZyBwb3NpdGlvbmFsIGluZm8gT0suICDwn5mMXG4gKlxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dIHwgQXJyYXk8dm9pZD4sIFJvb3Q+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWh5cGVSYXcob3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiAodHJlZSwgZmlsZSkgPT4ge1xuICAgIC8vIEFzc3VtZSB0aGF0IHdoZW4gYSByb290IHdhcyBnaXZlbiwgaXTigJlzIGFsc28gcmV0dXJuZWQuXG4gICAgY29uc3QgcmVzdWx0ID0gLyoqIEB0eXBlIHtSb290fSAqLyAocmF3KHRyZWUsIGZpbGUsIG9wdGlvbnMpKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rehype-raw/index.js\n");

/***/ })

};
;