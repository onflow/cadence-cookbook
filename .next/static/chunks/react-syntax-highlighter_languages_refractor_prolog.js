"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_prolog"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/prolog.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/prolog.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = prolog\nprolog.displayName = 'prolog'\nprolog.aliases = []\nfunction prolog(Prism) {\n  Prism.languages.prolog = {\n    // Syntax depends on the implementation\n    comment: [/%.+/, /\\/\\*[\\s\\S]*?\\*\\//],\n    // Depending on the implementation, strings may allow escaped newlines and quote-escape\n    string: {\n      pattern: /([\"'])(?:\\1\\1|\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    builtin: /\\b(?:fx|fy|xf[xy]?|yfx?)\\b/,\n    variable: /\\b[A-Z_]\\w*/,\n    // FIXME: Should we list all null-ary predicates (not followed by a parenthesis) like halt, trace, etc.?\n    function: /\\b[a-z]\\w*(?:(?=\\()|\\/\\d+)/,\n    number: /\\b\\d+\\.?\\d*/,\n    // Custom operators are allowed\n    operator: /[:\\\\=><\\-?*@\\/;+^|!$.]+|\\b(?:is|mod|not|xor)\\b/,\n    punctuation: /[(){}\\[\\],]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9wcm9sb2cuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsdUJBQXVCO0FBQ3ZCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3Byb2xvZy5qcz9kMGYwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2xvZ1xucHJvbG9nLmRpc3BsYXlOYW1lID0gJ3Byb2xvZydcbnByb2xvZy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHByb2xvZyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucHJvbG9nID0ge1xuICAgIC8vIFN5bnRheCBkZXBlbmRzIG9uIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgIGNvbW1lbnQ6IFsvJS4rLywgL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vXSxcbiAgICAvLyBEZXBlbmRpbmcgb24gdGhlIGltcGxlbWVudGF0aW9uLCBzdHJpbmdzIG1heSBhbGxvdyBlc2NhcGVkIG5ld2xpbmVzIGFuZCBxdW90ZS1lc2NhcGVcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oW1wiJ10pKD86XFwxXFwxfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBidWlsdGluOiAvXFxiKD86Znh8Znl8eGZbeHldP3x5Zng/KVxcYi8sXG4gICAgdmFyaWFibGU6IC9cXGJbQS1aX11cXHcqLyxcbiAgICAvLyBGSVhNRTogU2hvdWxkIHdlIGxpc3QgYWxsIG51bGwtYXJ5IHByZWRpY2F0ZXMgKG5vdCBmb2xsb3dlZCBieSBhIHBhcmVudGhlc2lzKSBsaWtlIGhhbHQsIHRyYWNlLCBldGMuP1xuICAgIGZ1bmN0aW9uOiAvXFxiW2Etel1cXHcqKD86KD89XFwoKXxcXC9cXGQrKS8sXG4gICAgbnVtYmVyOiAvXFxiXFxkK1xcLj9cXGQqLyxcbiAgICAvLyBDdXN0b20gb3BlcmF0b3JzIGFyZSBhbGxvd2VkXG4gICAgb3BlcmF0b3I6IC9bOlxcXFw9PjxcXC0/KkBcXC87K158ISQuXSt8XFxiKD86aXN8bW9kfG5vdHx4b3IpXFxiLyxcbiAgICBwdW5jdHVhdGlvbjogL1soKXt9XFxbXFxdLF0vXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/prolog.js\n"));

/***/ })

}]);