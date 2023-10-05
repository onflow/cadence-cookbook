"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_csp"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/csp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/csp.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = csp\ncsp.displayName = 'csp'\ncsp.aliases = []\nfunction csp(Prism) {\n  /**\n   * Original by Scott Helme.\n   *\n   * Reference: https://scotthelme.co.uk/csp-cheat-sheet/\n   *\n   * Supports the following:\n   *  - CSP Level 1\n   *  - CSP Level 2\n   *  - CSP Level 3\n   */\n  Prism.languages.csp = {\n    directive: {\n      pattern: /\\b(?:(?:base-uri|form-action|frame-ancestors|plugin-types|referrer|reflected-xss|report-to|report-uri|require-sri-for|sandbox) |(?:block-all-mixed-content|disown-opener|upgrade-insecure-requests)(?: |;)|(?:child|connect|default|font|frame|img|manifest|media|object|script|style|worker)-src )/i,\n      alias: 'keyword'\n    },\n    safe: {\n      pattern: /'(?:self|none|strict-dynamic|(?:nonce-|sha(?:256|384|512)-)[a-zA-Z\\d+=/]+)'/,\n      alias: 'selector'\n    },\n    unsafe: {\n      pattern: /(?:'unsafe-inline'|'unsafe-eval'|'unsafe-hashed-attributes'|\\*)/,\n      alias: 'function'\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9jc3AuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5TkFBeU47QUFDek47QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvY3NwLmpzP2VhNTQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY3NwXG5jc3AuZGlzcGxheU5hbWUgPSAnY3NwJ1xuY3NwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gY3NwKFByaXNtKSB7XG4gIC8qKlxuICAgKiBPcmlnaW5hbCBieSBTY290dCBIZWxtZS5cbiAgICpcbiAgICogUmVmZXJlbmNlOiBodHRwczovL3Njb3R0aGVsbWUuY28udWsvY3NwLWNoZWF0LXNoZWV0L1xuICAgKlxuICAgKiBTdXBwb3J0cyB0aGUgZm9sbG93aW5nOlxuICAgKiAgLSBDU1AgTGV2ZWwgMVxuICAgKiAgLSBDU1AgTGV2ZWwgMlxuICAgKiAgLSBDU1AgTGV2ZWwgM1xuICAgKi9cbiAgUHJpc20ubGFuZ3VhZ2VzLmNzcCA9IHtcbiAgICBkaXJlY3RpdmU6IHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzooPzpiYXNlLXVyaXxmb3JtLWFjdGlvbnxmcmFtZS1hbmNlc3RvcnN8cGx1Z2luLXR5cGVzfHJlZmVycmVyfHJlZmxlY3RlZC14c3N8cmVwb3J0LXRvfHJlcG9ydC11cml8cmVxdWlyZS1zcmktZm9yfHNhbmRib3gpIHwoPzpibG9jay1hbGwtbWl4ZWQtY29udGVudHxkaXNvd24tb3BlbmVyfHVwZ3JhZGUtaW5zZWN1cmUtcmVxdWVzdHMpKD86IHw7KXwoPzpjaGlsZHxjb25uZWN0fGRlZmF1bHR8Zm9udHxmcmFtZXxpbWd8bWFuaWZlc3R8bWVkaWF8b2JqZWN0fHNjcmlwdHxzdHlsZXx3b3JrZXIpLXNyYyApL2ksXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBzYWZlOiB7XG4gICAgICBwYXR0ZXJuOiAvJyg/OnNlbGZ8bm9uZXxzdHJpY3QtZHluYW1pY3woPzpub25jZS18c2hhKD86MjU2fDM4NHw1MTIpLSlbYS16QS1aXFxkKz0vXSspJy8sXG4gICAgICBhbGlhczogJ3NlbGVjdG9yJ1xuICAgIH0sXG4gICAgdW5zYWZlOiB7XG4gICAgICBwYXR0ZXJuOiAvKD86J3Vuc2FmZS1pbmxpbmUnfCd1bnNhZmUtZXZhbCd8J3Vuc2FmZS1oYXNoZWQtYXR0cmlidXRlcyd8XFwqKS8sXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/csp.js\n"));

/***/ })

}]);