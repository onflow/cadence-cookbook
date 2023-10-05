"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-gfm";
exports.ids = ["vendor-chunks/remark-gfm"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-gfm/index.js":
/*!******************************************!*\
  !*** ./node_modules/remark-gfm/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkGfm)\n/* harmony export */ });\n/* harmony import */ var micromark_extension_gfm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-extension-gfm */ \"(ssr)/./node_modules/micromark-extension-gfm/index.js\");\n/* harmony import */ var mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-gfm */ \"(ssr)/./node_modules/mdast-util-gfm/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('micromark-extension-gfm').Options & import('mdast-util-gfm').Options} Options\n */\n\n\n\n\n/**\n * Plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).\n *\n * @type {import('unified').Plugin<[Options?]|void[], Root>}\n */\nfunction remarkGfm(options = {}) {\n  const data = this.data()\n\n  add('micromarkExtensions', (0,micromark_extension_gfm__WEBPACK_IMPORTED_MODULE_0__.gfm)(options))\n  add('fromMarkdownExtensions', (0,mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__.gfmFromMarkdown)())\n  add('toMarkdownExtensions', (0,mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__.gfmToMarkdown)(options))\n\n  /**\n   * @param {string} field\n   * @param {unknown} value\n   */\n  function add(field, value) {\n    const list = /** @type {unknown[]} */ (\n      // Other extensions\n      /* c8 ignore next 2 */\n      data[field] ? data[field] : (data[field] = [])\n    )\n\n    list.push(value)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLWdmbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsOEVBQThFO0FBQzNGOztBQUUyQztBQUNrQjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ2UsK0JBQStCO0FBQzlDOztBQUVBLDZCQUE2Qiw0REFBRztBQUNoQyxnQ0FBZ0MsK0RBQWU7QUFDL0MsOEJBQThCLDZEQUFhOztBQUUzQztBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhZGVuY2UtY29va2Jvb2svLi9ub2RlX21vZHVsZXMvcmVtYXJrLWdmbS9pbmRleC5qcz9hNWRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbScpLk9wdGlvbnMgJiBpbXBvcnQoJ21kYXN0LXV0aWwtZ2ZtJykuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbmltcG9ydCB7Z2ZtfSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbSdcbmltcG9ydCB7Z2ZtRnJvbU1hcmtkb3duLCBnZm1Ub01hcmtkb3dufSBmcm9tICdtZGFzdC11dGlsLWdmbSdcblxuLyoqXG4gKiBQbHVnaW4gdG8gc3VwcG9ydCBHRk0gKGF1dG9saW5rIGxpdGVyYWxzLCBmb290bm90ZXMsIHN0cmlrZXRocm91Z2gsIHRhYmxlcywgdGFza2xpc3RzKS5cbiAqXG4gKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGx1Z2luPFtPcHRpb25zP118dm9pZFtdLCBSb290Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtYXJrR2ZtKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBkYXRhID0gdGhpcy5kYXRhKClcblxuICBhZGQoJ21pY3JvbWFya0V4dGVuc2lvbnMnLCBnZm0ob3B0aW9ucykpXG4gIGFkZCgnZnJvbU1hcmtkb3duRXh0ZW5zaW9ucycsIGdmbUZyb21NYXJrZG93bigpKVxuICBhZGQoJ3RvTWFya2Rvd25FeHRlbnNpb25zJywgZ2ZtVG9NYXJrZG93bihvcHRpb25zKSlcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG4gICAqIEBwYXJhbSB7dW5rbm93bn0gdmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIGFkZChmaWVsZCwgdmFsdWUpIHtcbiAgICBjb25zdCBsaXN0ID0gLyoqIEB0eXBlIHt1bmtub3duW119ICovIChcbiAgICAgIC8vIE90aGVyIGV4dGVuc2lvbnNcbiAgICAgIC8qIGM4IGlnbm9yZSBuZXh0IDIgKi9cbiAgICAgIGRhdGFbZmllbGRdID8gZGF0YVtmaWVsZF0gOiAoZGF0YVtmaWVsZF0gPSBbXSlcbiAgICApXG5cbiAgICBsaXN0LnB1c2godmFsdWUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-gfm/index.js\n");

/***/ })

};
;