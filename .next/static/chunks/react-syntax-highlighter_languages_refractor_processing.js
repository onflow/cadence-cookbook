"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_processing"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/processing.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/processing.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = processing\nprocessing.displayName = 'processing'\nprocessing.aliases = []\nfunction processing(Prism) {\n  Prism.languages.processing = Prism.languages.extend('clike', {\n    keyword: /\\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\\b/,\n    operator: /<[<=]?|>[>=]?|&&?|\\|\\|?|[%?]|[!=+\\-*\\/]=?/\n  })\n  Prism.languages.insertBefore('processing', 'number', {\n    // Special case: XML is a type\n    constant: /\\b(?!XML\\b)[A-Z][A-Z\\d_]+\\b/,\n    type: {\n      pattern: /\\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\\w*)\\b/,\n      alias: 'variable'\n    }\n  }) // Spaces are allowed between function name and parenthesis\n  Prism.languages.processing['function'].pattern = /\\w+(?=\\s*\\()/ // Class-names is not styled by default\n  Prism.languages.processing['class-name'].alias = 'variable'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9wcm9jZXNzaW5nLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvcHJvY2Vzc2luZy5qcz8zOWViIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3NpbmdcbnByb2Nlc3NpbmcuZGlzcGxheU5hbWUgPSAncHJvY2Vzc2luZydcbnByb2Nlc3NpbmcuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBwcm9jZXNzaW5nKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5wcm9jZXNzaW5nID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAga2V5d29yZDogL1xcYig/OmJyZWFrfGNhdGNofGNhc2V8Y2xhc3N8Y29udGludWV8ZGVmYXVsdHxlbHNlfGV4dGVuZHN8ZmluYWx8Zm9yfGlmfGltcGxlbWVudHN8aW1wb3J0fG5ld3xudWxsfHByaXZhdGV8cHVibGljfHJldHVybnxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dHJ5fHZvaWR8d2hpbGUpXFxiLyxcbiAgICBvcGVyYXRvcjogLzxbPD1dP3w+Wz49XT98JiY/fFxcfFxcfD98WyU/XXxbIT0rXFwtKlxcL109Py9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncHJvY2Vzc2luZycsICdudW1iZXInLCB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBYTUwgaXMgYSB0eXBlXG4gICAgY29uc3RhbnQ6IC9cXGIoPyFYTUxcXGIpW0EtWl1bQS1aXFxkX10rXFxiLyxcbiAgICB0eXBlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiKD86Ym9vbGVhbnxieXRlfGNoYXJ8Y29sb3J8ZG91YmxlfGZsb2F0fGludHxYTUx8W0EtWl1cXHcqKVxcYi8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH1cbiAgfSkgLy8gU3BhY2VzIGFyZSBhbGxvd2VkIGJldHdlZW4gZnVuY3Rpb24gbmFtZSBhbmQgcGFyZW50aGVzaXNcbiAgUHJpc20ubGFuZ3VhZ2VzLnByb2Nlc3NpbmdbJ2Z1bmN0aW9uJ10ucGF0dGVybiA9IC9cXHcrKD89XFxzKlxcKCkvIC8vIENsYXNzLW5hbWVzIGlzIG5vdCBzdHlsZWQgYnkgZGVmYXVsdFxuICBQcmlzbS5sYW5ndWFnZXMucHJvY2Vzc2luZ1snY2xhc3MtbmFtZSddLmFsaWFzID0gJ3ZhcmlhYmxlJ1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/processing.js\n"));

/***/ })

}]);