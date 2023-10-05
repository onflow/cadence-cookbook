"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-parse";
exports.ids = ["vendor-chunks/remark-parse"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-parse/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/remark-parse/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkParse)\n/* harmony export */ });\n/* harmony import */ var mdast_util_from_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-from-markdown */ \"(ssr)/./node_modules/mdast-util-from-markdown/dev/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-from-markdown').Options} Options\n */\n\n\n\n/**\n * @this {import('unified').Processor}\n * @type {import('unified').Plugin<[Options?] | void[], string, Root>}\n */\nfunction remarkParse(options) {\n  /** @type {import('unified').ParserFunction<Root>} */\n  const parser = (doc) => {\n    // Assume options.\n    const settings = /** @type {Options} */ (this.data('settings'))\n\n    return (0,mdast_util_from_markdown__WEBPACK_IMPORTED_MODULE_0__.fromMarkdown)(\n      doc,\n      Object.assign({}, settings, options, {\n        // Note: these options are not in the readme.\n        // The goal is for them to be set by plugins on `data` instead of being\n        // passed by users.\n        extensions: this.data('micromarkExtensions') || [],\n        mdastExtensions: this.data('fromMarkdownExtensions') || []\n      })\n    )\n  }\n\n  Object.assign(this, {Parser: parser})\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSw0Q0FBNEM7QUFDekQ7O0FBRXFEOztBQUVyRDtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDZTtBQUNmLGFBQWEsd0NBQXdDO0FBQ3JEO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUzs7QUFFekMsV0FBVyxzRUFBWTtBQUN2QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsdUJBQXVCLGVBQWU7QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWRlbmNlLWNvb2tib29rLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvaW5kZXguanM/Mjc2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbmltcG9ydCB7ZnJvbU1hcmtkb3dufSBmcm9tICdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nXG5cbi8qKlxuICogQHRoaXMge2ltcG9ydCgndW5pZmllZCcpLlByb2Nlc3Nvcn1cbiAqIEB0eXBlIHtpbXBvcnQoJ3VuaWZpZWQnKS5QbHVnaW48W09wdGlvbnM/XSB8IHZvaWRbXSwgc3RyaW5nLCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtYXJrUGFyc2Uob3B0aW9ucykge1xuICAvKiogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBhcnNlckZ1bmN0aW9uPFJvb3Q+fSAqL1xuICBjb25zdCBwYXJzZXIgPSAoZG9jKSA9PiB7XG4gICAgLy8gQXNzdW1lIG9wdGlvbnMuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSAvKiogQHR5cGUge09wdGlvbnN9ICovICh0aGlzLmRhdGEoJ3NldHRpbmdzJykpXG5cbiAgICByZXR1cm4gZnJvbU1hcmtkb3duKFxuICAgICAgZG9jLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MsIG9wdGlvbnMsIHtcbiAgICAgICAgLy8gTm90ZTogdGhlc2Ugb3B0aW9ucyBhcmUgbm90IGluIHRoZSByZWFkbWUuXG4gICAgICAgIC8vIFRoZSBnb2FsIGlzIGZvciB0aGVtIHRvIGJlIHNldCBieSBwbHVnaW5zIG9uIGBkYXRhYCBpbnN0ZWFkIG9mIGJlaW5nXG4gICAgICAgIC8vIHBhc3NlZCBieSB1c2Vycy5cbiAgICAgICAgZXh0ZW5zaW9uczogdGhpcy5kYXRhKCdtaWNyb21hcmtFeHRlbnNpb25zJykgfHwgW10sXG4gICAgICAgIG1kYXN0RXh0ZW5zaW9uczogdGhpcy5kYXRhKCdmcm9tTWFya2Rvd25FeHRlbnNpb25zJykgfHwgW11cbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7UGFyc2VyOiBwYXJzZXJ9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-parse/lib/index.js\n");

/***/ })

};
;