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

/***/ "(app-pages-browser)/./src/app/dashboard/transferencias/page.tsx":
/*!***************************************************!*\
  !*** ./src/app/dashboard/transferencias/page.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TransferenciasPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Copy!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/copy.js\");\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/tabs */ \"(app-pages-browser)/./src/components/ui/tabs.tsx\");\n/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/select */ \"(app-pages-browser)/./src/components/ui/select.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nfunction TransferenciasPage() {\n    const CLABE = \"1234567890123456\" // Replace with actual CLABE from your data\n    ;\n    const copyToClipboard = async (text)=>{\n        try {\n            await navigator.clipboard.writeText(text);\n            sonner__WEBPACK_IMPORTED_MODULE_1__.toast.success(\"CLABE copiada al portapapeles\");\n        } catch (err) {\n            sonner__WEBPACK_IMPORTED_MODULE_1__.toast.error(\"Error al copiar CLABE\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6 p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-3 gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"p-4 transform transition-all duration-200 hover:scale-105 hover:shadow-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sm font-clash-display text-muted-foreground\",\n                                    children: \"CLABE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-clash-display\",\n                                            children: CLABE\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>copyToClipboard(CLABE),\n                                            className: \"p-1 hover:bg-muted rounded-md transition-colors\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Copy_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                className: \"h-4 w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"p-4 transform transition-all duration-200 hover:scale-105 hover:shadow-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sm font-clash-display text-muted-foreground\",\n                                    children: \"Saldo Disponible\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-clash-display\",\n                                    children: \"$45,678.90 MXN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        className: \"p-4 transform transition-all duration-200 hover:scale-105 hover:shadow-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-sm font-clash-display text-muted-foreground\",\n                                    children: \"Saldo Retenido\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-clash-display\",\n                                    children: \"$1,234.56 MXN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.Tabs, {\n                defaultValue: \"movimientos\",\n                className: \"space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsList, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsTrigger, {\n                                        className: \"font-clash-display\",\n                                        value: \"movimientos\",\n                                        children: \"Movimientos\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsTrigger, {\n                                        className: \"font-clash-display\",\n                                        value: \"transferir\",\n                                        children: \"Transferir\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.Select, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectTrigger, {\n                                        className: \"w-[180px] font-clash-display\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectValue, {\n                                            placeholder: \"Seleccionar periodo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectContent, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"2024-03\",\n                                                children: \"Marzo 2024\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"2024-02\",\n                                                children: \"Febrero 2024\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"2024-01\",\n                                                children: \"Enero 2024\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"2023-12\",\n                                                children: \"Diciembre 2023\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"2023-11\",\n                                                children: \"Noviembre 2023\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_4__.SelectItem, {\n                                                className: \"font-clash-display\",\n                                                value: \"2023-10\",\n                                                children: \"Octubre 2023\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsContent, {\n                        value: \"movimientos\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-clash-display mb-4\",\n                                children: \"Movimientos Recientes\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_3__.TabsContent, {\n                        value: \"transferir\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            className: \"p-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-clash-display mb-4\",\n                                children: \"Realizar Transferencia\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adriancedillo/cediOs/src/app/dashboard/transferencias/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_c = TransferenciasPage;\nvar _c;\n$RefreshReg$(_c, \"TransferenciasPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3RyYW5zZmVyZW5jaWFzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1DO0FBQ0w7QUFDYTtBQUNvQztBQU9oRDtBQUVoQixTQUFTWTtJQUN0QixNQUFNQyxRQUFRLG1CQUFtQiwyQ0FBMkM7O0lBRTVFLE1BQU1DLGtCQUFrQixPQUFPQztRQUU3QixJQUFJO1lBQ0YsTUFBTUMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNIO1lBQ3BDZCx5Q0FBS0EsQ0FBQ2tCLE9BQU8sQ0FBQztRQUNoQixFQUFFLE9BQU9DLEtBQUs7WUFDWm5CLHlDQUFLQSxDQUFDb0IsS0FBSyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDckIscURBQUlBO3dCQUFDcUIsV0FBVTtrQ0FDZCw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBS0QsV0FBVTs4Q0FBbUQ7Ozs7Ozs4Q0FDbkUsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0M7NENBQUtELFdBQVU7c0RBQXNCVjs7Ozs7O3NEQUN0Qyw4REFBQ1k7NENBQ0NDLFNBQVMsSUFBTVosZ0JBQWdCRDs0Q0FDL0JVLFdBQVU7c0RBRVYsNEVBQUN2QixnRkFBSUE7Z0RBQUN1QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU94Qiw4REFBQ3JCLHFEQUFJQTt3QkFBQ3FCLFdBQVU7a0NBQ2QsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUtELFdBQVU7OENBQW1EOzs7Ozs7OENBQ25FLDhEQUFDQztvQ0FBS0QsV0FBVTs4Q0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUt6Qyw4REFBQ3JCLHFEQUFJQTt3QkFBQ3FCLFdBQVU7a0NBQ2QsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUtELFdBQVU7OENBQW1EOzs7Ozs7OENBQ25FLDhEQUFDQztvQ0FBS0QsV0FBVTs4Q0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUszQyw4REFBQ3BCLHFEQUFJQTtnQkFBQ3dCLGNBQWE7Z0JBQWNKLFdBQVU7O2tDQUN6Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDbEIseURBQVFBOztrREFDUCw4REFBQ0MsNERBQVdBO3dDQUFDaUIsV0FBVTt3Q0FBcUJLLE9BQU07a0RBQWM7Ozs7OztrREFDaEUsOERBQUN0Qiw0REFBV0E7d0NBQUNpQixXQUFVO3dDQUFxQkssT0FBTTtrREFBYTs7Ozs7Ozs7Ozs7OzBDQUdqRSw4REFBQ3JCLHlEQUFNQTs7a0RBQ0wsOERBQUNHLGdFQUFhQTt3Q0FBQ2EsV0FBVTtrREFDdkIsNEVBQUNaLDhEQUFXQTs0Q0FBQ2tCLGFBQVk7Ozs7Ozs7Ozs7O2tEQUUzQiw4REFBQ3JCLGdFQUFhQTs7MERBQ1osOERBQUNDLDZEQUFVQTtnREFBQ2MsV0FBVTtnREFBcUJLLE9BQU07MERBQVU7Ozs7OzswREFDM0QsOERBQUNuQiw2REFBVUE7Z0RBQUNjLFdBQVU7Z0RBQXFCSyxPQUFNOzBEQUFVOzs7Ozs7MERBQzNELDhEQUFDbkIsNkRBQVVBO2dEQUFDYyxXQUFVO2dEQUFxQkssT0FBTTswREFBVTs7Ozs7OzBEQUMzRCw4REFBQ25CLDZEQUFVQTtnREFBQ2MsV0FBVTtnREFBcUJLLE9BQU07MERBQVU7Ozs7OzswREFDM0QsOERBQUNuQiw2REFBVUE7Z0RBQUNjLFdBQVU7Z0RBQXFCSyxPQUFNOzBEQUFVOzs7Ozs7MERBQzNELDhEQUFDbkIsNkRBQVVBO2dEQUFDYyxXQUFVO2dEQUFxQkssT0FBTTswREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtqRSw4REFBQ3hCLDREQUFXQTt3QkFBQ3dCLE9BQU07a0NBQ2pCLDRFQUFDMUIscURBQUlBOzRCQUFDcUIsV0FBVTtzQ0FDZCw0RUFBQ087Z0NBQUdQLFdBQVU7MENBQWtDOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUtwRCw4REFBQ25CLDREQUFXQTt3QkFBQ3dCLE9BQU07a0NBQ2pCLDRFQUFDMUIscURBQUlBOzRCQUFDcUIsV0FBVTtzQ0FDZCw0RUFBQ087Z0NBQUdQLFdBQVU7MENBQWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVEO0tBdkZ3QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvdHJhbnNmZXJlbmNpYXMvcGFnZS50c3g/NWZiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBDb3B5IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIlxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiXG5pbXBvcnQgeyBUYWJzLCBUYWJzQ29udGVudCwgVGFic0xpc3QsIFRhYnNUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJzXCJcbmltcG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0Q29udGVudCxcbiAgU2VsZWN0SXRlbSxcbiAgU2VsZWN0VHJpZ2dlcixcbiAgU2VsZWN0VmFsdWUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2VsZWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNmZXJlbmNpYXNQYWdlKCkge1xuICBjb25zdCBDTEFCRSA9IFwiMTIzNDU2Nzg5MDEyMzQ1NlwiIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgQ0xBQkUgZnJvbSB5b3VyIGRhdGFcbiAgXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IGFzeW5jICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBcbiAgICB0cnkge1xuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDTEFCRSBjb3BpYWRhIGFsIHBvcnRhcGFwZWxlc1wiKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvciBhbCBjb3BpYXIgQ0xBQkVcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IHAtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgIHsvKiBDTEFCRSBDYXJkICovfVxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJwLTQgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6c2hhZG93LWxnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWNsYXNoLWRpc3BsYXkgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+Q0xBQkU8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIj57Q0xBQkV9PC9zcGFuPlxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvcHlUb0NsaXBib2FyZChDTEFCRSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIGhvdmVyOmJnLW11dGVkIHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENvcHkgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgICAgICB7LyogQXZhaWxhYmxlIEJhbGFuY2UgQ2FyZCAqL31cbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicC00IHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaG92ZXI6c2NhbGUtMTA1IGhvdmVyOnNoYWRvdy1sZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1jbGFzaC1kaXNwbGF5IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlNhbGRvIERpc3BvbmlibGU8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIj4kNDUsNjc4LjkwIE1YTjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgIHsvKiBBbW91bnQgb24gSG9sZCBDYXJkICovfVxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJwLTQgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6c2hhZG93LWxnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWNsYXNoLWRpc3BsYXkgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+U2FsZG8gUmV0ZW5pZG88L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIj4kMSwyMzQuNTYgTVhOPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFRhYnMgZGVmYXVsdFZhbHVlPVwibW92aW1pZW50b3NcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8VGFic0xpc3Q+XG4gICAgICAgICAgICA8VGFic1RyaWdnZXIgY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCJtb3ZpbWllbnRvc1wiPk1vdmltaWVudG9zPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgIDxUYWJzVHJpZ2dlciBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cInRyYW5zZmVyaXJcIj5UcmFuc2ZlcmlyPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICA8L1RhYnNMaXN0PlxuXG4gICAgICAgICAgPFNlbGVjdD5cbiAgICAgICAgICAgIDxTZWxlY3RUcmlnZ2VyIGNsYXNzTmFtZT1cInctWzE4MHB4XSBmb250LWNsYXNoLWRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdFZhbHVlIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uYXIgcGVyaW9kb1wiIC8+XG4gICAgICAgICAgICA8L1NlbGVjdFRyaWdnZXI+XG4gICAgICAgICAgICA8U2VsZWN0Q29udGVudD5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCIyMDI0LTAzXCI+TWFyem8gMjAyNDwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCIyMDI0LTAyXCI+RmVicmVybyAyMDI0PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cIjIwMjQtMDFcIj5FbmVybyAyMDI0PC9TZWxlY3RJdGVtPlxuICAgICAgICAgICAgICA8U2VsZWN0SXRlbSBjbGFzc05hbWU9XCJmb250LWNsYXNoLWRpc3BsYXlcIiB2YWx1ZT1cIjIwMjMtMTJcIj5EaWNpZW1icmUgMjAyMzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gY2xhc3NOYW1lPVwiZm9udC1jbGFzaC1kaXNwbGF5XCIgdmFsdWU9XCIyMDIzLTExXCI+Tm92aWVtYnJlIDIwMjM8L1NlbGVjdEl0ZW0+XG4gICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGNsYXNzTmFtZT1cImZvbnQtY2xhc2gtZGlzcGxheVwiIHZhbHVlPVwiMjAyMy0xMFwiPk9jdHVicmUgMjAyMzwvU2VsZWN0SXRlbT5cbiAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFRhYnNDb250ZW50IHZhbHVlPVwibW92aW1pZW50b3NcIj5cbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtY2xhc2gtZGlzcGxheSBtYi00XCI+TW92aW1pZW50b3MgUmVjaWVudGVzPC9oMj5cbiAgICAgICAgICAgIHsvKiBBZGQgbW92ZW1lbnRzL3RyYW5zYWN0aW9ucyBsaXN0IGhlcmUgKi99XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L1RhYnNDb250ZW50PlxuXG4gICAgICAgIDxUYWJzQ29udGVudCB2YWx1ZT1cInRyYW5zZmVyaXJcIj5cbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtY2xhc2gtZGlzcGxheSBtYi00XCI+UmVhbGl6YXIgVHJhbnNmZXJlbmNpYTwvaDI+XG4gICAgICAgICAgICB7LyogQWRkIHRyYW5zZmVyIGZvcm0gY29tcG9uZW50cyBoZXJlICovfVxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgIDwvVGFicz5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJDb3B5IiwidG9hc3QiLCJDYXJkIiwiVGFicyIsIlRhYnNDb250ZW50IiwiVGFic0xpc3QiLCJUYWJzVHJpZ2dlciIsIlNlbGVjdCIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RJdGVtIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiVHJhbnNmZXJlbmNpYXNQYWdlIiwiQ0xBQkUiLCJjb3B5VG9DbGlwYm9hcmQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3VjY2VzcyIsImVyciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/transferencias/page.tsx\n"));

/***/ })

});