"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_go"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/go.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/go.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = go\ngo.displayName = 'go'\ngo.aliases = []\nfunction go(Prism) {\n  Prism.languages.go = Prism.languages.extend('clike', {\n    keyword: /\\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\\b/,\n    builtin: /\\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\\b/,\n    boolean: /\\b(?:_|iota|nil|true|false)\\b/,\n    operator: /[*\\/%^!=]=?|\\+[=+]?|-[=-]?|\\|[=|]?|&(?:=|&|\\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\\.\\.\\./,\n    number: /(?:\\b0x[a-f\\d]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[-+]?\\d+)?)i?/i,\n    string: {\n      pattern: /([\"'`])(\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1/,\n      greedy: true\n    }\n  })\n  delete Prism.languages.go['class-name']\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9nby5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2dvLmpzP2YwMTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZ29cbmdvLmRpc3BsYXlOYW1lID0gJ2dvJ1xuZ28uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBnbyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZ28gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICBrZXl3b3JkOiAvXFxiKD86YnJlYWt8Y2FzZXxjaGFufGNvbnN0fGNvbnRpbnVlfGRlZmF1bHR8ZGVmZXJ8ZWxzZXxmYWxsdGhyb3VnaHxmb3J8ZnVuY3xnbyg/OnRvKT98aWZ8aW1wb3J0fGludGVyZmFjZXxtYXB8cGFja2FnZXxyYW5nZXxyZXR1cm58c2VsZWN0fHN0cnVjdHxzd2l0Y2h8dHlwZXx2YXIpXFxiLyxcbiAgICBidWlsdGluOiAvXFxiKD86Ym9vbHxieXRlfGNvbXBsZXgoPzo2NHwxMjgpfGVycm9yfGZsb2F0KD86MzJ8NjQpfHJ1bmV8c3RyaW5nfHU/aW50KD86OHwxNnwzMnw2NCk/fHVpbnRwdHJ8YXBwZW5kfGNhcHxjbG9zZXxjb21wbGV4fGNvcHl8ZGVsZXRlfGltYWd8bGVufG1ha2V8bmV3fHBhbmljfHByaW50KD86bG4pP3xyZWFsfHJlY292ZXIpXFxiLyxcbiAgICBib29sZWFuOiAvXFxiKD86X3xpb3RhfG5pbHx0cnVlfGZhbHNlKVxcYi8sXG4gICAgb3BlcmF0b3I6IC9bKlxcLyVeIT1dPT98XFwrWz0rXT98LVs9LV0/fFxcfFs9fF0/fCYoPzo9fCZ8XFxePT8pP3w+KD86Pj0/fD0pP3w8KD86PD0/fD18LSk/fDo9fFxcLlxcLlxcLi8sXG4gICAgbnVtYmVyOiAvKD86XFxiMHhbYS1mXFxkXSt8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVstK10/XFxkKyk/KWk/L2ksXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIidgXSkoXFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfVxuICB9KVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmdvWydjbGFzcy1uYW1lJ11cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/go.js\n"));

/***/ })

}]);