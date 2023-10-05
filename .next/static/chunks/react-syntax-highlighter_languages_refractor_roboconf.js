"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_roboconf"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/roboconf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/roboconf.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = roboconf\nroboconf.displayName = 'roboconf'\nroboconf.aliases = []\nfunction roboconf(Prism) {\n  Prism.languages.roboconf = {\n    comment: /#.*/,\n    keyword: {\n      pattern: /(^|\\s)(?:(?:facet|instance of)(?=[ \\t]+[\\w-]+[ \\t]*\\{)|(?:external|import)\\b)/,\n      lookbehind: true\n    },\n    component: {\n      pattern: /[\\w-]+(?=[ \\t]*\\{)/,\n      alias: 'variable'\n    },\n    property: /[\\w.-]+(?=[ \\t]*:)/,\n    value: {\n      pattern: /(=[ \\t]*)[^,;]+/,\n      lookbehind: true,\n      alias: 'attr-value'\n    },\n    optional: {\n      pattern: /\\(optional\\)/,\n      alias: 'builtin'\n    },\n    wildcard: {\n      pattern: /(\\.)\\*/,\n      lookbehind: true,\n      alias: 'operator'\n    },\n    punctuation: /[{},.;:=]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9yb2JvY29uZi5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlDQUFpQztBQUNqQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQixHQUFHO0FBQ3hCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3JvYm9jb25mLmpzPzk0MDQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcm9ib2NvbmZcbnJvYm9jb25mLmRpc3BsYXlOYW1lID0gJ3JvYm9jb25mJ1xucm9ib2NvbmYuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiByb2JvY29uZihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucm9ib2NvbmYgPSB7XG4gICAgY29tbWVudDogLyMuKi8sXG4gICAga2V5d29yZDoge1xuICAgICAgcGF0dGVybjogLyhefFxccykoPzooPzpmYWNldHxpbnN0YW5jZSBvZikoPz1bIFxcdF0rW1xcdy1dK1sgXFx0XSpcXHspfCg/OmV4dGVybmFsfGltcG9ydClcXGIpLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGNvbXBvbmVudDoge1xuICAgICAgcGF0dGVybjogL1tcXHctXSsoPz1bIFxcdF0qXFx7KS8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH0sXG4gICAgcHJvcGVydHk6IC9bXFx3Li1dKyg/PVsgXFx0XSo6KS8sXG4gICAgdmFsdWU6IHtcbiAgICAgIHBhdHRlcm46IC8oPVsgXFx0XSopW14sO10rLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2F0dHItdmFsdWUnXG4gICAgfSxcbiAgICBvcHRpb25hbDoge1xuICAgICAgcGF0dGVybjogL1xcKG9wdGlvbmFsXFwpLyxcbiAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICB9LFxuICAgIHdpbGRjYXJkOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcLilcXCovLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfSxcbiAgICBwdW5jdHVhdGlvbjogL1t7fSwuOzo9XS9cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/roboconf.js\n"));

/***/ })

}]);