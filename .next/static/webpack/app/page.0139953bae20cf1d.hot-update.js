"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/credit-card.tsx":
/*!****************************************!*\
  !*** ./src/components/credit-card.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreditCard: () => (/* binding */ CreditCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/use-toast */ \"(app-pages-browser)/./src/hooks/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ CreditCard auto */ \nvar _s = $RefreshSig$();\n\n\nfunction CreditCard() {\n    var _cardData_number_match;\n    _s();\n    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { toast } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_2__.useToast)();\n    const cardData = {\n        number: \"4539 1488 0343 6467\",\n        name: \"JOHN DOE\",\n        expiry: \"12/25\",\n        cvv: \"123\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full max-w-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gradient-to-bl from-gray-500 via-gray to-black rounded-xl shadow-2xl p-8 text-white relative overflow-hidden h-56 flex flex-col justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-12 h-10 bg-yellow-500/80 rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/logotipo-white.png\",\n                            alt: \"Cedi Logo\",\n                            className: \"w-16 h-16 object-contain opacity-80\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-clash-display text-xl tracking-widest\",\n                        children: (_cardData_number_match = cardData.number.match(/.{1,4}/g)) === null || _cardData_number_match === void 0 ? void 0 : _cardData_number_match.join(' ')\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-end mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs text-gray-300 uppercase\",\n                                    children: \"Nombre\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-clash-display\",\n                                    children: cardData.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs text-gray-300 uppercase\",\n                                    children: \"Expires\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-clash-display\",\n                                    children: cardData.expiry\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute inset-0 bg-white/5 background-pattern opacity-20\"\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute -left-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-3xl\"\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute -right-20 -bottom-20 w-40 h-40 bg-white/10 rounded-full blur-3xl\"\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adriancedillo/cediOs/src/components/credit-card.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(CreditCard, \"KX1hQVoGQhaAcwER+h2fV+5+x9U=\", false, function() {\n    return [\n        _hooks_use_toast__WEBPACK_IMPORTED_MODULE_2__.useToast\n    ];\n});\n_c = CreditCard;\nvar _c;\n$RefreshReg$(_c, \"CreditCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NyZWRpdC1jYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWdDO0FBR1k7QUFHckMsU0FBU0U7UUEyQkhDOztJQTFCWCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxFQUFFTSxLQUFLLEVBQUUsR0FBR0wsMERBQVFBO0lBRTFCLE1BQU1FLFdBQVc7UUFDZkksUUFBUTtRQUNSQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsS0FBSztJQUNQO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7d0JBQTBDO3NDQUN6RCw4REFBQ0M7NEJBQ0NDLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pILFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFLZCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNJO3dCQUFFSixXQUFVO21DQUNWVCx5QkFBQUEsU0FBU0ksTUFBTSxDQUFDVSxLQUFLLENBQUMsd0JBQXRCZCw2Q0FBQUEsdUJBQWtDZSxJQUFJLENBQUM7Ozs7Ozs7Ozs7OzhCQUs1Qyw4REFBQ1A7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNJO29DQUFFSixXQUFVOzhDQUFrQzs7Ozs7OzhDQUMvQyw4REFBQ0k7b0NBQUVKLFdBQVU7OENBQXNCVCxTQUFTSyxJQUFJOzs7Ozs7Ozs7Ozs7c0NBRWxELDhEQUFDRzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNJO29DQUFFSixXQUFVOzhDQUFrQzs7Ozs7OzhDQUMvQyw4REFBQ0k7b0NBQUVKLFdBQVU7OENBQXNCVCxTQUFTTSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3RELDhEQUFDRTtvQkFBSUMsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7OzhCQUNmLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkI7R0FsRGdCVjs7UUFFSUQsc0RBQVFBOzs7S0FGWkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3JlZGl0LWNhcmQudHN4P2YxYTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ29weSwgQ2hlY2tDaXJjbGUyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2hvb2tzL3VzZS10b2FzdFwiXG5cblxuZXhwb3J0IGZ1bmN0aW9uIENyZWRpdENhcmQoKSB7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKVxuXG4gIGNvbnN0IGNhcmREYXRhID0ge1xuICAgIG51bWJlcjogXCI0NTM5IDE0ODggMDM0MyA2NDY3XCIsXG4gICAgbmFtZTogXCJKT0hOIERPRVwiLFxuICAgIGV4cGlyeTogXCIxMi8yNVwiLFxuICAgIGN2djogXCIxMjNcIlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1ibCBmcm9tLWdyYXktNTAwIHZpYS1ncmF5IHRvLWJsYWNrIHJvdW5kZWQteGwgc2hhZG93LTJ4bCBwLTggdGV4dC13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gaC01NiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICB7LyogQ2hpcCBhbmQgTG9nbyBTZWN0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTAgYmcteWVsbG93LTUwMC84MCByb3VuZGVkLW1kXCIgLz4gey8qIENoaXAgKi99XG4gICAgICAgICAgPGltZyBcbiAgICAgICAgICAgIHNyYz1cIi9sb2dvdGlwby13aGl0ZS5wbmdcIiBcbiAgICAgICAgICAgIGFsdD1cIkNlZGkgTG9nb1wiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBoLTE2IG9iamVjdC1jb250YWluIG9wYWNpdHktODBcIiBcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2FyZCBOdW1iZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheSB0ZXh0LXhsIHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAge2NhcmREYXRhLm51bWJlci5tYXRjaCgvLnsxLDR9L2cpPy5qb2luKCcgJyl9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2FyZCBIb2xkZXIgSW5mbyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgbXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS0zMDAgdXBwZXJjYXNlXCI+Tm9tYnJlPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCI+e2NhcmREYXRhLm5hbWV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS0zMDAgdXBwZXJjYXNlXCI+RXhwaXJlczwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiPntjYXJkRGF0YS5leHBpcnl9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRGVjb3JhdGl2ZSBFbGVtZW50cyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLXdoaXRlLzUgYmFja2dyb3VuZC1wYXR0ZXJuIG9wYWNpdHktMjBcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1sZWZ0LTIwIC10b3AtMjAgdy00MCBoLTQwIGJnLXdoaXRlLzEwIHJvdW5kZWQtZnVsbCBibHVyLTN4bFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXJpZ2h0LTIwIC1ib3R0b20tMjAgdy00MCBoLTQwIGJnLXdoaXRlLzEwIHJvdW5kZWQtZnVsbCBibHVyLTN4bFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlVG9hc3QiLCJDcmVkaXRDYXJkIiwiY2FyZERhdGEiLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJ0b2FzdCIsIm51bWJlciIsIm5hbWUiLCJleHBpcnkiLCJjdnYiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwibWF0Y2giLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/credit-card.tsx\n"));

/***/ })

});