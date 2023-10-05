"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_r"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/r.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/r.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = r\nr.displayName = 'r'\nr.aliases = []\nfunction r(Prism) {\n  Prism.languages.r = {\n    comment: /#.*/,\n    string: {\n      pattern: /(['\"])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'percent-operator': {\n      // Includes user-defined operators\n      // and %%, %*%, %/%, %in%, %o%, %x%\n      pattern: /%[^%\\s]*%/,\n      alias: 'operator'\n    },\n    boolean: /\\b(?:TRUE|FALSE)\\b/,\n    ellipsis: /\\.\\.(?:\\.|\\d+)/,\n    number: [\n      /\\b(?:NaN|Inf)\\b/,\n      /(?:\\b0x[\\dA-Fa-f]+(?:\\.\\d*)?|\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:[EePp][+-]?\\d+)?[iL]?/\n    ],\n    keyword: /\\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\\b/,\n    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\\|\\|?|[+*\\/^$@~]/,\n    punctuation: /[(){}\\[\\],;]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9yLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsTUFBTTtBQUM3QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9yLmpzPzI4YWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gclxuci5kaXNwbGF5TmFtZSA9ICdyJ1xuci5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHIoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnIgPSB7XG4gICAgY29tbWVudDogLyMuKi8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFsnXCJdKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAncGVyY2VudC1vcGVyYXRvcic6IHtcbiAgICAgIC8vIEluY2x1ZGVzIHVzZXItZGVmaW5lZCBvcGVyYXRvcnNcbiAgICAgIC8vIGFuZCAlJSwgJSolLCAlLyUsICVpbiUsICVvJSwgJXglXG4gICAgICBwYXR0ZXJuOiAvJVteJVxcc10qJS8sXG4gICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgIH0sXG4gICAgYm9vbGVhbjogL1xcYig/OlRSVUV8RkFMU0UpXFxiLyxcbiAgICBlbGxpcHNpczogL1xcLlxcLig/OlxcLnxcXGQrKS8sXG4gICAgbnVtYmVyOiBbXG4gICAgICAvXFxiKD86TmFOfEluZilcXGIvLFxuICAgICAgLyg/OlxcYjB4W1xcZEEtRmEtZl0rKD86XFwuXFxkKik/fFxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OltFZVBwXVsrLV0/XFxkKyk/W2lMXT8vXG4gICAgXSxcbiAgICBrZXl3b3JkOiAvXFxiKD86aWZ8ZWxzZXxyZXBlYXR8d2hpbGV8ZnVuY3Rpb258Zm9yfGlufG5leHR8YnJlYWt8TlVMTHxOQXxOQV9pbnRlZ2VyX3xOQV9yZWFsX3xOQV9jb21wbGV4X3xOQV9jaGFyYWN0ZXJfKVxcYi8sXG4gICAgb3BlcmF0b3I6IC8tPj8+P3w8KD86PXw8Py0pP3xbPj0hXT0/fDo6P3wmJj98XFx8XFx8P3xbKypcXC9eJEB+XS8sXG4gICAgcHVuY3R1YXRpb246IC9bKCl7fVxcW1xcXSw7XS9cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/r.js\n"));

/***/ })

}]);