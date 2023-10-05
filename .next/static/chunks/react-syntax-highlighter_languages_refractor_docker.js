"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_docker"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/docker.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/docker.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = docker\ndocker.displayName = 'docker'\ndocker.aliases = ['dockerfile']\nfunction docker(Prism) {\n  Prism.languages.docker = {\n    keyword: {\n      pattern: /(^\\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\\s)/im,\n      lookbehind: true\n    },\n    string: /(\"|')(?:(?!\\1)[^\\\\\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\\1/,\n    comment: /#.*/,\n    punctuation: /---|\\.\\.\\.|[:[\\]{}\\-,|>?]/\n  }\n  Prism.languages.dockerfile = Prism.languages.docker\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9kb2NrZXIuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZG9ja2VyLmpzPzcxZWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZG9ja2VyXG5kb2NrZXIuZGlzcGxheU5hbWUgPSAnZG9ja2VyJ1xuZG9ja2VyLmFsaWFzZXMgPSBbJ2RvY2tlcmZpbGUnXVxuZnVuY3Rpb24gZG9ja2VyKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5kb2NrZXIgPSB7XG4gICAga2V5d29yZDoge1xuICAgICAgcGF0dGVybjogLyheXFxzKikoPzpBRER8QVJHfENNRHxDT1BZfEVOVFJZUE9JTlR8RU5WfEVYUE9TRXxGUk9NfEhFQUxUSENIRUNLfExBQkVMfE1BSU5UQUlORVJ8T05CVUlMRHxSVU58U0hFTEx8U1RPUFNJR05BTHxVU0VSfFZPTFVNRXxXT1JLRElSKSg/PVxccykvaW0sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IC8oXCJ8JykoPzooPyFcXDEpW15cXFxcXFxyXFxuXXxcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqXFwxLyxcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBwdW5jdHVhdGlvbjogLy0tLXxcXC5cXC5cXC58WzpbXFxde31cXC0sfD4/XS9cbiAgfVxuICBQcmlzbS5sYW5ndWFnZXMuZG9ja2VyZmlsZSA9IFByaXNtLmxhbmd1YWdlcy5kb2NrZXJcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/docker.js\n"));

/***/ })

}]);