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

/***/ "(app-pages-browser)/./src/components/transferencias/TransaccionesComponent.tsx":
/*!******************************************************************!*\
  !*** ./src/components/transferencias/TransaccionesComponent.tsx ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovimientosFilter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _DateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateRange */ \"(app-pages-browser)/./src/components/transferencias/DateRange.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MovimientosFilter() {\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [dateTimeRange, setDateTimeRange] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const handleFilter = ()=>{\n        console.log({\n            search,\n            dateTimeRange\n        });\n    };\n    const handleClear = ()=>{\n        setSearch(\"\");\n        setDateTimeRange(undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                    className: \"font-clash-display\",\n                    placeholder: \"Buscar transacci\\xf3n...\",\n                    value: search,\n                    onChange: (e)=>setSearch(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DateRange__WEBPACK_IMPORTED_MODULE_3__.DateTimeRange, {\n                    onRangeChange: setDateTimeRange\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: handleFilter,\n                            className: \"flex-1\",\n                            children: \"Filtrar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: handleClear,\n                            variant: \"outline\",\n                            className: \"flex-1\",\n                            children: \"Limpiar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(MovimientosFilter, \"tmvPBN24ss9EM2mGM3h5/mT9vos=\");\n_c = MovimientosFilter;\nvar _c;\n$RefreshReg$(_c, \"MovimientosFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RyYW5zZmVyZW5jaWFzL1RyYW5zYWNjaW9uZXNDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QztBQUNFO0FBQ0o7QUFDWDtBQVdqQixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksZUFBZUMsaUJBQWlCLEdBQUdMLCtDQUFRQTtJQUVsRCxNQUFNTSxlQUFlO1FBQ25CQyxRQUFRQyxHQUFHLENBQUM7WUFDVk47WUFDQUU7UUFDRjtJQUNGO0lBRUEsTUFBTUssY0FBYztRQUNsQk4sVUFBVTtRQUNWRSxpQkFBaUJLO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDZix1REFBS0E7b0JBQ0plLFdBQVU7b0JBQ1ZDLGFBQVk7b0JBQ1pDLE9BQU9aO29CQUNQYSxVQUFVLENBQUNDLElBQU1iLFVBQVVhLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzhCQUkzQyw4REFBQ2YscURBQWFBO29CQUNabUIsZUFBZWI7Ozs7Ozs4QkFJakIsOERBQUNNO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2QseURBQU1BOzRCQUFDcUIsU0FBU2I7NEJBQWNNLFdBQVU7c0NBQVM7Ozs7OztzQ0FHbEQsOERBQUNkLHlEQUFNQTs0QkFBQ3FCLFNBQVNWOzRCQUFhVyxTQUFROzRCQUFVUixXQUFVO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQTVDd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RyYW5zZmVyZW5jaWFzL1RyYW5zYWNjaW9uZXNDb21wb25lbnQudHN4Pzc2NjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcbmltcG9ydCB7IERhdGVUaW1lUmFuZ2UgfSBmcm9tIFwiLi9EYXRlUmFuZ2VcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSBcInJlYWN0LWRheS1waWNrZXJcIlxuXG5pbnRlcmZhY2UgRmlsdGVyU3RhdGUge1xuICBkYXRlczogRGF0ZVJhbmdlO1xuICB0aW1lczoge1xuICAgIGZyb206IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpbWllbnRvc0ZpbHRlcigpIHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtkYXRlVGltZVJhbmdlLCBzZXREYXRlVGltZVJhbmdlXSA9IHVzZVN0YXRlPEZpbHRlclN0YXRlPigpXG5cbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHtcbiAgICAgIHNlYXJjaCxcbiAgICAgIGRhdGVUaW1lUmFuZ2VcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgc2V0U2VhcmNoKFwiXCIpXG4gICAgc2V0RGF0ZVRpbWVSYW5nZSh1bmRlZmluZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgey8qIFNlYXJjaCBJbnB1dCAqL31cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciB0cmFuc2FjY2nDs24uLi5cIlxuICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBEYXRlIFRpbWUgUmFuZ2UgKi99XG4gICAgICAgIDxEYXRlVGltZVJhbmdlIFxuICAgICAgICAgIG9uUmFuZ2VDaGFuZ2U9e3NldERhdGVUaW1lUmFuZ2V9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIEJ1dHRvbnMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRmlsdGVyfSBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIEZpbHRyYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfSB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgTGltcGlhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIklucHV0IiwiQnV0dG9uIiwiRGF0ZVRpbWVSYW5nZSIsInVzZVN0YXRlIiwiTW92aW1pZW50b3NGaWx0ZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJkYXRlVGltZVJhbmdlIiwic2V0RGF0ZVRpbWVSYW5nZSIsImhhbmRsZUZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGVhciIsInVuZGVmaW5lZCIsImRpdiIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvblJhbmdlQ2hhbmdlIiwib25DbGljayIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/transferencias/TransaccionesComponent.tsx\n"));

/***/ })

});