"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/transferencias/page",{

/***/ "(app-pages-browser)/./src/components/transferencias/TransaccionesComponent.tsx":
/*!******************************************************************!*\
  !*** ./src/components/transferencias/TransaccionesComponent.tsx ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovimientosFilter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _DateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateRange */ \"(app-pages-browser)/./src/components/transferencias/DateRange.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/select */ \"(app-pages-browser)/./src/components/ui/select.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MovimientosFilter() {\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [dateTimeRange, setDateTimeRange] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [tipoMovimiento, setTipoMovimiento] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"todo\");\n    const [estatusMovimiento, setEstatusMovimiento] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"todo\");\n    const dateTimeRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const handleFilter = ()=>{\n        console.log({\n            search,\n            dateTimeRange,\n            tipoMovimiento,\n            estatusMovimiento\n        });\n    };\n    const handleClear = ()=>{\n        var _dateTimeRangeRef_current;\n        setSearch(\"\");\n        setDateTimeRange(undefined);\n        setTipoMovimiento(\"todo\");\n        setEstatusMovimiento(\"todo\");\n        (_dateTimeRangeRef_current = dateTimeRangeRef.current) === null || _dateTimeRangeRef_current === void 0 ? void 0 : _dateTimeRangeRef_current.reset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                    className: \"font-clash-display\",\n                    placeholder: \"Buscar transacci\\xf3n...\",\n                    value: search,\n                    onChange: (e)=>setSearch(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DateRange__WEBPACK_IMPORTED_MODULE_3__.DateTimeRange, {\n                    ref: dateTimeRangeRef,\n                    onRangeChange: setDateTimeRange\n                }, void 0, false, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {\n                            value: tipoMovimiento,\n                            onValueChange: setTipoMovimiento,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {\n                                    className: \"font-clash-display\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {\n                                        placeholder: \"Tipo de movimiento\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"todo\",\n                                            children: \"Todo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"deposito\",\n                                            children: \"Dep\\xf3sito\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"retiro\",\n                                            children: \"Retiro\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"mensualidad\",\n                                            children: \"Mensualidad\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {\n                            value: estatusMovimiento,\n                            onValueChange: setEstatusMovimiento,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {\n                                    className: \"font-clash-display\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {\n                                        placeholder: \"Estatus de movimiento\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"todo\",\n                                            children: \"Todo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"liquidado\",\n                                            children: \"Liquidado\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"devolucion\",\n                                            children: \"Devoluci\\xf3n\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"cancelacion\",\n                                            children: \"Cancelaci\\xf3n\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                            className: \"font-clash-display\",\n                                            value: \"en-espera\",\n                                            children: \"En espera\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: handleFilter,\n                            className: \"flex-1 font-clash-display\",\n                            children: \"Filtrar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: handleClear,\n                            variant: \"outline\",\n                            className: \"flex-1 font-clash-display\",\n                            children: \"Limpiar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adriancedillo/cediOs/src/components/transferencias/TransaccionesComponent.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(MovimientosFilter, \"kT+pSUiimBrbameEAR53p5/jyU4=\");\n_c = MovimientosFilter;\nvar _c;\n$RefreshReg$(_c, \"MovimientosFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RyYW5zZmVyZW5jaWFzL1RyYW5zYWNjaW9uZXNDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDRTtBQUNKO0FBQ0g7QUFRVDtBQVVoQixTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQTtJQUNsRCxNQUFNLENBQUNZLGdCQUFnQkMsa0JBQWtCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2MsbUJBQW1CQyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDM0QsTUFBTWdCLG1CQUFtQmYsNkNBQU1BLENBQXdCO0lBRXZELE1BQU1nQixlQUFlO1FBQ25CQyxRQUFRQyxHQUFHLENBQUM7WUFDVlg7WUFDQUU7WUFDQUU7WUFDQUU7UUFDRjtJQUNGO0lBRUEsTUFBTU0sY0FBYztZQUtsQko7UUFKQVAsVUFBVTtRQUNWRSxpQkFBaUJVO1FBQ2pCUixrQkFBa0I7UUFDbEJFLHFCQUFxQjtTQUNyQkMsNEJBQUFBLGlCQUFpQk0sT0FBTyxjQUF4Qk4sZ0RBQUFBLDBCQUEwQk8sS0FBSztJQUNqQztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQzVCLHVEQUFLQTtvQkFDSjRCLFdBQVU7b0JBQ1ZDLGFBQVk7b0JBQ1pDLE9BQU9uQjtvQkFDUG9CLFVBQVUsQ0FBQ0MsSUFBTXBCLFVBQVVvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4QkFJM0MsOERBQUM1QixxREFBYUE7b0JBQ1pnQyxLQUFLZjtvQkFDTGdCLGVBQWVyQjs7Ozs7OzhCQUlqQiw4REFBQ2E7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDdkIseURBQU1BOzRCQUFDeUIsT0FBT2Y7NEJBQWdCcUIsZUFBZXBCOzs4Q0FDNUMsOERBQUNSLGdFQUFhQTtvQ0FBQ29CLFdBQVU7OENBQ3ZCLDRFQUFDbkIsOERBQVdBO3dDQUFDb0IsYUFBWTs7Ozs7Ozs7Ozs7OENBRTNCLDhEQUFDdkIsZ0VBQWFBOztzREFDWiw4REFBQ0MsNkRBQVVBOzRDQUFDcUIsV0FBVTs0Q0FBcUJFLE9BQU07c0RBQU87Ozs7OztzREFDeEQsOERBQUN2Qiw2REFBVUE7NENBQUNxQixXQUFVOzRDQUFxQkUsT0FBTTtzREFBVzs7Ozs7O3NEQUM1RCw4REFBQ3ZCLDZEQUFVQTs0Q0FBQ3FCLFdBQVU7NENBQXFCRSxPQUFNO3NEQUFTOzs7Ozs7c0RBQzFELDhEQUFDdkIsNkRBQVVBOzRDQUFDcUIsV0FBVTs0Q0FBcUJFLE9BQU07c0RBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJbkUsOERBQUN6Qix5REFBTUE7NEJBQUN5QixPQUFPYjs0QkFBbUJtQixlQUFlbEI7OzhDQUMvQyw4REFBQ1YsZ0VBQWFBO29DQUFDb0IsV0FBVTs4Q0FDdkIsNEVBQUNuQiw4REFBV0E7d0NBQUNvQixhQUFZOzs7Ozs7Ozs7Ozs4Q0FFM0IsOERBQUN2QixnRUFBYUE7O3NEQUNaLDhEQUFDQyw2REFBVUE7NENBQUNxQixXQUFVOzRDQUFxQkUsT0FBTTtzREFBTzs7Ozs7O3NEQUN4RCw4REFBQ3ZCLDZEQUFVQTs0Q0FBQ3FCLFdBQVU7NENBQXFCRSxPQUFNO3NEQUFZOzs7Ozs7c0RBQzdELDhEQUFDdkIsNkRBQVVBOzRDQUFDcUIsV0FBVTs0Q0FBcUJFLE9BQU07c0RBQWE7Ozs7OztzREFDOUQsOERBQUN2Qiw2REFBVUE7NENBQUNxQixXQUFVOzRDQUFxQkUsT0FBTTtzREFBYzs7Ozs7O3NEQUMvRCw4REFBQ3ZCLDZEQUFVQTs0Q0FBQ3FCLFdBQVU7NENBQXFCRSxPQUFNO3NEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTW5FLDhEQUFDSDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUMzQix5REFBTUE7NEJBQUNvQyxTQUFTakI7NEJBQWNRLFdBQVU7c0NBQTRCOzs7Ozs7c0NBR3JFLDhEQUFDM0IseURBQU1BOzRCQUFDb0MsU0FBU2Q7NEJBQWFlLFNBQVE7NEJBQVVWLFdBQVU7c0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRztHQWpGd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90cmFuc2ZlcmVuY2lhcy9UcmFuc2FjY2lvbmVzQ29tcG9uZW50LnRzeD83NjYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyBEYXRlVGltZVJhbmdlIH0gZnJvbSBcIi4vRGF0ZVJhbmdlXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSBcInJlYWN0LWRheS1waWNrZXJcIlxuaW1wb3J0IHtcbiAgU2VsZWN0LFxuICBTZWxlY3RDb250ZW50LFxuICBTZWxlY3RJdGVtLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RWYWx1ZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIlxuXG5pbnRlcmZhY2UgRmlsdGVyU3RhdGUge1xuICBkYXRlczogRGF0ZVJhbmdlO1xuICB0aW1lczoge1xuICAgIGZyb206IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpbWllbnRvc0ZpbHRlcigpIHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtkYXRlVGltZVJhbmdlLCBzZXREYXRlVGltZVJhbmdlXSA9IHVzZVN0YXRlPEZpbHRlclN0YXRlPigpXG4gIGNvbnN0IFt0aXBvTW92aW1pZW50bywgc2V0VGlwb01vdmltaWVudG9dID0gdXNlU3RhdGUoXCJ0b2RvXCIpXG4gIGNvbnN0IFtlc3RhdHVzTW92aW1pZW50bywgc2V0RXN0YXR1c01vdmltaWVudG9dID0gdXNlU3RhdGUoXCJ0b2RvXCIpXG4gIGNvbnN0IGRhdGVUaW1lUmFuZ2VSZWYgPSB1c2VSZWY8eyByZXNldDogKCkgPT4gdm9pZCB9PihudWxsKVxuXG4gIGNvbnN0IGhhbmRsZUZpbHRlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICBzZWFyY2gsXG4gICAgICBkYXRlVGltZVJhbmdlLFxuICAgICAgdGlwb01vdmltaWVudG8sXG4gICAgICBlc3RhdHVzTW92aW1pZW50b1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcbiAgICBzZXRTZWFyY2goXCJcIilcbiAgICBzZXREYXRlVGltZVJhbmdlKHVuZGVmaW5lZClcbiAgICBzZXRUaXBvTW92aW1pZW50byhcInRvZG9cIilcbiAgICBzZXRFc3RhdHVzTW92aW1pZW50byhcInRvZG9cIilcbiAgICBkYXRlVGltZVJhbmdlUmVmLmN1cnJlbnQ/LnJlc2V0KClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICB7LyogU2VhcmNoIElucHV0ICovfVxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHRyYW5zYWNjacOzbi4uLlwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIERhdGUgVGltZSBSYW5nZSAqL31cbiAgICAgICAgPERhdGVUaW1lUmFuZ2UgXG4gICAgICAgICAgcmVmPXtkYXRlVGltZVJhbmdlUmVmfVxuICAgICAgICAgIG9uUmFuZ2VDaGFuZ2U9e3NldERhdGVUaW1lUmFuZ2V9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIFNlbGVjdCBDb21wb25lbnRzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICA8U2VsZWN0IHZhbHVlPXt0aXBvTW92aW1pZW50b30gb25WYWx1ZUNoYW5nZT17c2V0VGlwb01vdmltaWVudG99PlxuICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj1cIlRpcG8gZGUgbW92aW1pZW50b1wiIC8+XG4gICAgICAgICAgICA8L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICA8U2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJ0b2RvXCI+VG9kbzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJkZXBvc2l0b1wiPkRlcMOzc2l0bzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJyZXRpcm9cIj5SZXRpcm88L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiIHZhbHVlPVwibWVuc3VhbGlkYWRcIj5NZW5zdWFsaWRhZDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2VzdGF0dXNNb3ZpbWllbnRvfSBvblZhbHVlQ2hhbmdlPXtzZXRFc3RhdHVzTW92aW1pZW50b30+XG4gICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdFZhbHVlIHBsYWNlaG9sZGVyPVwiRXN0YXR1cyBkZSBtb3ZpbWllbnRvXCIgLz5cbiAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cbiAgICAgICAgICAgIDxTZWxlY3RDb250ZW50PlxuICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cInRvZG9cIj5Ub2RvPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cImxpcXVpZGFkb1wiPkxpcXVpZGFkbzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJkZXZvbHVjaW9uXCI+RGV2b2x1Y2nDs248L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiIHZhbHVlPVwiY2FuY2VsYWNpb25cIj5DYW5jZWxhY2nDs248L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiIHZhbHVlPVwiZW4tZXNwZXJhXCI+RW4gZXNwZXJhPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQnV0dG9ucyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJ9IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWNsYXNoLWRpc3BsYXlcIj5cbiAgICAgICAgICAgIEZpbHRyYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsZWFyfSB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImZsZXgtMSBmb250LWNsYXNoLWRpc3BsYXlcIj5cbiAgICAgICAgICAgIExpbXBpYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJJbnB1dCIsIkJ1dHRvbiIsIkRhdGVUaW1lUmFuZ2UiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlNlbGVjdCIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RJdGVtIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiTW92aW1pZW50b3NGaWx0ZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJkYXRlVGltZVJhbmdlIiwic2V0RGF0ZVRpbWVSYW5nZSIsInRpcG9Nb3ZpbWllbnRvIiwic2V0VGlwb01vdmltaWVudG8iLCJlc3RhdHVzTW92aW1pZW50byIsInNldEVzdGF0dXNNb3ZpbWllbnRvIiwiZGF0ZVRpbWVSYW5nZVJlZiIsImhhbmRsZUZpbHRlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGVhciIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJyZXNldCIsImRpdiIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZWYiLCJvblJhbmdlQ2hhbmdlIiwib25WYWx1ZUNoYW5nZSIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/transferencias/TransaccionesComponent.tsx\n"));

/***/ })

});