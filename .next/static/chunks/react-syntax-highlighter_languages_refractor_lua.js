"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_lua"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/lua.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/lua.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = lua\nlua.displayName = 'lua'\nlua.aliases = []\nfunction lua(Prism) {\n  Prism.languages.lua = {\n    comment: /^#!.+|--(?:\\[(=*)\\[[\\s\\S]*?\\]\\1\\]|.*)/m,\n    // \\z may be used to skip the following space\n    string: {\n      pattern: /([\"'])(?:(?!\\1)[^\\\\\\r\\n]|\\\\z(?:\\r\\n|\\s)|\\\\(?:\\r\\n|[\\s\\S]))*\\1|\\[(=*)\\[[\\s\\S]*?\\]\\2\\]/,\n      greedy: true\n    },\n    number: /\\b0x[a-f\\d]+\\.?[a-f\\d]*(?:p[+-]?\\d+)?\\b|\\b\\d+(?:\\.\\B|\\.?\\d*(?:e[+-]?\\d+)?\\b)|\\B\\.\\d+(?:e[+-]?\\d+)?\\b/i,\n    keyword: /\\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\\b/,\n    function: /(?!\\d)\\w+(?=\\s*(?:[({]))/,\n    operator: [\n      /[-+*%^&|#]|\\/\\/?|<[<=]?|>[>=]?|[=~]=?/,\n      {\n        // Match \"..\" but don't break \"...\"\n        pattern: /(^|[^.])\\.\\.(?!\\.)/,\n        lookbehind: true\n      }\n    ],\n    punctuation: /[\\[\\](){},;]|\\.+|:+/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9sdWEuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvbHVhLmpzP2NlYjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbHVhXG5sdWEuZGlzcGxheU5hbWUgPSAnbHVhJ1xubHVhLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbHVhKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5sdWEgPSB7XG4gICAgY29tbWVudDogL14jIS4rfC0tKD86XFxbKD0qKVxcW1tcXHNcXFNdKj9cXF1cXDFcXF18LiopL20sXG4gICAgLy8gXFx6IG1heSBiZSB1c2VkIHRvIHNraXAgdGhlIGZvbGxvd2luZyBzcGFjZVxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhbXCInXSkoPzooPyFcXDEpW15cXFxcXFxyXFxuXXxcXFxceig/OlxcclxcbnxcXHMpfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSpcXDF8XFxbKD0qKVxcW1tcXHNcXFNdKj9cXF1cXDJcXF0vLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBudW1iZXI6IC9cXGIweFthLWZcXGRdK1xcLj9bYS1mXFxkXSooPzpwWystXT9cXGQrKT9cXGJ8XFxiXFxkKyg/OlxcLlxcQnxcXC4/XFxkKig/OmVbKy1dP1xcZCspP1xcYil8XFxCXFwuXFxkKyg/OmVbKy1dP1xcZCspP1xcYi9pLFxuICAgIGtleXdvcmQ6IC9cXGIoPzphbmR8YnJlYWt8ZG98ZWxzZXxlbHNlaWZ8ZW5kfGZhbHNlfGZvcnxmdW5jdGlvbnxnb3RvfGlmfGlufGxvY2FsfG5pbHxub3R8b3J8cmVwZWF0fHJldHVybnx0aGVufHRydWV8dW50aWx8d2hpbGUpXFxiLyxcbiAgICBmdW5jdGlvbjogLyg/IVxcZClcXHcrKD89XFxzKig/Olsoe10pKS8sXG4gICAgb3BlcmF0b3I6IFtcbiAgICAgIC9bLSsqJV4mfCNdfFxcL1xcLz98PFs8PV0/fD5bPj1dP3xbPX5dPT8vLFxuICAgICAge1xuICAgICAgICAvLyBNYXRjaCBcIi4uXCIgYnV0IGRvbid0IGJyZWFrIFwiLi4uXCJcbiAgICAgICAgcGF0dGVybjogLyhefFteLl0pXFwuXFwuKD8hXFwuKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHB1bmN0dWF0aW9uOiAvW1xcW1xcXSgpe30sO118XFwuK3w6Ky9cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/lua.js\n"));

/***/ })

}]);