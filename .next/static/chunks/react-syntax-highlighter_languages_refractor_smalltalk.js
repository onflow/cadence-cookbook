"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_smalltalk"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/smalltalk.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/smalltalk.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = smalltalk\nsmalltalk.displayName = 'smalltalk'\nsmalltalk.aliases = []\nfunction smalltalk(Prism) {\n  Prism.languages.smalltalk = {\n    comment: /\"(?:\"\"|[^\"])*\"/,\n    string: /'(?:''|[^'])*'/,\n    symbol: /#[\\da-z]+|#(?:-|([+\\/\\\\*~<>=@%|&?!])\\1?)|#(?=\\()/i,\n    'block-arguments': {\n      pattern: /(\\[\\s*):[^\\[|]*\\|/,\n      lookbehind: true,\n      inside: {\n        variable: /:[\\da-z]+/i,\n        punctuation: /\\|/\n      }\n    },\n    'temporary-variables': {\n      pattern: /\\|[^|]+\\|/,\n      inside: {\n        variable: /[\\da-z]+/i,\n        punctuation: /\\|/\n      }\n    },\n    keyword: /\\b(?:nil|true|false|self|super|new)\\b/,\n    character: {\n      pattern: /\\$./,\n      alias: 'string'\n    },\n    number: [\n      /\\d+r-?[\\dA-Z]+(?:\\.[\\dA-Z]+)?(?:e-?\\d+)?/,\n      /\\b\\d+(?:\\.\\d+)?(?:e-?\\d+)?/\n    ],\n    operator: /[<=]=?|:=|~[~=]|\\/\\/?|\\\\\\\\|>[>=]?|[!^+\\-*&|,@]/,\n    punctuation: /[.;:?\\[\\](){}]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zbWFsbHRhbGsuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvc21hbGx0YWxrLmpzP2RjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc21hbGx0YWxrXG5zbWFsbHRhbGsuZGlzcGxheU5hbWUgPSAnc21hbGx0YWxrJ1xuc21hbGx0YWxrLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gc21hbGx0YWxrKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5zbWFsbHRhbGsgPSB7XG4gICAgY29tbWVudDogL1wiKD86XCJcInxbXlwiXSkqXCIvLFxuICAgIHN0cmluZzogLycoPzonJ3xbXiddKSonLyxcbiAgICBzeW1ib2w6IC8jW1xcZGEtel0rfCMoPzotfChbK1xcL1xcXFwqfjw+PUAlfCY/IV0pXFwxPyl8Iyg/PVxcKCkvaSxcbiAgICAnYmxvY2stYXJndW1lbnRzJzoge1xuICAgICAgcGF0dGVybjogLyhcXFtcXHMqKTpbXlxcW3xdKlxcfC8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHZhcmlhYmxlOiAvOltcXGRhLXpdKy9pLFxuICAgICAgICBwdW5jdHVhdGlvbjogL1xcfC9cbiAgICAgIH1cbiAgICB9LFxuICAgICd0ZW1wb3JhcnktdmFyaWFibGVzJzoge1xuICAgICAgcGF0dGVybjogL1xcfFtefF0rXFx8LyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICB2YXJpYWJsZTogL1tcXGRhLXpdKy9pLFxuICAgICAgICBwdW5jdHVhdGlvbjogL1xcfC9cbiAgICAgIH1cbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzpuaWx8dHJ1ZXxmYWxzZXxzZWxmfHN1cGVyfG5ldylcXGIvLFxuICAgIGNoYXJhY3Rlcjoge1xuICAgICAgcGF0dGVybjogL1xcJC4vLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBudW1iZXI6IFtcbiAgICAgIC9cXGQrci0/W1xcZEEtWl0rKD86XFwuW1xcZEEtWl0rKT8oPzplLT9cXGQrKT8vLFxuICAgICAgL1xcYlxcZCsoPzpcXC5cXGQrKT8oPzplLT9cXGQrKT8vXG4gICAgXSxcbiAgICBvcGVyYXRvcjogL1s8PV09P3w6PXx+W349XXxcXC9cXC8/fFxcXFxcXFxcfD5bPj1dP3xbIV4rXFwtKiZ8LEBdLyxcbiAgICBwdW5jdHVhdGlvbjogL1suOzo/XFxbXFxdKCl7fV0vXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/smalltalk.js\n"));

/***/ })

}]);