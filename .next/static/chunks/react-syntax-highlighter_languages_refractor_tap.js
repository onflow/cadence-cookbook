"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_tap"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/tap.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tap.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = tap\ntap.displayName = 'tap'\ntap.aliases = []\nfunction tap(Prism) {\n  Prism.languages.tap = {\n    fail: /not ok[^#{\\n\\r]*/,\n    pass: /ok[^#{\\n\\r]*/,\n    pragma: /pragma [+-][a-z]+/,\n    bailout: /bail out!.*/i,\n    version: /TAP version \\d+/i,\n    plan: /\\d+\\.\\.\\d+(?: +#.*)?/,\n    subtest: {\n      pattern: /# Subtest(?:: .*)?/,\n      greedy: true\n    },\n    punctuation: /[{}]/,\n    directive: /#.*/,\n    yamlish: {\n      pattern: /(^[^\\S\\r\\n]*)---(?:\\r\\n?|\\n)(?:.*(?:\\r\\n?|\\n))*?[^\\S\\r\\n]*\\.\\.\\.$/m,\n      lookbehind: true,\n      inside: Prism.languages.yaml,\n      alias: 'language-yaml'\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy90YXAuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdGFwLmpzPzIwYjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdGFwXG50YXAuZGlzcGxheU5hbWUgPSAndGFwJ1xudGFwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdGFwKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy50YXAgPSB7XG4gICAgZmFpbDogL25vdCBva1teI3tcXG5cXHJdKi8sXG4gICAgcGFzczogL29rW14je1xcblxccl0qLyxcbiAgICBwcmFnbWE6IC9wcmFnbWEgWystXVthLXpdKy8sXG4gICAgYmFpbG91dDogL2JhaWwgb3V0IS4qL2ksXG4gICAgdmVyc2lvbjogL1RBUCB2ZXJzaW9uIFxcZCsvaSxcbiAgICBwbGFuOiAvXFxkK1xcLlxcLlxcZCsoPzogKyMuKik/LyxcbiAgICBzdWJ0ZXN0OiB7XG4gICAgICBwYXR0ZXJuOiAvIyBTdWJ0ZXN0KD86OiAuKik/LyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgcHVuY3R1YXRpb246IC9be31dLyxcbiAgICBkaXJlY3RpdmU6IC8jLiovLFxuICAgIHlhbWxpc2g6IHtcbiAgICAgIHBhdHRlcm46IC8oXlteXFxTXFxyXFxuXSopLS0tKD86XFxyXFxuP3xcXG4pKD86LiooPzpcXHJcXG4/fFxcbikpKj9bXlxcU1xcclxcbl0qXFwuXFwuXFwuJC9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnlhbWwsXG4gICAgICBhbGlhczogJ2xhbmd1YWdlLXlhbWwnXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/tap.js\n"));

/***/ })

}]);