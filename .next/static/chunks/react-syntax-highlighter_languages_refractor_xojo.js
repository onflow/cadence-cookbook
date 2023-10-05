"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_xojo"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/xojo.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/xojo.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = xojo\nxojo.displayName = 'xojo'\nxojo.aliases = []\nfunction xojo(Prism) {\n  Prism.languages.xojo = {\n    comment: {\n      pattern: /(?:'|\\/\\/|Rem\\b).+/i,\n      inside: {\n        keyword: /^Rem/i\n      }\n    },\n    string: {\n      pattern: /\"(?:\"\"|[^\"])*\"/,\n      greedy: true\n    },\n    number: [/(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:E[+-]?\\d+)?/i, /&[bchou][a-z\\d]+/i],\n    symbol: /#(?:If|Else|ElseIf|Endif|Pragma)\\b/i,\n    keyword: /\\b(?:AddHandler|App|Array|As(?:signs)?|By(?:Ref|Val)|Break|Call|Case|Catch|Const|Continue|CurrentMethodName|Declare|Dim|Do(?:wnTo)?|Each|Else(?:If)?|End|Exit|Extends|False|Finally|For|Global|If|In|Lib|Loop|Me|Next|Nil|Optional|ParamArray|Raise(?:Event)?|ReDim|Rem|RemoveHandler|Return|Select|Self|Soft|Static|Step|Super|Then|To|True|Try|Ubound|Until|Using|Wend|While)\\b/i,\n    operator: /<[=>]?|>=?|[+\\-*\\/\\\\^=]|\\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|Xor|WeakAddressOf)\\b/i,\n    punctuation: /[.,;:()]/\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy94b2pvLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy94b2pvLmpzP2RlM2EiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0geG9qb1xueG9qby5kaXNwbGF5TmFtZSA9ICd4b2pvJ1xueG9qby5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHhvam8oUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnhvam8gPSB7XG4gICAgY29tbWVudDoge1xuICAgICAgcGF0dGVybjogLyg/Oid8XFwvXFwvfFJlbVxcYikuKy9pLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIGtleXdvcmQ6IC9eUmVtL2lcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1wiKD86XCJcInxbXlwiXSkqXCIvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBudW1iZXI6IFsvKD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86RVsrLV0/XFxkKyk/L2ksIC8mW2JjaG91XVthLXpcXGRdKy9pXSxcbiAgICBzeW1ib2w6IC8jKD86SWZ8RWxzZXxFbHNlSWZ8RW5kaWZ8UHJhZ21hKVxcYi9pLFxuICAgIGtleXdvcmQ6IC9cXGIoPzpBZGRIYW5kbGVyfEFwcHxBcnJheXxBcyg/OnNpZ25zKT98QnkoPzpSZWZ8VmFsKXxCcmVha3xDYWxsfENhc2V8Q2F0Y2h8Q29uc3R8Q29udGludWV8Q3VycmVudE1ldGhvZE5hbWV8RGVjbGFyZXxEaW18RG8oPzp3blRvKT98RWFjaHxFbHNlKD86SWYpP3xFbmR8RXhpdHxFeHRlbmRzfEZhbHNlfEZpbmFsbHl8Rm9yfEdsb2JhbHxJZnxJbnxMaWJ8TG9vcHxNZXxOZXh0fE5pbHxPcHRpb25hbHxQYXJhbUFycmF5fFJhaXNlKD86RXZlbnQpP3xSZURpbXxSZW18UmVtb3ZlSGFuZGxlcnxSZXR1cm58U2VsZWN0fFNlbGZ8U29mdHxTdGF0aWN8U3RlcHxTdXBlcnxUaGVufFRvfFRydWV8VHJ5fFVib3VuZHxVbnRpbHxVc2luZ3xXZW5kfFdoaWxlKVxcYi9pLFxuICAgIG9wZXJhdG9yOiAvPFs9Pl0/fD49P3xbK1xcLSpcXC9cXFxcXj1dfFxcYig/OkFkZHJlc3NPZnxBbmR8Q3R5cGV8SXNBP3xNb2R8TmV3fE5vdHxPcnxYb3J8V2Vha0FkZHJlc3NPZilcXGIvaSxcbiAgICBwdW5jdHVhdGlvbjogL1suLDs6KCldL1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/xojo.js\n"));

/***/ })

}]);