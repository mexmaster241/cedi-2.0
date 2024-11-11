"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/pos/page",{

/***/ "(app-pages-browser)/./src/components/pos/TransactionsTab.tsx":
/*!************************************************!*\
  !*** ./src/components/pos/TransactionsTab.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TransactionsTab: () => (/* binding */ TransactionsTab)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _transferencias_DateRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transferencias/DateRange */ \"(app-pages-browser)/./src/components/transferencias/DateRange.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/select */ \"(app-pages-browser)/./src/components/ui/select.tsx\");\n/* harmony import */ var _TransactionsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransactionsTable */ \"(app-pages-browser)/./src/components/pos/TransactionsTable.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction TransactionsTab() {\n    _s();\n    const [selectedCard, setSelectedCard] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"all\");\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [dateTimeRange, setDateTimeRange] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [tipoTransaccion, setTipoTransaccion] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"todo\");\n    const [estatusTransaccion, setEstatusTransaccion] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"todo\");\n    const dateTimeRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const handleFilter = ()=>{\n        console.log({\n            selectedCard,\n            search,\n            dateTimeRange,\n            tipoTransaccion,\n            estatusTransaccion\n        });\n    };\n    const handleClear = ()=>{\n        var _dateTimeRangeRef_current;\n        setSelectedCard(\"all\");\n        setSearch(\"\");\n        setDateTimeRange(undefined);\n        setTipoTransaccion(\"todo\");\n        setEstatusTransaccion(\"todo\");\n        (_dateTimeRangeRef_current = dateTimeRangeRef.current) === null || _dateTimeRangeRef_current === void 0 ? void 0 : _dateTimeRangeRef_current.reset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {\n                        value: selectedCard,\n                        onValueChange: setSelectedCard,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {\n                                className: \"font-clash-display\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {\n                                    placeholder: \"Seleccionar POS\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                        className: \"font-clash-display\",\n                                        value: \"all\",\n                                        children: \"Todos los POS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                        className: \"font-clash-display\",\n                                        value: \"pos1\",\n                                        children: \"POS #1234\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                        className: \"font-clash-display\",\n                                        value: \"pos2\",\n                                        children: \"POS #5678\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                        className: \"font-clash-display\",\n                                        value: \"pos3\",\n                                        children: \"POS #9012\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        className: \"font-clash-display\",\n                        placeholder: \"Buscar transacci\\xf3n...\",\n                        value: search,\n                        onChange: (e)=>setSearch(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_transferencias_DateRange__WEBPACK_IMPORTED_MODULE_3__.DateTimeRange, {\n                        ref: dateTimeRangeRef,\n                        onRangeChange: setDateTimeRange\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {\n                                value: tipoTransaccion,\n                                onValueChange: setTipoTransaccion,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {\n                                        className: \"font-clash-display\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {\n                                            placeholder: \"Tipo de transacci\\xf3n\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"todo\",\n                                                children: \"Todo\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"venta\",\n                                                children: \"Venta\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"devolucion\",\n                                                children: \"Devoluci\\xf3n\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"anulacion\",\n                                                children: \"Anulaci\\xf3n\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {\n                                value: estatusTransaccion,\n                                onValueChange: setEstatusTransaccion,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {\n                                        className: \"font-clash-display\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {\n                                            placeholder: \"Estatus de transacci\\xf3n\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"todo\",\n                                                children: \"Todo\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"aprobada\",\n                                                children: \"Aprobada\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                                lineNumber: 100,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"rechazada\",\n                                                children: \"Rechazada\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"pendiente\",\n                                                children: \"Pendiente\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: handleFilter,\n                                className: \"flex-1 font-clash-display\",\n                                children: \"Filtrar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: handleClear,\n                                variant: \"outline\",\n                                className: \"flex-1 font-clash-display\",\n                                children: \"Limpiar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TransactionsTable__WEBPACK_IMPORTED_MODULE_6__.TransactionsTable, {}, void 0, false, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adriancedillo/cediOs/src/components/pos/TransactionsTab.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(TransactionsTab, \"7YKfeHh+xOlWZ2/X1mj0l6OMrGI=\");\n_c = TransactionsTab;\nvar _c;\n$RefreshReg$(_c, \"TransactionsTab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvcy9UcmFuc2FjdGlvbnNUYWIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0U7QUFDWTtBQUNuQjtBQVFUO0FBQ3dCO0FBVWhELFNBQVNXOztJQUNkLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUE7SUFDbEQsTUFBTSxDQUFDZSxpQkFBaUJDLG1CQUFtQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDaUIsb0JBQW9CQyxzQkFBc0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzdELE1BQU1tQixtQkFBbUJsQiw2Q0FBTUEsQ0FBd0I7SUFFdkQsTUFBTW1CLGVBQWU7UUFDbkJDLFFBQVFDLEdBQUcsQ0FBQztZQUNWYjtZQUNBRTtZQUNBRTtZQUNBRTtZQUNBRTtRQUNGO0lBQ0Y7SUFFQSxNQUFNTSxjQUFjO1lBTWxCSjtRQUxBVCxnQkFBZ0I7UUFDaEJFLFVBQVU7UUFDVkUsaUJBQWlCVTtRQUNqQlIsbUJBQW1CO1FBQ25CRSxzQkFBc0I7U0FDdEJDLDRCQUFBQSxpQkFBaUJNLE9BQU8sY0FBeEJOLGdEQUFBQSwwQkFBMEJPLEtBQUs7SUFDakM7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQzFCLHlEQUFNQTt3QkFBQzJCLE9BQU9wQjt3QkFBY3FCLGVBQWVwQjs7MENBQzFDLDhEQUFDTCxnRUFBYUE7Z0NBQUN1QixXQUFVOzBDQUN2Qiw0RUFBQ3RCLDhEQUFXQTtvQ0FBQ3lCLGFBQVk7Ozs7Ozs7Ozs7OzBDQUUzQiw4REFBQzVCLGdFQUFhQTs7a0RBQ1osOERBQUNDLDZEQUFVQTt3Q0FBQ3dCLFdBQVU7d0NBQXFCQyxPQUFNO2tEQUFNOzs7Ozs7a0RBQ3ZELDhEQUFDekIsNkRBQVVBO3dDQUFDd0IsV0FBVTt3Q0FBcUJDLE9BQU07a0RBQU87Ozs7OztrREFDeEQsOERBQUN6Qiw2REFBVUE7d0NBQUN3QixXQUFVO3dDQUFxQkMsT0FBTTtrREFBTzs7Ozs7O2tEQUN4RCw4REFBQ3pCLDZEQUFVQTt3Q0FBQ3dCLFdBQVU7d0NBQXFCQyxPQUFNO2tEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzVELDhEQUFDaEMsdURBQUtBO3dCQUNKK0IsV0FBVTt3QkFDVkcsYUFBWTt3QkFDWkYsT0FBT2xCO3dCQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsVUFBVXFCLEVBQUVDLE1BQU0sQ0FBQ0wsS0FBSzs7Ozs7O2tDQUkzQyw4REFBQzlCLG9FQUFhQTt3QkFDWm9DLEtBQUtoQjt3QkFDTGlCLGVBQWV0Qjs7Ozs7O2tDQUlqQiw4REFBQ2E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDMUIseURBQU1BO2dDQUFDMkIsT0FBT2Q7Z0NBQWlCZSxlQUFlZDs7a0RBQzdDLDhEQUFDWCxnRUFBYUE7d0NBQUN1QixXQUFVO2tEQUN2Qiw0RUFBQ3RCLDhEQUFXQTs0Q0FBQ3lCLGFBQVk7Ozs7Ozs7Ozs7O2tEQUUzQiw4REFBQzVCLGdFQUFhQTs7MERBQ1osOERBQUNDLDZEQUFVQTtnREFBQ3dCLFdBQVU7Z0RBQXFCQyxPQUFNOzBEQUFPOzs7Ozs7MERBQ3hELDhEQUFDekIsNkRBQVVBO2dEQUFDd0IsV0FBVTtnREFBcUJDLE9BQU07MERBQVE7Ozs7OzswREFDekQsOERBQUN6Qiw2REFBVUE7Z0RBQUN3QixXQUFVO2dEQUFxQkMsT0FBTTswREFBYTs7Ozs7OzBEQUM5RCw4REFBQ3pCLDZEQUFVQTtnREFBQ3dCLFdBQVU7Z0RBQXFCQyxPQUFNOzBEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSWpFLDhEQUFDM0IseURBQU1BO2dDQUFDMkIsT0FBT1o7Z0NBQW9CYSxlQUFlWjs7a0RBQ2hELDhEQUFDYixnRUFBYUE7d0NBQUN1QixXQUFVO2tEQUN2Qiw0RUFBQ3RCLDhEQUFXQTs0Q0FBQ3lCLGFBQVk7Ozs7Ozs7Ozs7O2tEQUUzQiw4REFBQzVCLGdFQUFhQTs7MERBQ1osOERBQUNDLDZEQUFVQTtnREFBQ3dCLFdBQVU7Z0RBQXFCQyxPQUFNOzBEQUFPOzs7Ozs7MERBQ3hELDhEQUFDekIsNkRBQVVBO2dEQUFDd0IsV0FBVTtnREFBcUJDLE9BQU07MERBQVc7Ozs7OzswREFDNUQsOERBQUN6Qiw2REFBVUE7Z0RBQUN3QixXQUFVO2dEQUFxQkMsT0FBTTswREFBWTs7Ozs7OzBEQUM3RCw4REFBQ3pCLDZEQUFVQTtnREFBQ3dCLFdBQVU7Z0RBQXFCQyxPQUFNOzBEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTW5FLDhEQUFDRjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUM5Qix5REFBTUE7Z0NBQUN1QyxTQUFTakI7Z0NBQWNRLFdBQVU7MENBQTRCOzs7Ozs7MENBR3JFLDhEQUFDOUIseURBQU1BO2dDQUFDdUMsU0FBU2Q7Z0NBQWFlLFNBQVE7Z0NBQVVWLFdBQVU7MENBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzFGLDhEQUFDckIsaUVBQWlCQTs7Ozs7Ozs7Ozs7QUFHeEI7R0FqR2dCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3MvVHJhbnNhY3Rpb25zVGFiLnRzeD9jYTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyBEYXRlVGltZVJhbmdlIH0gZnJvbSBcIi4uL3RyYW5zZmVyZW5jaWFzL0RhdGVSYW5nZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IERhdGVSYW5nZSB9IGZyb20gXCJyZWFjdC1kYXktcGlja2VyXCJcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0Q29udGVudCxcbiAgU2VsZWN0SXRlbSxcbiAgU2VsZWN0VHJpZ2dlcixcbiAgU2VsZWN0VmFsdWUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2VsZWN0XCJcbmltcG9ydCB7IFRyYW5zYWN0aW9uc1RhYmxlIH0gZnJvbSBcIi4vVHJhbnNhY3Rpb25zVGFibGVcIlxuXG5pbnRlcmZhY2UgRmlsdGVyU3RhdGUge1xuICBkYXRlczogRGF0ZVJhbmdlO1xuICB0aW1lczoge1xuICAgIGZyb206IHN0cmluZztcbiAgICB0bzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNhY3Rpb25zVGFiKCkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXJkLCBzZXRTZWxlY3RlZENhcmRdID0gdXNlU3RhdGUoXCJhbGxcIilcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtkYXRlVGltZVJhbmdlLCBzZXREYXRlVGltZVJhbmdlXSA9IHVzZVN0YXRlPEZpbHRlclN0YXRlPigpXG4gIGNvbnN0IFt0aXBvVHJhbnNhY2Npb24sIHNldFRpcG9UcmFuc2FjY2lvbl0gPSB1c2VTdGF0ZShcInRvZG9cIilcbiAgY29uc3QgW2VzdGF0dXNUcmFuc2FjY2lvbiwgc2V0RXN0YXR1c1RyYW5zYWNjaW9uXSA9IHVzZVN0YXRlKFwidG9kb1wiKVxuICBjb25zdCBkYXRlVGltZVJhbmdlUmVmID0gdXNlUmVmPHsgcmVzZXQ6ICgpID0+IHZvaWQgfT4obnVsbClcblxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coe1xuICAgICAgc2VsZWN0ZWRDYXJkLFxuICAgICAgc2VhcmNoLFxuICAgICAgZGF0ZVRpbWVSYW5nZSxcbiAgICAgIHRpcG9UcmFuc2FjY2lvbixcbiAgICAgIGVzdGF0dXNUcmFuc2FjY2lvblxuICAgIH0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhcmQoXCJhbGxcIilcbiAgICBzZXRTZWFyY2goXCJcIilcbiAgICBzZXREYXRlVGltZVJhbmdlKHVuZGVmaW5lZClcbiAgICBzZXRUaXBvVHJhbnNhY2Npb24oXCJ0b2RvXCIpXG4gICAgc2V0RXN0YXR1c1RyYW5zYWNjaW9uKFwidG9kb1wiKVxuICAgIGRhdGVUaW1lUmFuZ2VSZWYuY3VycmVudD8ucmVzZXQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIHsvKiBDYXJkIFNlbGVjdGlvbiAqL31cbiAgICAgICAgPFNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRDYXJkfSBvblZhbHVlQ2hhbmdlPXtzZXRTZWxlY3RlZENhcmR9PlxuICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiPlxuICAgICAgICAgICAgPFNlbGVjdFZhbHVlIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uYXIgUE9TXCIgLz5cbiAgICAgICAgICA8L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgPFNlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cImFsbFwiPlRvZG9zIGxvcyBQT1M8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cInBvczFcIj5QT1MgIzEyMzQ8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cInBvczJcIj5QT1MgIzU2Nzg8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cInBvczNcIj5QT1MgIzkwMTI8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgPC9TZWxlY3RDb250ZW50PlxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICB7LyogU2VhcmNoIElucHV0ICovfVxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIHRyYW5zYWNjacOzbi4uLlwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIERhdGUgVGltZSBSYW5nZSAqL31cbiAgICAgICAgPERhdGVUaW1lUmFuZ2UgXG4gICAgICAgICAgcmVmPXtkYXRlVGltZVJhbmdlUmVmfVxuICAgICAgICAgIG9uUmFuZ2VDaGFuZ2U9e3NldERhdGVUaW1lUmFuZ2V9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIFNlbGVjdCBDb21wb25lbnRzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICA8U2VsZWN0IHZhbHVlPXt0aXBvVHJhbnNhY2Npb259IG9uVmFsdWVDaGFuZ2U9e3NldFRpcG9UcmFuc2FjY2lvbn0+XG4gICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdFZhbHVlIHBsYWNlaG9sZGVyPVwiVGlwbyBkZSB0cmFuc2FjY2nDs25cIiAvPlxuICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxuICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiIHZhbHVlPVwidG9kb1wiPlRvZG88L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiIHZhbHVlPVwidmVudGFcIj5WZW50YTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJkZXZvbHVjaW9uXCI+RGV2b2x1Y2nDs248L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiIHZhbHVlPVwiYW51bGFjaW9uXCI+QW51bGFjacOzbjwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2VzdGF0dXNUcmFuc2FjY2lvbn0gb25WYWx1ZUNoYW5nZT17c2V0RXN0YXR1c1RyYW5zYWNjaW9ufT5cbiAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiPlxuICAgICAgICAgICAgICA8U2VsZWN0VmFsdWUgcGxhY2Vob2xkZXI9XCJFc3RhdHVzIGRlIHRyYW5zYWNjacOzblwiIC8+XG4gICAgICAgICAgICA8L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICA8U2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJ0b2RvXCI+VG9kbzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJhcHJvYmFkYVwiPkFwcm9iYWRhPC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cInJlY2hhemFkYVwiPlJlY2hhemFkYTwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJwZW5kaWVudGVcIj5QZW5kaWVudGU8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBCdXR0b25zICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZpbHRlcn0gY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtY2xhc2gtZGlzcGxheVwiPlxuICAgICAgICAgICAgRmlsdHJhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJ9IHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtY2xhc2gtZGlzcGxheVwiPlxuICAgICAgICAgICAgTGltcGlhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRyYW5zYWN0aW9uc1RhYmxlIC8+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiSW5wdXQiLCJCdXR0b24iLCJEYXRlVGltZVJhbmdlIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJTZWxlY3QiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0SXRlbSIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsIlRyYW5zYWN0aW9uc1RhYmxlIiwiVHJhbnNhY3Rpb25zVGFiIiwic2VsZWN0ZWRDYXJkIiwic2V0U2VsZWN0ZWRDYXJkIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiZGF0ZVRpbWVSYW5nZSIsInNldERhdGVUaW1lUmFuZ2UiLCJ0aXBvVHJhbnNhY2Npb24iLCJzZXRUaXBvVHJhbnNhY2Npb24iLCJlc3RhdHVzVHJhbnNhY2Npb24iLCJzZXRFc3RhdHVzVHJhbnNhY2Npb24iLCJkYXRlVGltZVJhbmdlUmVmIiwiaGFuZGxlRmlsdGVyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsZWFyIiwidW5kZWZpbmVkIiwiY3VycmVudCIsInJlc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZWYiLCJvblJhbmdlQ2hhbmdlIiwib25DbGljayIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/pos/TransactionsTab.tsx\n"));

/***/ })

});