"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contacto/page",{

/***/ "(app-pages-browser)/./src/components/contacto/contact-form.tsx":
/*!**************************************************!*\
  !*** ./src/components/contacto/contact-form.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_IconSend_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=IconSend!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconSend.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ContactForm() {\n    _s();\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        // Add form submission logic here\n        setTimeout(()=>setIsSubmitting(false), 1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"space-y-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block text-sm font-clash-display text-gray-700 dark:text-gray-300 mb-2\",\n                                children: \"Nombre\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\",\n                                required: true,\n                                className: \"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                className: \"block text-sm font-clash-display text-gray-700 dark:text-gray-300 mb-2\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                required: true,\n                                className: \"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"company\",\n                        className: \"block text-sm font-clash-display text-gray-700 dark:text-gray-300 mb-2\",\n                        children: \"Empresa\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"company\",\n                        name: \"company\",\n                        required: true,\n                        className: \"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"revenue\",\n                        className: \"block text-sm font-clash-display text-gray-700 dark:text-gray-300 mb-2\",\n                        children: \"Facturaci\\xf3n Anual\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"revenue\",\n                        name: \"revenue\",\n                        required: true,\n                        className: \"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent appearance-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Selecciona un rango\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"0-1M\",\n                                children: \"Menos de $1M MXN\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"1M-5M\",\n                                children: \"$1M - $5M MXN\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"5M-10M\",\n                                children: \"$5M - $10M MXN\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"10M-50M\",\n                                children: \"$10M - $50M MXN\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"50M+\",\n                                children: \"M\\xe1s de $50M MXN\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"message\",\n                        className: \"block text-sm font-clash-display text-gray-700 dark:text-gray-300 mb-2\",\n                        children: \"Mensaje\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: \"message\",\n                        name: \"message\",\n                        rows: 4,\n                        required: true,\n                        className: \"w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                disabled: isSubmitting,\n                className: \"w-full bg-cedi-black text-white py-3 px-6 rounded-lg font-clash-display hover:bg-cedi-black/90 transition-colors flex items-center justify-center gap-2\",\n                children: isSubmitting ? 'Enviando...' : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \"Enviar mensaje\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconSend_tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"w-4 h-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adriancedillo/cediOs/src/components/contacto/contact-form.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"oafqrj090+oRf5bsyDQJHsshgoc=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3RvL2NvbnRhY3QtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVnQztBQUNjO0FBRS9CLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNSyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSCxnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDSSxXQUFXLElBQU1KLGdCQUFnQixRQUFRO0lBQzNDO0lBRUEscUJBQ0UsOERBQUNLO1FBQUtDLFVBQVVMO1FBQWNNLFdBQVU7OzBCQUN0Qyw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzs7MENBQ0MsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFPSCxXQUFVOzBDQUF5RTs7Ozs7OzBDQUd6Ryw4REFBQ0k7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xDLFFBQVE7Z0NBQ1JSLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBUUgsV0FBVTswQ0FBeUU7Ozs7OzswQ0FHMUcsOERBQUNJO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxNQUFLO2dDQUNMQyxRQUFRO2dDQUNSUixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2hCLDhEQUFDQzs7a0NBQ0MsOERBQUNDO3dCQUFNQyxTQUFRO3dCQUFVSCxXQUFVO2tDQUF5RTs7Ozs7O2tDQUc1Ryw4REFBQ0k7d0JBQ0NDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLFFBQVE7d0JBQ1JSLFdBQVU7Ozs7Ozs7Ozs7OzswQkFJZCw4REFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFBTUMsU0FBUTt3QkFBVUgsV0FBVTtrQ0FBeUU7Ozs7OztrQ0FHNUcsOERBQUNTO3dCQUNDSCxJQUFHO3dCQUNIQyxNQUFLO3dCQUNMQyxRQUFRO3dCQUNSUixXQUFVOzswQ0FFViw4REFBQ1U7Z0NBQU9DLE9BQU07MENBQUc7Ozs7OzswQ0FDakIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFPOzs7Ozs7MENBQ3JCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBUTs7Ozs7OzBDQUN0Qiw4REFBQ0Q7Z0NBQU9DLE9BQU07MENBQVM7Ozs7OzswQ0FDdkIsOERBQUNEO2dDQUFPQyxPQUFNOzBDQUFVOzs7Ozs7MENBQ3hCLDhEQUFDRDtnQ0FBT0MsT0FBTTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl6Qiw4REFBQ1Y7O2tDQUNDLDhEQUFDQzt3QkFBTUMsU0FBUTt3QkFBVUgsV0FBVTtrQ0FBeUU7Ozs7OztrQ0FHNUcsOERBQUNZO3dCQUNDTixJQUFHO3dCQUNIQyxNQUFLO3dCQUNMTSxNQUFNO3dCQUNOTCxRQUFRO3dCQUNSUixXQUFVOzs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUNjO2dCQUNDVCxNQUFLO2dCQUNMVSxVQUFVdkI7Z0JBQ1ZRLFdBQVU7MEJBRVRSLGVBQ0MsOEJBRUE7O3dCQUFFO3NDQUVBLDhEQUFDRiwwRkFBUUE7NEJBQUNVLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEM7R0FwR3dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0by9jb250YWN0LWZvcm0udHN4PzhiMWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJY29uU2VuZCB9IGZyb20gJ0B0YWJsZXIvaWNvbnMtcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpXG4gICAgLy8gQWRkIGZvcm0gc3VibWlzc2lvbiBsb2dpYyBoZXJlXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpLCAxMDAwKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1jbGFzaC1kaXNwbGF5IHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIG1iLTJcIj5cbiAgICAgICAgICAgIE5vbWJyZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGJnLXdoaXRlIGRhcms6YmctYmxhY2sgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtNDAwIGZvY3VzOmJvcmRlci10cmFuc3BhcmVudFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1jbGFzaC1kaXNwbGF5IHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIG1iLTJcIj5cbiAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZGFyazpib3JkZXItZ3JheS03MDAgYmctd2hpdGUgZGFyazpiZy1ibGFjayBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS00MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbXBhbnlcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtY2xhc2gtZGlzcGxheSB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMCBtYi0yXCI+XG4gICAgICAgICAgRW1wcmVzYVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJjb21wYW55XCJcbiAgICAgICAgICBuYW1lPVwiY29tcGFueVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0zIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBkYXJrOmJvcmRlci1ncmF5LTcwMCBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6cmluZy1ibHVlLTQwMCBmb2N1czpib3JkZXItdHJhbnNwYXJlbnRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmV2ZW51ZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1jbGFzaC1kaXNwbGF5IHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIG1iLTJcIj5cbiAgICAgICAgICBGYWN0dXJhY2nDs24gQW51YWxcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGlkPVwicmV2ZW51ZVwiXG4gICAgICAgICAgbmFtZT1cInJldmVudWVcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZGFyazpib3JkZXItZ3JheS03MDAgYmctd2hpdGUgZGFyazpiZy1ibGFjayBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS00MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50IGFwcGVhcmFuY2Utbm9uZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNjaW9uYSB1biByYW5nbzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwLTFNXCI+TWVub3MgZGUgJDFNIE1YTjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxTS01TVwiPiQxTSAtICQ1TSBNWE48L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNU0tMTBNXCI+JDVNIC0gJDEwTSBNWE48L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBNLTUwTVwiPiQxME0gLSAkNTBNIE1YTjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1ME0rXCI+TcOhcyBkZSAkNTBNIE1YTjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtY2xhc2gtZGlzcGxheSB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMCBtYi0yXCI+XG4gICAgICAgICAgTWVuc2FqZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICByb3dzPXs0fVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZGFyazpib3JkZXItZ3JheS03MDAgYmctd2hpdGUgZGFyazpiZy1ibGFjayBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS00MDAgZm9jdXM6Ym9yZGVyLXRyYW5zcGFyZW50XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctY2VkaS1ibGFjayB0ZXh0LXdoaXRlIHB5LTMgcHgtNiByb3VuZGVkLWxnIGZvbnQtY2xhc2gtZGlzcGxheSBob3ZlcjpiZy1jZWRpLWJsYWNrLzkwIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgID5cbiAgICAgICAge2lzU3VibWl0dGluZyA/IChcbiAgICAgICAgICAnRW52aWFuZG8uLi4nXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIEVudmlhciBtZW5zYWplXG4gICAgICAgICAgICA8SWNvblNlbmQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJY29uU2VuZCIsIkNvbnRhY3RGb3JtIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInJlcXVpcmVkIiwic2VsZWN0Iiwib3B0aW9uIiwidmFsdWUiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/contacto/contact-form.tsx\n"));

/***/ })

});