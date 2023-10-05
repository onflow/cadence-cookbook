"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_nasm"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/nasm.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/nasm.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = nasm\nnasm.displayName = 'nasm'\nnasm.aliases = []\nfunction nasm(Prism) {\n  Prism.languages.nasm = {\n    comment: /;.*$/m,\n    string: /([\"'`])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n    label: {\n      pattern: /(^\\s*)[A-Za-z._?$][\\w.?$@~#]*:/m,\n      lookbehind: true,\n      alias: 'function'\n    },\n    keyword: [\n      /\\[?BITS (?:16|32|64)\\]?/,\n      {\n        pattern: /(^\\s*)section\\s*[a-zA-Z.]+:?/im,\n        lookbehind: true\n      },\n      /(?:extern|global)[^;\\r\\n]*/i,\n      /(?:CPU|FLOAT|DEFAULT).*$/m\n    ],\n    register: {\n      pattern: /\\b(?:st\\d|[xyz]mm\\d\\d?|[cdt]r\\d|r\\d\\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\\b/i,\n      alias: 'variable'\n    },\n    number: /(?:\\b|(?=\\$))(?:0[hx][\\da-f]*\\.?[\\da-f]+(?:p[+-]?\\d+)?|\\d[\\da-f]+[hx]|\\$\\d[\\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\\d+|\\d*\\.?\\d+(?:\\.?e[+-]?\\d+)?[dt]?)\\b/i,\n    operator: /[\\[\\]*+\\-\\/%<>=&|$!]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9uYXNtLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9uYXNtLmpzPzZiZGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbmFzbVxubmFzbS5kaXNwbGF5TmFtZSA9ICduYXNtJ1xubmFzbS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG5hc20oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm5hc20gPSB7XG4gICAgY29tbWVudDogLzsuKiQvbSxcbiAgICBzdHJpbmc6IC8oW1wiJ2BdKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgIGxhYmVsOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKVtBLVphLXouXz8kXVtcXHcuPyRAfiNdKjovbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH0sXG4gICAga2V5d29yZDogW1xuICAgICAgL1xcWz9CSVRTICg/OjE2fDMyfDY0KVxcXT8vLFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF5cXHMqKXNlY3Rpb25cXHMqW2EtekEtWi5dKzo/L2ltLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgLyg/OmV4dGVybnxnbG9iYWwpW147XFxyXFxuXSovaSxcbiAgICAgIC8oPzpDUFV8RkxPQVR8REVGQVVMVCkuKiQvbVxuICAgIF0sXG4gICAgcmVnaXN0ZXI6IHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzpzdFxcZHxbeHl6XW1tXFxkXFxkP3xbY2R0XXJcXGR8clxcZFxcZD9bYndkXT98W2VyXT9bYWJjZF14fFthYmNkXVtobF18W2VyXT8oPzpicHxzcHxzaXxkaSl8W2NkZWZnc11zKVxcYi9pLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIG51bWJlcjogLyg/OlxcYnwoPz1cXCQpKSg/OjBbaHhdW1xcZGEtZl0qXFwuP1tcXGRhLWZdKyg/OnBbKy1dP1xcZCspP3xcXGRbXFxkYS1mXStbaHhdfFxcJFxcZFtcXGRhLWZdKnwwW29xXVswLTddK3xbMC03XStbb3FdfDBbYnldWzAxXSt8WzAxXStbYnldfDBbZHRdXFxkK3xcXGQqXFwuP1xcZCsoPzpcXC4/ZVsrLV0/XFxkKyk/W2R0XT8pXFxiL2ksXG4gICAgb3BlcmF0b3I6IC9bXFxbXFxdKitcXC1cXC8lPD49JnwkIV0vXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/nasm.js\n"));

/***/ })

}]);