"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_n4js"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/n4js.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/n4js.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = n4js\nn4js.displayName = 'n4js'\nn4js.aliases = []\nfunction n4js(Prism) {\n  Prism.languages.n4js = Prism.languages.extend('javascript', {\n    // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html\n    keyword: /\\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\\b/\n  })\n  Prism.languages.insertBefore('n4js', 'constant', {\n    // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations\n    annotation: {\n      pattern: /@+\\w+/,\n      alias: 'operator'\n    }\n  })\n  Prism.languages.n4jsd = Prism.languages.n4js\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9uNGpzLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9uNGpzLmpzP2NmNjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbjRqc1xubjRqcy5kaXNwbGF5TmFtZSA9ICduNGpzJ1xubjRqcy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG40anMoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm40anMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdqYXZhc2NyaXB0Jywge1xuICAgIC8vIEtleXdvcmRzIGZyb20gTjRKUyBsYW5ndWFnZSBzcGVjOiBodHRwczovL251bWJlcmZvdXIuZ2l0aHViLmlvL240anMvc3BlYy9ONEpTU3BlYy5odG1sXG4gICAga2V5d29yZDogL1xcYig/OmFueXxBcnJheXxib29sZWFufGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29uc3RydWN0b3J8Y29udGludWV8ZGVidWdnZXJ8ZGVjbGFyZXxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmFsc2V8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG1vZHVsZXxuZXd8bnVsbHxudW1iZXJ8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3RyaW5nfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRydWV8dHJ5fHR5cGVvZnx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbjRqcycsICdjb25zdGFudCcsIHtcbiAgICAvLyBBbm5vdGF0aW9ucyBpbiBONEpTIHNwZWM6IGh0dHBzOi8vbnVtYmVyZm91ci5naXRodWIuaW8vbjRqcy9zcGVjL040SlNTcGVjLmh0bWwjX2Fubm90YXRpb25zXG4gICAgYW5ub3RhdGlvbjoge1xuICAgICAgcGF0dGVybjogL0ArXFx3Ky8sXG4gICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLm40anNkID0gUHJpc20ubGFuZ3VhZ2VzLm40anNcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/n4js.js\n"));

/***/ })

}]);