"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_typescript"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = typescript\ntypescript.displayName = 'typescript'\ntypescript.aliases = ['ts']\nfunction typescript(Prism) {\n  Prism.languages.typescript = Prism.languages.extend('javascript', {\n    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words\n    keyword: /\\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\\b/,\n    builtin: /\\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\\b/\n  })\n  Prism.languages.ts = Prism.languages.typescript\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy90eXBlc2NyaXB0LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdHlwZXNjcmlwdC5qcz83YmQ2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVzY3JpcHRcbnR5cGVzY3JpcHQuZGlzcGxheU5hbWUgPSAndHlwZXNjcmlwdCdcbnR5cGVzY3JpcHQuYWxpYXNlcyA9IFsndHMnXVxuZnVuY3Rpb24gdHlwZXNjcmlwdChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7XG4gICAgLy8gRnJvbSBKYXZhU2NyaXB0IFByaXNtIGtleXdvcmQgbGlzdCBhbmQgVHlwZVNjcmlwdCBsYW5ndWFnZSBzcGVjOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi9tYXN0ZXIvZG9jL3NwZWMubWQjMjIxLXJlc2VydmVkLXdvcmRzXG4gICAga2V5d29yZDogL1xcYig/OmFic3RyYWN0fGFzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29uc3RydWN0b3J8Y29udGludWV8ZGVidWdnZXJ8ZGVjbGFyZXxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8aXN8a2V5b2Z8bGV0fG1vZHVsZXxuYW1lc3BhY2V8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVhZG9ubHl8cmV0dXJufHJlcXVpcmV8c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZXx0eXBlb2Z8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuICAgIGJ1aWx0aW46IC9cXGIoPzpzdHJpbmd8RnVuY3Rpb258YW55fG51bWJlcnxib29sZWFufEFycmF5fHN5bWJvbHxjb25zb2xlfFByb21pc2V8dW5rbm93bnxuZXZlcilcXGIvXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy50cyA9IFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/typescript.js\n"));

/***/ })

}]);