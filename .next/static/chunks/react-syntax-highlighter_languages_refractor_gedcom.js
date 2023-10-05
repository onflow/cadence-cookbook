"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_gedcom"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/gedcom.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/gedcom.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = gedcom\ngedcom.displayName = 'gedcom'\ngedcom.aliases = []\nfunction gedcom(Prism) {\n  Prism.languages.gedcom = {\n    'line-value': {\n      // Preceded by level, optional pointer, and tag\n      pattern: /(^\\s*\\d+ +(?:@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@ +)?\\w+ +).+/m,\n      lookbehind: true,\n      inside: {\n        pointer: {\n          pattern: /^@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@$/,\n          alias: 'variable'\n        }\n      }\n    },\n    tag: {\n      // Preceded by level and optional pointer\n      pattern: /(^\\s*\\d+ +(?:@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@ +)?)\\w+/m,\n      lookbehind: true,\n      alias: 'string'\n    },\n    level: {\n      pattern: /(^\\s*)\\d+/m,\n      lookbehind: true,\n      alias: 'number'\n    },\n    pointer: {\n      pattern: /@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@/,\n      alias: 'variable'\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9nZWRjb20uanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsWUFBWSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvREFBb0QsWUFBWSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx1Q0FBdUMsWUFBWSxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9nZWRjb20uanM/ODRhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnZWRjb21cbmdlZGNvbS5kaXNwbGF5TmFtZSA9ICdnZWRjb20nXG5nZWRjb20uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBnZWRjb20oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmdlZGNvbSA9IHtcbiAgICAnbGluZS12YWx1ZSc6IHtcbiAgICAgIC8vIFByZWNlZGVkIGJ5IGxldmVsLCBvcHRpb25hbCBwb2ludGVyLCBhbmQgdGFnXG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqXFxkKyArKD86QFxcd1tcXHchXCIkJSYnKCkqKyxcXC0uLzo7PD0+P1tcXFxcXFxdXmB7fH1+XFx4ODAtXFx4ZmUgI10qQCArKT9cXHcrICspLisvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcG9pbnRlcjoge1xuICAgICAgICAgIHBhdHRlcm46IC9eQFxcd1tcXHchXCIkJSYnKCkqKyxcXC0uLzo7PD0+P1tcXFxcXFxdXmB7fH1+XFx4ODAtXFx4ZmUgI10qQCQvLFxuICAgICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgLy8gUHJlY2VkZWQgYnkgbGV2ZWwgYW5kIG9wdGlvbmFsIHBvaW50ZXJcbiAgICAgIHBhdHRlcm46IC8oXlxccypcXGQrICsoPzpAXFx3W1xcdyFcIiQlJicoKSorLFxcLS4vOjs8PT4/W1xcXFxcXF1eYHt8fX5cXHg4MC1cXHhmZSAjXSpAICspPylcXHcrL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBsZXZlbDoge1xuICAgICAgcGF0dGVybjogLyheXFxzKilcXGQrL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdudW1iZXInXG4gICAgfSxcbiAgICBwb2ludGVyOiB7XG4gICAgICBwYXR0ZXJuOiAvQFxcd1tcXHchXCIkJSYnKCkqKyxcXC0uLzo7PD0+P1tcXFxcXFxdXmB7fH1+XFx4ODAtXFx4ZmUgI10qQC8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/gedcom.js\n"));

/***/ })

}]);