"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/dashboard/QuickActions.tsx":
/*!***************************************************!*\
  !*** ./src/components/dashboard/QuickActions.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuickActions: () => (/* binding */ QuickActions)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst QUICK_ACTIONS = [\n    'Send',\n    'Receive',\n    'Pay Bills',\n    'History'\n];\nfunction QuickActions() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8\",\n        children: QUICK_ACTIONS.map((action)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"p-4 bg-cedi-light-gray dark:bg-gray-800 rounded-lg shadow-md hover:bg-cedi-dark-gray hover:shadow-lg text-white transition-shadow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"block text-center text-gray-900 dark:text-white font-clash-display\",\n                    children: action\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/dashboard/QuickActions.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, action, false, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/dashboard/QuickActions.tsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/adriancedillo/cediOs/src/components/dashboard/QuickActions.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = QuickActions;\nvar _c;\n$RefreshReg$(_c, \"QuickActions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9RdWlja0FjdGlvbnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLGdCQUFnQjtJQUFDO0lBQVE7SUFBVztJQUFhO0NBQVU7QUFFMUQsU0FBU0M7SUFDZCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWkgsY0FBY0ksR0FBRyxDQUFDLENBQUNDLHVCQUNsQiw4REFBQ0M7Z0JBRUNILFdBQVU7MEJBRVYsNEVBQUNJO29CQUFLSixXQUFVOzhCQUNiRTs7Ozs7O2VBSkVBOzs7Ozs7Ozs7O0FBVWY7S0FmZ0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9RdWlja0FjdGlvbnMudHN4P2IzNzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUVVJQ0tfQUNUSU9OUyA9IFsnU2VuZCcsICdSZWNlaXZlJywgJ1BheSBCaWxscycsICdIaXN0b3J5J10gYXMgY29uc3Q7XG5cbmV4cG9ydCBmdW5jdGlvbiBRdWlja0FjdGlvbnMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy00IGdhcC00IG1iLThcIj5cbiAgICAgIHtRVUlDS19BQ1RJT05TLm1hcCgoYWN0aW9uKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2FjdGlvbn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTQgYmctY2VkaS1saWdodC1ncmF5IGRhcms6YmctZ3JheS04MDAgcm91bmRlZC1sZyBzaGFkb3ctbWQgaG92ZXI6YmctY2VkaS1kYXJrLWdyYXkgaG92ZXI6c2hhZG93LWxnIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1zaGFkb3dcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGUgZm9udC1jbGFzaC1kaXNwbGF5XCI+XG4gICAgICAgICAgICB7YWN0aW9ufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUVVJQ0tfQUNUSU9OUyIsIlF1aWNrQWN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImFjdGlvbiIsImJ1dHRvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/dashboard/QuickActions.tsx\n"));

/***/ })

});